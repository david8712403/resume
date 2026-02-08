export type ProjectSlug = "buildcare" | "ayako" | "cycle-path";

export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
  note?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface LinkItem {
  label: string;
  href: string;
  placeholder?: boolean;
}

export interface Profile {
  name: string;
  englishName: string;
  title: string;
  location: string;
  email: string;
  summary: string[];
  highlights: ProjectMetric[];
  skillCategories: SkillCategory[];
  coreExperience: ExperienceItem[];
  earlyExperience: ExperienceItem[];
  education: EducationItem[];
  desiredRoles: string[];
  links: LinkItem[];
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectArchitecture {
  title: string;
  details: string[];
}

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption: string;
  ratioClass?: string;
}

export interface Project {
  slug: ProjectSlug;
  title: string;
  subtitle: string;
  tagline: string;
  period: string;
  role: string;
  theme: string;
  summary: string;
  motivation?: string;
  collaborationHighlight?: string;
  challenge: string;
  solution: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  architecture: ProjectArchitecture[];
  features: ProjectFeature[];
  achievements: string[];
  gallery: ProjectGalleryItem[];
  links: LinkItem[];
  nextSlug: ProjectSlug;
  coverImage: string;
}
