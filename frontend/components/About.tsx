import { Heart, HandHeart, Trees, PawPrint } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            ABOUT US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Seva Is Dharma Foundation
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe that true worship is serving those who cannot ask for
            help. Our foundation works for the welfare of animals, feeding
            the hungry, protecting the environment, and creating a cleaner,
            greener future.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Guided by the principle
            <span className="font-semibold text-orange-600">
              {" "}“सेवा परमो धर्मः”
            </span>,
            we inspire people to transform compassion into action through
            volunteering and community service.
          </p>

          <button className="mt-8 rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700">
            Join Our Mission
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-3xl bg-orange-50 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <Heart className="mb-4 text-orange-600" size={40} />
            <h3 className="text-xl font-bold">Compassion</h3>
            <p className="mt-3 text-gray-600">
              Every life deserves love, care, and respect.
            </p>
          </div>

          <div className="rounded-3xl bg-green-50 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <PawPrint className="mb-4 text-green-600" size={40} />
            <h3 className="text-xl font-bold">Animal Care</h3>
            <p className="mt-3 text-gray-600">
              Protecting and caring for helpless animals.
            </p>
          </div>

          <div className="rounded-3xl bg-blue-50 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <Trees className="mb-4 text-blue-600" size={40} />
            <h3 className="text-xl font-bold">Environment</h3>
            <p className="mt-3 text-gray-600">
              Building a greener and healthier tomorrow.
            </p>
          </div>

          <div className="rounded-3xl bg-red-50 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <HandHeart className="mb-4 text-red-600" size={40} />
            <h3 className="text-xl font-bold">Service</h3>
            <p className="mt-3 text-gray-600">
              Selfless service is the highest form of devotion.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}