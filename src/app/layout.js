import { Frank_Ruhl_Libre, Nunito_Sans } from "next/font/google";
import "./globals.css";

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

const SITE_URL = "https://www.graziellebello.com.br";
const TITLE = "Grazielle Bello | Psicóloga infantil — TEA, TDAH e desenvolvimento";
const DESCRIPTION =
  "Atendimento psicológico infantil com base em Análise do Comportamento Aplicada (ABA) e Terapia Cognitivo-Comportamental. Agende uma conversa com Grazielle Bello, psicóloga no Rio de Janeiro.";

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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-off-white text-azul-profundo antialiased">
        {children}
      </body>
    </html>
  );
}
