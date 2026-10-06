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

export const metadata = {
  title: "Grazielle Bello | Psicóloga infantil — TEA, TDAH e desenvolvimento",
  description:
    "Atendimento psicológico infantil com base em Análise do Comportamento Aplicada (ABA) e Terapia Cognitivo-Comportamental. Agende uma conversa com Grazielle Bello, psicóloga no Rio de Janeiro.",
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
