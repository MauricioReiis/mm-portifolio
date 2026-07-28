import type { CSSProperties } from "react";

type TechIconProps = {
  name: string;
};

const icons: Record<string, { src: string; color: string }> = {
  React: { src: "/icons/tech/react.svg", color: "#00b8d9" },
  Vite: { src: "/icons/tech/vite.svg", color: "#646cff" },
  JavaScript: { src: "/icons/tech/javascript.svg", color: "#d6b900" },
  TypeScript: { src: "/icons/tech/typescript.svg", color: "#3178c6" },
  "CSS responsivo": { src: "/icons/tech/css.svg", color: "#663399" },
  CSS: { src: "/icons/tech/css.svg", color: "#663399" },
  Vercel: { src: "/icons/tech/vercel.svg", color: "#11120f" },
  "Next.js": { src: "/icons/tech/nextdotjs.svg", color: "#11120f" },
  GSAP: { src: "/icons/tech/gsap.svg", color: "#65a30d" },
  "Vue.js": { src: "/icons/tech/vuedotjs.svg", color: "#42b883" },
  Angular: { src: "/icons/tech/angular.svg", color: "#dd0031" },
  AWS: { src: "/icons/tech/amazonwebservices.svg", color: "#ff9900" },
  APIs: { src: "/icons/tech/openapiinitiative.svg", color: "#6ba539" },
  Testes: { src: "/icons/tech/vitest.svg", color: "#729b1b" },
  Cloud: { src: "/icons/tech/cloudflare.svg", color: "#f48120" },
};

export function TechIcon({ name }: TechIconProps) {
  const icon = icons[name];

  if (!icon) {
    return null;
  }

  return (
    <span
      className="tech-icon"
      role="img"
      aria-label={name}
      title={name}
      style={
        {
          "--tech-icon": `url("${icon.src}")`,
          "--tech-color": icon.color,
        } as CSSProperties
      }
    >
      <span aria-hidden="true" />
    </span>
  );
}
