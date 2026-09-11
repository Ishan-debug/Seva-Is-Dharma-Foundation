import Link from "next/link";
import {
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Compassion",
    description:
      "We believe every life deserves care, dignity, kindness, and respect.",
    icon: HeartHandshake,
  },
  {
    title: "Selfless Service",
    description:
      "We serve without discrimination, expecting nothing in return.",
    icon: Users,
  },
  {
    title: "Responsibility",
    description:
      "We take responsibility for the wellbeing of people, animals, and nature.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainability",
    description:
      "We support practical actions that help create a cleaner and greener future.",
    icon: Leaf,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Seva Is Our Dharma
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Seva Is Dharma Foundation is a service-oriented initiative built
            around compassion for people, animals, and the environment.
          </p>
        </div>

        {/* Story */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-orange-50 p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
              Our Story
            </p>

            <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              Helping is Bhakti
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              We believe service is more than an occasional act of kindness.
              It is a responsibility that can become part of everyday life.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Our work focuses on practical service such as helping vulnerable
              people, feeding animals, distributing food, planting trees, and
              protecting the environment.
            </p>

            <p className="mt-4 text-sm font-semibold leading-7 text-orange-700">
              सेवा परमो धर्मः
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wide text-green-700">
              Why We Serve
            </p>

            <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              Compassion into Action
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              A stronger community begins when people choose to help one
              another and care for the world around them.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-2xl">🤝</p>
                <h4 className="mt-3 font-semibold text-gray-900">
                  Community
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Bringing people together through meaningful service.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-2xl">🌱</p>
                <h4 className="mt-3 font-semibold text-gray-900">
                  Positive Change
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Turning compassion into practical and visible action.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-14">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Our Values
            </p>

            <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              What Guides Our Seva
            </h3>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Icon size={22} />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-gray-900">
                    {value.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}