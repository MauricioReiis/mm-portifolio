import { Hero } from "./components/Hero";
import {
  AboutSection,
  ContactFooter,
  ExperienceSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  TrustSection,
} from "./components/PortfolioSections";
import { ScrollAvatar } from "./components/ScrollAvatar";
import { SiteHeader } from "./components/SiteHeader";

export function PortfolioPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <ScrollAvatar />
      <main id="conteudo">
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <TrustSection />
      </main>
      <ContactFooter />
    </>
  );
}
