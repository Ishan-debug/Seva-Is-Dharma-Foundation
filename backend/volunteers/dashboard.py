from django.contrib.admin import AdminSite
from django.db.models import Sum

from .models import Volunteer, Donation


class SevaAdminSite(AdminSite):
    site_header = "Seva Is Dharma Foundation"
    site_title = "Seva Is Dharma Admin"
    index_title = "Foundation Dashboard"

    # Use our own unique template
    index_template = "volunteers/admin/dashboard.html"

    def index(self, request, extra_context=None):
        total_volunteers = Volunteer.objects.count()

        total_donations = Donation.objects.count()

        verified_donations = Donation.objects.filter(
            status="verified"
        ).count()

        total_raised = (
            Donation.objects.filter(
                status="verified"
            ).aggregate(
                total=Sum("amount")
            )["total"]
            or 0
        )

        recent_donations = Donation.objects.order_by(
            "-created_at"
        )[:5]

        extra_context = extra_context or {}

        extra_context.update(
            {
                "total_volunteers": total_volunteers,
                "total_donations": total_donations,
                "verified_donations": verified_donations,
                "total_raised": total_raised,
                "recent_donations": recent_donations,
            }
        )

        return super().index(
            request,
            extra_context=extra_context,
        )