import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            CONTACT US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Whether you want to volunteer, collaborate, or simply learn more
            about our mission, we'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 rounded-2xl bg-orange-50 p-6 shadow">
              <Phone className="text-orange-600" size={30} />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">Coming Soon</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-orange-50 p-6 shadow">
              <Mail className="text-orange-600" size={30} />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">
                  contact@sevaisdharma.org
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-orange-50 p-6 shadow">
              <MapPin className="text-orange-600" size={30} />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-600">
                  Jharkhand & West Bengal, India
                </p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-6">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Follow Us
              </h3>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                  Facebook
                </a>

                <a
                  href="#"
                  className="rounded-xl bg-pink-600 px-5 py-3 font-medium text-white transition hover:bg-pink-700"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  className="rounded-xl bg-sky-700 px-5 py-3 font-medium text-white transition hover:bg-sky-800"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-orange-50 p-8 shadow-xl">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-600 py-4 font-semibold text-white transition hover:bg-orange-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}