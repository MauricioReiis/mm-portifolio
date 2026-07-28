import Image from "next/image";
import { education, experiences, projects, services, skills } from "../content";
import type { Project } from "../types";
import { TechIcon } from "./TechIcon";

function ProjectArtwork({ project }: { project: Project }) {
  if (project.artwork === "kamila") {
    return (
      <div className="project-art art-kamila" aria-hidden="true">
        <p>Sua liberdade começa<br />com uma escolha.</p>
        <div className="art-sun" />
        <div className="art-editorial">Kamila<br />Siqueira</div>
        <span>01 · presença autoral</span>
      </div>
    );
  }

  return (
    <div className="project-art art-prana" aria-hidden="true">
      <div className="building"><i /><i /><i /><i /></div>
      <strong>PRANA</strong>
      <p>Infraestrutura que<br />transforma cidades.</p>
      <span>02 · escala e precisão</span>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="services section" id="servicos" aria-labelledby="services-title">
      <div className="section-heading">
        <span>01 · O que eu resolvo</span>
        <h2 id="services-title">Desenvolvimento frontend orientado a resultado.</h2>
        <p>
          Da primeira conversa ao deploy, conecto estratégia, interface e
          tecnologia para criar produtos digitais que ajudam negócios a crescer.
        </p>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <strong>{service.outcome}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="projects section" id="projetos" aria-labelledby="projects-title">
      <div className="section-heading light">
        <span>02 · Projetos selecionados</span>
        <h2 id="projects-title">Do código ao deploy.</h2>
        <p>
          Projetos reais apresentados pela implementação: arquitetura frontend,
          decisões técnicas, ferramentas e responsabilidades.
        </p>
      </div>
      <div className="case-studies">
        {projects.map((project) => (
          <article className={`project-case project-${project.artwork}`} key={project.id}>
            <a
              className="project-preview"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir o projeto ${project.name} em uma nova aba`}
            >
              <div className="browser-bar"><i /><i /><i /><small>{project.url.replace("https://", "")}</small></div>
              <ProjectArtwork project={project} />
              <span className="project-link">Ver online ↗</span>
            </a>
            <div className="project-card-content">
              <header className="project-header">
                <span>Projeto {project.id} / {String(projects.length).padStart(2, "0")}</span>
                <p>{project.category}</p>
              </header>
              <div className="project-intro">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-stack">
                <h4>Stack utilizada</h4>
                <ul aria-label={`Tecnologias utilizadas em ${project.name}`}>
                  {project.tags.map((tag) => <li key={tag}><TechIcon name={tag} /></li>)}
                </ul>
              </div>
              <details className="project-details" name="project-details">
                <summary>
                  Detalhes técnicos
                  <span aria-hidden="true">+</span>
                </summary>
                <div>
                  <h4>Implementação</h4>
                  <p>{project.implementation}</p>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Abrir projeto <span>↗</span>
                  </a>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="about section" id="sobre" aria-labelledby="about-title">
      <div className="about-statement">
        <span>03 · Como eu trabalho</span>
        <h2 id="about-title">
          Engenharia consistente.<br />
          <em>Experiência humana.</em>
        </h2>
      </div>
      <div className="about-content">
        <p className="lead">
          Um bom frontend não é apenas bonito: ele precisa ser rápido,
          compreensível, acessível e simples de manter.
        </p>
        <p>
          Trabalho próximo de design, produto e negócio para entender o problema
          antes de escolher a tecnologia. Como Tech Lead, também atuo na
          arquitetura, revisão de código, qualidade e desenvolvimento do time.
        </p>
        <dl className="principles">
          <div><dt>01</dt><dd>Clareza antes de complexidade</dd></div>
          <div><dt>02</dt><dd>Performance desde a arquitetura</dd></div>
          <div><dt>03</dt><dd>Movimento com propósito</dd></div>
          <div><dt>04</dt><dd>Acessibilidade como padrão</dd></div>
        </dl>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="experience section" id="experiencia" aria-labelledby="experience-title">
      <div className="section-heading">
        <span>04 · Experiência profissional</span>
        <h2 id="experience-title">Produtos de escala, times diversos e evolução contínua.</h2>
        <p>
          Mais de cinco anos criando e liderando interfaces para empresas de
          tecnologia, telecomunicações e serviços.
        </p>
      </div>
      <div className="experience-list">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.period}`}>
            <time>{item.period}</time>
            <div className="experience-role">
              <span>{item.company}</span>
              <h3>{item.role}</h3>
              <p>{item.project}</p>
            </div>
            <p>{item.description}</p>
            <ul aria-label={`Tecnologias usadas em ${item.company}`}>
              {item.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  const portfolioStack = ["Next.js", "React", "TypeScript", "GSAP", "Vite", "CSS"];

  return (
    <section className="skills-section section" id="habilidades" aria-labelledby="skills-title">
      <div>
        <span className="section-index">05 · Competências</span>
        <h2 id="skills-title">Tecnologia é meio.<br /><em>Impacto é o objetivo.</em></h2>
        <p>
          Um repertório frontend completo para desenvolver, testar, entregar e
          evoluir experiências digitais.
        </p>
      </div>
      <ul className="skills-cloud">
        {skills.map((skill, index) => (
          <li key={skill}><small>{String(index + 1).padStart(2, "0")}</small>{skill}</li>
        ))}
      </ul>
      <div className="portfolio-stack">
        <div>
          <span>Construído com</span>
          <p>A stack usada para desenvolver este portfólio.</p>
        </div>
        <ul aria-label="Tecnologias utilizadas neste portfólio">
          {portfolioStack.map((technology) => (
            <li key={technology}>
              <TechIcon name={technology} />
              <span>{technology}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="trust section" id="credenciais" aria-labelledby="trust-title">
      <div className="section-heading">
        <span>Empresas e projetos</span>
        <h2 id="trust-title">Experiência construída em ambientes exigentes.</h2>
      </div>
      <div className="trust-grid">
        <article><div className="trust-logo"><Image src="/logos/accenture.png" alt="Accenture" width={1800} height={579} unoptimized /></div><span>Consultoria e tecnologia</span></article>
        <article><div className="trust-logo"><Image src="/logos/compass-uol-cropped.png" alt="Compass UOL" width={964} height={188} unoptimized /></div><span>Transformação digital</span></article>
        <article className="wordmark vivo"><div className="trust-logo"><strong>vivo</strong></div><span>Telecom B2B e B2C</span></article>
        <article className="wordmark porto"><div className="trust-logo"><strong>porto</strong></div><span>Seguros e serviços</span></article>
      </div>
      <div className="education-heading">
        <span>Formação acadêmica</span>
        <h3>Conhecimento que acompanha a evolução da tecnologia.</h3>
        <p>
          Uma base sólida em sistemas e duas especializações em andamento para
          aprofundar arquitetura, inteligência artificial e decisões de produto.
        </p>
      </div>
      <div className="education-list">
        {education.map((item, index) => (
          <article key={item.course}>
            <header>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <span>{item.period}</span>
            </header>
            <h3>{item.course}</h3>
            <p>{item.institution}</p>
            <strong>{item.period.toLowerCase().includes("andamento") ? "Em curso" : "Concluído"}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactFooter() {
  return (
    <footer id="contato">
      <div className="footer-top">
        <span>Tem um projeto ou oportunidade?</span>
        <p>Disponível para trabalho remoto e projetos no Brasil.</p>
      </div>
      <h2>Vamos transformar uma boa ideia em uma experiência <em>inesquecível.</em></h2>
      <div className="contact-actions">
        <a href="mailto:mauricioreiscds@gmail.com">Enviar e-mail <span>↗</span></a>
        <a href="https://www.linkedin.com/in/maur%C3%ADcio-reis-45634a1a9/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>Juiz de Fora, Minas Gerais · Brasil</span>
        <a href="#inicio">Voltar ao topo ↑</a>
        <span>© 2026 Maurício Reis</span>
      </div>
    </footer>
  );
}
