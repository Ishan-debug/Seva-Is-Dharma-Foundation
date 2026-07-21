export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        <h1 className="text-4xl font-extrabold leading-tight drop-shadow-2xl md:text-6xl lg:text-7xl">
          Serving Every Life
          <br />
          with Compassion
        </h1>

        <p className="mt-6 text-xl font-medium md:text-2xl">
          Helping is Bhakti
        </p>

        <p className="mt-2 text-lg md:text-xl">
          सेवा परमो धर्मः
        </p>

        {/* Mission Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-md">
            🐾 Animal Welfare
          </span>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-md">
            🍛 Food Distribution
          </span>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-md">
            🌳 Tree Plantation
          </span>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-md">
            🌍 Environment Protection
          </span>
        </div>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-200 md:text-lg">
          Protecting animals, feeding the hungry, planting trees, and
          preserving nature through compassion, selfless service, and
          community participation.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-orange-600 px-8 py-4 font-semibold shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-orange-700">
            🤝 Become a Volunteer
          </button>

          <button className="rounded-xl border-2 border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-black">
            ❤️ Donate Now
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-3xl text-white">
        ↓
      </div>
    </section>
  );
}