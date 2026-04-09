export default function Hero() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-[32px] md:text-[48px] font-medium leading-[1.15] mb-6">
          Japan isn&apos;t a harder market.
          <br />
          <span className="text-kamba-purple">It&apos;s a different game.</span>
        </h1>

        <p className="text-lg text-text-secondary max-w-[560px] mb-8">
          100+ startups. Countless stalled deals. I&apos;ve seen exactly where Japan entries break
          down — and I know how to play the long game the right way.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#contact"
            className="bg-kamba-purple text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-kamba-dark transition-colors"
          >
            Let&apos;s talk Japan entry
          </a>
          <a
            href="#how-it-works"
            className="border border-kamba-purple text-kamba-purple px-6 py-3 rounded-md text-sm font-medium hover:bg-kamba-lavender transition-colors"
          >
            See how it works
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 md:gap-0 md:divide-x md:divide-gray-200 mb-8">
          {[
            { number: "100+", label: "startups advised" },
            { number: "10yrs+", label: "in Silicon Valley" },
            { number: "Multi-sector", label: "enterprise network in Japan" },
          ].map((stat) => (
            <div key={stat.label} className="md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="text-[22px] font-medium text-kamba-purple">{stat.number}</div>
              <div className="text-xs text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Badge row */}
        <div className="flex flex-wrap gap-2">
          {[
            "Fellow \u00B7 Sierra Ventures",
            "SV Director \u00B7 GATS / Cabinet Office of Japan",
            "As seen on CNBC",
          ].map((badge) => (
            <span
              key={badge}
              className="bg-kamba-lavender text-kamba-dark text-xs px-3 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
