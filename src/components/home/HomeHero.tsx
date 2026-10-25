"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { HERO_PHOTO } from "@/lib/projects";
import { SITE } from "@/lib/site";
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
          y: 18,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        });
        if (photo) {
          gsap.from(photo, {
            scale: 1.04,
            opacity: 0.7,
            duration: 1.05,
            ease: "power2.out",
          });
        }
      }, root);

      const onScroll = () => {
        if (!photo) {
          return;
        }
        const y = Math.min(window.scrollY, 420);
        gsap.set(photo, { y: y * 0.1 });
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
      className="relative isolate min-h-[calc(100dvh-7.5rem)] overflow-hidden md:min-h-[calc(100dvh-8.25rem)]"
    >
      <div data-hero-photo className="absolute inset-0">
        <Image
          src={HERO_PHOTO.src}
          alt={HERO_PHOTO.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] md:object-[58%_center]"
        />
      </div>
      <div className="hero-scrim pointer-events-none absolute inset-0" />
      <div className="industrial-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-7.5rem)] max-w-7xl items-end px-5 pb-14 md:min-h-[calc(100dvh-8.25rem)] md:items-center md:px-8 md:pb-20">
        <div className="max-w-3xl py-8 md:py-10">
          <p
            data-hero-copy
            className="text-[0.68rem] font-medium tracking-[0.38em] text-accent uppercase"
          >
            {SITE.location}
          </p>
          <h1
            data-hero-copy
            className="mt-4 font-display text-[clamp(3.4rem,11vw,8rem)] leading-[0.88] font-semibold tracking-[0.06em] text-white"
          >
            {SITE.name}
          </h1>
          <p
            data-hero-copy
            className="mt-6 max-w-xl text-[0.7rem] font-medium tracking-[0.18em] text-white/80 uppercase sm:text-[0.8rem] sm:tracking-[0.24em]"
          >
            {SITE.motto}
          </p>
          <span data-hero-copy className="mt-5 block h-px w-16 bg-accent" aria-hidden="true" />
          <p
            data-hero-copy
            className="mt-5 max-w-lg text-lg tracking-[0.05em] text-white/78 md:text-xl"
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
              className="inline-flex h-12 items-center justify-center border border-white/20 bg-black/25 px-7 text-[0.68rem] font-semibold tracking-[0.22em] text-white uppercase backdrop-blur-sm transition-colors hover:border-accent/70 hover:text-accent"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
