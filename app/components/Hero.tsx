export default function Hero() {
  return (
    <section className="bg-white pt-20 pb-20 md:pt-[120px] md:pb-[80px]">
      <div className="max-w-[1100px] mx-auto px-8">
        <h1 className="text-[36px] md:text-[48px] lg:text-[72px] font-medium leading-[1.1] tracking-[-0.02em] mb-6">
          Japan isn&apos;t a harder market.
          <br />
          <span className="text-kamba-purple">It&apos;s a different game.</span>
        </h1>

        <p className="text-[17px] md:text-[20px] text-text-secondary max-w-[560px] leading-[1.65] mt-6 mb-10">
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
        <div className="flex flex-wrap gap-6 md:gap-0 md:divide-x md:divide-gray-200 mt-10 md:mt-16">
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
      </div>
    </section>
  );
}
