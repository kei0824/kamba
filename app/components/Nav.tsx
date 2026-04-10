"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "The problem", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-1 text-kamba-purple text-xl font-medium">
          <Image src="/apple-touch-icon.png" alt="" width={28} height={28} className="h-7 w-7" priority />
          Kamba
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            EN | <span className="text-text-muted">JA</span>
          </a>
          <a
            href="#contact"
            className="bg-kamba-purple text-white text-sm px-5 py-2 rounded-md hover:bg-kamba-dark transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-text-secondary hover:text-text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="block text-sm text-text-secondary">
            EN | <span className="text-text-muted">JA</span>
          </a>
          <a
            href="#contact"
            className="block text-center bg-kamba-purple text-white text-sm px-5 py-2 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
