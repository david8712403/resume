import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-cyan-300/15 bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} David Chen. Built with Next.js + React.</p>
        <div className="flex items-center gap-4">
          <Link href="/projects" className="transition hover:text-cyan-200">
            專案總覽
          </Link>
          <a href="mailto:david87124@gmail.com" className="transition hover:text-cyan-200">
            david87124@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
