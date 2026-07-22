from django.urls import path
from .views import DonationCreateView

urlpatterns = [
    path("create/", DonationCreateView.as_view(), name="donation-create"),
    path("api/donations/", include("donations.urls")),
]