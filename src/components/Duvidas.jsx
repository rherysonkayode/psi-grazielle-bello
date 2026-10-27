import { Plus } from "lucide-react";
import Revelar from "./Revelar";
import { FAQ_SECAO } from "@/lib/faq";

// Perguntas frequentes visíveis na página (as mesmas respostas do assistente)
export default function Duvidas() {
  return (
    <section id="duvidas" className="bg-off-white py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
        <Revelar>
          <h2 className="font-display text-3xl lg:text-4xl leading-tight text-azul-profundo-dark">Dúvidas frequentes</h2>
          <div className="linha-desenhar-x mt-6 h-1 w-14 rounded-full bg-abobora" />
          <p className="mt-6 max-w-sm leading-relaxed text-cinza-azulado">
            Não encontrou o que procurava? O assistente no canto da tela ajuda, ou fale comigo pelo WhatsApp.
          </p>
        </Revelar>

        <Revelar atraso={0.12} className="divide-y divide-azul-serenity/60 border-y border-azul-serenity/60">
          {FAQ_SECAO.map((item) => (
            <details key={item.id} className="group py-1">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-3 font-display text-lg lg:text-xl text-azul-profundo-dark [&::-webkit-details-marker]:hidden">
                {item.label}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-azul-serenity/40 transition-transform duration-300 group-open:rotate-45">
                  <Plus size={18} strokeWidth={2} />
                </span>
              </summary>
              <p className="mb-4 pr-12 text-[16px] leading-relaxed text-cinza-azulado">{item.answer}</p>
            </details>
          ))}
        </Revelar>
      </div>
    </section>
  );
}
