"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521969541348?text=Ol%C3%A1%2C%20Grazielle!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20conversa.";
const INSTAGRAM_URL = "https://instagram.com/psicologagraziellebello";
const EMAIL_URL = "mailto:psigraziellebello@gmail.com";

const ALL_CONTACT_CTAS = [
  { label: "WhatsApp", url: WHATSAPP_URL },
  { label: "Instagram", url: INSTAGRAM_URL },
  { label: "E-mail", url: EMAIL_URL },
];

const FAQ = [
  {
    id: "tea-tdah",
    label: "Atende TEA e TDAH?",
    keywords: ["tea", "autis", "espectro", "tdah", "hiperativ", "desaten"],
    answer:
      "Sim! Trabalho com acompanhamento de crianças e adolescentes com Transtorno do Espectro Autista e TDAH, unindo Análise do Comportamento Aplicada (ABA) e orientação às famílias.",
  },
  {
    id: "modalidade",
    label: "Online ou presencial?",
    keywords: ["online", "presencial", "distanc", "video"],
    answer:
      "Atendo tanto online quanto presencial, aqui no Rio de Janeiro — o que for mais confortável pra vocês.",
  },
  {
    id: "primeira-consulta",
    label: "Como funciona a 1ª consulta?",
    keywords: ["primeira consulta", "como funciona", "primeiro atendimento", "como e a consulta", "comeca"],
    answer:
      "Tudo começa com uma conversa inicial pelo WhatsApp: você me conta brevemente o que está buscando e marcamos um encontro para nos conhecermos e definir os próximos passos.",
  },
  {
    id: "adultos",
    label: "Atende adultos também?",
    keywords: ["adulto"],
    answer:
      "Atendo adolescentes e adultos também, com base em Terapia Cognitivo-Comportamental (TCC), além do foco em desenvolvimento infantil.",
  },
  {
    id: "escola",
    label: "Trabalha com a escola da criança?",
    keywords: ["escola", "colegio", "professor", "pedagogic"],
    answer:
      "Sim, faço parceria com equipes escolares para alinhar estratégias entre a terapia e a sala de aula, favorecendo a inclusão.",
  },
  {
    id: "formacao",
    label: "Qual a formação dela?",
    keywords: ["quem e", "sobre voce", "formacao", "pedagogia", "psicologia", "crp", "registro"],
    answer:
      "Sou graduada em Psicologia pela UNISUAM, curso Pedagogia na UNICARIOCA e tenho pós-graduação em Análise do Comportamento Aplicada (ABA). CRP 05/81229.",
  },
  {
    id: "valores",
    label: "Valores e convênio",
    keywords: ["valor", "preco", "custa", "convenio", "plano de saude", "particular"],
    answer:
      "Essa parte eu prefiro confirmar direto com você, certinho pro seu caso.",
    cta: { label: "Falar no WhatsApp", url: WHATSAPP_URL },
  },
  {
    id: "agendar",
    label: "Quero agendar uma conversa",
    keywords: ["agendar", "marcar", "horario", "quero conversar", "whatsapp"],
    answer: "Ótimo! Vou adorar conversar com você.",
    cta: { label: "Falar no WhatsApp", url: WHATSAPP_URL },
  },
  {
    id: "redes-sociais",
    label: "Instagram da Grazielle",
    keywords: ["instagram", "insta", "redes sociais", "rede social", "facebook", "seguir"],
    answer: "Claro! Você pode me acompanhar no Instagram @psicologagraziellebello.",
    cta: { label: "Ver Instagram", url: INSTAGRAM_URL },
  },
  {
    id: "contato",
    label: "Meios de contato",
    keywords: [
      "como entro em contato",
      "como eu entro em contato",
      "como falo com voce",
      "como te contato",
      "formas de contato",
      "onde te encontro",
      "falar com",
      "contato",
    ],
    answer: "Pode falar comigo por qualquer um desses canais:",
    cta: ALL_CONTACT_CTAS,
  },
];

const QUICK_REPLIES = [
  "tea-tdah",
  "modalidade",
  "primeira-consulta",
  "contato",
  "valores",
  "agendar",
];

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function matchFAQ(text) {
  const n = normalize(text);
  let best = null;
  let bestScore = 0;
  for (const item of FAQ) {
    const score = item.keywords.reduce(
      (acc, kw) => (n.includes(normalize(kw)) ? acc + 1 : acc),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return bestScore > 0 ? best : null;
}

function LinkCta({ cta }) {
  if (!cta) return null;
  const list = Array.isArray(cta) ? cta : [cta];
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {list.map((c) => (
        <a
          key={c.url}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-terracota-dark hover:bg-terracota-deep text-off-white text-sm font-semibold px-4 py-2 transition-colors"
        >
          {c.label}
        </a>
      ))}
    </div>
  );
}

const FALLBACK_CTA = { label: "Falar no WhatsApp", url: WHATSAPP_URL };

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  function openChat() {
    setOpen(true);
    setMessages((prev) =>
      prev.length > 0
        ? prev
        : [
            {
              from: "bot",
              text: "Oi! Eu sou o assistente da Grazielle 🐟 Posso te ajudar com algumas dúvidas rápidas sobre o atendimento. Pode escolher uma opção ou escrever sua pergunta.",
              quickReplies: QUICK_REPLIES,
            },
          ]
    );
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function respondTo(userText, matchedItem) {
    const item = matchedItem ?? matchFAQ(userText);
    if (item) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: item.answer, cta: item.cta ?? null },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Não tenho certeza sobre isso, mas posso te colocar direto em contato com a Grazielle.",
          cta: FALLBACK_CTA,
        },
      ]);
    }
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
      <button
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label={open ? "Fechar assistente" : "Abrir assistente de dúvidas"}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-terracota-dark hover:bg-terracota-deep text-off-white shadow-[0_12px_28px_-8px_rgba(200,117,82,0.55)] transition-transform hover:scale-105"
      >
        {!open && (
          <span className="chat-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-terracota-dark" />
        )}
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Assistente de dúvidas"
          className="fixed bottom-24 right-6 z-50 flex h-[32rem] max-h-[75vh] w-[23rem] max-w-[92vw] flex-col overflow-hidden rounded-[28px] bg-off-white shadow-[0_30px_60px_-15px_rgba(38,79,92,0.35)]"
        >
          <div className="flex items-center gap-3 bg-azul-profundo-dark px-5 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-off-white/15">
              <Image src="/images/logo-peixe.png" alt="" width={26} height={28} className="h-6 w-auto" />
            </span>
            <div>
              <p className="font-display text-base text-off-white leading-tight">
                Assistente da Grazielle
              </p>
              <p className="text-xs text-off-white/70">Tira dúvidas rápidas sobre o atendimento</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
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
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Digite sua pergunta..."
                className="flex-1 rounded-full bg-bege-areia/60 px-4 py-2.5 text-[14.5px] text-azul-profundo-dark placeholder:text-cinza-azulado focus:outline-none focus:ring-2 focus:ring-azul-serenity"
              />
              <button
                onClick={handleSend}
                aria-label="Enviar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azul-profundo-dark text-off-white hover:bg-azul-profundo transition-colors"
              >
                <Send size={17} />
              </button>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-center text-[13px] text-cinza-azulado hover:text-terracota-dark transition-colors"
            >
              Prefere conversar direto? Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
