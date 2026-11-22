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
    <section>
      <h2 className="text-xs font-bold tracking-[0.2em] text-purple-400">
        {label}
      </h2>
      <p className="mt-2.5 whitespace-pre-line text-base leading-[1.95] text-purple-950/85 sm:text-lg">
        {children}
      </p>
    </section>
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
    <main className="mx-auto w-full max-w-2xl px-5 py-10 sm:py-14">
      <Link
        href="/dev-log"
        className="text-sm font-semibold text-purple-600 hover:text-purple-500"
      >
        ← dev-log 一覧へ
      </Link>

      <p className="mt-8 text-xs font-semibold tracking-wide text-purple-500">
        {entry.date}
      </p>
      <h1 className="mt-2 text-2xl font-bold leading-snug sm:text-[2rem]">
        {entry.title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-purple-950/70 sm:text-lg">
        {entry.summary}
      </p>

      <div className="mt-12 space-y-11">
        <Section label="きっかけ">{entry.trigger}</Section>
        <Section label="やったこと">{entry.did}</Section>
        <Section label="分かったこと">{entry.learned}</Section>
      </div>

      <section className="mt-12 rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 p-6 sm:p-7">
        <h2 className="text-xs font-bold tracking-[0.2em] text-amber-600">
          次
        </h2>
        <p className="mt-2.5 whitespace-pre-line text-base leading-[1.95] text-purple-950/85 sm:text-lg">
          {entry.next}
        </p>
      </section>

      {entry.links && entry.links.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-purple-400">
            リンク
          </h2>
          <ul className="mt-3 space-y-2.5">
            {entry.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-semibold text-purple-600 underline decoration-purple-300 underline-offset-4 hover:text-purple-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
