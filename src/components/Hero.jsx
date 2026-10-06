"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521969541348";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* Fundo suave */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-azul-serenity-soft via-off-white to-off-white" />
      <div className="pointer-events-none absolute -top-24 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-azul-serenity/40 blur-3xl" />

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
        className="pointer-events-none absolute right-[6%] bottom-20 -z-10 h-16 w-auto opacity-[0.26] animate-swim-b hidden sm:block"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-[1.08fr_0.92fr] gap-16 lg:gap-10 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.12] text-azul-profundo-dark max-w-xl">
            Entender o seu filho é o primeiro passo.
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-azul-profundo/90 max-w-lg">
            Sou psicóloga especializada em desenvolvimento infantil, TEA e
            TDAH. Uno olhar clínico e pedagógico, com base em Análise do
            Comportamento Aplicada (ABA), para apoiar sua família com clareza
            e acolhimento.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-terracota-dark hover:bg-terracota-deep text-off-white px-7 py-3.5 text-[15px] font-semibold transition-colors shadow-[0_8px_24px_-8px_rgba(200,117,82,0.55)]"
            >
              <MessageCircle size={18} strokeWidth={2.4} />
              Agendar uma conversa
            </a>

            <div className="text-sm leading-tight text-cinza-azulado">
              <p className="font-semibold text-azul-profundo-dark">
                Grazielle Moreira Bello
              </p>
              <p>Psicóloga · CRP 05/81229</p>
            </div>
          </div>
        </motion.div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-5 bg-abobora/35 blob" />
          <div className="relative blob overflow-hidden border-[6px] border-off-white shadow-[0_30px_60px_-20px_rgba(53,108,125,0.35)]">
            <Image
              src="/images/grazielle-hero.jpg"
              alt="Grazielle Bello, psicóloga, sorrindo"
              width={800}
              height={534}
              priority
              className="h-full w-full object-cover aspect-[4/5]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
