import Image from "next/image";
import Link from "next/link";
import { PROJECT_PHOTOS } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";

export function HomeProjectsTeaser() {
  return (
    <section className="border-t border-white/8 bg-graphite">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">
              Realizacje
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] text-white md:text-5xl">
              Obiekty i instalacje
            </h2>
            <div className="section-rule mt-6 w-20" />
          </Reveal>
          <Reveal delayMs={80}>
            <Link
              href="/realizacje"
              className="text-[0.68rem] tracking-[0.22em] text-white/70 uppercase transition-colors hover:text-accent"
            >
              Przejdź do realizacji →
            </Link>
          </Reveal>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50">
          Zdjęcia z obiektów i placu MONTERBUD — silosy, mieszalnie i przenośniki.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PROJECT_PHOTOS.map((item, index) => (
            <Reveal key={item.src} delayMs={index * 80}>
              <article className="group overflow-hidden border border-white/10 bg-background">
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="border-t border-white/8 px-5 py-5">
                  <p className="font-display text-lg tracking-[0.16em] text-white uppercase">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.65rem] tracking-[0.18em] text-white/40 uppercase">
                    {item.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
