import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Atuacao from "@/components/Atuacao";
import ComoFunciona from "@/components/ComoFunciona";
import Formacao from "@/components/Formacao";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const SITE_URL = "https://www.graziellebello.com.br";
const INSTAGRAM_URL = "https://instagram.com/psicologagraziellebello";

// Dados estruturados (Schema.org) para o Google entender quem é e o que oferece
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#atendimento`,
      name: "Grazielle Bello — Psicóloga",
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image.jpg`,
      description:
        "Atendimento psicológico infantil com base em Análise do Comportamento Aplicada (ABA) e Terapia Cognitivo-Comportamental, com foco em TEA, TDAH e desenvolvimento infantil.",
      telephone: "+55 21 96954-1348",
      email: "psigraziellebello@gmail.com",
      areaServed: { "@type": "City", name: "Rio de Janeiro" },
      knowsAbout: [
        "Transtorno do Espectro Autista (TEA)",
        "TDAH",
        "Análise do Comportamento Aplicada (ABA)",
        "Terapia Cognitivo-Comportamental",
        "Desenvolvimento infantil",
      ],
      sameAs: [INSTAGRAM_URL],
      founder: { "@id": `${SITE_URL}/#grazielle` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#grazielle`,
      name: "Grazielle Moreira Bello",
      jobTitle: "Psicóloga",
      identifier: { "@type": "PropertyValue", propertyID: "CRP", value: "05/81229" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "UNISUAM" },
      url: SITE_URL,
      sameAs: [INSTAGRAM_URL],
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
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
