import { Eye, HeartHandshake, Target } from "lucide-react";

export default function Mission() {
  return (
    <section
      id="mission"
      className="bg-orange-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Mission
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Compassion With Purpose
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            We want to make service practical, inclusive, responsible, and
            accessible to the community.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <Target size={24} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Mission
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              To serve people, protect animals, support food distribution,
              encourage tree plantation, and contribute to environmental
              protection through compassionate community action.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <Eye size={24} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Vision
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              To build a kinder and more responsible society where helping
              others, caring for animals, and protecting nature become part of
              everyday community life.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
              <HeartHandshake size={24} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Our Spirit
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              We believe service should be rooted in compassion, dignity,
              honesty, participation, and respect for every form of life.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-orange-200 bg-white p-7 text-center sm:p-9">
          <p className="text-lg font-bold text-gray-900 sm:text-xl">
            Helping is Bhakti
          </p>

          <p className="mt-2 text-orange-700">
            सेवा परमो धर्मः
          </p>
        </div>
      </div>
    </section>
  );
}