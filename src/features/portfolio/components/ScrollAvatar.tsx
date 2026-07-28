"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sectionNames: Record<string, string> = {
  inicio: "Olá, eu sou o Maurício",
  servicos: "Construindo soluções",
  projetos: "Projetos em ação",
  sobre: "Engenharia + experiência",
  experiencia: "Escalando desafios",
  habilidades: "Ferramentas na mochila",
  contato: "Vamos criar juntos?",
};

export function ScrollAvatar() {
  const stageRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const stage = stageRef.current;
    const avatar = avatarRef.current;
    const character = characterRef.current;
    const label = labelRef.current;
    if (!stage || !avatar || !character || !label) return;

    const media = gsap.matchMedia();
    let pointerFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    media.add(
      {
        desktop: "(min-width: 901px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        if (!context.conditions?.desktop || !context.conditions?.motion) return;

        const xTo = gsap.quickTo(character, "x", { duration: 0.45, ease: "power3.out" });
        const yTo = gsap.quickTo(character, "y", { duration: 0.45, ease: "power3.out" });
        const rotateTo = gsap.quickTo(character, "rotation", { duration: 0.55, ease: "power3.out" });

        const updatePointer = () => {
          const normalizedX = pointerX / window.innerWidth - 0.5;
          const normalizedY = pointerY / window.innerHeight - 0.5;
          xTo(normalizedX * 24);
          yTo(normalizedY * 16);
          rotateTo(normalizedX * 3.5);
          pointerFrame = 0;
        };

        const onPointerMove = (event: PointerEvent) => {
          pointerX = event.clientX;
          pointerY = event.clientY;
          if (!pointerFrame) pointerFrame = window.requestAnimationFrame(updatePointer);
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });

        const path = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.55,
            invalidateOnRefresh: true,
            onUpdate: ({ direction, getVelocity }) => {
              stage.dataset.direction = direction > 0 ? "down" : "up";
              stage.style.setProperty("--scroll-velocity", String(Math.min(Math.abs(getVelocity()) / 2200, 1)));
            },
          },
        });

        path
          .fromTo(avatar, { x: () => window.innerWidth * 0.71, y: () => window.innerHeight * 0.28, scale: 0.82 }, { x: () => window.innerWidth * 0.56, y: () => window.innerHeight * 0.46, scale: 0.92, duration: 0.14 })
          .to(avatar, { x: () => window.innerWidth * 0.08, y: () => window.innerHeight * 0.16, scale: 0.78, rotation: -4, duration: 0.15 })
          .to(avatar, { x: () => window.innerWidth * 0.69, y: () => window.innerHeight * 0.08, scale: 0.86, rotation: 2, duration: 0.18 })
          .to(avatar, { x: () => window.innerWidth * 0.14, y: () => window.innerHeight * 0.34, scale: 0.74, rotation: -2, duration: 0.16 })
          .to(avatar, { x: () => window.innerWidth * 0.62, y: () => window.innerHeight * 0.23, scale: 0.8, rotation: 3, duration: 0.18 })
          .to(avatar, { x: () => window.innerWidth * 0.37, y: () => window.innerHeight * 0.05, scale: 0.9, rotation: 0, duration: 0.19 });

        const sections = document.querySelectorAll<HTMLElement>("section[id], footer[id]");
        sections.forEach((section) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top 55%",
            end: "bottom 45%",
            onEnter: () => updateLabel(section.id),
            onEnterBack: () => updateLabel(section.id),
          });
        });

        function updateLabel(id: string) {
          const next = sectionNames[id];
          if (!next || label.textContent === next) return;
          gsap.to(label, {
            opacity: 0,
            y: 7,
            duration: 0.16,
            onComplete: () => {
              label.textContent = next;
              gsap.to(label, { opacity: 1, y: 0, duration: 0.25 });
            },
          });
        }

        return () => {
          window.removeEventListener("pointermove", onPointerMove);
          if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
        };
      },
    );

    return () => media.revert();
  }, []);

  return (
    <aside ref={stageRef} className="avatar-stage" aria-hidden="true" data-direction="down">
      <div ref={avatarRef} className="avatar-climber">
        <span ref={labelRef} className="avatar-message">Olá, eu sou o Maurício</span>
        <div ref={characterRef} className="avatar-character">
          <Image
            src="/mauricio-avatar.webp"
            alt=""
            width={1024}
            height={1536}
            unoptimized
            priority={false}
            sizes="(max-width: 900px) 0px, 250px"
          />
          <i className="avatar-grip" />
        </div>
      </div>
    </aside>
  );
}
