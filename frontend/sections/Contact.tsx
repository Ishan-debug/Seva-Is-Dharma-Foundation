import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Contact Us
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Let&apos;s Serve Together
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Have a question, want to volunteer, or want to support our work?
            We would be happy to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <a
            href="tel:+919199233328"
            className="rounded-3xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <Phone size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Call Us
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              +91 91992 33328
            </p>
          </a>

          <a
            href="mailto:contact@sevaisdharmafoundation.org"
            className="rounded-3xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <Mail size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Email Us
            </h3>

            <p className="mt-2 break-all text-sm text-gray-600">
              contact@sevaisdharmafoundation.org
            </p>
          </a>

          <div className="rounded-3xl bg-white p-7 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <MapPin size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Head Office
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Singh More
              <br />
              Ranchi, Jharkhand – 834003
              <br />
              India
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-orange-500 px-7 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white"
          >
            Send Us a Message
          </Link>
        </div>
      </div>
    </section>
  );
}