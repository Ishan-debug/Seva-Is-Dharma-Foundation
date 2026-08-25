import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden sm:min-h-screen"
    >
      {/* Hero Image */}
      <Image
        src="/images/hero.webp"
        alt="Seva Is Dharma Foundation"
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        quality={65}
        className="object-cover object-center"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/75" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 py-20 text-center text-white sm:px-6 sm:py-28">

        {/* Main Heading */}
        <FadeIn>
          <h1 className="mx-auto max-w-full break-words text-3xl font-extrabold leading-tight tracking-tight drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            Serving Every Life
            <br />
            with Compassion
          </h1>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg font-medium sm:mt-6 sm:text-2xl">
            Helping is Bhakti
          </p>

          <p className="mt-2 text-base sm:text-xl">
            सेवा परमो धर्मः
          </p>
        </FadeIn>

        {/* Causes */}
        <FadeIn delay={0.4}>
          <div className="mx-auto mt-7 flex w-full max-w-3xl flex-wrap justify-center gap-2 px-1 sm:mt-8 sm:gap-3">

            <span className="max-w-full break-words rounded-full bg-white/20 px-3 py-1.5 text-xs leading-5 sm:px-4 sm:py-2 sm:text-sm">
              🐾 Animal Welfare
            </span>

            <span className="max-w-full break-words rounded-full bg-white/20 px-3 py-1.5 text-xs leading-5 sm:px-4 sm:py-2 sm:text-sm">
              🍛 Food Distribution
            </span>

            <span className="max-w-full break-words rounded-full bg-white/20 px-3 py-1.5 text-xs leading-5 sm:px-4 sm:py-2 sm:text-sm">
              🌳 Tree Plantation
            </span>

            <span className="max-w-full break-words rounded-full bg-white/20 px-3 py-1.5 text-xs leading-5 sm:px-4 sm:py-2 sm:text-sm">
              🌍 Environment Protection
            </span>

          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.6}>
          <p className="mx-auto mt-7 max-w-3xl break-words text-sm leading-6 text-gray-200 sm:mt-8 sm:text-base sm:leading-7 md:text-lg">
            Protecting animals, feeding the hungry, planting trees, and
            preserving nature through compassion, selfless service, and
            community participation.
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={0.8}>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">

            <Link
              href="/#volunteer"
              className="w-full rounded-xl bg-orange-600 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-2xl sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              🤝 Become a Volunteer
            </Link>

            <Link
              href="/donate"
              className="w-full rounded-xl border-2 border-white px-6 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-2xl sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              ❤️ Donate Now
            </Link>

          </div>
        </FadeIn>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-white sm:bottom-8 sm:text-3xl">
        ↓
      </div>
    </section>
  );
}