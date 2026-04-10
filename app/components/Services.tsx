const services = [
  {
    tag: "Market Entry",
    title: "Japan entry strategy",
    body: "Right partner identification, messaging for Japanese enterprise, POC structure designed to get approved and funded.",
  },
  {
    tag: "Access",
    title: "Enterprise introductions",
    body: "Warm intros to the right people inside major Japanese corporations \u2014 not just the innovation team.",
  },
  {
    tag: "Deal Support",
    title: "POC to contract",
    body: "Navigate ringi, fiscal cycles, and internal politics. Keep deals moving when they would otherwise stall.",
  },
];

const sectors = [
  "Logistics",
  "Automotive",
  "Industrial & Manufacturing",
  "Agriculture",
  "Retail",
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-[120px] bg-[#ffffff]">
      <div className="max-w-[860px] mx-auto px-8">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-8">What I do</p>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map((s) => (
            <div
              key={s.tag}
              className="bg-[#ffffff] border border-[#C9BCEE] rounded-lg p-6"
            >
              <p className="text-[11px] font-medium text-[#6B46C1] mb-2">{s.tag}</p>
              <h3 className="text-[17px] font-medium text-[#1A1A1A] mb-2">{s.title}</h3>
              <p className="text-[14px] text-[#4B5563] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Sectors */}
        <div>
          <p className="text-[12px] text-[#9CA3AF] mb-3">Sectors with active network</p>
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="border border-[#C9BCEE] text-[#6B7280] text-[12px] px-3 py-1 rounded-md"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
