"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Send } from "lucide-react";
import { CTA_WHATSAPP, FAQ, RESPOSTAS_RAPIDAS, encontrarResposta } from "@/lib/faq";
import { LINKS, PESSOA } from "@/lib/site";

function LinkCta({ cta }) {
  if (!cta) return null;
  const list = Array.isArray(cta) ? cta : [cta];
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {list.map((c) => (
        <a
          key={c.url}
          href={c.url}
          {...(c.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center gap-1.5 rounded-full bg-terracota-dark hover:bg-terracota-deep text-off-white text-sm font-semibold px-4 py-2 transition-colors"
        >
          {c.label}
        </a>
      ))}
    </div>
  );
}

// Logo do WhatsApp (Simple Icons, CC0)
function WhatsAppIcone({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const painelRef = useRef(null);
  const inputRef = useRef(null);
  const botaoRef = useRef(null);

  function openChat() {
    setOpen(true);
    setMessages((prev) =>
      prev.length > 0
        ? prev
        : [
            {
              from: "bot",
              text: `Oi! Eu sou o assistente da ${PESSOA.primeiroNome} 🐟 Posso te ajudar com algumas dúvidas rápidas sobre o atendimento. Pode escolher uma opção ou escrever sua pergunta.`,
              quickReplies: RESPOSTAS_RAPIDAS,
            },
          ]
    );
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  // Ao abrir: foco no campo de texto (no celular, no painel, para não abrir o teclado sozinho).
  // Esc fecha e devolve o foco ao botão do assistente.
  useEffect(() => {
    if (!open) return;
    if (window.matchMedia("(pointer: fine)").matches) inputRef.current?.focus();
    else painelRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        botaoRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function respondTo(userText, matchedItem) {
    const item = matchedItem ?? encontrarResposta(userText);
    setMessages((prev) => [
      ...prev,
      item
        ? { from: "bot", text: item.answer, cta: item.cta ?? null }
        : {
            from: "bot",
            text: `Não tenho certeza sobre isso, mas posso te colocar direto em contato com a ${PESSOA.primeiroNome}.`,
            cta: CTA_WHATSAPP,
          },
    ]);
  }

  function handleQuickReply(id) {
    const item = FAQ.find((f) => f.id === id);
    if (!item) return;
    setMessages((prev) => [...prev, { from: "user", text: item.label }]);
    setTimeout(() => respondTo(item.label, item), 350);
  }

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTimeout(() => respondTo(text), 350);
  }

  return (
    <>
      {/* Botões fixos: WhatsApp (direto) acima do assistente */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar pelo WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-off-white bg-[#25D366] text-white shadow-[0_10px_24px_-6px_rgba(38,79,92,0.5)] transition-transform hover:scale-105"
        >
          <WhatsAppIcone className="h-7 w-7" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-azul-profundo-dark px-4 py-2 text-[13px] font-semibold text-off-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
            Agendar pelo WhatsApp
          </span>
        </a>

        <button
          ref={botaoRef}
          onClick={() => (open ? setOpen(false) : openChat())}
          aria-label={open ? "Fechar assistente" : "Abrir assistente de dúvidas"}
          aria-expanded={open}
          aria-controls="assistente-duvidas"
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-terracota-dark hover:bg-terracota-deep text-off-white shadow-[0_12px_28px_-8px_rgba(200,117,82,0.55)] transition-transform hover:scale-105"
        >
          {!open && <span className="chat-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-terracota-dark" />}
          {open ? <X size={24} /> : <MessageCircle size={24} />}
          {!open && (
            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-azul-profundo-dark px-4 py-2 text-[13px] font-semibold text-off-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
              Tirar dúvidas
            </span>
          )}
        </button>
      </div>

      {open && (
        <div
          ref={painelRef}
          id="assistente-duvidas"
          role="dialog"
          aria-label="Assistente de dúvidas"
          tabIndex={-1}
          className="fixed bottom-[9.5rem] right-4 sm:bottom-[10.5rem] sm:right-6 z-50 flex h-[32rem] max-h-[calc(100svh-11.5rem)] w-[23rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-[28px] bg-off-white shadow-[0_30px_60px_-15px_rgba(38,79,92,0.35)] focus:outline-none"
        >
          <div className="flex items-center gap-3 bg-azul-profundo-dark px-5 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-off-white/15">
              <Image src="/images/logo-peixe.png" alt="" width={26} height={28} className="h-6 w-auto" />
            </span>
            <div>
              <p className="font-display text-base text-off-white leading-tight">Assistente da {PESSOA.primeiroNome}</p>
              <p className="text-xs text-off-white/70">Tira dúvidas rápidas sobre o atendimento</p>
            </div>
          </div>

          <div ref={scrollRef} role="log" aria-live="polite" aria-label="Conversa" className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[85%]">
                  <div
                    className={
                      m.from === "user"
                        ? "rounded-2xl rounded-br-sm bg-terracota-dark text-off-white text-[14.5px] leading-relaxed px-4 py-2.5"
                        : "rounded-2xl rounded-bl-sm bg-bege-areia text-azul-profundo-dark text-[14.5px] leading-relaxed px-4 py-2.5"
                    }
                  >
                    {m.text}
                  </div>
                  {m.cta && <LinkCta cta={m.cta} />}
                  {m.quickReplies && (
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {m.quickReplies.map((id) => {
                        const item = FAQ.find((f) => f.id === id);
                        if (!item) return null;
                        return (
                          <button
                            key={id}
                            onClick={() => handleQuickReply(id)}
                            className="rounded-full border border-azul-serenity text-azul-profundo-dark text-[13px] px-3 py-1.5 hover:bg-azul-serenity-soft transition-colors"
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-azul-serenity/40 p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Digite sua pergunta..."
                aria-label="Sua pergunta"
                className="flex-1 rounded-full bg-bege-areia/60 px-4 py-2.5 text-[16px] text-azul-profundo-dark placeholder:text-cinza-azulado focus:outline-none focus:ring-2 focus:ring-azul-serenity"
              />
              <button
                onClick={handleSend}
                aria-label="Enviar"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-azul-profundo-dark text-off-white hover:bg-azul-profundo transition-colors"
              >
                <Send size={17} />
              </button>
            </div>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block py-1 text-center text-[13px] text-cinza-azulado hover:text-terracota-dark transition-colors"
            >
              Prefere conversar direto? Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
