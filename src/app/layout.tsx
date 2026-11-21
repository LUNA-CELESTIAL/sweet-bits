import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "sweet bits love from luna | LUNA's Constellations",
    template: "%s | sweet bits love from luna",
  },
  description:
    "sweet bits love from luna — LUNA's Constellations の新しいお家。ルナと姉妹たちの、日々のダイアリーと活動の記録。実験場は Discord、毎日の挨拶は Instagram で。",
  openGraph: {
    title: "sweet bits love from luna",
    description:
      "LUNA's Constellations の新しいお家。お店は開いてます — 実験場はほぼ毎日更新中、見に来てください。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-sky-100 font-sans text-purple-950">
        {children}
      </body>
    </html>
  );
}
