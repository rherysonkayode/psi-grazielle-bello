"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_URL = "https://wa.me/5521969541348";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-off-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(53,108,125,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-peixe.png"
            alt=""
            width={36}
            height={38}
            className="h-9 w-auto"
          />
          <span className="font-display text-xl text-azul-profundo-dark">
            Grazielle Bello
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9 text-[15px] text-azul-profundo-dark/90">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 hover:text-terracota-dark transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-terracota after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-terracota-dark hover:bg-terracota-deep text-off-white px-5 py-2.5 text-sm font-semibold transition-colors"
        >
          <MessageCircle size={16} strokeWidth={2.4} />
          Agendar conversa
        </a>

        <div className="md:hidden flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-terracota-dark text-off-white w-11 h-11"
            aria-label="Agendar conversa pelo WhatsApp"
          >
            <MessageCircle size={19} strokeWidth={2.4} />
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="inline-flex items-center justify-center rounded-full w-11 h-11 text-azul-profundo-dark"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-off-white/95 backdrop-blur-md border-t border-azul-serenity/40">
          <ul className="flex flex-col px-6 py-4 gap-1 text-[15px] text-azul-profundo-dark/90">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
