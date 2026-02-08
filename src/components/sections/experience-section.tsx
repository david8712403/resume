import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Experience"
            title="從效能優化到產品落地"
            description="聚焦可量化成果與實際上線場景，保留完整職涯脈絡。"
          />
        </Reveal>

        <div className="mt-10 space-y-5">
          {profile.coreExperience.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.08}>
              <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">{experience.role}</h3>
                    <p className="mt-1 text-sm text-cyan-200">{experience.company}</p>
                    <p className="mt-1 text-xs text-slate-400">{experience.location}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-300">{experience.period}</p>
                </div>

                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-5">
                      <span className="absolute top-3 left-0 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-slate-800/90 bg-slate-950/60 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">早期經歷</p>
            {profile.earlyExperience.map((experience) => (
              <div key={experience.company} className="mt-4 rounded-xl border border-slate-800 bg-slate-900/55 p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-base font-semibold text-slate-100">
                    {experience.role}｜{experience.company}
                  </h3>
                  <p className="text-sm text-slate-300">{experience.period}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {profile.education.map((education) => (
              <div key={education.school} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-sm font-medium text-slate-100">{education.school}</p>
                <p className="mt-1 text-sm text-slate-300">{education.degree}</p>
                <p className="mt-1 text-xs text-slate-400">{education.period}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
