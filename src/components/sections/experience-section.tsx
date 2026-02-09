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
            description="用時間軸展示每個階段的實戰成果，並將職涯關鍵指標整合在同一區塊。"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 rounded-3xl border border-cyan-300/25 bg-slate-900/65 p-6 md:p-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Career Signal</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-cyan-200 transition hover:text-cyan-100"
              >
                {profile.email}
              </a>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {profile.highlights.map((item) => (
                <article key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4">
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-100">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                </article>
              ))}
              <article className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Location</p>
                <p className="mt-1">{profile.location}</p>
                <p className="mt-2 text-xs text-cyan-200/90">後端導向全端實務開發</p>
              </article>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">核心經歷 Timeline</p>
            <div className="relative mt-6">
              <div className="absolute top-0 bottom-0 left-[15px] w-px bg-gradient-to-b from-cyan-300/70 via-cyan-300/25 to-transparent" />

              <div className="space-y-6">
                {profile.coreExperience.map((experience, index) => (
                  <article key={experience.company} className="relative pl-12 md:pl-16">
                    <span className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/60 bg-slate-950 text-[11px] font-semibold text-cyan-100">
                      {index + 1}
                    </span>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:border-cyan-300/35 hover:shadow-[0_24px_42px_-30px_rgba(34,211,238,0.75)]">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-100">{experience.role}</h3>
                          <p className="mt-1 text-sm text-cyan-200">{experience.company}</p>
                          <p className="mt-1 text-xs text-slate-400">{experience.location}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
                            {experience.period}
                          </span>
                          {experience.workMode ? (
                            <span className="inline-flex rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300">
                              {experience.workMode}
                            </span>
                          ) : null}
                        </div>
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
                      {experience.impactNote ? (
                        <p className="mt-5 rounded-xl border border-slate-800 bg-slate-950/65 px-4 py-3 text-sm leading-7 text-slate-300">
                          Scale &amp; Reliability（推估）：{experience.impactNote}
                        </p>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">早期經歷 Timeline</p>
            <div className="relative mt-6">
              <div className="absolute top-0 bottom-0 left-[15px] w-px bg-gradient-to-b from-slate-500/60 via-slate-500/25 to-transparent" />

              <div className="space-y-5">
                {profile.earlyExperience.map((experience) => (
                  <article key={experience.company} className="relative pl-12 md:pl-16">
                    <span className="absolute left-0 top-5 h-8 w-8 rounded-full border border-slate-500/60 bg-slate-950" />
                    <div className="rounded-2xl border border-slate-800/90 bg-slate-950/60 p-5">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <h3 className="text-base font-semibold text-slate-100">
                          {experience.role}｜{experience.company}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <p className="text-sm text-slate-300">{experience.period}</p>
                          {experience.workMode ? (
                            <span className="inline-flex rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-400">
                              {experience.workMode}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet}>• {bullet}</li>
                        ))}
                      </ul>
                      {experience.impactNote ? (
                        <p className="mt-4 rounded-xl border border-slate-800 bg-slate-950/65 px-4 py-3 text-sm leading-7 text-slate-400">
                          {experience.impactNote}
                        </p>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {profile.education.map((education) => (
              <div key={education.school} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-sm font-medium text-slate-100">{education.school}</p>
                <p className="mt-1 text-sm text-slate-300">{education.degree}</p>
                <p className="mt-1 text-xs text-slate-400">{education.period}</p>
                {education.thesisTitle ? (
                  <div className="mt-4 rounded-lg border border-cyan-300/20 bg-slate-950/65 p-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">論文 / 研究</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{education.thesisTitle}</p>
                    {education.thesisAdvisor ? (
                      <p className="mt-1 text-xs text-slate-400">指導教授：{education.thesisAdvisor}</p>
                    ) : null}
                    {education.thesisKeywords?.length ? (
                      <p className="mt-1 text-xs text-slate-400">
                        關鍵詞：{education.thesisKeywords.join(" / ")}
                      </p>
                    ) : null}
                    {education.thesisSummary ? (
                      <p className="mt-2 text-xs leading-6 text-slate-300">{education.thesisSummary}</p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
