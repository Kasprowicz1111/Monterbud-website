import Link from "next/link";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";

export function HomeAbout() {
  return (
    <section className="border-t border-white/8 bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:py-28">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">O firmie</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] text-white md:text-5xl">
            Zakład przemysłowy
            <br />z Nowego Miasta
          </h2>
          <div className="section-rule mt-6 w-20" />
        </Reveal>
        <Reveal delayMs={90}>
          <p className="max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
            {SITE.about}
          </p>
          <Link
            href="/o-firmie"
            className="mt-8 inline-flex text-[0.68rem] tracking-[0.22em] text-white/70 uppercase transition-colors hover:text-accent"
          >
            Więcej o firmie →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
