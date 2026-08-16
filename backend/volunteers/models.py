from django.db import models


class Volunteer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    interest = models.CharField(max_length=100, blank=True)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Donation(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    purpose = models.TextField(blank=True)

    razorpay_order_id = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    razorpay_payment_id = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    razorpay_signature = models.CharField(
        max_length=255,
        blank=True,
        null=True
    )

    status = models.CharField(
        max_length=20,
        default="created"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - ₹{self.amount}"