type TechIconProps = {
  name: string;
};

const shortNames: Record<string, string> = {
  React: "⚛",
  Vite: "V",
  JavaScript: "JS",
  TypeScript: "TS",
  "CSS responsivo": "CSS",
  CSS: "CSS",
  Vercel: "▲",
  "Next.js": "N",
  GSAP: "G",
};

export function TechIcon({ name }: TechIconProps) {
  const mark = shortNames[name] ?? name.slice(0, 2).toUpperCase();

  return (
    <span className="tech-icon" role="img" aria-label={name} title={name}>
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect x="1" y="1" width="30" height="30" rx="8" />
        <text x="16" y="17" textAnchor="middle" dominantBaseline="middle">
          {mark}
        </text>
      </svg>
    </span>
  );
}
