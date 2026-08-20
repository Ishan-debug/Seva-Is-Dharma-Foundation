import logging

from rest_framework import generics, status
from rest_framework.response import Response

from .models import GalleryImage
from .serializers import GalleryImageSerializer


logger = logging.getLogger(__name__)


class GalleryImageListView(generics.ListAPIView):
    serializer_class = GalleryImageSerializer

    def get_queryset(self):
        return GalleryImage.objects.filter(
            is_active=True
        ).order_by("-created_at")

    def list(self, request, *args, **kwargs):
        try:
            return super().list(request, *args, **kwargs)

        except Exception:
            # Log the complete traceback to Render logs
            logger.exception("Gallery API failed while processing /api/gallery/")

            # Do not expose internal error details to visitors
            return Response(
                {
                    "detail": "Gallery is temporarily unavailable."
                },
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )