from django.contrib import admin

from .models import GalleryImage
from volunteers.admin import seva_admin_site


class GalleryImageAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "is_featured",
        "is_active",
        "created_at",
    )

    search_fields = (
        "title",
        "description",
    )

    list_filter = (
        "is_featured",
        "is_active",
        "created_at",
    )

    list_editable = (
        "is_featured",
        "is_active",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    ordering = (
        "-created_at",
    )


seva_admin_site.register(
    GalleryImage,
    GalleryImageAdmin,
)