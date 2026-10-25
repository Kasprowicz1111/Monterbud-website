type SectionPageProps = {
  kicker?: string;
  title: string;
};

export function SectionPage({ kicker = "MONTERBUD", title }: SectionPageProps) {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-16 md:px-8 md:py-24">
      <p className="text-[0.7rem] uppercase tracking-[0.35em] text-accent">{kicker}</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] text-white md:text-6xl">
        {title}
      </h1>
      <div className="mt-6 h-px w-20 bg-accent" />
      <p className="mt-10 max-w-xl text-sm uppercase tracking-[0.18em] text-white/45">
        Treść tej sekcji zostanie uzupełniona w kolejnym etapie.
      </p>
    </section>
  );
}
