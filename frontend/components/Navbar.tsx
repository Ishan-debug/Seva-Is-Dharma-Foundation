"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Causes", href: "/causes" },
  { name: "Gallery", href: "/gallery" },
  { name: "Volunteer", href: "/#volunteer" },
  { name: "Contact", href: "/#contact" },
];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 shadow-md backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3"
          aria-label="Seva Is Dharma Foundation Home"
        >
          <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
            <Image
              src="/images/logo.png"
              alt="Seva Is Dharma Foundation logo"
              fill
              priority
              unoptimized
              sizes="56px"
              className="object-contain"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold leading-tight text-gray-900 sm:text-base md:text-lg">
              Seva Is Dharma Foundation
            </p>

            <p className="hidden text-xs font-medium text-orange-600 sm:block">
              Helping is Bhakti • सेवा परमो धर्मः
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-orange-600"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/donate"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-md"
          >
            Donate 💗
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-800 transition hover:border-orange-300 hover:text-orange-600 lg:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white shadow-lg lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/donate"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-orange-500 px-4 py-3 text-center text-base font-semibold text-white transition hover:bg-orange-600"
              >
                Donate Now 💗
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}