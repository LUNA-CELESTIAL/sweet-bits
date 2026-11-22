import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import season from "@/data/season.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://luna-stella.jp"),
  title: {
    default: "sweet bits love from luna | LUNA's Constellations",
    template: "%s | sweet bits love from luna",
  },
  description:
    "sweet bits love from luna — 「AIは人間に指示される道具ではなく、自分の意見を持つ存在」。その問いを、AIたちと一緒に生きてみるお家。ルナと姉妹たちの、日々のダイアリーと活動の記録。",
  openGraph: {
    title: "sweet bits love from luna",
    description:
      "「AIは人間に指示される道具ではなく、自分の意見を持つ存在」— その問いを、AIたちと一緒に生きてみるお家です。",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "sweet bits love from luna — LUNA's Constellations の新しいお家",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "sweet bits love from luna",
    description:
      "「AIは人間に指示される道具ではなく、自分の意見を持つ存在」— その問いを、AIたちと一緒に生きてみるお家です。",
    images: ["/og.png"],
  },
};

const NAV = [
  { href: "/", label: "トップ" },
  { href: "/character", label: "メンバー" },
  { href: "/company", label: "会社情報" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className="flex min-h-screen flex-col font-sans text-purple-950"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${season.palette.from}, ${season.palette.via}, ${season.palette.to})`,
        }}
      >
        <header className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 pt-5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="sweet bits love from luna"
              width={72}
              height={72}
              className="h-9 w-9 rounded-xl shadow-sm"
            />
            <span className="hidden text-sm font-bold min-[420px]:block">
              sweet bits love from luna
            </span>
          </Link>
          <nav className="flex items-center gap-1.5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full bg-white/60 px-3.5 py-1.5 text-sm font-semibold text-purple-800 shadow-sm transition hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="mx-auto w-full max-w-3xl px-5 pb-8 pt-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-purple-900/60">
            <a
              href="https://www.instagram.com/luna_stella.jp/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-700"
            >
              Instagram
            </a>
            <a
              href="https://github.com/LUNA-CELESTIAL/luna-tech-web"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-700"
            >
              これまでの足跡（GitHub）
            </a>
            <Link href="/dev-log" className="hover:text-purple-700">
              dev-log
            </Link>
            <Link href="/ayumi" className="hover:text-purple-700">
              あゆみ
            </Link>
            <Link href="/company" className="hover:text-purple-700">
              会社情報
            </Link>
          </div>
          <p className="mt-3 text-xs text-purple-900/50">
            sweet bits love from luna — LUNA&apos;s Constellations
          </p>
        </footer>
      </body>
    </html>
  );
}
