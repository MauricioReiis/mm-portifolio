"use client";

import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "Tech Lead", "Creative Coder"];

const experience = [
  {
    period: "12.2025 — 04.2026",
    company: "Accenture",
    project: "Vivo Telefônica B2B",
    text: "Interfaces responsivas em Vue.js, integrações com APIs, manutenção evolutiva e testes automatizados.",
  },
  {
    period: "01.2025 — 12.2025",
    company: "Compass UOL",
    project: "Vivo Telefônica B2C",
    text: "Liderança frontend com Angular e React, componentes reutilizáveis, integrações e apoio à evolução técnica do time.",
  },
  {
    period: "07.2023 — 01.2025",
    company: "Compass UOL",
    project: "AI Cockpit",
    text: "Evolução de interfaces modernas com Angular, React e TypeScript, testes automatizados e foco em confiabilidade.",
  },
  {
    period: "11.2021 — 04.2023",
    company: "Compass UOL",
    project: "The North 2023",
    text: "Tech Lead em React, responsável por padrões técnicos, code review, performance, escalabilidade e deploy na AWS.",
  },
];

const skills = [
  "React", "TypeScript", "Angular", "Vue.js", "JavaScript", "HTML & CSS",
  "Microfrontends", "Jest", "Cypress", "REST APIs", "AWS", "Azure",
];

