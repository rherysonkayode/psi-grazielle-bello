"use client";

import { useEffect, useRef, useState } from "react";

// Retorna [ref, visivel]: visivel vira true (uma única vez) quando o
// elemento entra na tela. Leve: usa só IntersectionObserver.
export default function useNaTela(fracao = 0.2) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: fracao }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [fracao]);

  return [ref, visivel];
}
