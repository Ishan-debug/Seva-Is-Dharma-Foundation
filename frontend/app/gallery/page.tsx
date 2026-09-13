import Image from "next/image";
import Link from "next/link";

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
    image: "/images/bhagat-singh.jpg",
    title: "Bhagat Singh",
    description:
      "Remembering the courage and sacrifice of one of India's great freedom fighters.",
    static: true,
  },
  {
    image: "/images/chandrashekhar-azad.jpg",
    title: "Chandrashekhar Azad",
    description:
      "Honouring the courage, determination, and sacrifice of a legendary freedom fighter.",
    static: true,
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

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-orange-700 shadow-sm transition hover:bg-orange-50"
          >
            ← Back to Home
          </Link>

          <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Seva Is Dharma Foundation
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Moments of Service
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Every picture tells a story of compassion, courage, service,
            sacrifice, and hope.
          </p>

          <p className="mt-5 text-lg font-semibold text-gray-800">
            सेवा परमो धर्मः
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover ${
                      item.static
                        ? ""
                        : "transition-transform duration-500 group-hover:scale-105"
                    } ${
                      item.logo
                        ? "object-contain p-16"
                        : ""
                    }`}
                  />

                </div>

                <div className="p-7">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Freedom Fighters Message */}
      <section className="border-t border-gray-100 bg-gray-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <p className="text-2xl font-bold sm:text-3xl">
            सेवा परमो धर्मः
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
            Our deepest gratitude to the great freedom fighters who fought
            for our freedom and sacrificed their lives for our nation.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Return to Foundation →
          </Link>

        </div>
      </section>

    </main>
  );
}