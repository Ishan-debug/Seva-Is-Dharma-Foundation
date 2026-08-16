from django.urls import path

from .views import (
    VolunteerCreateView,
    DonationCreateOrderView,
    DonationVerifyView,
)


urlpatterns = [
    path(
        "register/",
        VolunteerCreateView.as_view(),
        name="volunteer-register",
    ),

    path(
        "donations/create/",
        DonationCreateOrderView.as_view(),
        name="donation-create",
    ),

    path(
        "donations/verify/",
        DonationVerifyView.as_view(),
        name="donation-verify",
    ),
]