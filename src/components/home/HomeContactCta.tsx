import Link from "next/link";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";

export function HomeContactCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 bg-graphite">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(8_36_91_/_0.45),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">Kontakt</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[0.08em] text-white md:text-6xl">
            Porozmawiajmy o Twoim projekcie
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/58">
            Opisz instalację lub urządzenie — odpowiemy w sprawie projektu, produkcji
            lub montażu.
          </p>
        </Reveal>
        <Reveal delayMs={80}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.contact.phoneHref}
              className="inline-flex h-12 items-center justify-center bg-accent px-8 text-[0.68rem] font-semibold tracking-[0.22em] text-background uppercase transition-colors hover:bg-[#ffb020]"
            >
              {SITE.contact.phone}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center justify-center border border-white/18 px-8 text-[0.68rem] font-semibold tracking-[0.22em] text-white uppercase transition-colors hover:border-accent/70 hover:text-accent"
            >
              Formularz kontaktowy
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
