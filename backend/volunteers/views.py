from rest_framework import generics
from .models import Volunteer
from .serializers import VolunteerSerializer


class VolunteerCreateView(generics.CreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer