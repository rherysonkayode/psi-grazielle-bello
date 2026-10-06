export default function Sobre() {
  return (
    <section id="sobre" className="bg-off-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-20">
        <div>
          <h2 className="font-display text-3xl lg:text-4xl leading-tight text-azul-profundo-dark">
            Sobre
          </h2>
          <div className="mt-6 h-1 w-14 rounded-full bg-abobora" />
        </div>

        <div className="space-y-6 text-[17px] leading-relaxed text-azul-profundo/90 max-w-2xl">
          <p>
            Sou graduada em Psicologia pela UNISUAM e curso Pedagogia na
            UNICARIOCA — duas formações que se completam no meu trabalho:
            entender a criança em sua totalidade, dentro e fora da sala de
            aula.
          </p>
          <p>
            Minha trajetória passou por clínicas interdisciplinares, escolas
            e estágios clínicos, atuando diretamente com crianças e
            adolescentes com TEA, TDAH e outras formas de neurodivergência —
            sempre ao lado das famílias e, muitas vezes, das equipes
            pedagógicas.
          </p>
          <p>
            Com pós-graduação em Análise do Comportamento Aplicada (ABA) e
            experiência em Terapia Cognitivo-Comportamental, meu trabalho une
            rigor técnico e escuta sensível: cada criança — e cada família —
            tem uma história própria, e é a partir dela que construímos
            juntos o caminho do desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
}
