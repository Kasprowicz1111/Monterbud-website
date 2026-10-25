import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { SITE } from "@/lib/site";

export function TopBar() {
  return (
    <div className="border-b border-white/8 bg-graphite text-white">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-5 text-[0.68rem] tracking-[0.04em] md:h-10 md:px-8">
        <SocialLinks size={14} />

        <div className="hidden min-w-0 items-center gap-5 xl:flex">
          <a
            href={SITE.contact.phoneHref}
            className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-accent"
          >
            <Phone size={13} strokeWidth={1.75} />
            {SITE.contact.phone}
          </a>
          <a
            href={`mailto:${SITE.contact.email}`}
            className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-accent"
          >
            <Mail size={13} strokeWidth={1.75} />
            {SITE.contact.email}
          </a>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Clock3 size={13} strokeWidth={1.75} />
            {SITE.contact.hoursBar}
          </span>
          <a
            href={SITE.contact.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-accent"
          >
            <MapPin size={13} strokeWidth={1.75} />
            {SITE.contact.street}, {SITE.contact.city}
          </a>
        </div>

        <div className="hidden min-w-0 items-center gap-4 lg:flex xl:hidden">
          <a
            href={SITE.contact.phoneHref}
            className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-accent"
          >
            <Phone size={13} strokeWidth={1.75} />
            {SITE.contact.phone}
          </a>
          <a
            href={`mailto:${SITE.contact.email}`}
            className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-accent"
          >
            <Mail size={13} strokeWidth={1.75} />
            {SITE.contact.email}
          </a>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Clock3 size={13} strokeWidth={1.75} />
            {SITE.contact.hoursShort}
          </span>
        </div>

        <a
          href={SITE.contact.phoneHref}
          className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-accent lg:hidden"
        >
          <Phone size={13} strokeWidth={1.75} />
          {SITE.contact.phone}
        </a>
      </div>
    </div>
  );
}
