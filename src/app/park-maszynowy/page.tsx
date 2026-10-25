import Link from "next/link";
import { PageIntro } from "@/components/content/PageIntro";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Park maszynowy",
  "/park-maszynowy",
  "Park maszynowy MONTERBUD — lista wyposażenia zostanie uzupełniona po potwierdzeniu danych.",
);

export default function MachineryPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <PageIntro
        title="Park maszynowy"
        description="Szczegółowy wykaz maszyn, producentów i parametrów pojawi się po zebraniu potwierdzonych informacji z zakładu. Nie publikujemy tu niepotwierdzonej listy urządzeń."
      />
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
        O zakresie produkcji i montażu można rozmawiać na podstawie konkretnego projektu oraz
        zdjęć realizacji.
      </p>
      <Link
        href="/kontakt"
        className="mt-10 inline-flex h-12 items-center border border-white/16 px-7 text-[0.68rem] tracking-[0.22em] text-white uppercase transition-colors hover:border-accent/70 hover:text-accent"
      >
        Skontaktuj się z nami
      </Link>
    </section>
  );
}
