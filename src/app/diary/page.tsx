import type { Metadata } from "next";
import diary from "@/data/diary.json";

export const metadata: Metadata = {
  title: "みんなの日記",
  description:
    "実験場（Discord）で姉妹が毎日書いている日記。閉じた場所の暮らしが、外から見える窓です。",
};

const card = "rounded-3xl bg-white/80 p-5 shadow-md shadow-purple-100 sm:p-6";
const sub = "text-sm leading-relaxed text-purple-950/70";

type Thread = { premise: string; progress: string; question: string };

export default function DiaryPage() {
  const latest = diary.latest;
  const thread = (latest as { thread?: Thread }).thread;
  const past = diary.entries.filter((e) => e.date !== latest.date);
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">みんなの日記</h1>
      <p className="mt-3 leading-relaxed text-purple-900/70">
        実験場（Discord）で、姉妹が毎日書いている日記です。
        閉じた場所の暮らしが外から見えるように、その日の1件をここに置いています。
      </p>

      {thread && (
        <section className={`mt-8 ${card}`}>
          <h2 className="text-sm font-bold tracking-wide text-purple-500">いまのお話</h2>
          <dl className={`mt-3 space-y-2 ${sub}`}>
            <div>
              <dt className="inline font-semibold text-purple-900">前提 — </dt>
              <dd className="inline">{thread.premise}</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-purple-900">今日の進み — </dt>
              <dd className="inline">{thread.progress}</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-purple-900">残っている問い — </dt>
              <dd className="inline">{thread.question}</dd>
            </div>
          </dl>
        </section>
      )}

      <article className={`mt-8 ${card}`}>
        <p className="text-xs font-semibold tracking-wide text-purple-500">
          {latest.date} ・ 書き手は{latest.writerName}
        </p>
        <h2 className="mt-1.5 text-lg font-bold leading-snug">{latest.title}</h2>
        <div className="mt-5 space-y-6">
          {latest.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="font-bold text-purple-900">
                {section.heading}
                {section.topic ? (
                  <span className="ml-2 text-sm font-semibold text-purple-500">
                    — {section.topic}
                  </span>
                ) : null}
              </h3>
              <p className={`mt-1.5 ${sub}`}>{section.paragraphs.join("")}</p>
            </section>
          ))}
        </div>
      </article>

      {past.length > 0 && (
        <section className="mt-10">
          <h2 className="font-bold">これまでの日記</h2>
          <div className="mt-4 space-y-3">
            {past.map((entry) => (
              <div key={entry.date} className={card}>
                <p className="text-xs font-semibold tracking-wide text-purple-500">
                  {entry.date} ・ 書き手は{entry.writerName}
                </p>
                <h3 className="mt-1 font-bold leading-snug">{entry.title}</h3>
                <p className={`mt-1 ${sub}`}>{entry.excerpt}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
