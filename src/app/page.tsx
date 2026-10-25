import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4.75rem)] items-center overflow-hidden">
      <div className="industrial-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
        <h1 className="font-display text-[clamp(3.2rem,14vw,9.5rem)] leading-[0.9] font-semibold tracking-[0.08em] text-white">
          {SITE.name}
        </h1>
        <p className="mt-8 max-w-2xl text-lg tracking-[0.08em] text-white/75 md:text-2xl">
          {SITE.tagline}
        </p>
      </div>
    </section>
  );
}
