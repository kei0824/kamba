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
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.92)] backdrop-blur-sm border-b border-[#C9BCEE]">
      <div className="max-w-[860px] mx-auto px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-1 text-[#6B46C1] text-xl font-medium">
          <Image src="/apple-touch-icon.png" alt="" width={28} height={28} className="h-7 w-7" priority />
          Kamba
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="text-[14px] text-[#6B7280] hover:text-[#1A1A1A] transition-colors">
            EN | <span className="text-[#9CA3AF]">JA</span>
          </a>
          <a
            href="#contact"
            className="bg-[#6B46C1] text-[#ffffff] text-[14px] px-5 py-2 rounded-md hover:bg-[#4E2FA0] transition-colors"
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
            className="w-6 h-6 text-[#1A1A1A]"
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
        <div className="md:hidden bg-[rgba(255,255,255,0.92)] backdrop-blur-sm border-t border-[#C9BCEE] px-8 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-[14px] text-[#6B7280] hover:text-[#1A1A1A]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="block text-[14px] text-[#6B7280]">
            EN | <span className="text-[#9CA3AF]">JA</span>
          </a>
          <a
            href="#contact"
            className="block text-center bg-[#6B46C1] text-[#ffffff] text-[14px] px-5 py-2 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
