import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Atuacao from "@/components/Atuacao";
import ComoFunciona from "@/components/ComoFunciona";
import Formacao from "@/components/Formacao";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
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
