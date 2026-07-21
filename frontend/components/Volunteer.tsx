export default function Volunteer() {
  return (
    <section
      id="volunteer"
      className="bg-gradient-to-b from-orange-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              JOIN OUR MISSION
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Become a Volunteer
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every act of kindness makes a difference. Join our volunteers
              and help us protect animals, feed the hungry, plant trees,
              and build a cleaner, greener future.
            </p>

            <div className="mt-8 space-y-4 text-gray-700">
              <p>🐾 Animal Welfare</p>
              <p>🍛 Food Distribution</p>
              <p>🌳 Tree Plantation</p>
              <p>🌍 Environment Protection</p>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="City"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500">
                <option>Select Area of Interest</option>
                <option>Animal Welfare</option>
                <option>Food Distribution</option>
                <option>Tree Plantation</option>
                <option>Environment Protection</option>
              </select>

              <textarea
                rows={4}
                placeholder="Tell us why you want to volunteer..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-600 py-4 font-semibold text-white transition hover:bg-orange-700"
              >
                Become a Volunteer ❤️
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}