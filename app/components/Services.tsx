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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-text-muted mb-8">What I do</p>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map((s) => (
            <div
              key={s.tag}
              className="bg-white border border-kamba-border rounded-lg p-5"
            >
              <p className="text-[11px] font-medium text-kamba-purple mb-2">{s.tag}</p>
              <h3 className="text-[15px] font-medium text-text-primary mb-2">{s.title}</h3>
              <p className="text-[13px] text-text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Sectors */}
        <div className="mb-8">
          <p className="text-xs text-text-muted mb-3">Sectors with active network</p>
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="border border-kamba-border text-text-muted text-xs px-3 py-1 rounded-md"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>

        {/* Retainer note */}
        <div className="bg-kamba-lavender border border-kamba-border rounded-md p-5 max-w-3xl">
          <p className="text-[13px] text-kamba-dark leading-relaxed">
            Most clients work with me on an ongoing retainer basis — because Japan is a long game.
            One intro rarely closes a deal. Sustained presence, follow-through, and timing awareness
            is what moves things forward.
          </p>
        </div>
      </div>
    </section>
  );
}
