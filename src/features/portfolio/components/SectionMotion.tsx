"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SectionMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const sections = gsap.utils.toArray<HTMLElement>(
        "main > section:not(#inicio), footer",
      );

      sections.forEach((section) => {
        const content = Array.from(section.children).filter(
          (element): element is HTMLElement => element instanceof HTMLElement,
        );

        gsap.set(section, {
          y: 52,
          scale: 0.988,
          transformOrigin: "50% 0%",
        });
        gsap.set(content, { y: 28, opacity: 0 });

        ScrollTrigger.create({
          trigger: section,
          start: "top 84%",
          once: true,
          onEnter: () => {
            const timeline = gsap.timeline({
              defaults: { ease: "power3.out" },
              onComplete: () => {
                gsap.set(section, { clearProps: "transform" });
                gsap.set(content, { clearProps: "transform,opacity" });
              },
            });

            timeline
              .to(section, { y: 0, scale: 1, duration: 0.85 })
              .to(
                content,
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.7,
                  stagger: 0.09,
                },
                0.12,
              );
          },
        });
      });

      const titles = gsap.utils.toArray<HTMLElement>(
        ".section-heading h2, .about-statement h2, .skills-section h2, footer h2",
      );

      titles.forEach((title) => {
        gsap.fromTo(
          title,
          { yPercent: 4 },
          {
            yPercent: -4,
            ease: "none",
            scrollTrigger: {
              trigger: title,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          },
        );
      });

      window.requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => media.revert();
  }, []);

  return null;
}
