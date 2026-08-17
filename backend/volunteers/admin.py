from django.contrib import admin

from .dashboard import SevaAdminSite
from .models import Volunteer, Donation


seva_admin_site = SevaAdminSite(name="seva_admin")


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

    readonly_fields = ("created_at",)

    ordering = ("-created_at",)


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


# Register models with our custom admin site
seva_admin_site.register(Volunteer, VolunteerAdmin)
seva_admin_site.register(Donation, DonationAdmin)