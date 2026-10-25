import { BrandLogo } from "@/components/brand/BrandLogo";
import { SITE } from "@/lib/site";

type BrandMarkProps = {
  priority?: boolean;
};

export function BrandMark({ priority = false }: BrandMarkProps) {
  return (
    <span className="flex min-w-0 items-center gap-3 md:gap-4">
      <BrandLogo variant="nav" priority={priority} />
      <span className="hidden h-10 w-px shrink-0 bg-accent/80 sm:block" aria-hidden="true" />
      <span className="flex min-w-0 flex-col justify-center">
        <span className="font-display text-[1.08rem] leading-none font-semibold tracking-[0.2em] text-white sm:text-lg sm:tracking-[0.22em] md:text-[1.4rem] md:tracking-[0.2em]">
          {SITE.name}
        </span>
        <span className="mt-1.5 text-[0.52rem] leading-[1.4] font-medium tracking-[0.1em] text-muted uppercase sm:mt-2 sm:text-[0.6rem] sm:tracking-[0.14em] md:text-[0.64rem] md:tracking-[0.16em]">
          <span className="sm:hidden">
            PROJEKT • PRODUKCJA
            <br />
            MONTAŻ • SERWIS
          </span>
          <span className="hidden sm:inline">{SITE.motto}</span>
        </span>
      </span>
    </span>
  );
}
