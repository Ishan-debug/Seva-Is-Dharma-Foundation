import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Foundation */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Seva Is Dharma Foundation
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Dedicated to animal welfare, feeding the hungry, tree plantation,
              and environmental protection. Together, we strive to build a more
              compassionate and sustainable future.
            </p>

            <p className="mt-5 flex items-center gap-2 text-orange-400 font-medium">
              <Heart size={18} fill="currentColor" />
              सेवा परमो धर्मः
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-orange-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-orange-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/causes" className="hover:text-orange-400 transition">
                  Our Causes
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-orange-400 transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/volunteer" className="hover:text-orange-400 transition">
                  Volunteer
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-orange-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Causes */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Our Causes
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/causes/animal-welfare"
                  className="hover:text-orange-400 transition"
                >
                  🐾 Animal Welfare
                </Link>
              </li>

              <li>
                <Link
                  href="/causes/food-distribution"
                  className="hover:text-orange-400 transition"
                >
                  🍛 Food Distribution
                </Link>
              </li>

              <li>
                <Link
                  href="/causes/tree-plantation"
                  className="hover:text-orange-400 transition"
                >
                  🌳 Tree Plantation
                </Link>
              </li>

              <li>
                <Link
                  href="/causes/environment"
                  className="hover:text-orange-400 transition"
                >
                  🌍 Environment Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400" />
                <span>Coming Soon</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400" />
                <span>contact@sevaisdharma.org</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-400" />
                <span>Jharkhand, India</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-800" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Seva Is Dharma Foundation. All Rights Reserved.
          </p>

          <p className="text-sm text-orange-400">
            Serving Humanity • Animals • Nature ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}