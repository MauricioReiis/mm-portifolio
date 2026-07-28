import type { Education, Experience, Project, Service } from "./types";

export const services: Service[] = [
  {
    number: "01",
    title: "Sites e landing pages customizadas",
    description:
      "Desenvolvimento de sites responsivos com identidade própria, conteúdo claro e uma experiência pensada para converter visitantes em contatos.",
    outcome: "Presença digital rápida, memorável e fácil de encontrar.",
  },
  {
    number: "02",
    title: "Produtos e aplicações frontend",
    description:
      "Interfaces escaláveis em React, Angular ou Vue.js, integradas a APIs e construídas sobre componentes reutilizáveis e acessíveis.",
    outcome: "Produtos confiáveis que evoluem sem perder performance.",
  },
  {
    number: "03",
    title: "Arquitetura e liderança técnica",
    description:
      "Definição de padrões, revisão de código, estratégia de testes, performance e apoio técnico para equipes de desenvolvimento.",
    outcome: "Times mais consistentes e decisões técnicas sustentáveis.",
  },
];

export const projects: Project[] = [
  {
    id: "01",
    name: "Kamila Siqueira",
    category: "Landing page · Marca pessoal",
    summary:
      "Landing page autoral desenvolvida como uma experiência de página única, com navegação direta, composição editorial e comportamento responsivo.",
    implementation:
      "Interface componentizada em React, empacotada com Vite e publicada na Vercel. O CSS responsivo organiza tipografia e composição para diferentes telas, enquanto a observação de viewport ativa as entradas de conteúdo sem bloquear a navegação.",
    url: "https://kamilasiqueira.com/",
    tags: ["React", "Vite", "JavaScript", "CSS responsivo", "Vercel"],
    artwork: "kamila",
  },
  {
    id: "02",
    name: "Prana Infra",
    category: "Site institucional · Infraestrutura",
    summary:
      "Site institucional construído em blocos modulares para apresentar a empresa, suas áreas de atuação e projetos em diferentes tamanhos de tela.",
    implementation:
      "Aplicação React com build otimizado pelo Vite e hospedagem na Vercel. A estrutura separa o conteúdo em componentes reutilizáveis, organiza ativos visuais responsivos e gera uma entrega estática rápida.",
    url: "https://www.pranainfra.com.br/",
    tags: ["React", "Vite", "JavaScript", "CSS responsivo", "Vercel"],
    artwork: "prana",
  },
];

export const experiences: Experience[] = [
  {
    period: "2025 — 2026",
    company: "Accenture",
    role: "Frontend Developer",
    project: "Vivo Telefônica B2B",
    description:
      "Construção e evolução de interfaces responsivas, integrações com APIs e testes automatizados para produtos digitais de grande escala.",
    technologies: ["Vue.js", "TypeScript", "APIs", "Testes"],
  },
  {
    period: "2023 — 2025",
    company: "Compass UOL",
    role: "Frontend Developer · Tech Lead",
    project: "Vivo B2C, AI Cockpit e The North",
    description:
      "Liderança frontend, arquitetura de componentes, code review, qualidade, performance e colaboração com equipes multidisciplinares.",
    technologies: ["React", "Angular", "TypeScript", "AWS"],
  },
  {
    period: "2021 — 2023",
    company: "Produtos digitais",
    role: "Frontend Developer",
    project: "Aplicações web e experiências digitais",
    description:
      "Desenvolvimento de produtos do conceito ao deploy, combinando engenharia frontend, visão de produto e atenção ao design.",
    technologies: ["JavaScript", "React", "CSS", "Cloud"],
  },
];

export const skills = [
  "React",
  "TypeScript",
  "Angular",
  "Vue.js",
  "JavaScript",
  "HTML semântico",
  "CSS responsivo",
  "Microfrontends",
  "Jest",
  "Cypress",
  "REST APIs",
  "AWS",
  "Azure",
  "SEO técnico",
  "Acessibilidade",
  "Performance Web",
];

export const education: Education[] = [
  { period: "2021 — 2025", course: "Sistemas de Informação", institution: "Bacharelado · UniAcademia" },
  { period: "2026 · Em andamento", course: "Arquitetura de Software", institution: "Pós-graduação · UniUnica" },
  { period: "2026 · Em andamento", course: "Inteligência Artificial", institution: "Pós-graduação · UniUnica" },
];
