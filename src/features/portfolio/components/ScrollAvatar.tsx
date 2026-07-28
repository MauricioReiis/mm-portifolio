"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const avatarBySection = {
  inicio: "/avatar/avatar-inicio.webp",
  servicos: "/avatar/avatar-servicos.webp",
  projetos: "/avatar/avatar-projetos.webp",
  sobre: "/avatar/avatar-sobre.webp",
  experiencia: "/avatar/avatar-experiencia.webp",
  habilidades: "/avatar/avatar-habilidades.webp",
  credenciais: "/avatar/avatar-credenciais.webp",
  contato: "/avatar/avatar-contato.webp",
} as const;

type AvatarSection = keyof typeof avatarBySection;

const sectionOrder = Object.keys(avatarBySection) as AvatarSection[];

export function ScrollAvatar() {
  const [activeSection, setActiveSection] = useState<AvatarSection>("inicio");
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 901px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        if (!context.conditions?.desktop || !context.conditions?.motion) return;

        const triggers = sectionOrder.flatMap((sectionId) => {
          const section = document.getElementById(sectionId);
          if (!section) return [];

          return ScrollTrigger.create({
            trigger: section,
            start: "top 58%",
            end: "bottom 42%",
            onEnter: () => setActiveSection(sectionId),
            onEnterBack: () => setActiveSection(sectionId),
          });
        });

        let pointerFrame = 0;
        let pointerX = window.innerWidth / 2;
        let pointerY = window.innerHeight / 2;

        const updatePointer = () => {
          const character = characterRef.current;
          if (character) {
            const normalizedX = pointerX / window.innerWidth - 0.5;
            const normalizedY = pointerY / window.innerHeight - 0.5;

            gsap.to(character, {
              x: normalizedX * 10,
              y: normalizedY * 7,
              rotation: normalizedX * 2.2,
              duration: 0.55,
              ease: "power3.out",
              overwrite: "auto",
            });
          }
          pointerFrame = 0;
        };

        const onPointerMove = (event: PointerEvent) => {
          pointerX = event.clientX;
          pointerY = event.clientY;
          if (!pointerFrame) pointerFrame = window.requestAnimationFrame(updatePointer);
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });

        return () => {
          triggers.forEach((trigger) => trigger.kill());
          window.removeEventListener("pointermove", onPointerMove);
          if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
        };
      },
    );

    return () => media.revert();
  }, []);

  return (
    <aside
      className="avatar-reactions"
      aria-hidden="true"
      data-section={activeSection}
    >
      <div ref={characterRef} className="avatar-reaction" key={activeSection}>
        <Image
          src={avatarBySection[activeSection]}
          alt=""
          width={900}
          height={1350}
          unoptimized
          priority={activeSection === "inicio"}
          sizes="(max-width: 900px) 0px, 160px"
        />
      </div>
    </aside>
  );
}
