from django.urls import path
from .views import VolunteerCreateView

urlpatterns = [
    path("register/", VolunteerCreateView.as_view(), name="volunteer-register"),
]