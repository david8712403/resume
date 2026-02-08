import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import type { Project } from "@/types/resume";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const nextProject = projects[project.nextSlug];

  return (
    <div className="pb-20 pt-28 md:pb-24 md:pt-36">
      <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{project.theme}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-100 md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-cyan-200">{project.subtitle}</p>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-200 md:text-base">{project.tagline}</p>

          <div className="mt-8 grid gap-3 text-sm md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400">期間</p>
              <p className="mt-1 text-slate-100">{project.period}</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400">角色</p>
              <p className="mt-1 text-slate-100">{project.role}</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400">定位</p>
              <p className="mt-1 text-slate-100">{project.theme}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-cyan-300/20">
            <Image
              src={project.coverImage}
              alt={`${project.title} 專案封面`}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 1200px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-14 w-full max-w-6xl space-y-14 px-4 md:px-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="text-xl font-semibold text-slate-100">專案背景</h2>
              <p className="mt-4 text-sm leading-8 text-slate-200">{project.summary}</p>
              {project.motivation ? (
                <p className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-500/10 p-4 text-sm leading-7 text-cyan-100">
                  {project.motivation}
                </p>
              ) : null}
              {project.collaborationHighlight ? (
                <p className="mt-4 text-sm leading-7 text-cyan-200">{project.collaborationHighlight}</p>
              ) : null}
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="text-xl font-semibold text-slate-100">核心挑戰</h2>
              <p className="mt-4 text-sm leading-8 text-slate-200">{project.challenge}</p>
              <ul className="mt-5 space-y-3">
                {project.solution.map((item) => (
                  <li key={item} className="rounded-lg border border-slate-800 bg-slate-950/70 p-3 text-sm leading-7 text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Reveal>

        <Reveal>
          <SectionTitle
            eyebrow="Project Metrics"
            title="成果指標"
            description="聚焦可觀測、可驗證的系統價值。"
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {project.metrics.map((metric) => (
              <article key={metric.label} className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{metric.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-cyan-100">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-300">{metric.description}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <SectionTitle
            eyebrow="Architecture"
            title="技術架構"
            description="以模組化思維拆分資料流、角色流與互動流。"
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {project.architecture.map((block) => (
              <article key={block.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-base font-semibold text-slate-100">{block.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                  {block.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <SectionTitle eyebrow="Features" title="關鍵功能" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-base font-semibold text-slate-100">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <SectionTitle eyebrow="Gallery" title="畫面展示" description="目前使用暫存示意圖，後續可同檔名替換正式素材。" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image) => (
              <figure
                key={image.src}
                className={`group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 ${image.ratioClass ?? ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <figcaption className="border-t border-slate-800 px-4 py-3 text-xs leading-6 text-slate-300">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <SectionTitle eyebrow="Outcome" title="專案亮點" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <ul className="space-y-3 text-sm leading-7 text-slate-200">
                {project.achievements.map((achievement) => (
                  <li key={achievement} className="rounded-lg border border-slate-800 bg-slate-950/65 p-3">
                    {achievement}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-base font-semibold text-slate-100">技術棧</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((stack) => (
                  <span key={stack} className="rounded-md border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-100">
                    {stack}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 text-base font-semibold text-slate-100">外部連結</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex items-center text-cyan-200 transition hover:text-cyan-100"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Next Case</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-100">{nextProject.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{nextProject.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-200"
              >
                查看下一個專案
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full border border-cyan-300/35 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/70"
              >
                回到專案總覽
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
