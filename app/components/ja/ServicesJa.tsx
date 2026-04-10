const services = [
  {
    tag: "パートナー発掘",
    title: "カスタマイズ・スカウティング",
    body: "要件定義から候補リスト作成、Deep Research、初期打診まで一貫して担当。展示会では出会えない「本当に合う相手」を見つけます。",
  },
  {
    tag: "戦略支援",
    title: "イノベーション戦略・体制設計",
    body: "社内承認プロセスの設計、PoC構造の作り込み、関係部署への社内営業まで。「担当者止まり」を突破する体制を一緒に作ります。",
  },
  {
    tag: "伴走支援",
    title: "協業・PoC推進",
    body: "PoC設計から実装、共同事業スキームの構築まで伴走。成果が出るまでKambaが一緒に動きます。",
  },
];

const sectors = [
  "ロジスティクス",
  "自動車・モビリティ",
  "産業・製造",
  "農業・食品",
  "小売・流通",
];

export default function ServicesJa() {
  return (
    <section id="services" className="py-20 md:py-[120px] bg-[#ffffff]">
      <div className="max-w-[1100px] mx-auto px-8">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-8">サービス</p>

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

        <div className="mb-8">
          <p className="text-[12px] text-[#9CA3AF] mb-3">対応セクター</p>
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
