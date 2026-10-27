import { Brain, Users, GraduationCap, MessagesSquare, HeartHandshake } from "lucide-react";
import Revelar from "./Revelar";

const FEATURED = {
  icon: Brain,
  title: "Desenvolvimento infantil, TEA e TDAH",
  text: "Acompanhamento de crianças e adolescentes com Transtorno do Espectro Autista, TDAH e outras formas de neurodivergência, com intervenções baseadas em evidências e adaptadas à rotina de cada família.",
};

const ITEMS = [
  {
    icon: HeartHandshake,
    title: "Luto e perdas",
    text: "Acolhimento para crianças, adolescentes e adultos que atravessam a perda de alguém importante, respeitando o tempo de cada um — e orientação à família sobre como falar da perda com as crianças.",
  },
  {
    icon: Users,
    title: "Orientação a pais e famílias",
    text: "Encontros com responsáveis para entender comportamentos, alinhar estratégias em casa e fortalecer o vínculo familiar durante o processo.",
  },
  {
    icon: GraduationCap,
    title: "Parceria com escolas",
    text: "Comunicação com equipes pedagógicas para alinhar terapia e sala de aula, favorecendo a inclusão e o aprendizado.",
  },
  {
    icon: MessagesSquare,
    title: "Terapia Cognitivo-Comportamental",
    text: "Atendimento psicológico com base em TCC, para crianças, adolescentes e também adultos que busquem apoio emocional.",
  },
];

export default function Atuacao() {
  return (
    <section id="atuacao" className="bg-bege-areia/50 py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Revelar>
          <h2 className="font-display text-3xl lg:text-4xl leading-tight text-azul-profundo-dark max-w-md">
            Como posso apoiar você e sua família
          </h2>
        </Revelar>

        <Revelar
          atraso={0.1}
          className="cartao mt-14 rounded-[28px] bg-off-white border border-azul-serenity/60 p-9 lg:p-11 grid lg:grid-cols-[0.9fr_1.1fr] gap-7 items-start"
        >
          <div className="flex items-center gap-4">
            <span className="cartao-icone inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-azul-profundo-dark text-off-white">
              <FEATURED.icon size={24} strokeWidth={1.8} />
            </span>
            <h3 className="font-display text-2xl leading-snug text-azul-profundo-dark">{FEATURED.title}</h3>
          </div>
          <p className="text-[16px] leading-relaxed text-azul-profundo/85">{FEATURED.text}</p>
        </Revelar>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <Revelar key={title} atraso={0.08 * i}>
              {/* O "levantar" fica num elemento próprio para não brigar com a transição de entrada */}
              <div className="cartao h-full rounded-[28px] bg-off-white/70 p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(53,108,125,0.45)]">
                <span className="cartao-icone inline-flex h-12 w-12 items-center justify-center rounded-full bg-azul-serenity/50 text-azul-profundo-dark">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-xl text-azul-profundo-dark">{title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-cinza-azulado">{text}</p>
              </div>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
