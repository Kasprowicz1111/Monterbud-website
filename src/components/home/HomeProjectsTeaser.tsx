import Image from "next/image";
import Link from "next/link";
import { PROJECT_PHOTOS } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";

export function HomeProjectsTeaser() {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">
              Realizacje
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] text-white md:text-5xl">
              Nasze realizacje
            </h2>
            <div className="section-rule mt-6 w-20" />
          </Reveal>
          <Reveal delayMs={80}>
            <Link
              href="/realizacje"
              className="text-[0.68rem] tracking-[0.22em] text-white/70 uppercase transition-colors hover:text-accent"
            >
              Pełna galeria →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_PHOTOS.map((item, index) => (
            <Reveal
              key={item.src}
              delayMs={index * 50}
              className={item.span === "wide" ? "sm:col-span-2" : undefined}
            >
              <Link href="/realizacje" className="group block overflow-hidden border border-white/10">
                <div
                  className={`relative overflow-hidden ${
                    item.span === "tall" ? "h-80 md:h-[28rem]" : "h-64 md:h-80"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent opacity-80" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
