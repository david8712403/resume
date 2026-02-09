import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { CtaLink } from "@/components/ui/cta-link";

export function PinnedProjectBoard() {
  const pinnedExperience = profile.coreExperience[0];

  if (!pinnedExperience) {
    return null;
  }

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Pinned Project"
            title="置頂專案經驗"
            description="這是我認為最能代表商業價值與系統整合能力的專案。"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <article className="relative mt-9 overflow-hidden rounded-3xl border border-cyan-300/30 bg-slate-900/65 p-7 shadow-[0_35px_90px_-45px_rgba(34,211,238,0.78)] md:p-9">
            <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-14 -bottom-14 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Top Case</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
                  {pinnedExperience.role}
                </h3>
                <p className="mt-2 text-base text-cyan-200">{pinnedExperience.company}</p>
                <p className="mt-2 text-sm text-slate-300">{pinnedExperience.location}</p>
              </div>

              <div className="rounded-xl border border-cyan-300/20 bg-slate-950/55 px-4 py-3 text-sm text-slate-200 md:text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">期間</p>
                <p className="mt-1 font-medium">{pinnedExperience.period}</p>
              </div>
            </div>

            <ul className="relative z-10 mt-7 space-y-3 text-sm leading-8 text-slate-100 md:text-base">
              {pinnedExperience.bullets.map((bullet) => (
                <li key={bullet} className="rounded-xl border border-slate-800 bg-slate-950/58 px-4 py-3">
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="relative z-10 mt-7 flex flex-wrap gap-2">
              {pinnedExperience.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-cyan-300/25 bg-cyan-400/12 px-2.5 py-1 text-xs text-cyan-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-8">
              <CtaLink href="/projects/buildcare" variant="ghost">
                查看建商 CRM × LINE 完整案例
              </CtaLink>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
