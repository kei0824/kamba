import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "受託人件費単価表 — Kamba",
};

export default function UnitPrice() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">
      <div className="max-w-[700px] mx-auto px-8 py-20 flex-1">
        <p className="text-[12px] text-[#9CA3AF] mb-10">
          <a href="/ja" className="hover:text-[#6B7280]">&larr; トップに戻る</a>
        </p>

        <h1 className="text-[20px] font-medium text-[#1A1A1A] mb-6">受託人件費単価表</h1>

        <p className="text-[14px] text-[#4B5563] leading-[1.8] mb-8">
          国・地方公共団体およびその他の公共機関等から受託する業務における人件費の精算において、弊社が適用する受託単価を以下に記載します。
        </p>

        <div className="border border-[#C9BCEE] rounded-lg overflow-hidden mb-8">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="bg-[#F8F7FC]">
                <th colSpan={2} className="text-left px-6 py-3 text-[13px] font-medium text-[#1A1A1A]">
                  受託人件費単価表（2026年度）
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#C9BCEE]">
                <td className="px-6 py-3 text-[#6B7280]">区分</td>
                <td className="px-6 py-3 text-[#1A1A1A]">基準時間単価</td>
              </tr>
              <tr className="border-t border-[#C9BCEE]">
                <td className="px-6 py-3 text-[#6B7280]">単価</td>
                <td className="px-6 py-3 text-[#1A1A1A] font-medium">10,175円（税込）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-[13px] text-[#9CA3AF] leading-[1.8] space-y-2">
          <p>本単価表は 2025 年 3 月 1 日およびそれ以降に締結する契約に適用します。</p>
          <p>なお、社会情勢、賃金水準、物価変動等を踏まえ、必要に応じてこの単価表は改定されます。</p>
        </div>
      </div>

      <footer className="border-t border-[#C9BCEE] py-8 bg-[#F8F7FC]">
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <p className="text-[12px] text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} Kamba. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
