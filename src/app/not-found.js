import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Página não encontrada | Grazielle Bello",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-azul-serenity-soft to-off-white px-6 py-24">
      <Image
        src="/images/logo-peixe.png"
        alt=""
        width={90}
        height={95}
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[18%] h-16 w-auto opacity-[0.3] animate-swim-a hidden sm:block"
      />
      <Image
        src="/images/logo-peixe.png"
        alt=""
        width={70}
        height={74}
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] bottom-[20%] h-14 w-auto opacity-[0.26] animate-swim-b hidden sm:block"
      />

      <div className="relative max-w-md text-center">
        <Image
          src="/images/logo-peixe.png"
          alt=""
          width={72}
          height={76}
          className="mx-auto h-16 w-auto"
        />
        <h1 className="mt-6 font-display text-4xl text-azul-profundo-dark">
          Essa página não existe
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-azul-profundo/90">
          O endereço pode ter mudado ou estar digitado com algum erro. Você pode
          voltar para o início do site.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-terracota-dark px-7 py-3.5 text-[15px] font-semibold text-off-white transition-colors hover:bg-terracota-deep"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
