import razorpay

from django.conf import settings
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
        key_id = getattr(settings, "RAZORPAY_KEY_ID", "")
        key_secret = getattr(settings, "RAZORPAY_KEY_SECRET", "")

        # Temporary safe diagnostic
        return Response(
            {
                "key_id_present": bool(key_id),
                "secret_present": bool(key_secret),
                "key_id_prefix": key_id[:8] if key_id else "",
            },
            status=status.HTTP_200_OK,
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

            key_id = getattr(
                settings,
                "RAZORPAY_KEY_ID",
                "",
            )

            key_secret = getattr(
                settings,
                "RAZORPAY_KEY_SECRET",
                "",
            )

            if not key_id or not key_secret:
                return Response(
                    {
                        "success": False,
                        "error": "Razorpay credentials are not configured.",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            client = razorpay.Client(
                auth=(key_id, key_secret)
            )

            client.utility.verify_payment_signature(
                {
                    "razorpay_order_id": donation.razorpay_order_id,
                    "razorpay_payment_id": payment_id,
                    "razorpay_signature": signature,
                }
            )

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
            print("Razorpay verification error:", error)

            return Response(
                {
                    "success": False,
                    "error": "Unable to verify payment.",
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )