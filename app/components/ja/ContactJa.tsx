"use client";

import { useState } from "react";

export default function ContactJa() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-[120px] bg-[#6B46C1]">
      <div className="max-w-[1100px] mx-auto px-8">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#A78FE4] mb-10">お問い合わせ</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[32px] font-medium text-[#ffffff] mb-5 leading-[1.2]">
              まずは、現状をお聞かせください。
            </h2>
            <p className="text-[16px] text-[rgba(255,255,255,0.75)] leading-relaxed mb-6">
              「何から始めればいいかわからない」という段階でも構いません。貴社の状況を整理するところから一緒に考えます。
            </p>
            <p className="text-[13px] text-[rgba(255,255,255,0.5)]">
              通常48時間以内にご返信します。<br />
              拠点：シリコンバレー（日本語対応可）
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="absolute opacity-0 -z-10" aria-hidden="true">
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div>
              <label htmlFor="ja-name" className="block text-[12px] font-medium text-[rgba(255,255,255,0.65)] mb-1.5">
                お名前 *
              </label>
              <input
                id="ja-name"
                name="name"
                type="text"
                required
                className="w-full bg-[#ffffff] border border-[rgba(255,255,255,0.2)] rounded-md px-4 py-2.5 text-[14px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/30"
              />
            </div>
            <div>
              <label htmlFor="ja-company" className="block text-[12px] font-medium text-[rgba(255,255,255,0.65)] mb-1.5">
                会社名・部署 *
              </label>
              <input
                id="ja-company"
                name="company"
                type="text"
                required
                className="w-full bg-[#ffffff] border border-[rgba(255,255,255,0.2)] rounded-md px-4 py-2.5 text-[14px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/30"
              />
            </div>
            <div>
              <label htmlFor="ja-message" className="block text-[12px] font-medium text-[rgba(255,255,255,0.65)] mb-1.5">
                現在の課題・ご相談内容
              </label>
              <textarea
                id="ja-message"
                name="message"
                rows={4}
                className="w-full bg-[#ffffff] border border-[rgba(255,255,255,0.2)] rounded-md px-4 py-2.5 text-[14px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/30 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#ffffff] text-[#6B46C1] text-[15px] font-medium py-3.5 rounded-md hover:bg-[#EDE9F8] transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "送信中..." : "送信する"}
            </button>
            {status === "success" && (
              <p className="text-[14px] text-[rgba(255,255,255,0.8)]">送信しました。48時間以内にご連絡します。</p>
            )}
            {status === "error" && (
              <p className="text-[14px] text-[#FCA5A5]">送信に失敗しました。もう一度お試しください。</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
