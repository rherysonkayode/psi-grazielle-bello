import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, AtSign, MapPin } from "lucide-react";
import { Bolhas } from "./Decor";
import { CONTATO, LINKS, PESSOA } from "@/lib/site";

const CANAIS = [
  { icon: MessageCircle, texto: CONTATO.telefone, href: LINKS.whatsapp, externo: true, rotulo: "WhatsApp" },
  { icon: Mail, texto: CONTATO.email, href: LINKS.email, rotulo: "E-mail" },
  { icon: AtSign, texto: CONTATO.instagram, href: LINKS.instagram, externo: true, rotulo: "Instagram" },
];

export default function Footer() {
  return (
    <footer id="contato" className="relative isolate overflow-hidden bg-azul-profundo-dark text-off-white/90 pt-16 pb-36 sm:pb-16 scroll-mt-20">
      <Bolhas className="-z-10 text-azul-serenity/40" quantas={4} />
      <Image
        src="/images/logo-peixe.png"
        alt=""
        width={64}
        height={68}
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-10 -z-10 h-14 w-auto opacity-[0.16] animate-swim-b hidden sm:block"
      />
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-12">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo-peixe.png" alt="" width={32} height={34} className="h-8 w-auto" />
            <p className="font-display text-2xl text-off-white">{PESSOA.nome}</p>
          </div>
          <p className="mt-2 text-off-white/70 max-w-sm leading-relaxed">
            Psicóloga: desenvolvimento infantil, TEA, TDAH, luto e Análise do Comportamento Aplicada.
          </p>
          <p className="mt-4 text-sm text-off-white/60">{PESSOA.crp}</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-off-white/60">
            Este site não é um serviço de emergência. Em situação de crise, ligue para o CVV no{" "}
            <a href="tel:188" className="underline underline-offset-2 hover:text-azul-serenity">188</a> (24h, gratuito) ou
            para o SAMU no <a href="tel:192" className="underline underline-offset-2 hover:text-azul-serenity">192</a>.
          </p>
        </div>

        <div className="text-[15px]">
          {CANAIS.map(({ icon: Icon, texto, href, externo, rotulo }) => (
            <a
              key={rotulo}
              href={href}
              {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={`${rotulo}: ${texto}`}
              className="flex min-h-11 items-center gap-3 hover:text-azul-serenity transition-colors"
            >
              <Icon size={18} strokeWidth={1.8} />
              {texto}
            </a>
          ))}
          <p className="flex min-h-11 items-center gap-3 text-off-white/70">
            <MapPin size={18} strokeWidth={1.8} className="shrink-0" />
            {CONTATO.cidade}, {CONTATO.uf} — atendimento online e presencial
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-12 pt-8 border-t border-off-white/15 flex flex-col sm:flex-row justify-between gap-3 text-sm text-off-white/60">
        <p>© {new Date().getFullYear()} {PESSOA.nome}. Todos os direitos reservados.</p>
        <Link prefetch={false} href="/privacidade" className="inline-block py-2 underline underline-offset-2 hover:text-azul-serenity">
          Política de privacidade
        </Link>
      </div>
    </footer>
  );
}
