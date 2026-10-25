import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-24 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.35em] text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[0.1em] md:text-6xl">
        Strona nie istnieje
      </h1>
      <Link
        href="/"
        className="mt-10 w-fit text-sm uppercase tracking-[0.22em] text-accent transition-colors hover:text-white"
      >
        Wróć na stronę główną
      </Link>
    </section>
  );
}
