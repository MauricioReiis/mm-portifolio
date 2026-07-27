import type { Education, Experience, Project } from "./types";

export const roles = ["Frontend Developer", "Tech Lead", "Creative Coder"];

export const projects: Project[] = [
  {
    id: "01",
    name: "Kamila Siqueira",
    description: "Experiência digital • Desenvolvimento Frontend",
    url: "https://kamilasiqueira.com/",
    className: "project-kamila",
    artwork: "kamila",
  },
  {
    id: "02",
    name: "Prāna Infra",
    description: "Site institucional • Desenvolvimento Frontend",
    url: "https://www.pranainfra.com.br/",
    className: "project-prana",
    artwork: "prana",
  },
];

export const experiences: Experience[] = [
  {
    period: "12.2025 — 04.2026",
    company: "Accenture",
    project: "Vivo Telefônica B2B",
    description:
      "Interfaces responsivas em Vue.js, integrações com APIs, manutenção evolutiva e testes automatizados.",
  },
  {
    period: "01.2025 — 12.2025",
    company: "Compass UOL",
    project: "Vivo Telefônica B2C",
    description:
      "Liderança frontend com Angular e React, componentes reutilizáveis, integrações e apoio à evolução técnica do time.",
  },
  {
    period: "07.2023 — 01.2025",
    company: "Compass UOL",
    project: "AI Cockpit",
    description:
      "Evolução de interfaces modernas com Angular, React e TypeScript, testes automatizados e foco em confiabilidade.",
  },
  {
    period: "11.2021 — 04.2023",
    company: "Compass UOL",
    project: "The North 2023",
    description:
      "Tech Lead em React, responsável por padrões técnicos, code review, performance, escalabilidade e deploy na AWS.",
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
    period: "2021 — 2025",
    course: "Sistemas de Informação",
    institution: "Bacharelado • UniAcademia",
  },
  {
    period: "2026 • Em andamento",
    course: "Arquitetura de Software",
    institution: "Pós-graduação • UniUnica",
  },
  {
    period: "2026 • Em andamento",
    course: "Inteligência Artificial",
    institution: "Pós-graduação • UniUnica",
  },
];
