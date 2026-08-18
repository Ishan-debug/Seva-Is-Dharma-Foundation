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
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Foundation */}
          <div className="min-w-0">
            <Link
              href="/"
              className="text-xl font-bold text-white transition hover:text-orange-400 sm:text-2xl"
            >
              Seva Is Dharma Foundation
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Dedicated to animal welfare, feeding the hungry, tree plantation,
              and environmental protection. Together, we strive to build a more
              compassionate and sustainable future.
            </p>

            <p className="mt-5 flex items-center gap-2 font-medium text-orange-400">
              <Heart size={18} fill="currentColor" className="shrink-0" />
              सेवा परमो धर्मः
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Helping is Bhakti.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex flex-wrap gap-3">

              {/* Instagram */}
              <a
                href="https://instagram.com/sevaisdharmafoundation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seva Is Dharma Foundation on Instagram"
                className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300 transition hover:border-orange-500 hover:text-orange-400"
              >
                <span className="text-lg">◎</span>
                Instagram
              </a>

              {/* X */}
              <a
                href="https://x.com/SevaIsDharma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seva Is Dharma Foundation on X"
                className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300 transition hover:border-orange-500 hover:text-orange-400"
              >
                <span className="font-bold">𝕏</span>
                X
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="transition hover:text-orange-400">
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
          <div className="min-w-0">
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

                <span className="break-words">
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

                <span className="break-all">
                  contact@sevaisdharma.org

                  <span className="mt-1 block break-normal text-xs text-gray-500">
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
        <hr className="my-8 border-gray-800 sm:my-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Seva Is Dharma Foundation.
            All Rights Reserved.
          </p>

          <p className="text-xs text-orange-400 sm:text-sm">
            Serving Humanity • Animals • Nature ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}