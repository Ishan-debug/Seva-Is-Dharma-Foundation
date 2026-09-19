from rest_framework import serializers

from .models import Volunteer


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = [
            "name",
            "email",
            "phone",
            "city",
            "interest",
            "message",
        ]