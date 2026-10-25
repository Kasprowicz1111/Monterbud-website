import Image from "next/image";
import { PROJECT_GALLERY } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Realizacje", "/realizacje");

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[0.7rem] uppercase tracking-[0.35em] text-accent">MONTERBUD</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] text-white md:text-6xl">
        Realizacje
      </h1>
      <div className="mt-6 h-px w-20 bg-accent" />
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/55">
        Fotografie z obiektów i produkcji MONTERBUD.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECT_GALLERY.map((item) => (
          <figure
            key={item.src}
            className={`relative overflow-hidden border border-white/10 ${
              item.span === "wide" ? "sm:col-span-2" : ""
            }`}
          >
            <div className="relative h-64 sm:h-80">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
