"use client";

import { ImageIcon } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <FadeIn>
          <div className="text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              GALLERY
            </span>

            <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Moments of Service
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              Every picture tells a story of compassion, kindness, and hope.
            </p>
          </div>
        </FadeIn>

        {/* Empty Gallery */}
        <FadeIn delay={0.2}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center rounded-3xl border border-orange-100 bg-orange-50 px-6 py-16 text-center shadow-sm sm:mt-16 sm:px-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-orange-600 shadow-md">
              <ImageIcon size={38} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Our Gallery Is Coming Soon
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              We are preparing this space to share real moments from our
              service activities, animal welfare initiatives, food
              distribution, tree plantation, and environmental work.
            </p>

            <p className="mt-4 text-sm font-medium text-orange-600">
              Real moments. Real service. Real impact. ❤️
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}