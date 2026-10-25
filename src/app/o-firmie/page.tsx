import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/content/PageIntro";
import { CAPABILITIES, SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "O firmie",
  "/o-firmie",
  "MONTERBUD z Nowego Miasta Lubawskiego — projekt, produkcja, montaż i serwis instalacji przemysłowych.",
);

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <PageIntro title="O firmie" description={SITE.about} />

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-surface">
          <Image
            src="/realizacje/silosy-bateria.png"
            alt="Bateria silosów wykonana przez MONTERBUD"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[0.68rem] tracking-[0.28em] text-accent uppercase">Cztery filary</p>
          <ul className="mt-8 space-y-8">
            {CAPABILITIES.map((item, index) => (
              <li key={item.key} className="border-l border-accent/70 pl-5">
                <p className="font-display text-sm tracking-[0.2em] text-white/50">0{index + 1}</p>
                <h2 className="mt-1 font-display text-2xl tracking-[0.16em] text-white uppercase">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex h-12 items-center bg-accent px-7 text-[0.68rem] font-semibold tracking-[0.22em] text-background uppercase transition-colors hover:bg-[#ffb020]"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </section>
  );
}
