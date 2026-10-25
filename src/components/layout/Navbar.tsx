"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
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
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const isOpen = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuPath(null);
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`border-b border-white/8 bg-background/92 backdrop-blur-md transition-shadow ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="mx-auto flex min-h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-5 py-2.5 md:min-h-[5rem] md:px-8 md:py-3">
        <Link
          href="/"
          className="min-w-0 text-white transition-opacity hover:opacity-90"
          onClick={() => setMenuPath(null)}
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
                className={`relative text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors ${
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
          ref={closeButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setMenuPath((current) => (current === pathname ? null : pathname))}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          id={panelId}
          className="border-t border-white/8 bg-graphite px-5 py-4 lg:hidden"
          aria-label="Mobilne"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, index) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    className={`block py-3 text-sm uppercase tracking-[0.2em] ${
                      active ? "text-accent" : "text-white/80"
                    }`}
                    onClick={() => setMenuPath(null)}
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
