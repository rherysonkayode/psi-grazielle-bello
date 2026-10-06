import Image from "next/image";

const STEPS = [
  {
    n: "1",
    title: "Primeiro contato",
    text: "Você escreve pelo WhatsApp e conta, em poucas palavras, o que está buscando.",
  },
  {
    n: "2",
    title: "Conversa inicial",
    text: "Marcamos um encontro para nos conhecermos, entender a história da criança — ou a sua — e definir os próximos passos.",
  },
  {
    n: "3",
    title: "Acompanhamento",
    text: "Sessões regulares, com retorno constante à família sobre a evolução e os ajustes necessários no processo.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="atendimento" className="bg-off-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-display text-3xl lg:text-4xl leading-tight text-azul-profundo-dark max-w-md">
          Como funciona o atendimento
        </h2>

        <div className="mt-16 grid sm:grid-cols-3 gap-10 sm:gap-8">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="flex items-center gap-4 sm:block">
                <span className="font-display text-5xl text-azul-serenity leading-none">
                  {step.n}
                </span>
                <h3 className="sm:mt-5 text-lg font-bold text-azul-profundo-dark">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-[15.5px] leading-relaxed text-cinza-azulado max-w-xs">
                {step.text}
              </p>
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-6 left-[calc(100%+1rem)] w-[calc(2rem-0px)] h-px bg-azul-serenity" />
              )}
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden mt-16 rounded-[28px] bg-azul-profundo-dark px-8 py-10 lg:px-12 lg:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7">
          <Image
            src="/images/logo-peixe.png"
            alt=""
            width={60}
            height={64}
            aria-hidden="true"
            className="pointer-events-none absolute right-[14%] -top-3 h-14 w-auto opacity-[0.18] animate-swim-a hidden sm:block"
          />
          <p className="relative font-display text-2xl lg:text-[1.7rem] leading-snug text-off-white max-w-lg">
            Dê o primeiro passo para entender melhor o desenvolvimento do seu
            filho.
          </p>
          <a
            href="https://wa.me/5521969541348?text=Ol%C3%A1%2C%20Grazielle!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-terracota-dark hover:bg-terracota-deep text-off-white px-7 py-3.5 text-[15px] font-semibold transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
