// Fonte única dos dados da Grazielle — altere aqui e o site inteiro se atualiza.

export const SITE_URL = "https://www.graziellebello.com.br";

export const PESSOA = {
  nome: "Grazielle Bello",
  nomeCompleto: "Grazielle Moreira Bello",
  primeiroNome: "Grazielle",
  titulo: "Psicóloga",
  crp: "CRP 05/81229",
  crpNumero: "05/81229",
};

export const CONTATO = {
  telefone: "(21) 96954-1348",
  telefoneE164: "+5521969541348",
  email: "psigraziellebello@gmail.com",
  instagram: "@psicologagraziellebello",
  cidade: "Rio de Janeiro",
  uf: "RJ",
};

const MENSAGEM_WHATSAPP = "Olá, Grazielle! Vim pelo site e gostaria de agendar uma conversa.";

export const LINKS = {
  whatsapp: `https://wa.me/5521969541348?text=${encodeURIComponent(MENSAGEM_WHATSAPP)}`,
  instagram: "https://instagram.com/psicologagraziellebello",
  email: `mailto:${CONTATO.email}`,
  telefone: `tel:${CONTATO.telefoneE164}`,
};
