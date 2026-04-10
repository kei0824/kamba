export default function HeroJa() {
  return (
    <section className="bg-[#ffffff] pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-8">
        <h1 className="text-[36px] md:text-[56px] lg:text-[64px] font-medium leading-[1.15] tracking-[-0.02em] mb-6">
          シリコンバレーは、<br />
          <span className="text-[#6B46C1]">情報があれば勝てる市場ではない。</span>
        </h1>

        <p className="text-[17px] md:text-[20px] text-[#6B7280] max-w-[560px] leading-[1.8] mt-6 mb-10">
          北米のイノベーションを自社の成長に繋げるには、正しい情報源・正しい相手・正しい入り方が必要です。Kambaは、100社超の支援実績とシリコンバレーの深いネットワークで、その「確度」を上げます。
        </p>

        <div className="flex flex-wrap gap-6 md:gap-0 md:divide-x md:divide-[#C9BCEE] mb-10">
          {[
            { number: "100社+", label: "スタートアップ支援実績" },
            { number: "年間1,000社+", label: "リサーチ・レビュー体制" },
            { number: "VC 100社+", label: "のコネクション" },
          ].map((stat) => (
            <div key={stat.label} className="md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="text-[22px] font-medium text-[#6B46C1]">{stat.number}</div>
              <div className="text-xs text-[#9CA3AF]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-[#6B46C1] text-[#ffffff] px-8 py-3.5 rounded-md text-[15px] font-medium hover:bg-[#4E2FA0] transition-colors"
          >
            まず相談する
          </a>
          <a
            href="#how-it-works"
            className="border border-[#6B46C1] text-[#6B46C1] px-8 py-3.5 rounded-md text-[15px] font-medium hover:bg-[#EDE9F8] transition-colors"
          >
            Kambaの進め方を見る
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {[
            "シリコンバレー在住 10年+",
            "VC・アクセラレーター 100社+のネットワーク",
          ].map((badge) => (
            <span
              key={badge}
              className="text-[11px] bg-[#EDE9F8] text-[#4E2FA0] px-3 py-1.5 rounded-md"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
