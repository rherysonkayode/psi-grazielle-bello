import Link from "next/link";
import { CONTATO, LINKS, PESSOA } from "@/lib/site";

export const metadata = {
  title: "Política de privacidade | Grazielle Bello",
  description: "Como este site trata dados pessoais, em conformidade com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <main className="bg-off-white px-6 py-24 lg:py-32">
      <article className="mx-auto max-w-2xl text-[16.5px] leading-relaxed text-azul-profundo/90">
        <Link prefetch={false} href="/" className="text-sm font-semibold text-terracota-dark hover:text-terracota-deep">
          ← Voltar ao início
        </Link>
        <h1 className="mt-6 font-display text-4xl lg:text-5xl text-azul-profundo-dark">Política de privacidade</h1>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-display text-2xl text-azul-profundo-dark">Quem é a responsável</h2>
            <p className="mt-3">
              {PESSOA.nomeCompleto}, psicóloga, {PESSOA.crp}. Contato:{" "}
              <a href={LINKS.email} className="underline">
                {CONTATO.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-azul-profundo-dark">O que este site coleta</h2>
            <p className="mt-3">
              Este site não possui formulários, cadastro, ferramentas de análise de audiência nem cookies próprios. O
              assistente de dúvidas funciona apenas no seu navegador: o que você digita nele não é enviado nem
              armazenado.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-azul-profundo-dark">Serviços de terceiros</h2>
            <p className="mt-3">
              Ao clicar em links para WhatsApp, Instagram ou e-mail, você passa a usar esses serviços, sujeitos às
              respectivas políticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-azul-profundo-dark">Ao entrar em contato</h2>
            <p className="mt-3">
              As informações que você enviar pelo WhatsApp ou e-mail são usadas apenas para responder e agendar o
              atendimento, e são protegidas pelo sigilo profissional previsto no Código de Ética Profissional do
              Psicólogo. No primeiro contato, não é necessário descrever o motivo da procura.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-azul-profundo-dark">Seus direitos</h2>
            <p className="mt-3">
              Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar acesso, correção ou
              exclusão dos seus dados pelo e-mail acima.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
