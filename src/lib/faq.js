import { CONTATO, LINKS, PESSOA } from "./site";

// Perguntas usadas tanto na seção "Dúvidas" quanto no assistente (ChatBot).
// `naSecao: false` = aparece só no assistente.

export const CTA_WHATSAPP = { label: "Falar no WhatsApp", url: LINKS.whatsapp };

export const FAQ = [
  {
    id: "crise",
    label: "Estou em crise agora",
    naSecao: false,
    prioridade: true, // pedidos de ajuda em crise sempre vencem as outras respostas
    keywords: [
      "crise", "suicid", "me matar", "matar", "emergencia", "urgente", "urgencia", "nao aguento", "morrer",
      "nao quero mais viver", "nao quero viver", "desistir de viver", "sem vontade de viver",
      "tirar minha vida", "tirar a minha vida", "acabar com a minha vida", "acabar com minha vida", "acabar com tudo",
      "me cortar", "me cortando", "me cortado", "me corto", "me machucar", "me machucando", "me ferir",
      "autolesao", "automutila", "quero sumir", "sem saida",
    ],
    answer:
      "Se você está em sofrimento intenso agora, não espere: ligue para o CVV no 188 (gratuito, 24h) ou procure o SAMU (192) ou a emergência mais próxima. Quando puder, também estou disponível pelo WhatsApp.",
    cta: [{ label: "Ligar 188 (CVV)", url: "tel:188" }, CTA_WHATSAPP],
  },
  {
    id: "primeira-consulta",
    label: "Como funciona a primeira conversa?",
    keywords: ["primeira", "como funciona", "primeiro atendimento", "como e a consulta", "comeca", "comecar", "inicio"],
    answer:
      "Tudo começa com uma mensagem pelo WhatsApp: você me conta brevemente o que está buscando e marcamos um encontro para nos conhecermos, entender a história — da criança ou a sua — e definir os próximos passos.",
  },
  {
    id: "tea-tdah",
    label: "Atende TEA e TDAH?",
    keywords: ["tea", "autis", "espectro", "tdah", "hiperativ", "desaten", "neurodiverg", "atraso", "nao fala"],
    answer:
      "Sim! Acompanho crianças e adolescentes com Transtorno do Espectro Autista, TDAH e outras formas de neurodivergência, unindo Análise do Comportamento Aplicada (ABA) e orientação às famílias.",
  },
  {
    id: "luto",
    label: "Você atende luto?",
    keywords: ["luto", "perda", "perdi", "perdeu", "perder", "faleceu", "falecimento", "morte", "morreu", "saudade", "partida"],
    answer:
      "Sim. Acolho crianças, adolescentes e adultos que estão atravessando a perda de alguém importante, respeitando o tempo de cada um. Com as crianças, também oriento a família sobre como falar da perda de um jeito cuidadoso.",
  },
  {
    id: "aba",
    label: "O que é ABA?",
    keywords: ["aba", "analise do comportamento", "comportamento aplicada", "abordagem", "metodo"],
    answer:
      "A Análise do Comportamento Aplicada (ABA) é uma abordagem baseada em evidências que ajuda a desenvolver habilidades — como comunicação, autonomia e interação — a partir da rotina de cada criança, sempre com a família por perto.",
  },
  {
    id: "familia",
    label: "Os pais participam do atendimento?",
    keywords: ["pais", "mae", "pai", "familia", "responsave", "participar", "orientacao"],
    answer:
      "Sim, e isso faz toda a diferença. Tenho encontros de orientação com os responsáveis para entender os comportamentos, alinhar estratégias para casa e fortalecer o vínculo durante o processo.",
  },
  {
    id: "escola",
    label: "Você conversa com a escola?",
    keywords: ["escola", "colegio", "professor", "pedagogic", "creche", "sala de aula", "mediador"],
    answer:
      "Sim, faço parceria com as equipes escolares para alinhar as estratégias entre a terapia e a sala de aula, favorecendo a inclusão e o aprendizado.",
  },
  {
    id: "publico",
    label: "Atende crianças, adolescentes e adultos?",
    keywords: ["adulto", "adolescente", "crianca", "bebe", "idade", "anos", "quem atende", "jovem"],
    answer:
      "Sim. Atendo crianças, adolescentes e adultos. Com crianças pequenas, me conta a idade e o que você tem observado que eu te explico como posso ajudar.",
  },
  {
    id: "modalidade",
    label: "Online ou presencial?",
    keywords: ["online", "presencial", "distanc", "video", "chamada", "remoto"],
    answer: `Os dois. O atendimento online é feito por videochamada, e o presencial acontece no ${CONTATO.cidade}.`,
  },
  {
    id: "sigilo",
    label: "O que for conversado fica em sigilo?",
    keywords: ["sigilo", "segredo", "confidencial", "privacidade", "alguem vai saber"],
    answer:
      "Sim. O sigilo é um dever ético da psicologia, garantido pelo Código de Ética Profissional do Psicólogo — vale para o atendimento online e presencial.",
  },
  {
    id: "valores",
    label: "Valores e convênio",
    keywords: ["valor", "preco", "custa", "quanto e", "convenio", "plano de saude", "particular", "reembolso", "pagamento", "pagar", "pix", "cartao"],
    answer: "Essa parte eu prefiro conversar diretamente com você, para te passar tudo certinho para o seu caso.",
    cta: CTA_WHATSAPP,
  },
  {
    id: "local",
    label: "Onde é o atendimento?",
    naSecao: false,
    keywords: ["onde", "endereco", "bairro", "consultorio", "local", "fica", "zona"],
    answer: `Atendo online e presencialmente no ${CONTATO.cidade}. Me chama no WhatsApp que te passo o endereço e os horários disponíveis.`,
    cta: CTA_WHATSAPP,
  },
  {
    id: "duracao",
    label: "Quanto tempo dura?",
    naSecao: false,
    keywords: ["quanto tempo", "duracao", "dura o", "dura quanto", "durar", "minutos", "frequencia", "quantas sessoes", "vezes por semana"],
    answer: "A frequência e a duração do acompanhamento são combinadas na conversa inicial, de acordo com cada caso.",
  },
  {
    id: "documentos",
    label: "Você faz laudo ou relatório?",
    naSecao: false,
    keywords: ["laudo", "relatorio", "atestado", "declaracao", "documento", "avaliacao", "diagnostico"],
    answer:
      "Documentos psicológicos, como relatórios, dependem de cada caso e seguem as normas do Conselho Federal de Psicologia. Me conta pelo WhatsApp o que você precisa que eu te explico como funciona.",
    cta: CTA_WHATSAPP,
  },
  {
    id: "formacao",
    label: "Qual a sua formação?",
    naSecao: false,
    keywords: ["quem e", "sobre voce", "formacao", "formada", "pedagogia", "psicologia", "crp", "registro", "pos-graduacao", "pos graduacao", "posgraduacao", "especializacao"],
    answer: `Sou graduada em Psicologia pela UNISUAM, tenho pós-graduação em Análise do Comportamento Aplicada (ABA) e curso Pedagogia na UNICARIOCA. ${PESSOA.crp}.`,
  },
  {
    id: "agendar",
    label: "Quero agendar uma conversa",
    naSecao: false,
    keywords: ["agendar", "marcar", "horario", "quero conversar", "disponivel", "vaga", "consulta"],
    answer: "Que bom! Vou adorar conversar com você. Me manda uma mensagem e combinamos o melhor horário.",
    cta: CTA_WHATSAPP,
  },
  {
    id: "contato",
    label: "Meios de contato",
    naSecao: false,
    keywords: ["contato", "whatsapp", "zap", "telefone", "numero", "email", "e-mail", "instagram", "insta", "falar com"],
    answer: `Você me encontra pelo WhatsApp ${CONTATO.telefone}, pelo e-mail ${CONTATO.email} ou no Instagram ${CONTATO.instagram}.`,
    cta: [CTA_WHATSAPP, { label: "Instagram", url: LINKS.instagram }, { label: "E-mail", url: LINKS.email }],
  },
];

