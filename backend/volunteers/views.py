class DonationCreateOrderView(APIView):
    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        phone = request.data.get("phone")
        amount = request.data.get("amount")
        purpose = request.data.get("purpose", "")

        key_id = os.getenv("RAZORPAY_KEY_ID")
        key_secret = os.getenv("RAZORPAY_KEY_SECRET")

        print(
            "RAZORPAY CONFIG CHECK:",
            {
                "key_id_present": bool(key_id),
                "key_id_starts_rzp": bool(key_id and key_id.startswith("rzp_")),
                "secret_present": bool(key_secret),
                "key_id_length": len(key_id or ""),
                "secret_length": len(key_secret or ""),
            },
        )

        if not name or not email or not phone or not amount:
            return Response(
                {
                    "error": "Name, email, phone and amount are required."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        if not key_id or not key_secret:
            return Response(
                {
                    "error": "Razorpay credentials are not configured."
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )