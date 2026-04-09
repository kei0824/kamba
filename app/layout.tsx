import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamba \u2014 Japan Market Entry for Global Startups",
  description:
    "I help global startups enter Japan and actually succeed. 100+ startups advised. Fellow at Sierra Ventures. Based in Silicon Valley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
