import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/content/PageIntro";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Kontakt",
  "/kontakt",
  "Kontakt MONTERBUD: telefon, e-mail i adres w Nowym Mieście Lubawskim.",
);

export default function ContactPage() {
  const mailto = `mailto:${SITE.contact.email}?subject=${encodeURIComponent("Zapytanie — MONTERBUD")}`;

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <PageIntro
        title="Kontakt"
        description="Najszybszy kontakt to telefon lub wiadomość e-mail. Formularz na stronie pojawi się, gdy będzie działała realna wysyłka wiadomości."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <a
            href={SITE.contact.phoneHref}
            className="flex h-14 items-center justify-center gap-3 bg-accent text-[0.72rem] font-semibold tracking-[0.18em] text-background uppercase transition-colors hover:bg-[#ffb020] sm:justify-start sm:px-6"
          >
            <Phone size={16} />
            {SITE.contact.phone}
          </a>
          <a
            href={mailto}
            className="flex h-14 items-center justify-center gap-3 border border-white/16 text-[0.72rem] font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:border-accent/70 hover:text-accent sm:justify-start sm:px-6"
          >
            <Mail size={16} />
            {SITE.contact.email}
          </a>
        </div>

        <div className="space-y-5 border border-white/8 bg-graphite p-8 text-sm text-white/75">
          <p className="font-display text-lg tracking-[0.2em] text-white">{SITE.name}</p>
          <p className="flex items-start gap-3">
            <MapPin size={16} className="mt-0.5 text-accent" />
            <a
              href={SITE.contact.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {SITE.contact.street}
              <br />
              {SITE.contact.city}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <Clock3 size={16} className="text-accent" />
            {SITE.contact.hoursShort}
          </p>
          <SocialLinks size={16} showLabels className="pt-2" />
        </div>
      </div>
    </section>
  );
}
