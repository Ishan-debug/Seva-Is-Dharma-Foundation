from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from volunteers.admin import seva_admin_site


urlpatterns = [
    path("admin/", seva_admin_site.urls),

    path(
        "api/volunteers/",
        include("volunteers.urls"),
    ),

    path(
        "api/contacts/",
        include("contacts.urls"),
    ),

    path(
        "api/gallery/",
        include("gallery.urls"),
    ),

    path(
        "api/donations/",
        include("donations.urls"),
    ),
]


if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )