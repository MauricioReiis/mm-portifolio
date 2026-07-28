import { PortfolioPage } from "@/src/features/portfolio/PortfolioPage";
import { projects, skills } from "@/src/features/portfolio/content";
import { siteConfig } from "@/src/shared/config/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#mauricio-reis`,
      name: "Maurício Reis",
      url: siteConfig.url,
      image: `${siteConfig.url}/mauricio-reis.jpg`,
      jobTitle: "Desenvolvedor Frontend Sênior e Tech Lead",
      description: siteConfig.description,
      email: `mailto:${siteConfig.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Juiz de Fora",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      sameAs: [siteConfig.linkedin, siteConfig.github],
      knowsAbout: skills,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "UniAcademia",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.title,
      inLanguage: "pt-BR",
      description: siteConfig.description,
      author: { "@id": `${siteConfig.url}/#mauricio-reis` },
    },
    ...projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      url: project.url,
      description: project.solution,
      creator: { "@id": `${siteConfig.url}/#mauricio-reis` },
      keywords: project.tags.join(", "),
      inLanguage: "pt-BR",
    })),
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <PortfolioPage />
    </>
  );
}
