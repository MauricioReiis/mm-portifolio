import type { Education, Experience, Project } from "./types";

export const roles = ["Frontend Developer", "Tech Lead", "Creative Coder"];

export const projects: Project[] = [
  {
    id: "01",
    name: "Kamila Siqueira",
    description: "Marca pessoal & experiÃªncia digital",
    objective:
      "Criar uma presenÃ§a digital autoral, acolhedora e fÃ¡cil de navegar, capaz de transformar a personalidade da marca em confianÃ§a desde o primeiro contato.",
    experience:
      "Uma narrativa visual totalmente customizada, com ritmo editorial, cores orgÃ¢nicas e interaÃ§Ãµes delicadas que conduzem o visitante sem competir com o conteÃºdo.",
    tags: ["DireÃ§Ã£o visual", "Frontend", "Motion"],
    url: "https://kamilasiqueira.com/",
    className: "project-kamila",
    artwork: "kamila",
  },
  {
    id: "02",
    name: "PrÄna Infra",
    description: "Infraestrutura & posicionamento institucional",
    objective:
      "Apresentar projetos de infraestrutura com clareza e solidez, reforÃ§ando a credibilidade da empresa sem cair no visual genÃ©rico do mercado.",
    experience:
      "Uma interface arquitetÃ´nica e precisa, com hierarquia forte, grandes Ã¡reas visuais e navegaÃ§Ã£o objetiva para comunicar escala, capacidade tÃ©cnica e transformaÃ§Ã£o.",
    tags: ["UX estratÃ©gico", "Frontend", "Performance"],
    url: "https://www.pranainfra.com.br/",
    className: "project-prana",
    artwork: "prana",
  },
];

export const experiences: Experience[] = [
  {
    period: "12.2025 â€” 04.2026",
    company: "Accenture",
    project: "Vivo TelefÃ´nica B2B",
    description:
      "Interfaces responsivas em Vue.js, integraÃ§Ãµes com APIs, manutenÃ§Ã£o evolutiva e testes automatizados.",
  },
  {
    period: "01.2025 â€” 12.2025",
    company: "Compass UOL",
    project: "Vivo TelefÃ´nica B2C",
    description:
      "LideranÃ§a frontend com Angular e React, componentes reutilizÃ¡veis, integraÃ§Ãµes e apoio Ã  evoluÃ§Ã£o tÃ©cnica do time.",
  },
  {
    period: "07.2023 â€” 01.2025",
    company: "Compass UOL",
    project: "AI Cockpit",
    description:
      "EvoluÃ§Ã£o de interfaces modernas com Angular, React e TypeScript, testes automatizados e foco em confiabilidade.",
  },
  {
    period: "11.2021 â€” 04.2023",
    company: "Compass UOL",
    project: "The North 2023",
    description:
      "Tech Lead em React, responsÃ¡vel por padrÃµes tÃ©cnicos, code review, performance, escalabilidade e deploy na AWS.",
  },
];

export const skills = [
  "React",
  "TypeScript",
  "Angular",
  "Vue.js",
  "JavaScript",
  "HTML & CSS",
  "Microfrontends",
  "Jest",
  "Cypress",
  "REST APIs",
  "AWS",
  "Azure",
];

export const education: Education[] = [
  {
    period: "2021 â€” 2025",
    course: "Sistemas de InformaÃ§Ã£o",
    institution: "Bacharelado â€¢ UniAcademia",
  },
  {
    period: "2026 â€¢ Em andamento",
    course: "Arquitetura de Software",
    institution: "PÃ³s-graduaÃ§Ã£o â€¢ UniUnica",
  },
  {
    period: "2026 â€¢ Em andamento",
    course: "InteligÃªncia Artificial",
    institution: "PÃ³s-graduaÃ§Ã£o â€¢ UniUnica",
  },
];

