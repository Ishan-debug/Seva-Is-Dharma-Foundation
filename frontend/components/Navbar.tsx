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

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/20 bg-white/80 py-2 shadow-xl backdrop-blur-xl"
          : "border-b border-gray-200 bg-white/90 py-3 shadow-md backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Seva Is Dharma Foundation"
            width={50}
            height={50}
            priority
            className="rounded-full"
          />

          <div>
            <h1 className="text-sm font-bold text-orange-600 md:text-lg">
              Seva Is Dharma Foundation
            </h1>

            <p className="hidden text-xs text-green-700 md:block">
              Helping is Bhakti • सेवा परमो धर्मः
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          {[
            ["Home", "/"],
            ["About", "#about"],
            ["Programs", "#programs"],
            ["Gallery", "#gallery"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="relative font-medium text-gray-700 transition duration-300 hover:text-orange-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}

          <Link
            href="#donate"
            className="rounded-full bg-orange-600 px-6 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
          >
            Donate ❤️
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="transition hover:scale-110 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t bg-white" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-5">

          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <Link href="#programs" onClick={() => setIsOpen(false)}>
            Programs
          </Link>

          <Link href="#gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>

          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <Link
            href="#donate"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-orange-600 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
          >
            Donate ❤️
          </Link>

        </div>
      </div>
    </nav>
  );
}