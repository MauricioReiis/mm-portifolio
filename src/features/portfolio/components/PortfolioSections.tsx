import { education, experiences, projects, skills } from "../content";
import type { Project } from "../types";
import Image from "next/image";

function ProjectArtwork({ type }: { type: Project["artwork"] }) {
  if (type === "kamila") {
    return (
      <div className="project-art art-kamila">
        <span className="art-note">Sua liberdade comeÃ§a<br />com uma escolha.</span>
        <div className="art-sun" />
        <div className="art-card">Kamila<br />Siqueira</div>
      </div>
    );
  }

  return (
    <div className="project-art art-prana">
      <div className="building"><i /><i /><i /><i /></div>
      <span className="prana-logo">PRÄ€NA</span>
      <span className="art-note">Infraestrutura que<br />transforma cidades.</span>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="about section" id="sobre">
      <div className="section-label" data-reveal>01 â€” Sobre</div>
      <div className="about-grid">
        <h2 data-reveal>CÃ³digo Ã© ferramenta.<br /><span>ExperiÃªncia Ã© o produto.</span></h2>
        <div data-reveal>
          <p className="lead">
            Uno engenharia, visÃ£o de produto e cuidado visual para criar
            soluÃ§Ãµes que funcionam tÃ£o bem quanto parecem.
          </p>
          <p>
            Tenho experiÃªncia em projetos corporativos, arquitetura baseada
            em componentes, integraÃ§Ã£o com APIs e ambientes cloud. Como Tech
            Lead, tambÃ©m atuei em decisÃµes tÃ©cnicas, code reviews e evoluÃ§Ã£o
            de equipes.
          </p>
          <a className="text-link" href="#trajetoria">
            ConheÃ§a minha trajetÃ³ria <span>â†—</span>
          </a>
        </div>
      </div>
      <div className="metrics">
        <div data-reveal><strong>5+</strong><span>anos de experiÃªncia</span></div>
        <div data-reveal><strong>4</strong><span>frameworks dominados</span></div>
        <div data-reveal><strong>âˆž</strong><span>curiosidade para evoluir</span></div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="projects section" id="projetos">
      <div className="section-label light" data-reveal>02 â€” Projetos selecionados</div>
      <div className="project-intro">
        <h2 data-reveal>NÃ£o entrego apenas sites.<br /><em>Crio atmosferas.</em></h2>
        <p data-reveal>
          Cada trabalho nasce de uma necessidade diferente e ganha uma
          linguagem prÃ³pria â€” do primeiro scroll ao Ãºltimo detalhe.
        </p>
      </div>
      <div className="case-studies">
        {projects.map((project) => (
          <article
            className={`project-case ${project.className}`}
            data-reveal
            key={project.id}
          >
            <div className="case-orbit" aria-hidden="true"><i /><i /></div>
            <div className="case-heading">
              <span className="project-index">{project.id} / 02</span>
              <p>{project.description}</p>
              <h3>{project.name}</h3>
            </div>
            <a
              className="project-preview"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visitar projeto ${project.name}`}
            >
              <div className="browser-frame">
                <div className="browser-top">
                  <span /><span /><span />
                  <small>{project.url.replace("https://", "")}</small>
                </div>
                <ProjectArtwork type={project.artwork} />
              </div>
              <span className="preview-action">Explorar projeto â†—</span>
            </a>
            <div className="case-story">
              <div>
                <span className="story-label">O que o cliente buscava</span>
                <p>{project.objective}</p>
              </div>
              <div>
                <span className="story-label">A experiÃªncia criada</span>
                <p>{project.experience}</p>
              </div>
              <ul aria-label="CompetÃªncias aplicadas">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CompaniesSection() {
  return (
    <section className="companies section" aria-labelledby="companies-title">
      <div className="section-label" data-reveal>Empresas & projetos</div>
      <div className="companies-head">
        <h2 id="companies-title" data-reveal>Marcas que fazem<br />parte da histÃ³ria.</h2>
        <p data-reveal>
          ExperiÃªncia construÃ­da em produtos digitais de grande escala,
          colaborando com times multidisciplinares.
        </p>
      </div>
      <div className="logo-grid" data-reveal>
        <div className="logo-card">
          <Image
            src="/logos/accenture.png"
            alt="Accenture"
            width={1800}
            height={579}
            unoptimized
          />
          <span>Consultoria & tecnologia</span>
        </div>
        <div className="logo-card">
          <Image
            src="/logos/compass-uol.png"
            alt="Compass UOL"
            width={1024}
            height={1024}
            unoptimized
          />
          <span>TransformaÃ§Ã£o digital</span>
        </div>
        <div className="logo-card logo-wordmark logo-vivo">
          <strong>vivo</strong><span>Telecom Â· B2B & B2C</span>
        </div>
        <div className="logo-card logo-wordmark logo-porto">
          <strong><i>porto</i></strong><span>Seguros & serviÃ§os</span>
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section className="journey section" id="trajetoria">
      <div className="section-label" data-reveal>03 â€” TrajetÃ³ria</div>
      <div className="journey-head">
        <h2 data-reveal>ExperiÃªncia que<br />constrÃ³i repertÃ³rio.</h2>
        <p data-reveal>Do cÃ³digo Ã  lideranÃ§a tÃ©cnica, uma evoluÃ§Ã£o contÃ­nua.</p>
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
      <div className="section-label light" data-reveal>04 â€” Toolkit</div>
      <div className="toolkit-grid">
        <h2 data-reveal>Tecnologia com<br /><em>propÃ³sito.</em></h2>
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
      <div className="section-label" data-reveal>05 â€” FormaÃ§Ã£o</div>
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
        mauricioreiscds@gmail.com â†—
      </a>
      <div className="footer-bottom">
        <span>Juiz de Fora, MG â€¢ Brasil</span>
        <div>
          <a href="https://www.linkedin.com/in/maur%C3%ADcio-reis-45634a1a9/" target="_blank" rel="noreferrer">LinkedIn â†—</a>
          <a href="#inicio">Voltar ao topo â†‘</a>
        </div>
        <span>Â© 2026 MaurÃ­cio Reis</span>
      </div>
    </footer>
  );
}

