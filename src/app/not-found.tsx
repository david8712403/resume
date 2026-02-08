import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-100">找不到這個頁面</h1>
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
        你要找的內容可能已移動或網址錯誤。可以回首頁或前往專案總覽。
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-medium text-slate-900">
          回首頁
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-cyan-300/35 px-5 py-2.5 text-sm font-medium text-cyan-100"
        >
          專案總覽
        </Link>
      </div>
    </main>
  );
}
