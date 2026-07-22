"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import FadeIn from "./FadeIn";

const images = [
  {
    src: "/images/gallery/animal1.jpg",
    alt: "Animal Welfare",
  },
  {
    src: "/images/gallery/animal2.jpg",
    alt: "Animal Rescue",
  },
  {
    src: "/images/gallery/food1.jpg",
    alt: "Food Distribution",
  },
  {
    src: "/images/gallery/food2.jpg",
    alt: "Community Service",
  },
  {
    src: "/images/gallery/tree1.jpg",
    alt: "Tree Plantation",
  },
  {
    src: "/images/gallery/environment1.jpg",
    alt: "Environment Protection",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <FadeIn>
            <div className="text-center">
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                GALLERY
              </span>

              <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Moments of Service
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
                Every picture tells a story of compassion, kindness, and hope.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div
                  onClick={() => setSelectedImage(image.src)}
                  className="group relative h-80 cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/50" />

                  <div className="absolute bottom-0 w-full translate-y-4 p-6 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold">
                      {image.alt}
                    </h3>

                    <p className="mt-2 text-sm text-gray-200">
                      Click to view
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 rounded-full bg-white p-3 text-black shadow-lg transition hover:scale-110"
          >
            <X size={28} />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}