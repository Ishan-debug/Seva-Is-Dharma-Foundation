"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

const galleryItems = [
  {
    image: "/images/hero.jpg",
    title: "Our Beginning",
    description:
      "The spirit behind Seva Is Dharma Foundation — compassion, service, and responsibility towards every life.",
  },
  {
    image: "/images/about-story.jpg",
    title: "Our Story",
    description:
      "A journey built around selfless service and the belief that helping others is a form of devotion.",
  },
  {
    image: "/images/hero.webp",
    title: "Seva in Action",
    description:
      "Working together with compassion to serve people, animals, and our environment.",
  },
  {
    image: "/images/logo.png",
    title: "Seva Is Dharma Foundation",
    description:
      "Seva Paramo Dharma — सेवा परमो धर्मः — service is the highest duty.",
    logo: true,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Gallery Heading */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              GALLERY
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Moments of Service
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              Every picture tells a story of compassion, service, and hope.
            </p>
          </div>
        </FadeIn>

        {/* Gallery Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {galleryItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm tran
sition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={
                      item.logo
                        ? "object-contain p-12"
                        : "object-cover transition-transform duration-500 group-hover:scale-105"
                    }
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Full Gallery Button */}
        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibo
ld text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
            >
              View Full Gallery →
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}