export default function Home() {
  const [role, setRole] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(
      () => setRole((current) => (current + 1) % roles.length),
      2400,
    );
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.14 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const moveHero = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--pointer-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--pointer-y", y.toFixed(3));
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Maurício Reis, início">
          MR<span>.</span>
        </a>
        <button
          className="menu-button"
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#trajetoria" onClick={closeMenu}>Trajetória</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
      </header>

      <section className="hero" id="inicio" onPointerMove={moveHero}>
        <div className="hero-visual" aria-hidden="true">
          <div className="portrait-backdrop" />
          <div className="portrait-card">
            <img src="/mauricio-reis.jpg" alt="" />
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
            <strong key={roles[role]}>{roles[role]}</strong>
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

      <section className="about section" id="sobre">
        <div className="section-label" data-reveal>01 — Sobre</div>
        <div className="about-grid">
          <h2 data-reveal>
            Código é ferramenta.
            <br />
            <span>Experiência é o produto.</span>
          </h2>
          <div data-reveal>
            <p className="lead">
              Uno engenharia, visão de produto e cuidado visual para criar
              soluções que funcionam tão bem quanto parecem.
            </p>
            <p>
              Tenho experiência em projetos corporativos, arquitetura baseada
              em componentes, integração com APIs e ambientes cloud. Como Tech
              Lead, também atuei em decisões técnicas, code reviews e evolução
              de equipes.
            </p>
            <a className="text-link" href="#trajetoria">Conheça minha trajetória <span>↘</span></a>
          </div>
        </div>
        <div className="metrics">
          <div data-reveal><strong>5+</strong><span>anos de experiência</span></div>
          <div data-reveal><strong>4</strong><span>frameworks dominados</span></div>
          <div data-reveal><strong>∞</strong><span>curiosidade para evoluir</span></div>
        </div>
      </section>

      <section className="projects section" id="projetos">
        <div className="section-label light" data-reveal>02 — Projetos selecionados</div>
        <div className="project-intro">
          <h2 data-reveal>Trabalho em destaque</h2>
          <p data-reveal>Projetos reais, pensados para pessoas reais.</p>
        </div>
        <a className="project-card project-kamila" href="https://kamilasiqueira.com/" target="_blank" rel="noreferrer" data-reveal>
          <div className="project-index">01</div>
          <div className="browser-frame">
            <div className="browser-top"><span /><span /><span /></div>
            <div className="project-art art-kamila">
              <span className="art-note">Sua liberdade começa<br />com uma escolha.</span>
              <div className="art-sun" />
              <div className="art-card">Kamila<br />Siqueira</div>
            </div>
          </div>
          <div className="project-copy">
            <div>
              <h3>Kamila Siqueira</h3>
              <p>Experiência digital • Desenvolvimento Frontend</p>
            </div>
            <span className="visit">Visitar projeto ↗</span>
          </div>
        </a>
        <a className="project-card project-prana" href="https://www.pranainfra.com.br/" target="_blank" rel="noreferrer" data-reveal>
          <div className="project-index">02</div>
          <div className="browser-frame">
            <div className="browser-top"><span /><span /><span /></div>
            <div className="project-art art-prana">
              <div className="building"><i /><i /><i /><i /></div>
              <span className="prana-logo">PRĀNA</span>
              <span className="art-note">Infraestrutura que<br />transforma cidades.</span>
            </div>
          </div>
          <div className="project-copy">
            <div>
              <h3>Prāna Infra</h3>
              <p>Site institucional • Desenvolvimento Frontend</p>
            </div>
            <span className="visit">Visitar projeto ↗</span>
          </div>
        </a>
      </section>

      <section className="companies section" aria-labelledby="companies-title">
        <div className="section-label" data-reveal>Empresas & projetos</div>
        <div className="companies-head">
          <h2 id="companies-title" data-reveal>Marcas que fazem<br />parte da história.</h2>
          <p data-reveal>
            Experiência construída em produtos digitais de grande escala,
            colaborando com times multidisciplinares.
          </p>
        </div>
        <div className="logo-grid" data-reveal>
          <div className="logo-card">
            <img src="/logos/accenture.png" alt="Accenture" />
            <span>Consultoria & tecnologia</span>
          </div>
          <div className="logo-card">
            <img src="/logos/compass-uol.png" alt="Compass UOL" />
            <span>Transformação digital</span>
          </div>
          <div className="logo-card logo-wordmark logo-vivo">
            <strong>vivo</strong>
            <span>Telecom · B2B & B2C</span>
          </div>
          <div className="logo-card logo-wordmark logo-porto">
            <strong><i>porto</i></strong>
            <span>Seguros & serviços</span>
          </div>
        </div>
      </section>

      <section className="journey section" id="trajetoria">
        <div className="section-label" data-reveal>03 — Trajetória</div>
        <div className="journey-head">
          <h2 data-reveal>Experiência que<br />constrói repertório.</h2>
          <p data-reveal>Do código à liderança técnica, uma evolução contínua.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.project} data-reveal>
              <time>{item.period}</time>
              <div>
                <span>{item.company}</span>
                <h3>{item.project}</h3>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="toolkit section" id="habilidades">
        <div className="section-label light" data-reveal>04 — Toolkit</div>
        <div className="toolkit-grid">
          <h2 data-reveal>Tecnologia com<br /><em>propósito.</em></h2>
          <div className="skills" data-reveal>
            {skills.map((skill, index) => (
              <span key={skill}><small>{String(index + 1).padStart(2, "0")}</small>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="education section">
        <div className="section-label" data-reveal>05 — Formação</div>
        <div className="education-grid">
          <article data-reveal>
            <span>2021 — 2025</span>
            <h3>Sistemas de Informação</h3>
            <p>Bacharelado • UniAcademia</p>
          </article>
          <article data-reveal>
            <span>2026 • Em andamento</span>
            <h3>Arquitetura de Software</h3>
            <p>Pós-graduação • UniUnica</p>
          </article>
          <article data-reveal>
            <span>2026 • Em andamento</span>
            <h3>Inteligência Artificial</h3>
            <p>Pós-graduação • UniUnica</p>
          </article>
        </div>
      </section>

      <footer id="contato">
        <div className="footer-kicker">Tem um projeto ou oportunidade?</div>
        <h2>Vamos construir<br /><em>algo relevante.</em></h2>
        <a className="email" href="mailto:mauricioreiscds@gmail.com">mauricioreiscds@gmail.com ↗</a>
        <div className="footer-bottom">
          <span>Juiz de Fora, MG • Brasil</span>
          <div>
            <a href="https://www.linkedin.com/in/maur%C3%ADcio-reis-45634a1a9/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="#inicio">Voltar ao topo ↑</a>
          </div>
          <span>© 2026 Maurício Reis</span>
        </div>
      </footer>
    </main>
  );
}
