"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand/BrandMark";
import { NAV_ITEMS } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 py-2.5 md:min-h-[4.75rem] md:px-8 md:py-3">
        <Link
          href="/"
          className="min-w-0 text-white transition-opacity hover:opacity-90"
          onClick={() => setIsOpen(false)}
        >
          <BrandMark priority />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Główne">
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);
            const isContact = item.href === "/kontakt";

            if (isContact) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-accent/80 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase transition-colors hover:bg-accent hover:text-background"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                  active ? "text-accent" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-white/8 bg-graphite px-5 py-4 lg:hidden"
          aria-label="Mobilne"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-3 text-sm uppercase tracking-[0.2em] ${
                      active ? "text-accent" : "text-white/80"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
