import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <body className="flex min-h-screen flex-col bg-gradient-to-b from-pink-100 via-purple-100 to-sky-100 font-sans text-purple-950">
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
