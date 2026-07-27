"use client";

import { Hero } from "./components/Hero";
import {
  AboutSection,
  CompaniesSection,
  ContactFooter,
  EducationSection,
  JourneySection,
  ProjectsSection,
  ToolkitSection,
} from "./components/PortfolioSections";
import { SiteHeader } from "./components/SiteHeader";
import { usePortfolioInteractions } from "./hooks/usePortfolioInteractions";

export function PortfolioPage() {
  const interactions = usePortfolioInteractions();

  return (
    <main>
      <SiteHeader
        menuOpen={interactions.menuOpen}
        onToggleMenu={interactions.toggleMenu}
        onCloseMenu={interactions.closeMenu}
      />
      <Hero role={interactions.role} />
      <AboutSection />
      <ProjectsSection />
      <CompaniesSection />
      <JourneySection />
      <ToolkitSection />
      <EducationSection />
      <ContactFooter />
    </main>
  );
}
