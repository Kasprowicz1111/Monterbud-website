import Link from "next/link";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";

export function HomeContactCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(245_158_11_/_0.08),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">Kontakt</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[0.08em] text-white md:text-6xl">
            Zapytanie ofertowe
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/58">
            Opisz instalację lub urządzenie — odpowiemy w sprawie projektu, produkcji
            lub montażu.
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1 text-sm text-white/60">
              <p>{SITE.contact.street}</p>
              <p>{SITE.contact.postal}</p>
              <p>
                <a className="hover:text-accent" href={SITE.contact.phoneHref}>
                  {SITE.contact.phone}
                </a>
                {" · "}
                <a className="hover:text-accent" href={`mailto:${SITE.contact.email}`}>
                  {SITE.contact.email}
                </a>
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center justify-center bg-accent px-8 text-[0.68rem] font-semibold tracking-[0.22em] text-background uppercase transition-colors hover:bg-[#ffb020]"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
