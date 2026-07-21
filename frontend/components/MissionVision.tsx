import { Target, Eye, HeartHandshake, ShieldCheck } from "lucide-react";

export default function MissionVision() {
  return (
    <section
      id="mission"
      className="bg-gradient-to-b from-white to-orange-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            OUR PURPOSE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Mission, Vision & Values
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Inspired by the principle <strong>"सेवा परमो धर्मः"</strong>, we
            believe that serving humanity, animals, and nature is the highest
            form of devotion.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Target className="text-orange-600" size={34} />
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              To serve every living being with compassion by protecting
              animals, feeding the hungry, planting trees, supporting
              environmental conservation, and encouraging people to take part
              in selfless service.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Eye className="text-green-600" size={34} />
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              To create a society where kindness, respect for every life, and
              environmental responsibility become a way of life for future
              generations.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            Our Core Values
          </h3>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
              <HeartHandshake
                className="mx-auto text-red-500"
                size={42}
              />
              <h4 className="mt-4 text-xl font-semibold">
                Compassion
              </h4>
              <p className="mt-3 text-gray-600">
                Serving every life with kindness and empathy.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
              <ShieldCheck
                className="mx-auto text-blue-600"
                size={42}
              />
              <h4 className="mt-4 text-xl font-semibold">
                Integrity
              </h4>
              <p className="mt-3 text-gray-600">
                Working with honesty, transparency, and accountability.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
              🌱
              <h4 className="mt-4 text-xl font-semibold">
                Sustainability
              </h4>
              <p className="mt-3 text-gray-600">
                Protecting nature for present and future generations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
              🤝
              <h4 className="mt-4 text-xl font-semibold">
                Selfless Service
              </h4>
              <p className="mt-3 text-gray-600">
                Every act of service creates hope and positive change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}