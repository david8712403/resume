import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { SocialIcon } from "@/components/ui/social-icon";

export function AboutSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="定位"
            title="把商業流程做成可擴充系統"
            description="從需求訪談、資料模型、API 設計到上線迭代，重點是把複雜流程變成可維護、可追蹤、可交付的產品。"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="space-y-5 md:col-span-2">
            {profile.summary.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.1}>
                <p className="rounded-2xl border border-slate-800 bg-slate-900/55 p-5 text-sm leading-8 text-slate-200 md:text-base">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <aside className="rounded-2xl border border-cyan-300/20 bg-slate-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">公開連結</p>
              <ul className="mt-5 space-y-3 text-sm">
                {profile.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex w-full items-center justify-between rounded-lg border border-cyan-300/15 px-3 py-2 text-slate-200 transition hover:border-cyan-200/50 hover:text-cyan-100"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span className="inline-flex items-center gap-2">
                        {link.icon ? <SocialIcon kind={link.icon} className="h-4 w-4 text-cyan-200" /> : null}
                        {link.label}
                      </span>
                      <span className="text-xs text-cyan-300">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