export const FAQ_SECAO = FAQ.filter((f) => f.naSecao !== false);

export const RESPOSTAS_RAPIDAS = ["primeira-consulta", "tea-tdah", "luto", "publico", "modalidade", "valores", "agendar"];

const normalizar = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

// A palavra-chave precisa começar no início de uma palavra ("tea" não casa com "ateal",
// "pos" não casa com "posso"), mas ainda funciona como prefixo ("autis" casa com "autismo").
function contem(texto, palavraChave) {
  const kw = normalizar(palavraChave);
  for (let i = texto.indexOf(kw); i !== -1; i = texto.indexOf(kw, i + 1)) {
    if (i === 0 || !/[a-z0-9]/.test(texto[i - 1])) return true;
  }
  return false;
}

// Em caso de empate vence o assunto que vem antes na lista
export function encontrarResposta(texto) {
  const n = normalizar(texto);
  let melhor = null;
  let melhorPontos = 0;
  for (const item of FAQ) {
    const pontos = item.keywords.reduce((acc, kw) => (contem(n, kw) ? acc + 1 : acc), 0);
    const peso = item.prioridade && pontos > 0 ? 100 : pontos;
    if (peso > melhorPontos) {
      melhorPontos = peso;
      melhor = item;
    }
  }
  return melhor;
}
