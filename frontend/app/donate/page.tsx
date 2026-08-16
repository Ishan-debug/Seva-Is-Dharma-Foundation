import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Donation from "@/components/Donation";

export default function DonatePage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50">
        {/* Page Header */}
        <section className="bg-green-700 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Donate" },
              ]}
            />

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-200">
                Support Our Mission
              </p>

              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                Your Support Can Create Change
              </h1>

              <p className="mt-6 text-lg leading-8 text-green-50">
                Every act of kindness can help us serve people in need,
                protect animals, and care for our environment.
              </p>
            </div>
          </div>
        </section>

        {/* Razorpay Donation Section */}
        <Donation />

        {/* How You Can Help */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                How You Can Help
              </span>

              <h2 className="mt-5 text-4xl font-bold text-gray-900">
                Support the Causes That Matter
              </h2>

              <p className="mt-5 text-lg text-gray-600">
                Your support can help turn compassion into meaningful action
                for people, animals, and the environment.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl bg-green-50 p-8 text-center">
                <div className="text-5xl">🐾</div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Animal Welfare
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Supporting rescue, feeding, medical care, and protection of
                  animals.
                </p>
              </div>

              <div className="rounded-3xl bg-orange-50 p-8 text-center">
                <div className="text-5xl">🍛</div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Food Distribution
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Working towards providing food and support to people facing
                  hunger.
                </p>
              </div>

              <div className="rounded-3xl bg-emerald-50 p-8 text-center">
                <div className="text-5xl">🌳</div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Tree Plantation
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Promoting greener communities through tree plantation and
                  environmental awareness.
                </p>
              </div>

              <div className="rounded-3xl bg-blue-50 p-8 text-center">
                <div className="text-5xl">🌍</div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Environment
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Encouraging responsible action to protect our natural
                  environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="bg-gray-900 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-3xl font-bold">सेवा परमो धर्मः</p>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              We believe service should be guided by compassion, transparency,
              responsibility, and respect for every individual and every living
              being.
            </p>

            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-green-400">
              Helping is Bhakti
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}