import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamba.io"),
  title: "Kamba — Japan Market Entry for Global Startups",
  description:
    "I help global startups enter Japan and actually succeed. 100+ startups advised. Fellow at Sierra Ventures. Based in Silicon Valley.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kamba — Japan Market Entry for Global Startups",
    description:
      "I help global startups enter Japan and actually succeed. 100+ startups advised. Fellow at Sierra Ventures. Based in Silicon Valley.",
    url: "https://kamba.io",
    siteName: "Kamba",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamba — Japan Market Entry for Global Startups",
    description:
      "I help global startups enter Japan and actually succeed. 100+ startups advised.",
    images: ["/og-image.png"],
  },
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
