"use client";

import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Maurício Reis, início">
        MR<span aria-hidden="true">↗</span>
      </a>
      <button
        className="menu-button"
        aria-expanded={open}
        aria-controls="menu-principal"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      <nav
        id="menu-principal"
        className={open ? "nav open" : "nav"}
        aria-label="Navegação principal"
      >
        <a href="#servicos" onClick={close}>Serviços</a>
        <a href="#projetos" onClick={close}>Projetos</a>
        <a href="#experiencia" onClick={close}>Experiência</a>
        <a className="nav-cta" href="#contato" onClick={close}>Vamos conversar</a>
      </nav>
    </header>
  );
}
