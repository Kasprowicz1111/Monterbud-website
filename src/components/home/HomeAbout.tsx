import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";

export function HomeAbout() {
  return (
    <section className="border-t border-white/8 bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">
              Poznaj MONTERBUD
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[0.08em] text-white md:text-5xl">
              Firma przemysłowa
              <br />z Nowego Miasta Lubawskiego
            </h2>
            <div className="section-rule mt-6 w-20" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {SITE.about}
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <Link
              href="/o-firmie"
              className="mt-10 inline-flex border border-white/16 px-6 py-3 text-[0.68rem] tracking-[0.22em] text-white uppercase transition-colors hover:border-accent/70 hover:text-accent"
            >
              Dowiedz się więcej
            </Link>
          </Reveal>
        </div>
        <Reveal delayMs={80}>
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-surface">
            <Image
              src="/realizacje/silosy-elewator.png"
              alt="Silosy MONTERBUD przy hali z elewatorem"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <span className="absolute top-0 left-0 h-full w-[3px] bg-accent" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
