import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-status">
        <span aria-hidden="true" />
        Disponível para projetos e oportunidades
      </div>

      <div className="hero-copy">
        <p className="hero-kicker">Frontend Developer · Tech Lead · Brasil</p>
        <h1 id="hero-title">
          Desenvolvo sites e produtos digitais que unem
          <em> clareza, performance e personalidade.</em>
        </h1>
        <p className="hero-summary">
          Sou Maurício Reis, desenvolvedor Frontend Sênior em Juiz de Fora,
          especializado em React, TypeScript, Angular e Vue.js. Transformo
          objetivos de negócio em experiências digitais rápidas, acessíveis e
          escaláveis.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projetos">Ver projetos <span>↓</span></a>
          <a className="button secondary" href="mailto:mauricioreiscds@gmail.com">
            Falar comigo <span>↗</span>
          </a>
        </div>
      </div>

      <div className="hero-portrait" aria-label="Retrato de Maurício Reis">
        <div className="portrait-window">
          <Image
            src="/mauricio-reis.jpg"
            alt="Maurício Reis, desenvolvedor Frontend Sênior"
            width={853}
            height={1280}
            priority
            unoptimized
            sizes="(max-width: 760px) 80vw, 32vw"
          />
        </div>
        <span className="portrait-code">&lt;feito com intenção /&gt;</span>
        <span className="portrait-location">JF · MG</span>
        <div className="portrait-orbit" aria-hidden="true"><i /><i /></div>
      </div>

      <div className="hero-proof" aria-label="Destaques da experiência profissional">
        <article className="proof-years">
          <span>Experiência frontend</span>
          <strong>5+</strong>
          <p>anos transformando requisitos complexos em interfaces claras.</p>
        </article>
        <article>
          <span>Liderança técnica</span>
          <strong>Tech Lead</strong>
          <p>Arquitetura, code review, qualidade e evolução de times.</p>
        </article>
        <article>
          <span>Produtos de escala</span>
          <strong>B2B + B2C</strong>
          <p>Experiência em projetos para Accenture, Vivo e Compass UOL.</p>
        </article>
      </div>
    </section>
  );
}
