const FORMACAO = [
  {
    period: "Em andamento",
    title: "Pedagogia (Bacharelado)",
    place: "UNICARIOCA",
  },
  {
    period: "Concluído",
    title: "Pós-graduação em Análise do Comportamento Aplicada (ABA)",
    place: "Monte Líbano",
  },
  {
    period: "Concluído",
    title: "Psicologia (Bacharelado)",
    place: "UNISUAM",
  },
];

const TRAJETORIA = [
  {
    period: "2024 — atual",
    title: "Aplicadora ABA",
    place: "Clínica Interdisciplinar Jano Saúde",
  },
  {
    period: "2021 — 2024",
    title: "Estágio obrigatório em Terapia Cognitivo-Comportamental",
    place: "SPA UNISUAM",
  },
  {
    period: "jan. 2024 — nov. 2024",
    title: "Atendimento a crianças e adolescentes",
    place: "Clínica Psi Para Todos Rio",
  },
  {
    period: "jan. 2024 — ago. 2024",
    title: "Mediação escolar para alunos com TEA e TDAH",
    place: "Colégio Faria Brito",
  },
  {
    period: "2022 — 2023",
    title: "Apoio terapêutico multidisciplinar",
    place: "Avan Fisio",
  },
];

function TimelineList({ items }) {
  return (
    <ol className="space-y-7">
      {items.map((item) => (
        <li key={item.title} className="flex gap-5">
          <div className="flex flex-col items-center pt-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-terracota shrink-0" />
            <span className="mt-1 w-px flex-1 bg-azul-serenity" />
          </div>
          <div className="pb-1">
            <p className="text-sm text-cinza-azulado">{item.period}</p>
            <p className="mt-1 font-semibold text-azul-profundo-dark leading-snug">
              {item.title}
            </p>
            <p className="text-[15px] text-cinza-azulado">{item.place}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Formacao() {
  return (
    <section className="bg-bege-areia/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-display text-3xl lg:text-4xl leading-tight text-azul-profundo-dark max-w-md">
          Formação e trajetória
        </h2>

        <div className="mt-14 grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <h3 className="font-display text-xl text-terracota-dark mb-6">
              Formação acadêmica
            </h3>
            <TimelineList items={FORMACAO} />
          </div>
          <div>
            <h3 className="font-display text-xl text-terracota-dark mb-6">
              Experiência profissional
            </h3>
            <TimelineList items={TRAJETORIA} />
          </div>
        </div>
      </div>
    </section>
  );
}
