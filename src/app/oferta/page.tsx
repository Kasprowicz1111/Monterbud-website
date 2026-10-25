import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/content/PageIntro";
import { CAPABILITIES } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Oferta",
  "/oferta",
  "Oferta MONTERBUD: projekt, produkcja, montaż i serwis instalacji przemysłowych.",
);

const EXAMPLES = [
  {
    title: "Zbiorniki i silosy",
    text: "Magazynowanie i ekspedycja — fotografie dokumentują baterie silosów, zbiorniki stożkowe i konstrukcje wsporcze.",
    src: "/realizacje/silosy-bateria.png",
    alt: "Bateria silosów MONTERBUD",
  },
  {
    title: "Mieszalnie pasz",
    text: "Linie technologiczne w halach: zbiorniki, przenośniki i zespoły mieszające widoczne na realizacjach.",
    src: "/realizacje/mieszalnia-hala.png",
    alt: "Linia mieszalni pasz",
  },
  {
    title: "Montaż na obiekcie",
    text: "Składanie instalacji w terenie — od konstrukcji wsporczych po kompletne układy silosów.",
    src: "/realizacje/montaz.png",
    alt: "Montaż silosów",
  },
];

export default function OfferPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <PageIntro
        title="Oferta"
        description="Zakres współpracy opiera się na czterech obszarach: projekcie, produkcji, montażu i serwisie. Poniższe przykłady wynikają z rzeczywistych fotografii realizacji — bez katalogu niepotwierdzonych parametrów."
      />

      <ol className="mt-14 grid gap-8 md:grid-cols-2">
        {CAPABILITIES.map((item, index) => (
          <li key={item.key} className="border border-white/8 bg-graphite p-8">
            <p className="font-display text-3xl text-accent/80">0{index + 1}</p>
            <h2 className="mt-3 font-display text-2xl tracking-[0.16em] text-white uppercase">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-20 font-display text-3xl tracking-[0.1em] text-white">
        Przykłady z realizacji
      </h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {EXAMPLES.map((item) => (
          <article key={item.title} className="overflow-hidden border border-white/8 bg-surface">
            <div className="relative h-56">
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg tracking-[0.12em] text-white uppercase">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/kontakt"
        className="mt-12 inline-flex h-12 items-center bg-accent px-7 text-[0.68rem] font-semibold tracking-[0.22em] text-background uppercase transition-colors hover:bg-[#ffb020]"
      >
        Zapytaj o współpracę
      </Link>
    </section>
  );
}
