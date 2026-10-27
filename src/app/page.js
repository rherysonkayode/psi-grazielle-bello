import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Atuacao from "@/components/Atuacao";
import ComoFunciona from "@/components/ComoFunciona";
import Formacao from "@/components/Formacao";
import Duvidas from "@/components/Duvidas";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { FAQ_SECAO } from "@/lib/faq";
import { CONTATO, LINKS, PESSOA, SITE_URL } from "@/lib/site";

// Dados estruturados (Schema.org) para o Google entender quem é, o que oferece e as dúvidas mais comuns
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#atendimento`,
      name: `${PESSOA.nome} — Psicóloga`,
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image.jpg`,
      description:
        "Atendimento psicológico para crianças, adolescentes e adultos, com base em Análise do Comportamento Aplicada (ABA) e Terapia Cognitivo-Comportamental: TEA, TDAH, desenvolvimento infantil e luto. Online e presencial no Rio de Janeiro.",
      telephone: CONTATO.telefoneE164,
      email: CONTATO.email,
      areaServed: [
        { "@type": "City", name: CONTATO.cidade },
        { "@type": "Country", name: "Brasil" },
      ],
      knowsAbout: [
        "Transtorno do Espectro Autista (TEA)",
        "TDAH",
        "Análise do Comportamento Aplicada (ABA)",
        "Terapia Cognitivo-Comportamental",
        "Desenvolvimento infantil",
        "Luto",
        "Orientação a pais",
      ],
      sameAs: [LINKS.instagram],
      founder: { "@id": `${SITE_URL}/#grazielle` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#grazielle`,
      name: PESSOA.nomeCompleto,
      jobTitle: "Psicóloga",
      identifier: { "@type": "PropertyValue", propertyID: "CRP", value: PESSOA.crpNumero },
      alumniOf: { "@type": "CollegeOrUniversity", name: "UNISUAM" },
      url: SITE_URL,
      sameAs: [LINKS.instagram],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_SECAO.map((f) => ({
        "@type": "Question",
        name: f.label,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Atuacao />
        <ComoFunciona />
        <Formacao />
        <Duvidas />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
