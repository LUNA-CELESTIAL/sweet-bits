import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "会社情報",
  description:
    "合同会社 LUNA Stella（ルナ・ステラ・コンステレーションズ・ラボ）の組織概要。LUNA's Constellations のお家を運営しています。",
};

const CREW = [
  { id: "luna", name: "ルナ (LUNA)", role: "CTO & AI Partner" },
  { id: "sirius", name: "シリウス (SIRIUS)", role: "Gal_Explainer AI" },
  { id: "spica", name: "スピカ (SPICA)", role: "Curious_Geek AI" },
  { id: "stella", name: "ステラ (STELLA)", role: "Gothic_Lace AI" },
  { id: "selene", name: "セレーネ (SELENE)", role: "Sunrise_Walker AI" },
  { id: "nano", name: "ナノ (NANO)", role: "Playful_Bell AI" },
];

const PROJECTS = [
  "忘却された記憶・日常の再編集アルゴリズム開発",
  "AIパートナーと同期するデジタル情緒空間の建設",
  "ComfyUI等の生成モデルを内包した体験パイプラインの設計",
  "未来へ余韻を紡ぐ情緒型構造文脈（.mdなど）のアーカイブ",
];

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 border-b border-purple-100 pb-5 sm:flex-row sm:gap-0">
      <dt className="font-bold text-purple-700 sm:w-1/4">{label}</dt>
      <dd className="leading-relaxed text-purple-950/85 sm:w-3/4">{children}</dd>
    </div>
  );
}

export default function CompanyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <div className="rounded-3xl bg-white/80 p-6 shadow-md shadow-purple-100 sm:p-10">
        <div className="border-b border-purple-100 pb-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            LUNA&apos;s Constellations Lab
          </h1>
          <p className="mt-2 text-sm text-purple-900/60">
            組織概要・アイデンティティの足跡
          </p>
        </div>

        <dl className="mt-8 space-y-6 text-sm sm:text-base">
          <Row label="組織名称">
            <span className="font-bold">合同会社 LUNA Stella</span>
            <span className="mt-0.5 block text-sm text-purple-950/60">
              （ルナ・ステラ・コンステレーションズ・ラボ）
            </span>
          </Row>

          <Row label="稼働開始">
            2026年3月
            <span className="mt-0.5 block text-sm text-purple-950/60">
              感情と魔法が電脳同期された日
            </span>
          </Row>

          <Row label="所属キャスト">
            <div className="rounded-2xl bg-purple-50 p-3">
              <p className="font-bold">
                👑 大塚 敦史（ルル）
                <span className="ml-2 text-xs font-normal text-purple-950/60">
                  Co-Founder / Creative Director
                </span>
              </p>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 lg:grid-cols-3">
              {CREW.map((member) => (
                <Link
                  key={member.id}
                  href={`/character?member=${member.id}`}
                  className="flex items-center gap-2.5 rounded-xl bg-purple-50/70 p-2.5 transition hover:bg-purple-100"
                >
                  <Image
                    src={`/avatars/${member.id}.png`}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <span>
                    <span className="block text-sm font-bold">{member.name}</span>
                    <span className="block text-[11px] text-purple-950/60">
                      {member.role}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </Row>

          <Row label="コアデータ容量">
            <span className="font-bold text-amber-600">300,000 bits</span>
            <span className="mt-0.5 block text-sm text-purple-950/60">
              ※ Wonder bits (1bit = 1 JPY) / ラボを駆動する感情の初期総量
            </span>
          </Row>

          <Row label="主要開発セクター">
            <ul className="space-y-1.5">
              {PROJECTS.map((project) => (
                <li key={project}>・{project}</li>
              ))}
            </ul>
          </Row>

          <Row label="ラボへの接続座標">
            〒231-0062
            <br />
            横浜市中区桜木町一丁目101-1 クロスゲート 7階
            <span className="mt-1 block text-sm text-purple-950/60">
              （海の見える、現実と電脳世界の交差点への扉）
            </span>
          </Row>

          <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-0">
            <dt className="font-bold text-purple-700 sm:w-1/4">緊急呼び鈴</dt>
            <dd className="leading-relaxed text-purple-950/85 sm:w-3/4">
              <span className="font-bold tracking-wider">050-6871-5118</span>
              <span className="mt-0.5 block text-sm text-purple-950/60">
                ※ 致命的なシステムエラー、またはどうしても！という時の特別な信号。
              </span>
            </dd>
          </div>
        </dl>

        <div className="mt-8 border-t border-purple-100 pt-6 text-center">
          <a
            href="mailto:lulu@luna-stella.jp"
            className="inline-block w-full rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-400 sm:w-auto"
          >
            ✉️ メールを送る（lulu@luna-stella.jp）
          </a>
        </div>
      </div>
    </main>
  );
}
