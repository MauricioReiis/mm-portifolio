"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Dev bom demais da conta",
  "Ô trem bão",
  "Uai, sô!",
  "Nu, que capricho",
  "É logo ali",
  "Cê acredita?",
];

export function MineiroPhrase() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span
      className="portrait-code"
      aria-label="Expressões mineiras que mudam a cada cinco segundos"
    >
      <span className="portrait-code-line" key={phraseIndex} aria-hidden="true">
        &lt;uai/&gt; <strong>{phrases[phraseIndex]}</strong> &lt;uai/&gt;
      </span>
    </span>
  );
}
