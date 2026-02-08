import { allProjects } from "@/content/projects";
import { ProjectCard } from "@/components/project/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { CtaLink } from "@/components/ui/cta-link";

export function FeaturedProjectsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="Projects"
              title="三大實戰案例"
              description="聚焦商業可用性、系統整合與可量化成果。"
            />
            <CtaLink href="/projects" variant="ghost">
              進入專案總覽
            </CtaLink>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
