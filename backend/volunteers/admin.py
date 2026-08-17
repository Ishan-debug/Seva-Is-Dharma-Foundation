from django.contrib import admin
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.urls import path
from django.utils.html import format_html

from .dashboard import SevaAdminSite
from .models import Volunteer, Donation
from .receipt import generate_donation_receipt


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

    readonly_fields = (
        "created_at",
    )

    ordering = (
        "-created_at",
    )


class DonationAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "amount",
        "email",
        "phone",
        "status",
        "created_at",
        "receipt_button",
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

    ordering = (
        "-created_at",
    )

    def get_urls(self):
        urls = super().get_urls()

        custom_urls = [
            path(
                "<int:donation_id>/receipt/",
                self.admin_site.admin_view(
                    self.download_receipt
                ),
                name="donation-receipt",
            ),
        ]

        return custom_urls + urls

    @admin.display(
        description="Donation Receipt"
    )
    def receipt_button(self, obj):
        return format_html(
            '<a href="{}" '
            'style="'
            'background:#166534;'
            'color:white;'
            'padding:7px 12px;'
            'border-radius:6px;'
            'text-decoration:none;'
            'font-weight:600;'
            'display:inline-block;'
            '">'
            '🧾 Receipt'
            '</a>',
            f"{obj.id}/receipt/",
        )

    def download_receipt(
        self,
        request,
        donation_id,
    ):
        donation = get_object_or_404(
            Donation,
            id=donation_id,
        )

        pdf = generate_donation_receipt(
            donation
        )

        pdf_bytes = pdf.getvalue()

        response = HttpResponse(
            pdf_bytes,
            content_type="application/pdf",
        )

        response[
            "Content-Disposition"
        ] = (
            f'attachment; '
            f'filename="Donation_Receipt_'
            f'{donation.id}.pdf"'
        )

        response[
            "Content-Length"
        ] = str(len(pdf_bytes))

        return response


seva_admin_site.register(
    Volunteer,
    VolunteerAdmin,
)

seva_admin_site.register(
    Donation,
    DonationAdmin,
)