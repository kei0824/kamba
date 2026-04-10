const credentials = [
  {
    label: "10+ years in Silicon Valley",
    body: "Deep local roots. Not just a network on paper \u2014 I\u2019m in the room where decisions are made.",
  },
  {
    label: "100+ VC & accelerator connections",
    body: "Direct access to the investment ecosystem. I know which funds are active in which sectors right now.",
  },
  {
    label: "Both sides of the table",
    body: "I understand how Japanese organizations make decisions internally. And I understand what startups need to move fast.",
  },
  {
    label: "100+ deals worth of pattern recognition",
    body: "I\u2019ve seen where things break before they do. That\u2019s not something you can read in a playbook.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-[120px] bg-white">
      <div className="max-w-[1100px] mx-auto px-8">
        <p className="text-xs uppercase tracking-widest text-text-muted mb-8">Why me</p>

        <div className="mb-8">
          <h2 className="text-lg font-medium text-text-primary">
            Keiichi &ldquo;Kane&rdquo; Matsumoto
          </h2>
          <p className="text-sm text-text-muted">Founder, Kamba</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {credentials.map((c) => (
            <div key={c.label} className="flex gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-kamba-purple shrink-0" />
              <div>
                <p className="text-sm font-medium text-text-primary">{c.label}</p>
                <p className="text-[13px] text-text-muted leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
