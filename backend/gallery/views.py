from rest_framework import generics

from .models import GalleryImage
from .serializers import GalleryImageSerializer


class GalleryImageListView(generics.ListAPIView):
    serializer_class = GalleryImageSerializer

    def get_queryset(self):
        return GalleryImage.objects.filter(
            is_active=True
        ).order_by("-created_at")