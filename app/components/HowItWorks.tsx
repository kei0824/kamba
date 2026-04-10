const steps = [
  { num: 1, title: "Discovery call", desc: "Understand your product, stage, and Japan hypothesis" },
  { num: 2, title: "Market fit check", desc: "Which industry, which companies, which entry point" },
  { num: 3, title: "Introductions", desc: "Warm intros to the right people, not just innovation teams" },
  { num: 4, title: "POC design", desc: "Structure a pilot that Japanese orgs can approve and fund" },
  { num: 5, title: "Deal navigation", desc: "Ongoing support through ringi, cycles, and internal politics" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-[120px] bg-[#ffffff]">
      <div className="max-w-[860px] mx-auto px-8">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-10">How it works</p>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-start justify-between">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-start">
              <div className="flex flex-col items-center text-center max-w-[160px]">
                <div className="w-[32px] h-[32px] rounded-full bg-[#EDE9F8] text-[#6B46C1] text-[13px] font-medium flex items-center justify-center mb-3">
                  {step.num}
                </div>
                <h3 className="text-[13px] font-medium text-[#1A1A1A] mb-1">{step.title}</h3>
                <p className="text-[12px] text-[#6B7280] leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="text-[#C9BCEE] mx-3 mt-2 text-[18px]">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: vertical stack */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-4">
              <div className="w-[32px] h-[32px] rounded-full bg-[#EDE9F8] text-[#6B46C1] text-[13px] font-medium flex items-center justify-center shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-[13px] font-medium text-[#1A1A1A] mb-1">{step.title}</h3>
                <p className="text-[12px] text-[#6B7280] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
