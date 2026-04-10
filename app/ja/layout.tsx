import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamba.io"),
  title: "Kamba — 北米イノベーションを「確度高く」進める",
  description:
    "シリコンバレー在住10年超。VC100社+のネットワーク。100社超の支援実績を持つKambaが、日本企業の北米進出・新規事業開発を支援します。",
};

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
