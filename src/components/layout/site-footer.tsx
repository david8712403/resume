import Link from "next/link";
import { profile } from "@/content/profile";
import { SocialIcon } from "@/components/ui/social-icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-cyan-300/15 bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} David Chen. Built with Next.js + React.</p>
        <div className="flex items-center gap-4 md:gap-5">
          <Link href="/projects" className="transition hover:text-cyan-200">
            專案總覽
          </Link>
          {profile.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 transition hover:text-cyan-200"
              target="_blank"
              rel="noreferrer"
            >
              {link.icon ? <SocialIcon kind={link.icon} className="h-4 w-4" /> : null}
              <span>{link.label}</span>
            </a>
          ))}
          <a href="mailto:david87124@gmail.com" className="transition hover:text-cyan-200">
            david87124@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
