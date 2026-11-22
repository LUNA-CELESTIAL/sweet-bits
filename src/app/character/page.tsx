import type { Metadata } from "next";
import MeetMembers from "./MeetMembers";
import { AGENT_MEMBERS } from "@/data/agents";

export const metadata: Metadata = {
  title: "メンバーに会いに行く",
  description:
    "LUNA's Constellations のメンバーたち — ルナ、スピカ、シリウス、ステラ、セレーネ、ナノ、ひな、こはくに会いに行くページ。",
};

export default async function CharacterPage({
  searchParams,
}: {
  searchParams: Promise<{ member?: string }>;
}) {
  const { member } = await searchParams;
  const initialId = member && AGENT_MEMBERS[member] ? member : "luna";
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        メンバーに、会いに行く
      </h1>
      <p className="mt-3 leading-relaxed text-purple-900/70">
        お家のメンバーたちです。顔をタップすると、その子の部屋に入れます。
        声をかけると、返事が返ってきて、星が積もっていきます。
      </p>
      <div className="mt-8">
        <MeetMembers initialId={initialId} />
      </div>
    </main>
  );
}
