"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Seva Is Dharma Foundation"
            width={50}
            height={50}
            priority
          />

          <div>
            <h1 className="text-sm md:text-lg font-bold text-orange-600">
              Seva Is Dharma Foundation
            </h1>

            <p className="hidden md:block text-xs text-green-700">
              Helping is Bhakti • सेवा परमो धर्मः
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#programs">Programs</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>

          <Link
            href="#donate"
            className="rounded-full bg-orange-600 px-5 py-2 text-white font-semibold hover:bg-orange-700 transition"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col p-4 gap-4">
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
              className="rounded-full bg-orange-600 text-white text-center py-2"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}