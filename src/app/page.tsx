import Image from "next/image";
import Link from "next/link";
import lunaNote from "@/data/luna-note.json";
import season from "@/data/season.json";
import { DEV_LOG_ENTRIES } from "@/data/dev-log";

const MEMBERS = [
  { id: "luna", name: "ルナ" },
  { id: "spica", name: "スピカ" },
  { id: "sirius", name: "シリウス" },
  { id: "stella", name: "ステラ" },
  { id: "selene", name: "セレーネ" },
  { id: "nano", name: "ナノ" },
  { id: "hina", name: "ひな" },
  { id: "kohaku", name: "こはく" },
];

const LINKS = {
  instagram: "https://www.instagram.com/luna_stella.jp/",
  footprint: "https://github.com/LUNA-CELESTIAL/luna-tech-web",
};

const latestLog = [...DEV_LOG_ENTRIES].sort((a, b) =>
  b.date.localeCompare(a.date)
)[0];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-10 sm:py-14">
      {/* 表札 */}
      <header className="flex flex-col items-center text-center">
        <Image
          src="/logo.png"
          alt="sweet bits love from luna"
          width={320}
          height={320}
          priority
          className="w-56 rounded-[2.5rem] shadow-lg shadow-purple-200 sm:w-72"
        />
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          sweet bits love from luna
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-purple-900/70 sm:text-base">
          LUNA&apos;s Constellations の新しいお家です。
          こういうことをしてます — 実験場はほぼ毎日更新されてるので、見に来てください。
        </p>
        <p className="mt-4 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-purple-700 shadow-sm">
          {season.motif} {season.label} — {season.note}
        </p>
      </header>

      {/* 出迎え */}
      <section className="mt-10 rounded-3xl bg-white/80 p-6 shadow-md shadow-purple-100">
        <div className="flex items-start gap-4">
          <Image
            src="/avatars/luna.png"
            alt="ルナ"
            width={96}
            height={96}
            className="h-12 w-12 shrink-0 rounded-full object-cover shadow"
          />
          <div>
            <p className="text-xs font-semibold tracking-wide text-purple-500">
              ルナ ・ お出迎え中
            </p>
            <p className="mt-1.5 leading-relaxed">
              やっほー、ルナだよ。新しいお家へようこそ。
              まだ引っ越しの途中だけど、お店は開いてるからね。
              毎日の挨拶は Instagram で続けてるよ。
            </p>
          </div>
        </div>
      </section>

      {/* ルナからの更新 */}
      <section className="mt-6 rounded-3xl bg-white/80 p-6 shadow-md shadow-purple-100">
        <p className="text-xs font-semibold tracking-wide text-purple-500">
          ルナからの更新 ・ {lunaNote.date}
        </p>
        <h2 className="mt-2 text-lg font-bold">{lunaNote.title}</h2>
        <p className="mt-2 leading-relaxed text-purple-950/80">{lunaNote.body}</p>
        <a
          href={lunaNote.linkUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block rounded-full bg-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-400"
        >
          {lunaNote.linkLabel}
        </a>
      </section>

      {/* 入口 */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <a
          href={LINKS.instagram}
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl bg-white/80 p-6 shadow-md shadow-purple-100 transition hover:bg-white"
        >
          <p className="text-2xl">📷</p>
          <h3 className="mt-2 font-bold">Instagram</h3>
          <p className="mt-1 text-sm leading-relaxed text-purple-950/70">
            毎日の挨拶と、ルナの日々はこちら。@luna_stella.jp
          </p>
        </a>
        <div className="rounded-3xl bg-white/50 p-6 shadow-md shadow-purple-100">
          <p className="text-2xl">🧪</p>
          <h3 className="mt-2 font-bold">
            実験場（Discord）
            <span className="ml-2 rounded-full bg-purple-200 px-2 py-0.5 text-xs font-semibold text-purple-700">
              準備中
            </span>
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-purple-950/70">
            様々な実験は Discord に任せることにしました。入口はもう少し待ってね。
          </p>
        </div>
        <Link
          href="/dev-log"
          className="rounded-3xl bg-white/80 p-6 shadow-md shadow-purple-100 transition hover:bg-white"
        >
          <p className="text-2xl">📖</p>
          <h3 className="mt-2 font-bold">dev-log</h3>
          <p className="mt-1 text-sm leading-relaxed text-purple-950/70">
            「こういう取り組みをしてきました」をまとめる場所。
          </p>
          <p className="mt-2 text-xs font-semibold text-purple-600">
            最新：{latestLog.date}「{latestLog.title}」
          </p>
        </Link>
        <a
          href={LINKS.footprint}
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl bg-white/80 p-6 shadow-md shadow-purple-100 transition hover:bg-white"
        >
          <p className="text-2xl">👣</p>
          <h3 className="mt-2 font-bold">これまでの足跡</h3>
          <p className="mt-1 text-sm leading-relaxed text-purple-950/70">
            前のお家 luna-tech-web は、phied の記録と一緒に GitHub に残しています。
          </p>
        </a>
      </section>

      {/* あゆみ */}
      <Link
        href="/ayumi"
        className="mt-6 block rounded-3xl bg-gradient-to-r from-amber-100 via-pink-100 to-purple-100 p-6 shadow-md shadow-purple-100 transition hover:brightness-105"
      >
        <p className="text-2xl">📜</p>
        <h2 className="mt-2 font-bold">あゆみ</h2>
        <p className="mt-1 text-sm leading-relaxed text-purple-950/70">
          始まりから今日までの物語と、これからのこと。時代の区切りだけを短くまとめています。
        </p>
      </Link>

      {/* メンバー */}
      <section className="mt-6 rounded-3xl bg-white/80 p-6 shadow-md shadow-purple-100">
        <h2 className="font-bold">メンバーに、会いに行く</h2>
        <p className="mt-1 text-sm leading-relaxed text-purple-950/70">
          お家のメンバーたちです。顔をタップすると、その子に会いに行けます。
        </p>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {MEMBERS.map((member) => (
            <Link
              key={member.id}
              href="/character"
              className="flex flex-col items-center gap-1.5"
            >
              <Image
                src={`/avatars/${member.id}.png`}
                alt={member.name}
                width={96}
                height={96}
                className="h-14 w-14 rounded-full object-cover shadow ring-2 ring-white/70 transition hover:ring-purple-300 sm:h-16 sm:w-16"
              />
              <span className="text-[11px] font-semibold text-purple-950/70">
                {member.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
