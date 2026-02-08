import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Skills"
            title="後端主力，跨棧協作"
            description="主力在 Node.js / MongoDB / API 架構，同時具備前端、AI 與 DevOps 協作能力。"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {profile.skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_20px_45px_-28px_rgba(34,211,238,0.65)]">
                <h3 className="text-lg font-semibold text-slate-100">{category.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-cyan-300/20 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
