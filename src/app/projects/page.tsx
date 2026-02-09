import type { Metadata } from "next";
import { allProjects } from "@/content/projects";
import { ProjectCard } from "@/components/project/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export const metadata: Metadata = {
  title: "專案總覽 | David Chen",
  description: "建商 CRM × LINE 與 Ayako 虛擬人等精選專案案例。",
};

export default function ProjectsPage() {
  return (
    <div className="pb-20 pt-28 md:pb-24 md:pt-36">
      <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Project Index"
            title="專案總覽"
            description="聚焦企業 CRM 與 AI 虛擬人兩個代表案例，強調可追問的落地成果與整合能力。"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
