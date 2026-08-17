import os

import razorpay
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Volunteer, Donation
from .serializers import VolunteerSerializer
from .email_service import send_donation_confirmation


class VolunteerCreateView(generics.CreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer


class DonationCreateOrderView(APIView):
    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        phone = request.data.get("phone")
        amount = request.data.get("amount")
        purpose = request.data.get("purpose", "")

        if not name or not email or not phone or not amount:
            return Response(
                {
                    "error": "Name, email, phone and amount are required."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            amount_rupees = float(amount)

            if amount_rupees <= 0:
                return Response(
                    {
                        "error": "Donation amount must be greater than zero."
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

            amount_paise = int(round(amount_rupees * 100))

        except (TypeError, ValueError):
            return Response(
                {
                    "error": "Invalid donation amount."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        key_id = os.getenv("RAZORPAY_KEY_ID")
        key_secret = os.getenv("RAZORPAY_KEY_SECRET")

        if not key_id or not key_secret:
            return Response(
                {
                    "error": "Razorpay credentials are not configured."
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        try:
            client = razorpay.Client(
                auth=(key_id, key_secret)
            )

            order = client.order.create(
                {
                    "amount": amount_paise,
                    "currency": "INR",
                    "receipt": f"donation_{phone}_{amount_paise}",
                    "notes": {
                        "purpose": purpose,
                    },
                }
            )

            donation = Donation.objects.create(
                name=name,
                email=email,
                phone=phone,
                amount=amount_rupees,
                purpose=purpose,
                razorpay_order_id=order["id"],
                status="created",
            )

            return Response(
                {
                    "message": "Razorpay order created successfully.",
                    "order_id": order["id"],
                    "amount": amount_paise,
                    "currency": "INR",
                    "key_id": key_id,
                    "donation_id": donation.id,
                },
                status=status.HTTP_201_CREATED,
            )

        except Exception as error:
            print("Razorpay order error:", error)

            return Response(
                {
                    "error": "Unable to create Razorpay order."
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class DonationVerifyView(APIView):
    def post(self, request):
        payment_id = request.data.get("razorpay_payment_id")
        order_id = request.data.get("razorpay_order_id")
        signature = request.data.get("razorpay_signature")

        if not payment_id or not order_id or not signature:
            return Response(
                {
                    "error": "Payment ID, order ID and signature are required."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            donation = get_object_or_404(
                Donation,
                razorpay_order_id=order_id,
            )

            # Prevent duplicate verification/email
            if donation.status == "verified":
                return Response(
                    {
                        "success": True,
                        "message": "Payment has already been verified.",
                        "donation_id": donation.id,
                    },
                    status=status.HTTP_200_OK,
                )

            key_id = os.getenv("RAZORPAY_KEY_ID")
            key_secret = os.getenv("RAZORPAY_KEY_SECRET")

            if not key_id or not key_secret:
                return Response(
                    {
                        "error": "Razorpay credentials are not configured."
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            client = razorpay.Client(
                auth=(key_id, key_secret)
            )

            # Verify Razorpay payment signature
            client.utility.verify_payment_signature(
                {
                    "razorpay_order_id": donation.razorpay_order_id,
                    "razorpay_payment_id": payment_id,
                    "razorpay_signature": signature,
                }
            )

            # Save verified payment details
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

            # Send confirmation email
            try:
                send_donation_confirmation(donation)

            except Exception as email_error:
                print(
                    "Donation confirmation email error:",
                    email_error,
                )

            return Response(
                {
                    "success": True,
                    "message": "Payment verified successfully.",
                    "donation_id": donation.id,
                },
                status=status.HTTP_200_OK,
            )

        except razorpay.errors.SignatureVerificationError:
            return Response(
                {
                    "success": False,
                    "error": "Payment verification failed.",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        except Donation.DoesNotExist:
            return Response(
                {
                    "success": False,
                    "error": "Donation order not found.",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        except Exception as error:
            print(
                "Razorpay verification error:",
                error,
            )

            return Response(
                {
                    "success": False,
                    "error": "Unable to verify payment.",
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )