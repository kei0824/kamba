const credentials = [
  {
    label: "シリコンバレーのエコシステムに深く根ざした",
    body: "表面的な繋がりではなく、意思決定の場にいます。",
  },
  {
    label: "VC・アクセラレーター 100社+",
    body: "主要なVCやアクセラレーターとの深いコネクション。最新の投資トレンドと有望スタートアップ情報に直接アクセスできます。",
  },
  {
    label: "両側を知っている",
    body: "日本企業の承認プロセス・予算サイクル・組織文化を理解しながら、スタートアップのスピード感でも動けます。",
  },
  {
    label: "100社分のパターン認識",
    body: "うまくいった案件も、止まった案件も知っています。どこで躓くかを事前に把握しているのが最大の強みです。",
  },
];

export default function AboutJa() {
  return (
    <section id="about" className="py-20 md:py-[100px] bg-[#F8F7FC]">
      <div className="max-w-[1100px] mx-auto px-8">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-8">私たちについて</p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {credentials.map((c) => (
            <div key={c.label} className="flex gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-[#6B46C1] shrink-0" />
              <div>
                <p className="text-[15px] font-medium text-[#1A1A1A]">{c.label}</p>
                <p className="text-[14px] text-[#4B5563] leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
