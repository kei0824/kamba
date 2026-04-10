const steps = [
  { num: 1, title: "ヒアリング", desc: "貴社の課題・目的・現状を整理" },
  { num: 2, title: "方針設計", desc: "どのセクター・どの切り口で攻めるか" },
  { num: 3, title: "候補選定・打診", desc: "ネットワークから最適な相手を特定・接触" },
  { num: 4, title: "PoC設計", desc: "社内承認が通る形でパイロットを設計" },
  { num: 5, title: "推進・伴走", desc: "承認〜実装まで継続的に関与" },
];

export default function HowItWorksJa() {
  return (
    <section id="how-it-works" className="py-20 md:py-[100px] bg-[#ffffff]">
      <div className="max-w-[1100px] mx-auto px-8">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-10">進め方</p>

        <div className="hidden lg:flex items-start justify-between">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-start">
              <div className="flex flex-col items-center text-center max-w-[160px]">
                <div className="w-[32px] h-[32px] rounded-full bg-[#EDE9F8] text-[#6B46C1] text-[13px] font-medium flex items-center justify-center mb-3">
                  {step.num}
                </div>
                <h3 className="text-[14px] font-medium text-[#1A1A1A] mb-1">{step.title}</h3>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="text-[#C9BCEE] mx-3 mt-1 text-[20px] shrink-0">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        <div className="lg:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-4">
              <div className="w-[32px] h-[32px] rounded-full bg-[#EDE9F8] text-[#6B46C1] text-[13px] font-medium flex items-center justify-center shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-[14px] font-medium text-[#1A1A1A] mb-1">{step.title}</h3>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
