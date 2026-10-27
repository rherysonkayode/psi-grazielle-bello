// Detalhes animados da marca (só CSS, sem JavaScript): bolhas de aquário e onda.

// Posição, tamanho, duração e atraso de cada bolha — variados para parecer natural
const BOLHAS = [
  { x: "6%", s: 14, t: 15, d: 0 },
  { x: "14%", s: 8, t: 12, d: 4 },
  { x: "27%", s: 11, t: 17, d: 8 },
  { x: "48%", s: 7, t: 13, d: 2 },
  { x: "63%", s: 12, t: 16, d: 6 },
  { x: "78%", s: 9, t: 14, d: 10 },
  { x: "90%", s: 15, t: 18, d: 3 },
];

export function Bolhas({ className = "", quantas = BOLHAS.length }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {BOLHAS.slice(0, quantas).map((b, i) => (
        <span
          key={i}
          className="bolha"
          style={{ left: b.x, width: b.s, height: b.s, "--t": `${b.t}s`, "--d": `${b.d}s` }}
        />
      ))}
    </div>
  );
}

// Onda que separa duas seções; `cor` é a cor da seção de baixo
export function Onda({ cor = "var(--color-off-white)", className = "" }) {
  const caminho = "M0 30 C 120 6, 240 6, 360 30 S 600 54, 720 30 S 960 6, 1080 30 S 1320 54, 1440 30 V 60 H 0 Z";
  return (
    <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-10 overflow-hidden sm:h-14 ${className}`} aria-hidden="true">
      <svg className="onda absolute bottom-0 left-0 h-full w-[200%]" viewBox="0 0 2880 60" preserveAspectRatio="none">
        {/* camada de trás, mais clara e deslocada, dá profundidade */}
        <g fill={cor} opacity="0.5" transform="translate(-180 -8)">
          <path d={caminho} />
          <path d={caminho} transform="translate(1440 0)" />
          <path d={caminho} transform="translate(2880 0)" />
        </g>
        <g fill={cor}>
          <path d={caminho} />
          <path d={caminho} transform="translate(1440 0)" />
        </g>
      </svg>
    </div>
  );
}
