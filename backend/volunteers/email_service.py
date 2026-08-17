from django.core.mail import EmailMultiAlternatives

from .receipt import generate_donation_receipt


def send_donation_confirmation(donation):
    subject = (
        "Thank You for Your Donation ❤️ | "
        "Seva Is Dharma Foundation"
    )

    recipient = donation.email

    text_content = f"""
Dear {donation.name},

Thank you for supporting Seva Is Dharma Foundation.

Your donation has been successfully verified.

Donation Details
----------------
Name: {donation.name}
Amount: ₹{donation.amount}
Payment Status: {donation.status}
Razorpay Payment ID: {donation.razorpay_payment_id}
Razorpay Order ID: {donation.razorpay_order_id}

Your official donation receipt is attached to this email.

Your contribution will help us serve people in need,
protect animals, feed the hungry, plant trees,
and protect our environment.

सेवा परमो धर्मः

With gratitude,

Seva Is Dharma Foundation
Helping is Bhakti
"""

    html_content = f"""
    <html>
        <body style="
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
        ">

            <div style="
                max-width: 600px;
                margin: auto;
                padding: 30px;
            ">

                <h2 style="
                    color: #166534;
                    margin-bottom: 5px;
                ">
                    Seva Is Dharma Foundation
                </h2>

                <p style="
                    color: #ea580c;
                    font-weight: bold;
                    font-size: 18px;
                ">
                    सेवा परमो धर्मः
                </p>

                <hr>

                <h2 style="color: #ea580c;">
                    Thank You for Your Donation ❤️
                </h2>

                <p>
                    Dear <strong>{donation.name}</strong>,
                </p>

                <p>
                    Thank you for supporting
                    <strong>Seva Is Dharma Foundation</strong>.
                </p>

                <p>
                    Your donation has been
                    <strong style="color: #166534;">
                        successfully verified
                    </strong>.
                </p>

                <div style="
                    background: #fff7ed;
                    border: 1px solid #fed7aa;
                    border-radius: 12px;
                    padding: 20px;
                    margin: 25px 0;
                ">

                    <h3 style="margin-top: 0;">
                        Donation Details
                    </h3>

                    <p>
                        <strong>Name:</strong>
                        {donation.name}
                    </p>

                    <p>
                        <strong>Amount:</strong>
                        ₹{donation.amount}
                    </p>

                    <p>
                        <strong>Status:</strong>
                        {donation.status}
                    </p>

                    <p>
                        <strong>Payment ID:</strong>
                        {donation.razorpay_payment_id}
                    </p>

                    <p>
                        <strong>Order ID:</strong>
                        {donation.razorpay_order_id}
                    </p>

                </div>

                <p>
                    🧾 Your official donation receipt is attached
                    to this email.
                </p>

                <p>
                    Your contribution helps us serve people in need,
                    protect animals, feed the hungry, plant trees,
                    and protect our environment.
                </p>

                <p style="
                    font-size: 20px;
                    font-weight: bold;
                    color: #ea580c;
                ">
                    सेवा परमो धर्मः
                </p>

                <p>
                    With gratitude,<br>
                    <strong>
                        Seva Is Dharma Foundation
                    </strong><br>
                    Helping is Bhakti
                </p>

            </div>

        </body>
    </html>
    """

    email = EmailMultiAlternatives(
        subject=subject,
        body=text_content,
        from_email=None,
        to=[recipient],
    )

    email.attach_alternative(
        html_content,
        "text/html",
    )

    # Generate PDF receipt
    receipt_pdf = generate_donation_receipt(donation)

    # Attach PDF
    email.attach(
        f"Donation_Receipt_{donation.id}.pdf",
        receipt_pdf.getvalue(),
        "application/pdf",
    )

    email.send()