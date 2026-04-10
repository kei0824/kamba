"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-[120px] bg-[#6B46C1]">
      <div className="max-w-[860px] mx-auto px-8">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#A78FE4] mb-10">Get in touch</p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-[28px] font-medium text-[#ffffff] mb-4">
              Ready to play the Japan game the right way?
            </h2>
            <p className="text-[15px] text-[rgba(255,255,255,0.75)] leading-relaxed mb-6">
              Whether you&apos;re pre-market or mid-stall, let&apos;s talk about what&apos;s
              blocking you — and whether I can help.
            </p>
            <p className="text-[12px] text-[rgba(255,255,255,0.5)]">
              Typically respond within 48hrs.
              <br />
              Based in Silicon Valley.
            </p>
          </div>

          {/* Right column — Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot — hidden from humans, bots fill it */}
            <div className="absolute opacity-0 -z-10" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div>
              <label htmlFor="name" className="block text-[12px] text-[rgba(255,255,255,0.6)] mb-1">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-[#ffffff] border border-[rgba(255,255,255,0.2)] rounded-md px-4 py-2.5 text-[14px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/30"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-[12px] text-[rgba(255,255,255,0.6)] mb-1">
                Company *
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="w-full bg-[#ffffff] border border-[rgba(255,255,255,0.2)] rounded-md px-4 py-2.5 text-[14px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/30"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[12px] text-[rgba(255,255,255,0.6)] mb-1">
                Your Japan situation
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-[#ffffff] border border-[rgba(255,255,255,0.2)] rounded-md px-4 py-2.5 text-[14px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/30 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#ffffff] text-[#6B46C1] text-[14px] font-medium py-3 rounded-md hover:bg-[#EDE9F8] transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-[14px] text-[rgba(255,255,255,0.8)]">Message sent. I&apos;ll be in touch.</p>
            )}
            {status === "error" && (
              <p className="text-[14px] text-[#FCA5A5]">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
