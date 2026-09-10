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

  const navLinkClass = `
    relative font-medium transition duration-300
    after:absolute after:-bottom-1 after:left-0
    after:h-[2px] after:w-0
    after:bg-orange-500
    after:transition-all after:duration-300
    hover:text-orange-500 hover:after:w-full
  `;

  const mobileLinkClass = `
    font-medium transition-colors duration-200
  `;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200/70 bg-white/90 py-2 shadow-md backdrop-blur-lg"
          : "border-b border-white/10 bg-black/10 py-3 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* =================================================
            BRAND
        ================================================== */}

        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3"
          aria-label="Seva Is Dharma Foundation Home"
        >
          {/* Logo */}
          <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
            <Image
              src="/images/seva-is-dharma-logo.png"
              alt="Seva Is Dharma Foundation logo"
              fill
              priority
              sizes="56px"
              className="object-contain"
            />
          </div>

          {/* Foundation name */}
          <div className="min-w-0">
            <h1
              className={`truncate text-sm font-semibold tracking-[0.03em] transition-colors duration-300 sm:text-base ${
                scrolled
                  ? "text-orange-600"
                  : "text-white drop-shadow-md"
              }`}
            >
              Seva Is Dharma Foundation
            </h1>

            <p
              className={`hidden text-xs tracking-wide transition-colors duration-300 md:block ${
                scrolled
                  ? "text-green-700"
                  : "text-white/80"
              }`}
            >
              Helping is Bhakti • सेवा परमो धर्मः
            </p>
          </div>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`${navLinkClass} ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`${navLinkClass} ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            About
          </Link>

          <Link
            href="/causes"
            className={`${navLinkClass} ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Causes
          </Link>

          <Link
            href="/#gallery"
            className={`${navLinkClass} ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Gallery
          </Link>

          <Link
            href="/#volunteer"
            className={`${navLinkClass} ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Volunteer
          </Link>

          <Link
            href="/#contact"
            className={`${navLinkClass} ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Contact
          </Link>

          {/* Donate */}
          <Link
            href="/donate"
            className="rounded-full bg-orange-600 px-6 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-xl"
          >
            Donate ❤️
          </Link>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className={`rounded-lg p-2 transition-all duration-200 hover:scale-105 md:hidden ${
            scrolled
              ? "text-gray-900"
              : "text-white"
          }`}
        >
          {isOpen ? (
            <X size={28} strokeWidth={2} />
          ) : (
            <Menu size={28} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* =================================================
          MOBILE MENU
      ================================================== */}

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`border-t px-5 py-5 shadow-xl backdrop-blur-xl ${
            scrolled
              ? "border-gray-200 bg-white/95"
              : "border-white/20 bg-black/80"
          }`}
        >
          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={closeMenu}
              className={`${mobileLinkClass} ${
                scrolled
                  ? "text-gray-900 hover:text-orange-600"
                  : "text-white hover:text-orange-400"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className={`${mobileLinkClass} ${
                scrolled
                  ? "text-gray-900 hover:text-orange-600"
                  : "text-white hover:text-orange-400"
              }`}
            >
              About
            </Link>

            <Link
              href="/causes"
              onClick={closeMenu}
              className={`${mobileLinkClass} ${
                scrolled
                  ? "text-gray-900 hover:text-orange-600"
                  : "text-white hover:text-orange-400"
              }`}
            >
              Causes
            </Link>

            <Link
              href="/#gallery"
              onClick={closeMenu}
              className={`${mobileLinkClass} ${
                scrolled
                  ? "text-gray-900 hover:text-orange-600"
                  : "text-white hover:text-orange-400"
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/#volunteer"
              onClick={closeMenu}
              className={`${mobileLinkClass} ${
                scrolled
                  ? "text-gray-900 hover:text-orange-600"
                  : "text-white hover:text-orange-400"
              }`}
            >
              Volunteer
            </Link>

            <Link
              href="/#contact"
              onClick={closeMenu}
              className={`${mobileLinkClass} ${
                scrolled
                  ? "text-gray-900 hover:text-orange-600"
                  : "text-white hover:text-orange-400"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/donate"
              onClick={closeMenu}
              className="mt-1 rounded-full bg-orange-600 py-3 text-center font-semibold text-white transition-colors duration-200 hover:bg-orange-700"
            >
              Donate ❤️
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}