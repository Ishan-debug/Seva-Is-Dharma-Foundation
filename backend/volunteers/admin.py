from django.contrib import admin
from .models import Volunteer, Donation


@admin.register(Volunteer)
class VolunteerAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "phone",
        "city",
        "interest",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "phone",
        "city",
        "interest",
    )

    list_filter = (
        "interest",
        "city",
        "created_at",
    )

    readonly_fields = (
        "created_at",
    )

    ordering = ("-created_at",)


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "amount",
        "email",
        "phone",
        "status",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "phone",
        "razorpay_order_id",
        "razorpay_payment_id",
    )

    list_filter = (
        "status",
        "created_at",
    )

    readonly_fields = (
        "created_at",
        "razorpay_order_id",
        "razorpay_payment_id",
        "razorpay_signature",
    )

    ordering = ("-created_at",)