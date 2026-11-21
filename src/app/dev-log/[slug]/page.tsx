import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DEV_LOG_ENTRIES } from "@/data/dev-log";

export function generateStaticParams() {
  return DEV_LOG_ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = DEV_LOG_ENTRIES.find((e) => e.slug === slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

function Section({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <h2 className="font-bold text-purple-700">{label}</h2>
      <p className="mt-1.5 leading-relaxed text-purple-950/85">{children}</p>
    </div>
  );
}

export default async function DevLogEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = DEV_LOG_ENTRIES.find((e) => e.slug === slug);
  if (!entry) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <Link href="/dev-log" className="text-sm font-semibold text-purple-600 hover:text-purple-500">
        ← dev-log 一覧へ
      </Link>
      <article className="mt-5 rounded-3xl bg-white/80 p-6 shadow-md shadow-purple-100 sm:p-10">
        <p className="text-xs font-semibold tracking-wide text-purple-500">
          {entry.date}
        </p>
        <h1 className="mt-2 text-xl font-bold leading-snug sm:text-2xl">
          {entry.title}
        </h1>
        <div className="mt-8 space-y-7 text-sm sm:text-base">
          <Section label="きっかけ">{entry.trigger}</Section>
          <Section label="やったこと">{entry.did}</Section>
          <Section label="分かったこと">{entry.learned}</Section>
          <Section label="次">{entry.next}</Section>
        </div>
        {entry.links && entry.links.length > 0 && (
          <div className="mt-8 border-t border-purple-100 pt-5">
            <h2 className="text-sm font-bold text-purple-700">リンク</h2>
            <ul className="mt-2 space-y-1.5 text-sm">
              {entry.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600 underline decoration-purple-300 underline-offset-2 hover:text-purple-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </main>
  );
}
