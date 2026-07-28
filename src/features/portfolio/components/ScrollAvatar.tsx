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
        const travelXTo = gsap.quickTo(avatar, "x", { duration: 0.32, ease: "power2.out" });
        const travelYTo = gsap.quickTo(avatar, "y", { duration: 0.32, ease: "power2.out" });
        const travelRotateTo = gsap.quickTo(avatar, "rotation", { duration: 0.3, ease: "power2.out" });
        const travelScaleTo = gsap.quickTo(avatar, "scale", { duration: 0.35, ease: "power2.out" });

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

        const path = ScrollTrigger.create({
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          onUpdate: ({ progress, direction, getVelocity }) => {
            const horizontalWave = Math.sin(progress * Math.PI * 5.25);
            const verticalWave = Math.cos(progress * Math.PI * 7);
            const maxX = Math.max(window.innerWidth - avatar.offsetWidth - 36, 0);
            const minY = 82;
            const maxY = Math.max(window.innerHeight - avatar.offsetHeight - 22, minY);
            const x = maxX * (0.5 + horizontalWave * 0.44);
            const y = minY + (maxY - minY) * (0.5 + verticalWave * 0.5);
            const velocity = Math.min(Math.abs(getVelocity()) / 2200, 1);

            stage.dataset.direction = direction > 0 ? "down" : "up";
            stage.style.setProperty("--scroll-velocity", String(velocity));
            travelXTo(x);
            travelYTo(y);
            travelRotateTo(direction * (3 + velocity * 8) + horizontalWave * 2);
            travelScaleTo(0.88 + Math.sin(progress * Math.PI * 9) * 0.08);
          },
        });

        path.update();

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
          path.kill();
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
