import traceback

from rest_framework import generics, status
from rest_framework.response import Response

from .models import Volunteer
from .serializers import VolunteerSerializer


class VolunteerCreateView(generics.CreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

    def create(self, request, *args, **kwargs):
        try:
            print("========== VOLUNTEER REQUEST ==========")
            print("DATA:", request.data)

            serializer = self.get_serializer(
                data=request.data
            )

            if not serializer.is_valid():
                print("SERIALIZER ERRORS:", serializer.errors)

                return Response(
                    {
                        "error": "Validation failed.",
                        "details": serializer.errors,
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

            volunteer = serializer.save()

            print(
                "VOLUNTEER CREATED:",
                volunteer.id,
            )

            return Response(
                {
                    "message": (
                        "Volunteer registration "
                        "submitted successfully."
                    ),
                    "id": volunteer.id,
                },
                status=status.HTTP_201_CREATED,
            )

        except Exception as error:
            print("========== VOLUNTEER ERROR ==========")
            print("ERROR:", repr(error))
            traceback.print_exc()

            return Response(
                {
                    "error": "Unable to create volunteer registration.",
                    "details": str(error),
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )