import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maurício Reis | Desenvolvedor Frontend Sênior",
    short_name: "Maurício Reis",
    description: "Portfólio de desenvolvimento Frontend, sites e produtos digitais.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2efe7",
    theme_color: "#f2efe7",
    lang: "pt-BR",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
