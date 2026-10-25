type PageIntroProps = {
  kicker?: string;
  title: string;
  description?: string;
};

export function PageIntro({ kicker = "MONTERBUD", title, description }: PageIntroProps) {
  return (
    <header className="max-w-3xl">
      <p className="text-[0.7rem] tracking-[0.35em] text-accent uppercase">{kicker}</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[0.08em] text-white md:text-6xl">
        {title}
      </h1>
      <div className="mt-6 h-px w-20 bg-accent" />
      {description ? (
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </header>
  );
}
