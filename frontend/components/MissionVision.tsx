import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import FadeIn from "./FadeIn";

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    description: "Serving every life with kindness and empathy.",
    color: "text-red-500",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Working with honesty, transparency, and accountability.",
    color: "text-blue-600",
  },
  {
    emoji: "🌱",
    title: "Sustainability",
    description:
      "Protecting nature for present and future generations.",
  },
  {
    emoji: "🤝",
    title: "Selfless Service",
    description:
      "Every act of service creates hope and positive change.",
  },
];

export default function MissionVision() {
  return (
    <section
      id="mission"
      className="bg-gradient-to-b from-white to-orange-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <FadeIn>
          <div className="text-center">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              OUR PURPOSE
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Mission, Vision & Values
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Inspired by the principle <strong>"सेवा परमो धर्मः"</strong>,
              we believe that serving humanity, animals, and nature is the
              highest form of devotion.
            </p>
          </div>
        </FadeIn>

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <FadeIn delay={0.2}>
            <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Target
                  className="text-orange-600"
                  size={34}
                />
              </div>

              <h3 className="text-3xl font-bold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                To serve every living being with compassion by protecting
                animals, feeding the hungry, planting trees, supporting
                environmental conservation, and encouraging people to take
                part in selfless service.
              </p>

            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="group rounded-3xl border border-green-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Eye
                  className="text-green-600"
                  size={34}
                />
              </div>

              <h3 className="text-3xl font-bold text-gray-900">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                To create a society where kindness, respect for every life,
                and environmental responsibility become a way of life for
                future generations.
              </p>

            </div>
          </FadeIn>

        </div>

        {/* Core Values */}
        <FadeIn delay={0.5}>
          <div className="mt-20">

            <h3 className="text-center text-3xl font-bold text-gray-900">
              Our Core Values
            </h3>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {values.map((value, index) => (
                <FadeIn key={value.title} delay={0.6 + index * 0.15}>
                  <div className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                    {value.icon ? (
                      <value.icon
                        className={`mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${value.color}`}
                        size={42}
                      />
                    ) : (
                      <div className="text-5xl transition-all duration-300 group-hover:scale-110">
                        {value.emoji}
                      </div>
                    )}

                    <h4 className="mt-4 text-xl font-semibold">
                      {value.title}
                    </h4>

                    <p className="mt-3 leading-7 text-gray-600">
                      {value.description}
                    </p>

                  </div>
                </FadeIn>
              ))}

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}