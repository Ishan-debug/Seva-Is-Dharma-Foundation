from rest_framework import serializers

from .models import GalleryImage


class GalleryImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = GalleryImage
        fields = (
            "id",
            "title",
            "description",
            "image",
            "is_featured",
            "is_active",
            "created_at",
        )

    def get_image(self, obj):
        if obj.image:
            return obj.image.url

        return None