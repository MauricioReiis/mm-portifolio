export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://mm-portifolio.vercel.app";

export const siteConfig = {
  name: "Maurício Reis",
  title: "Maurício Reis | Desenvolvedor Frontend Sênior",
  description:
    "Desenvolvedor Frontend Sênior e Tech Lead especializado em criação de sites, aplicações React, TypeScript, Angular e Vue.js. Atendimento remoto no Brasil.",
  url: siteUrl,
  email: "mauricioreiscds@gmail.com",
  linkedin: "https://www.linkedin.com/in/maur%C3%ADcio-reis-45634a1a9/",
  github: "https://github.com/MauricioReiis",
};
