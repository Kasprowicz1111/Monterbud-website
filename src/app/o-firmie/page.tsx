import { CAPABILITIES, SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("O firmie", "/o-firmie");

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[0.7rem] uppercase tracking-[0.35em] text-accent">MONTERBUD</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] text-white md:text-6xl">
        O firmie
      </h1>
      <div className="mt-6 h-px w-20 bg-accent" />
      <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
        {SITE.about}
      </p>
      <ul className="mt-12 grid gap-8 sm:grid-cols-2">
        {CAPABILITIES.map((item) => (
          <li key={item.key}>
            <p className="font-display text-xl tracking-[0.16em] text-white uppercase">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
