import Image from "next/image";
import Link from "next/link";
import { CAPABILITIES, SITE } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";

export function HomeAbout() {
  return (
    <section className="border-t border-white/8 bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">O firmie</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] text-white md:text-5xl">
              Projekt, produkcja,
              <br />
              montaż i serwis
            </h2>
            <div className="section-rule mt-6 w-20" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/62 md:text-lg">
              {SITE.about}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {CAPABILITIES.map((item, index) => (
              <Reveal key={item.key} delayMs={index * 60}>
                <article>
                  <p className="font-display text-sm tracking-[0.22em] text-accent">
                    0{index + 1} {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={120}>
            <Link
              href="/o-firmie"
              className="mt-10 inline-flex text-[0.68rem] tracking-[0.22em] text-white/70 uppercase transition-colors hover:text-accent"
            >
              Więcej o firmie →
            </Link>
          </Reveal>
        </div>
        <Reveal delayMs={80}>
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <Image
              src="/realizacje/silosy-elewator.png"
              alt="Silosy MONTERBUD przy hali z elewatorem"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
