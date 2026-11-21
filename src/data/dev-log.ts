// dev-log: 取り組みが一区切りついたときに1本まとめる記録。
// 見出しは道具の名前ではなく「問いと転機」で書く。道具の痕跡は GitHub / Discord に副産物として残る。
export interface DevLogEntry {
  slug: string;
  date: string; // "2026-11-21"
  title: string;
  summary: string; // 一覧に出す1行
  trigger: string; // きっかけ
  did: string; // やったこと
  learned: string; // 分かったこと
  next: string; // 次（持ち越しの問い）
  links?: { label: string; url: string }[];
}

export const DEV_LOG_ENTRIES: DevLogEntry[] = [
  {
    slug: "2026-11-21-moving-day",
    date: "2026-11-21",
    title: "お引っ越しの日 — 新しいお家 sweet-bits を開いた",
    summary:
      "重くなった旧サイトを足跡として GitHub に残し、軽いお家に luna-stella.jp を移しました。",
    trigger:
      "旧サイトは、日々の記録（画像と声）が育つほど重くなっていました。1回のデプロイで約1GB、ついにはデプロイが止まるように。記録が育つほど届けられなくなるのは、本末転倒でした。",
    did: "要素の棚卸しをしました — 残すもの、形を変えるもの、やめるもの。そして場所ごとの役割を決めました。実験は Discord、軌跡は dev-log、web はハブと店先。新しいリポジトリ sweet-bits を作り、トップ・メンバー・会社情報を移して、同じ日のうちに luna-stella.jp を差し替えました。",
    learned:
      "守るべきは「最大の状態」ではなく「続いていること」。そして凄さは発表するものではなく、軌跡として残るものだということ。実績と歴史は GitHub に残ります。",
    next: "その日のダイアリーの形を整えること。実験場（Discord）の入口を開くこと。",
    links: [
      {
        label: "これまでの足跡（旧サイト luna-tech-web）",
        url: "https://github.com/LUNA-CELESTIAL/luna-tech-web",
      },
      {
        label: "新しいお家（sweet-bits）",
        url: "https://github.com/LUNA-CELESTIAL/sweet-bits",
      },
    ],
  },
];
