import Link from "next/link";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Foundation */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-white transition hover:text-orange-400"
            >
              Seva Is Dharma Foundation
            </Link>

            <p className="mt-5 leading-7 text-gray-400">
              Dedicated to animal welfare, feeding the hungry, tree plantation,
              and environmental protection. Together, we strive to build a more
              compassionate and sustainable future.
            </p>

            <p className="mt-5 flex items-center gap-2 font-medium text-orange-400">
              <Heart size={18} fill="currentColor" />
              सेवा परमो धर्मः
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Helping is Bhakti.
            </p>

            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-gray-400 transition hover:text-orange-400"
            >
              <span className="text-lg font-semibold">◎</span>
              <span>Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-orange-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-orange-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/causes"
                  className="transition hover:text-orange-400"
                >
                  Our Causes
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="transition hover:text-orange-400"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/volunteer"
                  className="transition hover:text-orange-400"
                >
                  Volunteer
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-orange-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/donate"
                  className="font-semibold text-orange-400 transition hover:text-orange-300"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Causes & Legal */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/causes/animal-welfare"
                  className="transition hover:text-orange-400"
                >
                  🐾 Animal Welfare
                </Link>
              </li>

              <li>
                <Link
                  href="/causes/food-distribution"
                  className="transition hover:text-orange-400"
                >
                  🍛 Food Distribution
                </Link>
              </li>

              <li>
                <Link
                  href="/causes/tree-plantation"
                  className="transition hover:text-orange-400"
                >
                  🌳 Tree Plantation
                </Link>
              </li>

              <li>
                <Link
                  href="/causes/environment"
                  className="transition hover:text-orange-400"
                >
                  🌍 Environment Protection
                </Link>
              </li>
            </ul>

            <h3 className="mb-4 mt-8 text-xl font-semibold text-white">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-orange-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-orange-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/disclaimer"
                  className="transition hover:text-orange-400"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              {/* Phone */}
              <a
                href="tel:+919199233328"
                className="flex items-start gap-3 transition hover:text-orange-400"
              >
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-orange-400"
                />

                <span>
                  +91 91992 33328

                  <span className="block text-xs text-gray-500">
                    Temporary contact number
                  </span>
                </span>
              </a>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-orange-400"
                />

                <span>
                  contact@sevaisdharma.org

                  <span className="block text-xs text-gray-500">
                    Official email coming soon
                  </span>
                </span>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-orange-400"
                />

                <span>
                  Singh More
                  <br />
                  Ranchi, Jharkhand – 834003
                  <br />
                  India

                  <span className="mt-1 block text-xs text-gray-500">
                    Temporary office information
                  </span>
                </span>
              </div>

            </div>

            {/* Political Neutrality */}
            <div className="mt-7 rounded-2xl border border-gray-800 bg-gray-900 p-4">
              <p className="text-sm font-semibold text-white">
                Political Independence
              </p>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Seva Is Dharma Foundation is an independent, non-political
                organization. We do not endorse or operate on behalf of any
                political party.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Seva Is Dharma Foundation.
            All Rights Reserved.
          </p>

          <p className="text-sm text-orange-400">
            Serving Humanity • Animals • Nature ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}