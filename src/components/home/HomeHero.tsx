"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { HERO_PHOTO, SITE } from "@/lib/site";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

export function HomeHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) {
      return;
    }

    let cancelled = false;
    let revert: (() => void) | undefined;

    void (async () => {
      const gsap = await getGsap();
      if (cancelled || !rootRef.current) {
        return;
      }

      const photo = root.querySelector("[data-hero-photo]");

      const ctx = gsap.context(() => {
        gsap.from("[data-hero-copy]", {
          y: 22,
          opacity: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: "power3.out",
        });
        if (photo) {
          gsap.from(photo, {
            scale: 1.06,
            opacity: 0.55,
            duration: 1.15,
            ease: "power2.out",
          });
        }
      }, root);

      const onScroll = () => {
        if (!photo) {
          return;
        }
        const y = Math.min(window.scrollY, 420);
        gsap.set(photo, { y: y * 0.12 });
      };
      window.addEventListener("scroll", onScroll, { passive: true });

      revert = () => {
        window.removeEventListener("scroll", onScroll);
        ctx.revert();
      };
    })();

    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-[calc(100dvh-6.5rem)] overflow-hidden"
    >
      <div data-hero-photo className="absolute inset-0">
        <Image
          src={HERO_PHOTO.src}
          alt={HERO_PHOTO.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
      </div>
      <div className="hero-scrim pointer-events-none absolute inset-0" />
      <div className="industrial-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-6.5rem)] max-w-7xl items-end px-5 pb-16 md:items-center md:px-8 md:pb-20">
        <div className="max-w-3xl py-10">
          <p
            data-hero-copy
            className="text-[0.68rem] font-medium tracking-[0.38em] text-accent uppercase"
          >
            {SITE.location}
          </p>
          <h1
            data-hero-copy
            className="mt-5 font-display text-[clamp(3.6rem,12vw,8.4rem)] leading-[0.86] font-semibold tracking-[0.06em] text-white"
          >
            {SITE.name}
          </h1>
          <p
            data-hero-copy
            className="mt-7 max-w-xl text-[0.72rem] font-medium tracking-[0.2em] text-white/78 uppercase sm:text-[0.82rem] sm:tracking-[0.26em]"
          >
            {SITE.motto}
          </p>
          <span data-hero-copy className="mt-5 block h-px w-16 bg-accent" aria-hidden="true" />
          <p
            data-hero-copy
            className="mt-5 max-w-lg text-lg tracking-[0.06em] text-white/78 md:text-xl"
          >
            {SITE.tagline}
          </p>
          <div data-hero-copy className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/realizacje"
              className="inline-flex h-12 items-center justify-center bg-accent px-7 text-[0.68rem] font-semibold tracking-[0.22em] text-background uppercase transition-colors hover:bg-[#ffb020]"
            >
              Zobacz realizacje
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center justify-center border border-white/20 bg-black/20 px-7 text-[0.68rem] font-semibold tracking-[0.22em] text-white uppercase backdrop-blur-sm transition-colors hover:border-accent/70 hover:text-accent"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
