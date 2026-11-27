# sweet bits love from luna

LUNA's Constellations の新しいお家です。luna-stella.jp の軽量版として作っています。

## このお家の考え方

- 器は **お家**、時間の置き方は **カレンダー**、中身は **その日のダイアリー**
- web の役割は、ハブ＋活動記録＋店先のフック。「お店は開いてますよ」の合図と、Instagram・Discord への入口
- 様々な実験は Discord に任せます。web は実験場ではありません
- 取り組みの軌跡は dev-log にまとめていきます。凄さは発表するものではなく、軌跡として残るもの
- 前のお家 [luna-tech-web](https://github.com/LUNA-CELESTIAL/luna-tech-web) は、phied の記録と一緒に「足跡」として GitHub に残しています

## ページ

- `/` トップ — 表札（ロゴ）、出迎え、ルナからの更新、季節、入口、メンバー
- `/character` メンバーに、会いに行く — 声をかけると返事と星が積もる
- `/company` 会社情報 — 合同会社 LUNA Stella の組織概要

## 更新のしかた

- ルナからの更新: `src/data/luna-note.json` の1ファイル
- 季節の一行: `src/data/season.json` の1ファイル
- メンバーの設定: `src/data/agents.ts`

## 技術

Next.js 16 / React 19 / TypeScript / Tailwind CSS 4

```bash
npm install
npm run dev    # 開発サーバー
npm run build  # ビルド確認
```

<!-- 本番デプロイの動作確認を兼ねた小さな更新 (2026-11-27) -->
