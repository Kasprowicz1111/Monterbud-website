import { BrandLogo } from "@/components/brand/BrandLogo";

type LoadingScreenProps = {
  active?: boolean;
};

/**
 * Static shell of the loading overlay.
 * Animation targets are marked with data attributes for a future GSAP timeline.
 */
export function LoadingScreen({ active = false }: LoadingScreenProps) {
  if (!active) {
    return null;
  }

  return (
    <div
      data-loading-screen
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Ładowanie strony MONTERBUD"
    >
      <div className="flex flex-col items-center gap-5">
        <div data-loading-logo>
          <BrandLogo variant="loading" priority />
        </div>
        <p
          data-loading-mark
          className="font-display text-3xl font-semibold tracking-[0.28em] text-white md:text-5xl"
        >
          MONTERBUD
        </p>
        <span data-loading-rule className="h-px w-16 bg-accent" />
      </div>
    </div>
  );
}
