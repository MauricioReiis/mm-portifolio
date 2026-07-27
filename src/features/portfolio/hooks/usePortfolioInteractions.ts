"use client";

import { useEffect, useState } from "react";
import { roles } from "../content";

export function usePortfolioInteractions() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(
      () => setRoleIndex((current) => (current + 1) % roles.length),
      2400,
    );

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
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

  return {
    role: roles[roleIndex],
    menuOpen,
    toggleMenu: () => setMenuOpen((current) => !current),
    closeMenu: () => setMenuOpen(false),
  };
}
