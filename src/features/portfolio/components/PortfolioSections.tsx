import { education, experiences, projects, skills } from "../content";
import type { Project } from "../types";
import Image from "next/image";

function ProjectArtwork({ type }: { type: Project["artwork"] }) {
  if (type === "kamila") {
    return (
      <div className="project-art art-kamila">
        <span className="art-note">Sua liberdade começa<br />com uma escolha.</span>
        <div className="art-sun" />
        <div className="art-card">Kamila<br />Siqueira</div>
      </div>
    );
  }

  return (
    <div className="project-art art-prana">
      <div className="building"><i /><i /><i /><i /></div>
      <span className="prana-logo">PRĀNA</span>
      <span className="art-note">Infraestrutura que<br />transforma cidades.</span>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="about section" id="sobre">
      <div className="section-label" data-reveal>01 — Sobre</div>
      <div className="about-grid">
        <h2 data-reveal>Código é ferramenta.<br /><span>Experiência é o produto.</span></h2>
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
          <a className="text-link" href="#trajetoria">
            Conheça minha trajetória <span>↗</span>
          </a>
        </div>
      </div>
      <div className="metrics">
        <div data-reveal><strong>5+</strong><span>anos de experiência</span></div>
        <div data-reveal><strong>4</strong><span>frameworks dominados</span></div>
        <div data-reveal><strong>∞</strong><span>curiosidade para evoluir</span></div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="projects section" id="projetos">
      <div className="section-label light" data-reveal>02 — Projetos selecionados</div>
      <div className="project-intro">
        <h2 data-reveal>Trabalho em destaque</h2>
        <p data-reveal>Projetos reais, pensados para pessoas reais.</p>
      </div>
      {projects.map((project) => (
        <a
          className={`project-card ${project.className}`}
          href={project.url}
          target="_blank"
          rel="noreferrer"
          data-reveal
          key={project.id}
        >
          <div className="project-index">{project.id}</div>
          <div className="browser-frame">
            <div className="browser-top"><span /><span /><span /></div>
            <ProjectArtwork type={project.artwork} />
          </div>
          <div className="project-copy">
            <div><h3>{project.name}</h3><p>{project.description}</p></div>
            <span className="visit">Visitar projeto ↗</span>
          </div>
        </a>
      ))}
    </section>
  );
}

export function CompaniesSection() {
  return (
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
          <Image src="/logos/accenture.png" alt="Accenture" width={1800} height={579} />
          <span>Consultoria & tecnologia</span>
        </div>
        <div className="logo-card">
          <Image src="/logos/compass-uol.png" alt="Compass UOL" width={1024} height={1024} />
          <span>Transformação digital</span>
        </div>
        <div className="logo-card logo-wordmark logo-vivo">
          <strong>vivo</strong><span>Telecom · B2B & B2C</span>
        </div>
        <div className="logo-card logo-wordmark logo-porto">
          <strong><i>porto</i></strong><span>Seguros & serviços</span>
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section className="journey section" id="trajetoria">
      <div className="section-label" data-reveal>03 — Trajetória</div>
      <div className="journey-head">
        <h2 data-reveal>Experiência que<br />constrói repertório.</h2>
        <p data-reveal>Do código à liderança técnica, uma evolução contínua.</p>
      </div>
      <div className="timeline">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.project}`} data-reveal>
            <time>{item.period}</time>
            <div><span>{item.company}</span><h3>{item.project}</h3></div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ToolkitSection() {
  return (
    <section className="toolkit section" id="habilidades">
      <div className="section-label light" data-reveal>04 — Toolkit</div>
      <div className="toolkit-grid">
        <h2 data-reveal>Tecnologia com<br /><em>propósito.</em></h2>
        <div className="skills" data-reveal>
          {skills.map((skill, index) => (
            <span key={skill}>
              <small>{String(index + 1).padStart(2, "0")}</small>{skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="education section">
      <div className="section-label" data-reveal>05 — Formação</div>
      <div className="education-grid">
        {education.map((item) => (
          <article key={item.course} data-reveal>
            <span>{item.period}</span>
            <h3>{item.course}</h3>
            <p>{item.institution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactFooter() {
  return (
    <footer id="contato">
      <div className="footer-kicker">Tem um projeto ou oportunidade?</div>
      <h2>Vamos construir<br /><em>algo relevante.</em></h2>
      <a className="email" href="mailto:mauricioreiscds@gmail.com">
        mauricioreiscds@gmail.com ↗
      </a>
      <div className="footer-bottom">
        <span>Juiz de Fora, MG • Brasil</span>
        <div>
          <a href="https://www.linkedin.com/in/maur%C3%ADcio-reis-45634a1a9/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
        <span>© 2026 Maurício Reis</span>
      </div>
    </footer>
  );
}
