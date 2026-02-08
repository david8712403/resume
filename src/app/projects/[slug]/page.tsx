import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectOrder } from "@/content/projects";
import { ProjectDetail } from "@/components/project/project-detail";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "專案不存在 | David Chen",
    };
  }

  return {
    title: `${project.title} | David Chen`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | David Chen`,
      description: project.tagline,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: `${project.title} 專案封面`,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
