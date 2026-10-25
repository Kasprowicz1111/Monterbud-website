import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { NAV_ITEMS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/8 bg-graphite">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <BrandLogo variant="footer" />
          <div>
            <p className="font-display text-lg font-semibold tracking-[0.28em] text-white">
              {SITE.name}
            </p>
            <p className="mt-2 text-sm text-white/55">{SITE.location}</p>
          </div>
        </div>

        <nav aria-label="Stopka">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
