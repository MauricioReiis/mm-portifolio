import type { PointerEvent } from "react";
import Image from "next/image";

type HeroProps = { role: string };

export function Hero({ role }: HeroProps) {
  const moveVisual = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--pointer-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--pointer-y", y.toFixed(3));
  };

  return (
    <section className="hero" id="inicio" onPointerMove={moveVisual}>
      <div className="hero-visual" aria-hidden="true">
        <div className="portrait-backdrop" />
        <div className="portrait-card">
          <Image
            src="/mauricio-reis.jpg"
            alt=""
            width={853}
            height={1280}
            priority
            sizes="(max-width: 720px) 54vw, 30vw"
          />
          <span className="portrait-caption">Maurício Reis · 2026</span>
        </div>
        <div className="hero-ring ring-one"><i /></div>
        <div className="hero-ring ring-two"><i /></div>
        <span className="floating-tag tag-code">&lt;creative /&gt;</span>
        <span className="floating-tag tag-place">JF · MG</span>
        <span className="spark spark-one">✦</span>
        <span className="spark spark-two">✦</span>
      </div>
      <div className="eyebrow"><span /> Disponível para novos desafios</div>
      <h1>
        Construo experiências
        <br />
        digitais que <em>movem.</em>
      </h1>
      <div className="hero-bottom">
        <p>
          Desenvolvedor Frontend com mais de 5 anos transformando problemas
          complexos em interfaces claras, rápidas e escaláveis.
        </p>
        <div className="role-switch" aria-live="polite">
          <span>Atuação</span>
          <strong key={role}>{role}</strong>
        </div>
      </div>
      <a className="scroll-cue" href="#sobre">
        <span>Role para explorar</span>
        <i>↓</i>
      </a>
      <div className="hero-marquee" aria-hidden="true">
        <div>
          <span>React</span><i>✦</i><span>TypeScript</span><i>✦</i>
          <span>Interfaces que movem</span><i>✦</i><span>Creative frontend</span><i>✦</i>
          <span>React</span><i>✦</i><span>TypeScript</span><i>✦</i>
          <span>Interfaces que movem</span><i>✦</i><span>Creative frontend</span><i>✦</i>
        </div>
      </div>
    </section>
  );
}
