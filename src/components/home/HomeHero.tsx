import Image from "next/image";
import Link from "next/link";
import { PROJECT_PHOTOS, SITE } from "@/lib/site";

const heroPhoto = PROJECT_PHOTOS[0];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-vignette pointer-events-none absolute inset-0 z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px bg-linear-to-r from-transparent via-accent/80 to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image
          src={heroPhoto.src}
          alt=""
          fill
          priority
          sizes="58vw"
          className="object-cover object-[62%_center] opacity-55"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/55 to-background/20" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100dvh-4.75rem)] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:py-10">
        <div>
          <p
            className="hero-rise text-[0.68rem] font-medium tracking-[0.38em] text-accent uppercase"
            style={{ animationDelay: "40ms" }}
          >
            {SITE.location}
          </p>
          <h1
            className="hero-rise mt-5 font-display text-[clamp(3.4rem,11vw,8.2rem)] leading-[0.86] font-semibold tracking-[0.06em] text-white"
            style={{ animationDelay: "120ms" }}
          >
            {SITE.name}
          </h1>
          <p
            className="hero-rise mt-7 max-w-xl text-[0.72rem] font-medium tracking-[0.22em] text-white/70 uppercase sm:text-[0.8rem] sm:tracking-[0.28em]"
            style={{ animationDelay: "220ms" }}
          >
            {SITE.motto}
          </p>
          <span
            className="hero-rise mt-5 block h-px w-16 bg-accent"
            style={{ animationDelay: "280ms" }}
            aria-hidden="true"
          />
          <p
            className="hero-rise mt-5 max-w-lg text-lg tracking-[0.06em] text-white/72 md:text-xl"
            style={{ animationDelay: "340ms" }}
          >
            {SITE.tagline}
          </p>
          <p
            className="hero-rise mt-4 max-w-lg text-sm leading-relaxed text-white/48 md:text-[0.95rem]"
            style={{ animationDelay: "400ms" }}
          >
            Mieszalnie pasz, magazyny zboża, linie do produkcji peletu i CNC —
            od projektu po serwis.
          </p>
          <div
            className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "480ms" }}
          >
            <Link
              href="/realizacje"
              className="inline-flex h-12 items-center justify-center bg-accent px-7 text-[0.68rem] font-semibold tracking-[0.22em] text-background uppercase transition-colors hover:bg-[#ffb020]"
            >
              Zobacz realizacje
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center justify-center border border-white/18 px-7 text-[0.68rem] font-semibold tracking-[0.22em] text-white uppercase transition-colors hover:border-accent/70 hover:text-accent"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>

        <div
          className="hero-rise relative mx-auto w-full max-w-xl lg:max-w-none"
          style={{ animationDelay: "280ms" }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div className="relative aspect-[4/5] min-h-[22rem] w-full sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[28rem]">
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-black/15" />
              <p className="absolute right-4 bottom-4 left-4 text-[0.62rem] tracking-[0.2em] text-white/70 uppercase">
                {heroPhoto.title} • {heroPhoto.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
