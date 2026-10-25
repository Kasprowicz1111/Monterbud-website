import { BrandLogo } from "@/components/brand/BrandLogo";
import { SITE } from "@/lib/site";

type BrandMarkProps = {
  priority?: boolean;
};

export function BrandMark({ priority = false }: BrandMarkProps) {
  return (
    <span className="flex min-w-0 items-center gap-2.5 md:gap-3.5">
      <BrandLogo variant="nav" priority={priority} />
      <span
        className="hidden h-9 w-px shrink-0 bg-accent sm:block"
        aria-hidden="true"
      />
      <span className="flex min-w-0 flex-col justify-center">
        <span className="font-display text-[1.05rem] leading-none font-semibold tracking-[0.2em] text-white sm:text-lg sm:tracking-[0.24em] md:text-[1.35rem] md:tracking-[0.22em]">
          {SITE.name}
        </span>
        <span className="mt-1.5 text-[0.55rem] leading-[1.45] font-medium tracking-[0.12em] text-white/58 uppercase sm:mt-2 sm:text-[0.62rem] sm:tracking-[0.16em] md:text-[0.64rem] md:tracking-[0.18em]">
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
