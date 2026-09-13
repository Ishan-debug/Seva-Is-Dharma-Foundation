from django.contrib import admin

from .models import Contact
from volunteers.admin import seva_admin_site


@admin.register(Contact, site=seva_admin_site)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "subject",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "subject",
        "message",
    )

    list_filter = (
        "created_at",
    )

    readonly_fields = (
        "created_at",
    )

    ordering = (
        "-created_at",
    )