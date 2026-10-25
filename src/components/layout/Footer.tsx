import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { NAV_ITEMS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/8 bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr] md:px-8 lg:grid-cols-[1.4fr_0.9fr_1fr]">
        <div className="flex items-start gap-4">
          <BrandLogo variant="footer" />
          <div>
            <p className="font-display text-lg font-semibold tracking-[0.28em] text-white">
              {SITE.name}
            </p>
            <p className="mt-2 text-[0.65rem] tracking-[0.16em] text-muted uppercase">
              {SITE.motto}
            </p>
            <SocialLinks className="mt-5" size={16} showLabels />
          </div>
        </div>

        <div className="space-y-2 text-sm text-white/70">
          <p>
            <a className="transition-colors hover:text-accent" href={SITE.contact.phoneHref}>
              {SITE.contact.phone}
            </a>
          </p>
          <p>
            <a
              className="transition-colors hover:text-accent"
              href={`mailto:${SITE.contact.email}`}
            >
              {SITE.contact.email}
            </a>
          </p>
          <p>
            <a
              className="transition-colors hover:text-accent"
              href={SITE.contact.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.contact.street}
              <br />
              {SITE.contact.city}
            </a>
          </p>
          <p className="text-muted">{SITE.contact.hoursLong}</p>
        </div>

        <nav aria-label="Stopka">
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.7rem] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
