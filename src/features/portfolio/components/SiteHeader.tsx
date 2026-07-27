type SiteHeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function SiteHeader({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Maurício Reis, início">
        MR<span>.</span>
      </a>
      <button
        className="menu-button"
        aria-expanded={menuOpen}
        aria-label="Abrir menu"
        onClick={onToggleMenu}
      >
        <span />
        <span />
      </button>
      <nav
        className={menuOpen ? "nav open" : "nav"}
        aria-label="Navegação principal"
      >
        <a href="#sobre" onClick={onCloseMenu}>Sobre</a>
        <a href="#projetos" onClick={onCloseMenu}>Projetos</a>
        <a href="#trajetoria" onClick={onCloseMenu}>Trajetória</a>
        <a href="#contato" onClick={onCloseMenu}>Contato</a>
      </nav>
    </header>
  );
}
