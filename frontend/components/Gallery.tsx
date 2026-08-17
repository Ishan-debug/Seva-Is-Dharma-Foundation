"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import FadeIn from "./FadeIn";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image: string;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000";

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `${API_URL}/api/gallery/`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            `Gallery request failed: ${response.status}`
          );
        }

        const data: GalleryImage[] =
          await response.json();

        setImages(data);
      } catch (error) {
        console.error(
          "Failed to load gallery:",
          error
        );

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          {/* HEADER */}

          <FadeIn>
            <div className="text-center">

              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                GALLERY
              </span>

              <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Moments of Service
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
                Every picture tells a story of
                compassion, kindness, and hope.
              </p>

            </div>
          </FadeIn>


          {/* LOADING */}

          {loading && (
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {[1, 2, 3, 4, 5, 6].map(
                (item) => (
                  <div
                    key={item}
                    className="h-80 animate-pulse rounded-3xl bg-gray-200"
                  />
                )
              )}

            </div>
          )}


          {/* ERROR */}

          {!loading && error && (
            <div className="mt-16 text-center">

              <p className="text-lg text-gray-500">
                Unable to load the gallery right now.
              </p>

            </div>
          )}


          {/* EMPTY GALLERY */}

          {!loading &&
            !error &&
            images.length === 0 && (
              <div className="mt-16 text-center">

                <p className="text-lg text-gray-500">
                  Our gallery is being updated.
                  Please check back soon.
                </p>

              </div>
            )}


          {/* GALLERY */}

          {!loading &&
            !error &&
            images.length > 0 && (
              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {images.map(
                  (image, index) => (
                    <FadeIn
                      key={image.id}
                      delay={index * 0.1}
                    >

                      <div
                        onClick={() =>
                          setSelectedImage(
                            image.image
                          )
                        }
                        className="group relative h-80 cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                      >

                        {/* IMAGE */}

                        <Image
                          src={image.image}
                          alt={
                            image.title ||
                            "Seva Is Dharma Foundation"
                          }
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />


                        {/* OVERLAY */}

                        <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/50" />


                        {/* TEXT */}

                        <div className="absolute bottom-0 w-full translate-y-4 p-6 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                          <h3 className="text-2xl font-bold">
                            {image.title}
                          </h3>

                          {image.description && (
                            <p className="mt-2 line-clamp-2 text-sm text-gray-200">
                              {image.description}
                            </p>
                          )}

                          <p className="mt-2 text-sm text-gray-200">
                            Click to view
                          </p>

                        </div>

                      </div>

                    </FadeIn>
                  )
                )}

              </div>
            )}

        </div>
      </section>


      {/* LIGHTBOX */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-6"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          {/* CLOSE BUTTON */}

          <button
            onClick={() =>
              setSelectedImage(null)
            }
            aria-label="Close gallery"
            className="absolute right-6 top-6 z-10 rounded-full bg-white p-3 text-black shadow-lg transition hover:scale-110"
          >
            <X size={28} />
          </button>


          {/* LARGE IMAGE */}

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              sizes="100vw"
              className="rounded-2xl object-contain"
              priority
            />

          </div>

        </div>
      )}
    </>
  );
}