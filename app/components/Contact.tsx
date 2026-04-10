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
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-text-muted mb-10">Get in touch</p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-lg font-medium text-text-primary mb-4">
              Ready to play the Japan game the right way?
            </h2>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Whether you&apos;re pre-market or mid-stall, let&apos;s talk about what&apos;s
              blocking you — and whether I can help.
            </p>
            <p className="text-xs text-text-muted">
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
              <label htmlFor="name" className="block text-xs text-text-secondary mb-1">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-kamba-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-kamba-purple/30 focus:border-kamba-purple"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-xs text-text-secondary mb-1">
                Company *
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="w-full border border-kamba-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-kamba-purple/30 focus:border-kamba-purple"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-text-secondary mb-1">
                Your Japan situation
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-kamba-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-kamba-purple/30 focus:border-kamba-purple resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-kamba-purple text-white text-sm font-medium py-3 rounded-md hover:bg-kamba-dark transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600">Message sent. I&apos;ll be in touch.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
