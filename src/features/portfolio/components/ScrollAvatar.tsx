"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const sectionNames: Record<string, string> = {
  servicos: "O que eu resolvo",
  projetos: "Trabalhos reais",
  sobre: "Como eu penso",
  experiencia: "Minha trajetória",
  habilidades: "Meu toolkit",
  contato: "Vamos criar?",
};

export function ScrollAvatar() {
  const [activeSection, setActiveSection] = useState("servicos");

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const direction = window.scrollY >= lastY ? 1 : -1;
      lastY = window.scrollY;

      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
      document.documentElement.style.setProperty("--scroll-direction", String(direction));

      const sections = [...document.querySelectorAll<HTMLElement>("section[id], footer[id]")];
      const current = sections.findLast((section) => section.getBoundingClientRect().top < window.innerHeight * 0.52);
      if (current?.id && sectionNames[current.id]) setActiveSection(current.id);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside className="scroll-avatar" aria-hidden="true">
      <div className="avatar-dialog">{sectionNames[activeSection]}</div>
      <div className="avatar-shell">
        <Image
          src="/mauricio-reis.jpg"
          alt=""
          width={853}
          height={1280}
          unoptimized
          sizes="110px"
        />
      </div>
      <span className="avatar-arrow">→</span>
    </aside>
  );
}
