"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AGENT_MEMBERS, type AgentMember } from "@/data/agents";

const ORDER = ["luna", "spica", "sirius", "stella", "selene", "nano", "hina", "kohaku"];

interface Session {
  line: string;
  log: string[];
  stars: number;
}

function initialSession(member: AgentMember): Session {
  return { line: member.welcomeMessages[0], log: [], stars: 0 };
}

// 吹き出しの文字を一文字ずつ出す（旧サイトのストリーミング表示の思想を、会話の場所へ移植）
function SpeechBubble({ text }: { text: string }) {
  const chars = Array.from(text);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(chars.length);
      return;
    }
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= chars.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const typing = count < chars.length;
  return (
    <div className="mt-5 rounded-2xl bg-purple-50 p-4 leading-relaxed" aria-label={text}>
      {chars.slice(0, count).join("")}
      {typing && (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] animate-pulse bg-purple-300"
        />
      )}
    </div>
  );
}

// 折りたたみ（旧サイトの「重さを見せない優しさ」を、プロフィールの場所へ）
function Fold({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <details className="group border-t border-purple-50 py-3">
      <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-purple-700 [&::-webkit-details-marker]:hidden">
        {label}
        <span className="text-purple-300 transition-transform duration-200 group-open:rotate-45">
          ＋
        </span>
      </summary>
      <div className="mt-2">{children}</div>
    </details>
  );
}

export default function MeetMembers({ initialId }: { initialId: string }) {
  const [selectedId, setSelectedId] = useState(initialId);
  const [sessions, setSessions] = useState<Record<string, Session>>({});
  const [tab, setTab] = useState<"log" | "profile">("profile");
  const [utterance, setUtterance] = useState(0);

  const member = AGENT_MEMBERS[selectedId];
  const session = sessions[selectedId] ?? initialSession(member);

  const talk = () => {
    const pool = [...member.welcomeMessages, member.lastPulse].filter(
      (line) => line !== session.line
    );
    const next = pool[Math.floor(Math.random() * pool.length)] ?? session.line;
    setSessions((prev) => ({
      ...prev,
      [selectedId]: {
        line: next,
        log: [next, ...session.log].slice(0, 20),
        stars: session.stars + 1,
      },
    }));
    setTab("log");
    setUtterance((u) => u + 1);
  };

  const select = (id: string) => {
    setSelectedId(id);
    setTab("profile");
    setUtterance((u) => u + 1);
  };

  return (
    <div>
      {/* メンバーを選ぶ */}
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-8 sm:gap-3">
        {ORDER.map((id) => {
          const m = AGENT_MEMBERS[id];
          const active = id === selectedId;
          return (
            <button
              key={id}
              onClick={() => select(id)}
              className="flex flex-col items-center gap-1"
            >
              <Image
                src={m.avatar}
                alt={m.name}
                width={96}
                height={96}
                className={`h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16 ${
                  active ? "ring-4 ring-purple-400" : "ring-2 ring-white/70"
                }`}
              />
              <span
                className={`text-[11px] font-semibold ${
                  active ? "text-purple-700" : "text-purple-950/60"
                }`}
              >
                {m.name.split("（")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* 会いに行くカード */}
      <section className="mt-6 rounded-3xl bg-white/80 p-5 shadow-md shadow-purple-100 sm:p-6">
        <div className="flex items-center gap-4">
          <Image
            src={member.avatar}
            alt={member.name}
            width={160}
            height={160}
            className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
          />
          <div>
            <h2 className="text-xl font-bold">
              {member.name} <span className="text-base">{member.statusSymbol}</span>
            </h2>
            <p className="text-sm text-purple-700">{member.role}</p>
            <p className="text-xs text-purple-950/50">{member.username}</p>
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-purple-950/80">{member.bio}</p>

        {/* この子のストーリー */}
        <div className="mt-4 rounded-2xl bg-purple-50/80 p-4">
          <p className="text-xs font-semibold tracking-wide text-purple-500">
            ストーリー
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-purple-950/80">
            {member.story}
          </p>
        </div>

        {/* 挨拶の吹き出し */}
        <SpeechBubble
          key={`${selectedId}:${utterance}`}
          text={session.line}
        />
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={talk}
            className="rounded-full bg-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-400 active:scale-95"
          >
            声をかける
          </button>
          <span className="text-sm text-purple-950/60">
            {session.stars === 0
              ? "まだ星はないよ"
              : "⭐".repeat(Math.min(session.stars, 12)) +
                (session.stars > 12 ? ` ×${session.stars}` : "")}
          </span>
        </div>

        {/* タブ */}
        <div className="mt-6 flex gap-2">
          <button
            onClick={() => setTab("profile")}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              tab === "profile"
                ? "bg-purple-500 text-white"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            プロフィール
          </button>
          <button
            onClick={() => setTab("log")}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              tab === "log"
                ? "bg-purple-500 text-white"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            おはなしログ
          </button>
        </div>

        {tab === "profile" ? (
          <div className="mt-4 text-sm leading-relaxed">
            <div className="pb-1">
              <p className="font-bold text-purple-700">性格・スタンス</p>
              <p className="mt-1 text-purple-950/80">{member.personality}</p>
            </div>
            <Fold label="好きなこと・関心事">
              <div className="flex flex-wrap gap-1.5">
                {member.interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-purple-100 px-2.5 py-1 text-xs text-purple-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Fold>
            <Fold label="大切にしている考え方">
              <p className="text-purple-950/80">{member.motto}</p>
            </Fold>
            <Fold label="活動への想い">
              <p className="text-purple-950/80">{member.motivation}</p>
            </Fold>
            <Fold label="最新のつぶやき">
              <p className="text-purple-950/80">{member.lastPulse}</p>
            </Fold>
            <div className="mt-3 rounded-2xl bg-amber-50 p-4">
              <p className="font-bold text-amber-700">思い出の約束</p>
              <p className="mt-1 text-purple-950/80">{member.promise}</p>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-2">
            {session.log.length === 0 ? (
              <p className="text-sm text-purple-950/60">
                まだおはなししてないよ。「声をかける」を押してみてね。
              </p>
            ) : (
              session.log.map((line, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-purple-50 px-4 py-2.5 text-sm leading-relaxed"
                >
                  {line}
                </div>
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
}
