import { Frank_Ruhl_Libre, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const display = Frank_Ruhl_Libre({
  variable: "--font-display-raw",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Nunito_Sans({
  variable: "--font-body-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const TITLE = "Grazielle Bello | Psicóloga — TEA, TDAH, desenvolvimento infantil e luto";
const DESCRIPTION =
  "Atendimento psicológico para crianças, adolescentes e adultos: TEA, TDAH, desenvolvimento infantil e luto, com base em ABA e Terapia Cognitivo-Comportamental. Online e presencial no Rio de Janeiro. Grazielle Bello, CRP 05/81229.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Grazielle Bello — Psicóloga",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#264F5C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-off-white text-azul-profundo antialiased">
        {/* Sem JavaScript, mostra todo o conteúdo que normalmente surge com animação */}
        <noscript>
          <style>{`.revelar{opacity:1!important;transform:none!important}.linha-desenhar,.linha-desenhar-x{transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
