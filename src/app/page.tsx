import { Header } from "@/components/ui/header";
import { HeroRevised } from "@/components/sections/hero-revised";
import { AboutDark } from "@/components/sections/about-dark";
import { ExperienceDark } from "@/components/sections/experience-dark";
import { ProjectsDark } from "@/components/sections/projects-dark";
import { SkillsDark } from "@/components/sections/skills-dark";
import { EducationDark } from "@/components/sections/education-dark";
import { ContactDark } from "@/components/sections/contact-dark";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg">
        <HeroRevised />
        <AboutDark />
        <ExperienceDark />
        <SkillsDark />
        <ProjectsDark />
        <EducationDark />
        <ContactDark />

        {/* Footer */}
        <footer className="bg-bg border-t border-border py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Triano Nurhikmat. All rights reserved.
            </p>
            <p className="text-xs text-muted/60 mt-2">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
