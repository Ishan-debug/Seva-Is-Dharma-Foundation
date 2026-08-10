export default function CauseCTA() {
  return (
    <section className="py-20 bg-green-700 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          How You Can Help
        </h2>

        <p className="mt-6 text-lg text-green-100 max-w-3xl mx-auto">
          Every act of kindness matters. Join us in protecting animals and
          creating a more compassionate world.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg">
            <div className="text-5xl mb-4">🙋</div>
            <h3 className="text-2xl font-bold mb-3">Volunteer</h3>
            <p>
              Participate in rescue missions, feeding drives, and awareness
              campaigns.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold mb-3">Support Our Mission</h3>
            <p>
              Help us provide food, shelter, and medical care for animals in
              need.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg">
            <div className="text-5xl mb-4">📢</div>
            <h3 className="text-2xl font-bold mb-3">Spread Awareness</h3>
            <p>
              Share our mission with your friends and inspire more people to
              care for animals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}