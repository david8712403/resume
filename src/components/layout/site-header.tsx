"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "關於我", href: "/#about" },
  { label: "技能", href: "/#skills" },
  { label: "經歷", href: "/#experience" },
  { label: "專案", href: "/projects" },
  { label: "聯絡", href: "/#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-cyan-400/20 bg-slate-950/90 shadow-[0_10px_35px_-20px_rgba(34,211,238,0.75)] backdrop-blur"
          : "border-transparent bg-slate-950/50"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="group inline-flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-sm font-bold text-cyan-100">
            DC
          </span>
          <span className="text-sm tracking-[0.2em] text-slate-200 transition group-hover:text-cyan-200 md:text-base">
            DAVID CHEN
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-cyan-300/30 px-3 py-1.5 text-sm text-cyan-100 transition hover:border-cyan-200/70 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="切換導覽選單"
        >
          選單
        </button>
      </div>

      {menuOpen ? (
        <nav className="border-t border-cyan-400/20 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-transparent px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/25 hover:bg-slate-900/80"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
