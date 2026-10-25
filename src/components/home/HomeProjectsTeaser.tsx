import Image from "next/image";
import Link from "next/link";
import { Expand } from "lucide-react";
import { getCategoryLabel, HOME_PROJECT_PHOTOS } from "@/lib/projects";
import { Reveal } from "@/components/home/Reveal";

export function HomeProjectsTeaser() {
  return (
    <section className="border-t border-white/8 bg-graphite">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">Realizacje</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] text-white md:text-5xl">
              Nasze realizacje
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              Wybrane fotografie z obiektów i produkcji MONTERBUD.
            </p>
            <div className="section-rule mt-6 w-20" />
          </Reveal>
          <Reveal delayMs={80}>
            <Link
              href="/realizacje"
              className="inline-flex h-12 items-center border border-white/16 px-6 text-[0.68rem] tracking-[0.22em] text-white uppercase transition-colors hover:border-accent/70 hover:text-accent"
            >
              Zobacz wszystkie realizacje
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_PROJECT_PHOTOS.map((item, index) => (
            <Reveal
              key={item.id}
              delayMs={index * 40}
              className={item.span === "wide" ? "h-full sm:col-span-2" : "h-full"}
            >
              <Link
                href="/realizacje"
                className={`group relative block h-full min-h-[18rem] overflow-hidden border border-white/10 bg-graphite sm:min-h-[20rem] ${
                  item.span === "wide" ? "lg:min-h-[24rem]" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                <Expand
                  size={16}
                  className="absolute top-3 right-3 text-white/80 opacity-0 transition-opacity group-hover:opacity-100"
                />
                <p className="absolute inset-x-0 bottom-0 p-4 text-[0.65rem] tracking-[0.18em] text-white/85 uppercase">
                  {getCategoryLabel(item.category)}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
