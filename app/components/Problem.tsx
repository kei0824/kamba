const patterns = [
  {
    id: "01",
    title: "Wrong entry point",
    body: "Meeting the innovation team feels like progress. It rarely is. The real decisions happen elsewhere inside the org.",
  },
  {
    id: "02",
    title: "Ringi stall",
    body: "Decisions require consensus across many stakeholders. Nobody tells you this. Deals go quiet and you don\u2019t know why.",
  },
  {
    id: "03",
    title: "Fiscal cycle mismatch",
    body: "Japanese organizations run on fixed budget cycles. Miss the window and you wait another year \u2014 sometimes two.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-text-muted mb-8">The problem</p>

        {/* Quote block */}
        <div className="border-l-[3px] border-kamba-purple bg-kamba-lavender rounded-r-md p-6 mb-10 max-w-3xl">
          <p className="italic text-text-primary text-sm leading-relaxed">
            &ldquo;We had the product. We had interest from their innovation team. Then nothing
            happened for months.&rdquo;
          </p>
          <p className="text-xs text-text-muted mt-3">
            — A story I hear constantly from startups entering Japan
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {patterns.map((p) => (
            <div
              key={p.id}
              className="bg-kamba-offwhite border border-kamba-border rounded-lg p-5"
            >
              <p className="text-[11px] font-medium text-kamba-mid mb-2">Pattern {p.id}</p>
              <h3 className="text-sm font-medium text-text-primary mb-2">{p.title}</h3>
              <p className="text-[13px] text-text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Insight block */}
        <div className="border-l-[3px] border-kamba-purple bg-kamba-lavender rounded-r-md p-6 max-w-3xl">
          <p className="text-sm text-text-primary leading-relaxed">
            This is why Japan requires a{" "}
            <span className="font-medium">long-game strategy</span> — not a sprint. The startups
            that succeed aren&apos;t faster. They understand the rules of a different game and play
            accordingly. That&apos;s exactly what I help you do.
          </p>
        </div>
      </div>
    </section>
  );
}
