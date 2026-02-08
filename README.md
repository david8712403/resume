# David Chen Resume Site

深色科技感多頁履歷網站，使用 Next.js + React + Tailwind + Framer Motion。

## 開發環境

- Node.js 20+
- pnpm 10+

## 啟動方式

```bash
pnpm install
pnpm dev
```

瀏覽 `http://localhost:3000`。

## 可用指令

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## 路由

- `/` 首頁（定位、技能、經歷、精選專案、聯絡）
- `/projects` 專案總覽
- `/projects/buildcare` BuildCare 案例
- `/projects/ayako` Ayako 案例
- `/projects/cycle-path` Cycle Path 案例

## 內容維護

- 履歷資料：`/Users/davidchen/backend-dev/davidchen-resume/src/content/profile.ts`
- 專案資料：`/Users/davidchen/backend-dev/davidchen-resume/src/content/projects.ts`
- 型別定義：`/Users/davidchen/backend-dev/davidchen-resume/src/types/resume.ts`

網站內容由上述資料檔驅動，更新文字不需要改版型元件。

## 素材替換規則

目前所有專案圖皆為 placeholder。後續更新正式圖片時，請「覆蓋同檔名」即可，不需改程式碼。

### BuildCare

- `public/assets/buildcare/admin-overview.svg`
- `public/assets/buildcare/admin-progress-list.svg`
- `public/assets/buildcare/liff-progress-mobile.svg`
- `public/assets/buildcare/liff-progress-detail.svg`
- `public/assets/buildcare/liff-progress-feed.svg`
- `public/assets/buildcare/admin-repair.svg`
- `public/assets/buildcare/architecture-flow.svg`

### Ayako

- `public/assets/ayako/ayako-hero.svg`
- `public/assets/ayako/ayako-dialogue.svg`
- `public/assets/ayako/ayako-emotion.svg`
- `public/assets/ayako/ayako-streaming.svg`
- `public/assets/ayako/ayako-awards.svg`

### Cycle Path

- `public/assets/cycle-path/cycle-hero.svg`
- `public/assets/cycle-path/cycle-route-map.svg`
- `public/assets/cycle-path/cycle-challenge.svg`
- `public/assets/cycle-path/cycle-event.svg`
- `public/assets/cycle-path/cycle-stats.svg`

### OG 圖

- `public/og-cover.svg`

## 素材建議規格

- 一般畫面：`1600 x 1000`（16:10）
- 封面圖：`1600 x 900`（16:9）
- 建議格式：`webp` / `jpg`（照片）與 `svg`（流程圖）
- 單檔建議小於 `500KB`

## 設計與動畫策略

- 深色主題 + 藍青色光暈 + 細網格背景
- 首屏分段 reveal 與流動光暈
- 滾動進場動畫採 `whileInView`
- 支援 `prefers-reduced-motion`
