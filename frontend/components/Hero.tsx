import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden sm:min-h-screen"
    >
      {/* Hero Background */}
      <Image
        src="/images/hero.webp"
        alt="Seva Is Dharma Foundation"
        fill
        priority
        sizes="100vw"
        quality={65}
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/75" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 py-20 text-center text-white sm:px-6 sm:py-28">

        {/* Official Foundation Logo */}
        <FadeIn>
          <div className="mx-auto mb-6 flex justify-center sm:mb-8">
            <div className="relative h-28 w-28 drop-shadow-2xl sm:h-36 sm:w-36 md:h-40 md:w-40">
              <Image
                src="/images/logo.png"
                alt="Seva Is Dharma Foundation logo"
                fill
                priority
                unoptimized
                sizes="160px"
                className="object-contain"
              />
            </div>
          </div>
        </FadeIn>

        {/* Main Heading */}
        <FadeIn delay={0.15}>
          <h1 className="mx-auto max-w-full break-words text-3xl font-extrabold leading-tight tracking-tight drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            Serving Every Life
            <br />
            with Compassion
          </h1>
        </FadeIn>

        {/* Motto */}
        <FadeIn delay={0.3}>
          <p className="mt-5 text-lg font-medium sm:mt-6 sm:text-2xl">
            Helping is Bhakti
          </p>

          <p className="mt-2 text-base sm:text-xl">
            सेवा परमो धर्मः
          </p>
        </FadeIn>

        {/* Causes */}
        <FadeIn delay={0.45}>
          <div className="mx-auto mt-7 flex w-full max-w-3xl flex-wrap justify-center gap-2 px-1 sm:mt-8 sm:gap-3">

            <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium backdrop-blur-sm sm:px-5 sm:text-sm">
              🐾 Animal Welfare
            </span>

            <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium backdrop-blur-sm sm:px-5 sm:text-sm">
              🍛 Food Distribution
            </span>

            <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium backdrop-blur-sm sm:px-5 sm:text-sm">
              🌳 Tree Plantation
            </span>

            <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium backdrop-blur-sm sm:px-5 sm:text-sm">
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

        {/* CTA Buttons */}
        <FadeIn delay={0.75}>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">

            <Link
              href="/#volunteer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl sm:px-8 sm:text-base"
            >
              🤝 Become a Volunteer
            </Link>

            <Link
              href="/donate"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-gray-900 sm:px-8 sm:text-base"
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