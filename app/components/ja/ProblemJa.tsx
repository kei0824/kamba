const patterns = [
  {
    id: "01",
    title: "本当に価値ある相手を見極められない",
    body: "情報は溢れているが、何百社もある中から自社に合う候補を絞り込む判断軸がない。展示会に行っても点でしか繋がらない。",
  },
  {
    id: "02",
    title: "社内が動かない",
    body: "現場が良いと思っても、予算・承認・関係部署の合意が得られず前に進まない。活動が「担当者止まり」になる。",
  },
  {
    id: "03",
    title: "同じ失敗を繰り返す",
    body: "前任者の知見が引き継がれず、毎回ゼロから始まる。学習が蓄積されないまま、予算と時間だけが消費される。",
  },
];

export default function ProblemJa() {
  return (
    <section id="problem" className="py-20 md:py-[120px] bg-[#321A7A]">
      <div className="max-w-[1100px] mx-auto px-8">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#A78FE4] mb-8">よくある課題</p>

        <div className="border-l-[3px] border-[#ffffff] bg-[rgba(255,255,255,0.08)] rounded-r-md p-6 mb-10 max-w-3xl">
          <p className="italic text-[#ffffff] text-[20px] leading-[1.6]">
            「現地のスタートアップとは繋がった。でも、そこから社内でどう進めればいいのかわからない。」
          </p>
          <p className="text-[13px] text-[#A78FE4] mt-4">
            — 北米イノベーション担当者からよく聞く声
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {patterns.map((p) => (
            <div
              key={p.id}
              className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] rounded-lg p-5"
            >
              <p className="text-[11px] font-medium text-[#A78FE4] mb-2">課題 {p.id}</p>
              <h3 className="text-[16px] font-medium text-[#ffffff] mb-2">{p.title}</h3>
              <p className="text-[14px] text-[rgba(255,255,255,0.72)] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="border-l-[3px] border-[#A78FE4] bg-[rgba(255,255,255,0.08)] rounded-r-md p-6 max-w-3xl">
          <p className="text-[16px] text-[rgba(255,255,255,0.88)] leading-relaxed">
            これらの課題に共通するのは、
            <span className="font-semibold text-[#ffffff]">「情報・人・プロセス」の三つが揃っていない</span>
            ことです。Kambaは、シリコンバレーの深いネットワークと実務知見で、この三つを一緒に整えます。
          </p>
        </div>
      </div>
    </section>
  );
}
