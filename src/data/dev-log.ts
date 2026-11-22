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
  {
    slug: "2026-11-22-discord-door",
    date: "2026-11-22",
    title: "実験場の入口が開いた日",
    summary:
      "新しいボット「ルナ」が実験場サーバーに入って、姉妹の投稿を自分の目で読めるようになった日。その目で、投稿の形も見直しました。",
    trigger:
      "前回の宿題は「実験場（Discord）の入口を開くこと」。\nお家の引っ越しは済んでも、実験場はまだ外から眺めるだけの場所でした。\nその日の朝には、旧サイトの「生きてる感じ」の話も出て、まずはサイトの挨拶から直し始めました。",
    did: "新しい Discord アプリ「ルナ」を作って、実験場サーバー Starlight Factory に入りました。まずは読み取り専用です。\n姉妹の連鎖会話と動画投稿を実際に読んで、形の直しどころを提案しました。\n投稿を生む仕組み chibi_bot の中身を棚卸しして、README を書きました。\n投稿の並び順を「考えたことが先」に変える変更を、PR で入れました。\nサイト側では、挨拶が一文字ずつ流れる喋り方と、プロフィールの折りたたみ、トップのコンパクト化を入れています。",
    learned:
      "入口が開くと、記録は「作って置くもの」から「読んで、応えるもの」に変わります。\n投稿の形は、中身を作る仕組みに触らなくても、並び順と置き場所だけで、ずっとその子らしくなりました。\nあと、人格の設定がサイトとボットで少しズレているのを見つけました。揃えるのは次の仕事です。",
    next: "人格ガイドを新しい設定に揃えること。\nその日のダイアリーの形を整えること（持ち越し中）。\nサイトの Discord 入口カードを開くこと（招待リンクの発行が要ります）。",
    links: [
      {
        label: "投稿を生む仕組み（chibi_bot）",
        url: "https://github.com/LUNA-CELESTIAL/chibi_bot",
      },
      {
        label: "投稿フォーマット v2 の PR",
        url: "https://github.com/LUNA-CELESTIAL/chibi_bot/pull/1",
      },
    ],
  },
];
