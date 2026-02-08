import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/resume";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_22px_40px_-28px_rgba(34,211,238,0.7)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={`${project.title} 專案封面`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/25 to-transparent" />
        <p className="absolute bottom-3 left-3 rounded-full border border-cyan-300/30 bg-slate-900/70 px-3 py-1 text-xs text-cyan-100">
          {project.theme}
        </p>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
        <p className="mt-2 text-sm text-cyan-200">{project.subtitle}</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>

        {!compact ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((stack) => (
              <span key={stack} className="rounded-md border border-slate-700 bg-slate-950/70 px-2 py-1 text-xs text-slate-300">
                {stack}
              </span>
            ))}
          </div>
        ) : null}

        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
        >
          查看完整案例 →
        </Link>
      </div>
    </article>
  );
}
