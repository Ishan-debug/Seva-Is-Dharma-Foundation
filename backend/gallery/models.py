from django.db import models
from cloudinary.models import CloudinaryField


class GalleryImage(models.Model):
    title = models.CharField(max_length=200)

    description = models.TextField(blank=True)

    image = CloudinaryField(
        "image",
        folder="seva-is-dharma/gallery",
    )

    is_featured = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Gallery Image"
        verbose_name_plural = "Gallery Images"

    def __str__(self):
        return self.title