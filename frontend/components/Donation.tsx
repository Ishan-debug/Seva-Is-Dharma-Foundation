import { Heart, ShieldCheck, QrCode } from "lucide-react";

export default function Donation() {
  return (
    <section
      id="donate"
      className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24"
    >
      <div className="mx-auto max-w-7xl grid items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            SUPPORT OUR MISSION
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Every Donation Creates Hope ❤️
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are currently setting up our official donation system.
            Your future support will help us protect animals, feed the
            hungry, plant trees, and care for the environment.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="text-red-500" />
              <span>Animal Welfare</span>
            </div>

            <div className="flex items-center gap-3">
              🍛 <span>Food Distribution</span>
            </div>

            <div className="flex items-center gap-3">
              🌳 <span>Tree Plantation</span>
            </div>

            <div className="flex items-center gap-3">
              🌍 <span>Environment Protection</span>
            </div>

            <div className="mt-6 flex items-center gap-3 text-green-700">
              <ShieldCheck />
              <span>Official donation system coming soon.</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="rounded-3xl bg-white p-10 shadow-xl text-center">
          <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50">
            <QrCode size={90} className="text-orange-500" />
          </div>

          <h3 className="mt-6 text-2xl font-bold">
            Donations Coming Soon
          </h3>

          <p className="mt-4 text-gray-600">
            We're setting up our official donation system.
            Thank you for supporting Seva Is Dharma Foundation.
          </p>

          <button className="mt-8 w-full rounded-xl bg-orange-600 py-4 font-semibold text-white hover:bg-orange-700 transition">
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}