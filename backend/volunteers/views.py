import os

import razorpay

from django.shortcuts import get_object_or_404

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Donation, Volunteer
from .serializers import VolunteerSerializer


# ============================================================
# VOLUNTEER REGISTRATION
# ============================================================

class VolunteerCreateView(generics.CreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer


# ============================================================
# CREATE RAZORPAY DONATION ORDER
# ============================================================

class DonationCreateOrderView(APIView):
    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        phone = request.data.get("phone")
        amount = request.data.get("amount")
        purpose = request.data.get("purpose", "")

        # ----------------------------------------------------
        # VALIDATE INPUT
        # ----------------------------------------------------

        if not name or not email or not phone or not amount:
            return Response(
                {
                    "error": (
                        "Name, email, phone and amount "
                        "are required."
                    )
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            amount_rupees = float(amount)

            if amount_rupees <= 0:
                return Response(
                    {
                        "error": (
                            "Donation amount must be "
                            "greater than zero."
                        )
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

            amount_paise = int(
                round(amount_rupees * 100)
            )

        except (TypeError, ValueError):
            return Response(
                {
                    "error": "Invalid donation amount."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        # ----------------------------------------------------
        # RAZORPAY CREDENTIALS
        # ----------------------------------------------------

        key_id = os.getenv("RAZORPAY_KEY_ID")
        key_secret = os.getenv("RAZORPAY_KEY_SECRET")

        if not key_id or not key_secret:
            return Response(
                {
                    "error": (
                        "Razorpay credentials are "
                        "not configured."
                    )
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        try:
            # ------------------------------------------------
            # CREATE RAZORPAY CLIENT
            # ------------------------------------------------

            client = razorpay.Client(
                auth=(key_id, key_secret)
            )

            # ------------------------------------------------
            # CREATE RAZORPAY ORDER
            # ------------------------------------------------

            order = client.order.create(
                {
                    "amount": amount_paise,
                    "currency": "INR",
                    "receipt": (
                        f"donation_{phone}_"
                        f"{amount_paise}"
                    ),
                    "notes": {
                        "purpose": purpose,
                    },
                }
            )

            # ------------------------------------------------
            # SAVE DONATION IN DATABASE
            # ------------------------------------------------

            donation = Donation.objects.create(
                name=name,
                email=email,
                phone=phone,
                amount=amount_rupees,
                purpose=purpose,
                razorpay_order_id=order["id"],
                status="created",
            )

            # ------------------------------------------------
            # RETURN ORDER TO FRONTEND
            # ------------------------------------------------

            return Response(
                {
                    "message": (
                        "Razorpay order created "
                        "successfully."
                    ),
                    "order_id": order["id"],
                    "amount": amount_paise,
                    "currency": "INR",
                    "key_id": key_id,
                    "donation_id": donation.id,
                },
                status=status.HTTP_201_CREATED,
            )

        except Exception as error:
            print(
                "Razorpay order creation error:",
                repr(error),
            )

            return Response(
                {
                    "error": (
                        "Unable to create "
                        "Razorpay order."
                    )
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


# ============================================================
# VERIFY RAZORPAY PAYMENT
# ============================================================

class DonationVerifyView(APIView):
    def post(self, request):
        payment_id = request.data.get(
            "razorpay_payment_id"
        )
        order_id = request.data.get(
            "razorpay_order_id"
        )
        signature = request.data.get(
            "razorpay_signature"
        )

        # ----------------------------------------------------
        # VALIDATE PAYMENT DATA
        # ----------------------------------------------------

        if (
            not payment_id
            or not order_id
            or not signature
        ):
            return Response(
                {
                    "success": False,
                    "error": (
                        "Payment ID, order ID and "
                        "signature are required."
                    ),
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            # ------------------------------------------------
            # FIND DONATION
            # ------------------------------------------------

            donation = get_object_or_404(
                Donation,
                razorpay_order_id=order_id,
            )

            # ------------------------------------------------
            # ALREADY VERIFIED
            # ------------------------------------------------

            if donation.status == "verified":
                return Response(
                    {
                        "success": True,
                        "message": (
                            "Payment has already "
                            "been verified."
                        ),
                        "donation_id": donation.id,
                    },
                    status=status.HTTP_200_OK,
                )

            # ------------------------------------------------
            # RAZORPAY CREDENTIALS
            # ------------------------------------------------

            key_id = os.getenv("RAZORPAY_KEY_ID")
            key_secret = os.getenv(
                "RAZORPAY_KEY_SECRET"
            )

            if not key_id or not key_secret:
                return Response(
                    {
                        "success": False,
                        "error": (
                            "Razorpay credentials are "
                            "not configured."
                        ),
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            # ------------------------------------------------
            # CREATE RAZORPAY CLIENT
            # ------------------------------------------------

            client = razorpay.Client(
                auth=(key_id, key_secret)
            )

            # ------------------------------------------------
            # VERIFY RAZORPAY SIGNATURE
            # ------------------------------------------------

            client.utility.verify_payment_signature(
                {
                    "razorpay_order_id": (
                        donation.razorpay_order_id
                    ),
                    "razorpay_payment_id": (
                        payment_id
                    ),
                    "razorpay_signature": (
                        signature
                    ),
                }
            )

            # ------------------------------------------------
            # MARK DONATION VERIFIED
            # ------------------------------------------------

            donation.razorpay_payment_id = payment_id
            donation.razorpay_signature = signature
            donation.status = "verified"

            donation.save(
                update_fields=[
                    "razorpay_payment_id",
                    "razorpay_signature",
                    "status",
                ]
            )

            # IMPORTANT:
            # No email is sent here.
            # Payment verification should return immediately.

            return Response(
                {
                    "success": True,
                    "message": (
                        "Payment verified "
                        "successfully."
                    ),
                    "donation_id": donation.id,
                },
                status=status.HTTP_200_OK,
            )

        # ----------------------------------------------------
        # INVALID RAZORPAY SIGNATURE
        # ----------------------------------------------------

        except razorpay.errors.SignatureVerificationError:
            return Response(
                {
                    "success": False,
                    "error": (
                        "Payment verification failed."
                    ),
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        # ----------------------------------------------------
        # DONATION NOT FOUND
        # ----------------------------------------------------

        except Donation.DoesNotExist:
            return Response(
                {
                    "success": False,
                    "error": (
                        "Donation order not found."
                    ),
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        # ----------------------------------------------------
        # OTHER ERRORS
        # ----------------------------------------------------

        except Exception as error:
            print(
                "Razorpay verification error:",
                repr(error),
            )

            return Response(
                {
                    "success": False,
                    "error": (
                        "Unable to verify payment."
                    ),
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )