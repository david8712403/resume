import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { HomeHero } from "@/components/sections/home-hero";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <ContactSection />
    </>
  );
}
