import { CAPABILITIES } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";

export function HomeCapabilities() {
  return (
    <section className="relative border-t border-white/8">
      <div className="industrial-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">
            Zakres
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] text-white md:text-5xl">
            Nasze obszary działania
          </h2>
          <div className="section-rule mt-6 w-20" />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item, index) => (
            <Reveal key={item.key} delayMs={index * 70} className="h-full">
              <article className="flex h-full flex-col bg-background px-6 py-8 md:px-7 md:py-10">
                <span className="font-display text-sm tracking-[0.28em] text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[0.14em] text-white uppercase">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
