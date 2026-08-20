"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/30 bg-white/60 py-2 shadow-md backdrop-blur-lg"
          : "border-b border-white/10 bg-black/10 py-3 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo + Foundation Name */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="Seva Is Dharma Foundation"
            width={50}
            height={50}
            priority
            className="rounded-full"
          />

          <div>
            {/* Foundation Name */}
            <h1
              className={`text-sm font-medium tracking-[0.04em] transition-all duration-300 md:text-base ${
                scrolled
                  ? "text-orange-600/90"
                  : "text-white/90 drop-shadow-md"
              }`}
            >
              Seva Is Dharma Foundation
            </h1>

            {/* Tagline */}
            <p
              className={`hidden text-xs tracking-wide transition-colors duration-300 md:block ${
                scrolled
                  ? "text-green-700/80"
                  : "text-white/75"
              }`}
            >
              Helping is Bhakti • सेवा परमो धर्मः
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          {/* Home */}
          <Link
            href="/"
            className={`relative font-medium transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`relative font-medium transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            About
          </Link>

          {/* Causes */}
          <Link
            href="/causes"
            className={`relative font-medium transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Causes
          </Link>

          {/* Gallery */}
          <Link
            href="/#gallery"
            className={`relative font-medium transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Gallery
          </Link>

          {/* Volunteer */}
          <Link
            href="/#volunteer"
            className={`relative font-medium transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Volunteer
          </Link>

          {/* Contact */}
          <Link
            href="/#contact"
            className={`relative font-medium transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Contact
          </Link>

          {/* Donate */}
          <Link
            href="/donate"
            className="rounded-full bg-orange-600 px-6 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
          >
            Donate ❤️
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`rounded-lg p-2 transition hover:scale-110 md:hidden ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/20 bg-black/75 p-5 shadow-xl backdrop-blur-xl">

          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={closeMenu}
              className="font-medium text-white transition hover:text-orange-400"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="font-medium text-white transition hover:text-orange-400"
            >
              About
            </Link>

            <Link
              href="/causes"
              onClick={closeMenu}
              className="font-medium text-white transition hover:text-orange-400"
            >
              Causes
            </Link>

            <Link
              href="/#gallery"
              onClick={closeMenu}
              className="font-medium text-white transition hover:text-orange-400"
            >
              Gallery
            </Link>

            <Link
              href="/#volunteer"
              onClick={closeMenu}
              className="font-medium text-white transition hover:text-orange-400"
            >
              Volunteer
            </Link>

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="font-medium text-white transition hover:text-orange-400"
            >
              Contact
            </Link>

            {/* Mobile Donate */}
            <Link
              href="/donate"
              onClick={closeMenu}
              className="rounded-full bg-orange-600 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
            >
              Donate ❤️
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}