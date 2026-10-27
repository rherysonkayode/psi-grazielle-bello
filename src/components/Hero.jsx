import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Bolhas, Onda } from "./Decor";
import { LINKS, PESSOA } from "@/lib/site";

// Animações em CSS puro (globals.css): começam assim que a página é pintada,
// sem esperar o JavaScript — bom para a velocidade (LCP).
const atraso = (s) => ({ "--d": `${s}s` });

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-28 lg:pt-44 lg:pb-36">
      {/* Fundo suave, bolhas de aquário e os peixinhos da marca */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-azul-serenity-soft via-off-white to-azul-serenity-soft/60" />
      <div className="pointer-events-none absolute -top-24 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-azul-serenity/40 blur-3xl" />
      <Bolhas className="-z-10 text-azul-serenity" />

      <Image
        src="/images/logo-peixe.png"
        alt=""
        width={90}
        height={95}
        aria-hidden="true"
        className="pointer-events-none absolute left-[4%] top-32 -z-10 h-20 w-auto opacity-[0.3] animate-swim-a hidden sm:block"
      />
      <Image
        src="/images/logo-peixe.png"
        alt=""
        width={70}
        height={74}
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] bottom-24 -z-10 h-16 w-auto opacity-[0.26] animate-swim-b hidden sm:block"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-[1.08fr_0.92fr] gap-16 lg:gap-10 items-center">
        {/* Texto */}
        <div>
          <p className="entrar text-[13px] font-bold uppercase tracking-[0.18em] text-terracota-dark" style={atraso(0)}>
            {PESSOA.titulo} · {PESSOA.crp}
          </p>

          <h1
            className="entrar mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.12] text-azul-profundo-dark max-w-2xl"
            style={atraso(0.08)}
          >
            Entender{" "}
            <span className="relative isolate whitespace-nowrap">
              suas emoções
              {/* Grifo abóbora que se estende sob as palavras */}
              <span aria-hidden="true" className="grifo absolute inset-x-0 bottom-[0.06em] -z-10 h-[0.3em] rounded-full bg-abobora/55" />
            </span>
            {/* No computador, quebra depois de "emoções"; no celular, o texto quebra sozinho */}
            <br className="hidden sm:block" /> é o primeiro passo.
          </h1>

          <p className="entrar mt-7 text-lg leading-relaxed text-azul-profundo/90 max-w-lg" style={atraso(0.18)}>
            Acompanho crianças, adolescentes e adultos: desenvolvimento infantil, TEA e TDAH, luto e as emoções do dia a
            dia. Uno olhar clínico e pedagógico, com base em Análise do Comportamento Aplicada (ABA) e Terapia
            Cognitivo-Comportamental, para cuidar de você e da sua família com clareza e acolhimento.
          </p>

          <div className="entrar mt-10 flex flex-col sm:flex-row sm:items-center gap-5" style={atraso(0.3)}>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-terracota-dark hover:bg-terracota-deep text-off-white px-7 py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(200,117,82,0.55)]"
            >
              <MessageCircle size={18} strokeWidth={2.4} />
              Agendar uma conversa
            </a>

            <div className="text-sm leading-tight text-cinza-azulado">
              <p className="font-semibold text-azul-profundo-dark">{PESSOA.nomeCompleto}</p>
              <p>Online e presencial no Rio de Janeiro</p>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="foto-entrar relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute inset-0 translate-x-4 translate-y-5 bg-abobora/35 blob" />
          <div className="relative blob overflow-hidden border-[6px] border-off-white shadow-[0_30px_60px_-20px_rgba(53,108,125,0.35)]">
            <Image
              src="/images/grazielle-hero.jpg"
              alt="Grazielle Bello, psicóloga, sorrindo, sentada num sofá"
              width={1200}
              height={801}
              priority
              sizes="(min-width: 1024px) 470px, 384px"
              className="h-full w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>

      <Onda cor="var(--color-off-white)" />
    </section>
  );
}
