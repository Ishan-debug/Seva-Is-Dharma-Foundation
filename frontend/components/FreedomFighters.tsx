import Image from "next/image";
import FadeIn from "./FadeIn";

const freedomFighters = [
  {
    name: "Bhagat Singh",
    image: "/images/bhagat-singh.jpg",
    description:
      "Remembered for his courage, conviction, and unwavering dedication to India's freedom.",
  },
  {
    name: "Chandrashekhar Azad",
    image: "/images/chandrashekhar-azad.jpg",
    description:
      "Remembered for his fearless spirit, sacrifice, and commitment to India's independence.",
  },
];

export default function FreedomFighters() {
  return (
    <section
      id="freedom-fighters"
      className="relative overflow-hidden bg-[#faf8f3] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Indian Tricolour Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-600" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
              In Remembrance
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Remembering Our Freedom Fighters
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
              Their courage gave us the freedom we live with today. Their
              sacrifice continues to inspire us to serve our nation and our
              communities with compassion.
            </p>
          </div>
        </FadeIn>

        {/* Freedom Fighter Cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2 lg:mt-16">
          {freedomFighters.map((fighter, index) => (
            <FadeIn key={fighter.name} delay={index * 0.15}>
              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md">

                {/* Portrait - intentionally static */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={fighter.image}
                    alt={fighter.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-7 text-center sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {fighter.name}
                  </h3>

                  <div className="mx-auto mt-3 h-0.5 w-12 bg-orange-500" />

                  <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                    {fighter.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Gratitude */}
        <FadeIn delay={0.3}>
          <div className="mx-auto mt-14 max-w-4xl text-center sm:mt-16">
            <div className="rounded-3xl border border-orange-100 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">

              <p className="text-lg font-semibold leading-8 text-gray-800 sm:text-xl">
                Our heartfelt gratitude to the great freedom fighters who
                fought for our freedom and sacrificed their lives for our
                nation.
              </p>

              <p className="mt-5 text-xl font-bold text-orange-600 sm:text-2xl">
                सेवा परमो धर्मः
              </p>

              <p className="mt-2 text-sm font-medium tracking-wide text-gray-500">
                Service is the highest duty.
              </p>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}