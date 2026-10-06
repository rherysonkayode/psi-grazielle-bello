import Image from "next/image";
import { Mail, MessageCircle, AtSign, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-azul-profundo-dark text-off-white/90 py-16">
      <Image
        src="/images/logo-peixe.png"
        alt=""
        width={64}
        height={68}
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-10 h-14 w-auto opacity-[0.16] animate-swim-b hidden sm:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-12">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo-peixe.png"
              alt=""
              width={32}
              height={34}
              className="h-8 w-auto"
            />
            <p className="font-display text-2xl text-off-white">Grazielle Bello</p>
          </div>
          <p className="mt-2 text-off-white/70 max-w-sm leading-relaxed">
            Psicóloga especializada em desenvolvimento infantil, TEA, TDAH e
            Análise do Comportamento Aplicada.
          </p>
          <p className="mt-4 text-sm text-off-white/50">
            CRP 05/81229
          </p>
        </div>

        <div className="space-y-4 text-[15px]">
          <a
            href="https://wa.me/5521969541348?text=Ol%C3%A1%2C%20Grazielle!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-azul-serenity transition-colors"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            (21) 96954-1348
          </a>
          <a
            href="mailto:psigraziellebello@gmail.com"
            className="flex items-center gap-3 hover:text-azul-serenity transition-colors"
          >
            <Mail size={18} strokeWidth={1.8} />
            psigraziellebello@gmail.com
          </a>
          <a
            href="https://instagram.com/psicologagraziellebello"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-azul-serenity transition-colors"
          >
            <AtSign size={18} strokeWidth={1.8} />
            @psicologagraziellebello
          </a>
          <p className="flex items-center gap-3 text-off-white/70">
            <MapPin size={18} strokeWidth={1.8} />
            Rio de Janeiro, RJ — atendimento online e presencial
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-12 pt-8 border-t border-off-white/15 text-sm text-off-white/50">
        © {new Date().getFullYear()} Grazielle Bello. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
