export default function Hero() {
  return (
    <section className="bg-[#ffffff] pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-8">
        <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[1.08] tracking-[-0.02em] mb-6">
          Japan isn&apos;t a harder market.
          <br />
          <span className="text-[#6B46C1]">It&apos;s a different game.</span>
        </h1>

        <p className="text-[18px] md:text-[20px] text-[#6B7280] max-w-[540px] leading-[1.7] mt-6 mb-10">
          100+ startups. Countless stalled deals. I&apos;ve seen exactly where Japan entries break
          down — and I know how to play the long game the right way.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 md:gap-0 md:divide-x md:divide-[#C9BCEE] mb-10">
          {[
            { number: "100+", label: "startups advised" },
            { number: "10yrs+", label: "in Silicon Valley" },
            { number: "Multi-sector", label: "enterprise network in Japan" },
          ].map((stat) => (
            <div key={stat.label} className="md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="text-[22px] font-medium text-[#6B46C1]">{stat.number}</div>
              <div className="text-xs text-[#9CA3AF]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-[#6B46C1] text-[#ffffff] px-8 py-3.5 rounded-md text-[15px] font-medium hover:bg-[#4E2FA0] transition-colors"
          >
            Let&apos;s talk Japan entry
          </a>
          <a
            href="#how-it-works"
            className="border border-[#6B46C1] text-[#6B46C1] px-8 py-3.5 rounded-md text-[15px] font-medium hover:bg-[#EDE9F8] transition-colors"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
