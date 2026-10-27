"use client";

import useNaTela from "./useNaTela";

// Faz o conteúdo surgir (subindo e aparecendo) quando entra na tela.
// A animação é em CSS (.revelar em globals.css); aqui só marcamos quando fica visível.
export default function Revelar({ children, atraso = 0, className = "", as: Tag = "div" }) {
  const [ref, visivel] = useNaTela(0.2);
  return (
    <Tag
      ref={ref}
      className={`revelar ${visivel ? "visivel" : ""} ${className}`}
      style={{ "--d": `${atraso}s` }}
    >
      {children}
    </Tag>
  );
}
