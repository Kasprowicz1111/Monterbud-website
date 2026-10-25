import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Kontakt", "/kontakt");

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[0.7rem] uppercase tracking-[0.35em] text-accent">MONTERBUD</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] text-white md:text-6xl">
        Kontakt
      </h1>
      <div className="mt-6 h-px w-20 bg-accent" />
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-base text-white/70">
          <p>
            <a className="hover:text-accent" href={SITE.contact.phoneHref}>
              {SITE.contact.phone}
            </a>
          </p>
          <p>
            <a className="hover:text-accent" href={`mailto:${SITE.contact.email}`}>
              {SITE.contact.email}
            </a>
          </p>
          <p>
            <a
              className="hover:text-accent"
              href={SITE.contact.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.contact.street}, {SITE.contact.city}
            </a>
          </p>
          <p>{SITE.contact.hoursLong}</p>
          <p>
            <a
              className="hover:text-accent"
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram @_monterbud_
            </a>
          </p>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-white/50">
          {SITE.motto}. Opisz potrzeby instalacji — odpowiemy w sprawie projektu,
          produkcji lub montażu.
        </p>
      </div>
    </section>
  );
}
