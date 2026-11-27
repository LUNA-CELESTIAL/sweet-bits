import type { Metadata } from "next";
import Link from "next/link";
import { DEV_LOG_ENTRIES } from "@/data/dev-log";

export const metadata: Metadata = {
  title: "dev-log",
  description:
    "「こういう取り組みをしてきました」をまとめる場所。LUNA's Constellations の今日までの軌跡。",
};

export default function DevLogIndexPage() {
  const entries = [...DEV_LOG_ENTRIES].sort((a, b) =>
    b.date.localeCompare(a.date)
  );
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">dev-log</h1>
      <p className="mt-3 leading-relaxed text-purple-900/70">
        こういう取り組みをしてきました、をまとめる場所です。
        取り組みが一区切りついたときに1本ずつ増えていきます。
        誰がいつ見ても、今日までの軌跡が分かるように。
      </p>

      <div className="mt-10 space-y-4 border-l-2 border-purple-200 pl-5">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/dev-log/${entry.slug}`}
            className="group relative block rounded-3xl bg-white/80 p-5 shadow-md shadow-purple-100 transition hover:bg-white hover:shadow-lg"
          >
            <span className="absolute -left-[27px] top-6 h-3 w-3 rounded-full bg-purple-400 ring-4 ring-purple-100" />
            <p className="text-xs font-semibold tracking-wide text-purple-500">
              {entry.date}
            </p>
            <h2 className="mt-1.5 font-bold leading-snug">{entry.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-purple-950/70">
              {entry.summary}
            </p>
            <p className="mt-3 text-sm font-semibold text-purple-600">
              この日の話を読む{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
