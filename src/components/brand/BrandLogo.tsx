import Image from "next/image";
import { SITE_LOGO } from "@/lib/site";

export type BrandLogoVariant = "nav" | "footer" | "loading";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  priority?: boolean;
  className?: string;
};

const frameClassName: Record<Exclude<BrandLogoVariant, "loading">, string> = {
  nav: "h-11 w-11 md:h-12 md:w-12",
  footer: "h-12 w-12 md:h-14 md:w-14",
};

const variantSizes: Record<BrandLogoVariant, string> = {
  nav: "96px",
  footer: "112px",
  loading: "256px",
};

/**
 * Official MONTERBUD mark.
 * Nav/footer sit in a graphite plate so the PNG's dark square reads as a badge,
 * not a loose image. Loading keeps the full artwork for the future intro.
 */
export function BrandLogo({
  variant = "nav",
  priority = false,
  className = "",
}: BrandLogoProps) {
  if (variant === "loading") {
    return (
      <Image
        src={SITE_LOGO.src}
        alt={SITE_LOGO.alt}
        width={SITE_LOGO.width}
        height={SITE_LOGO.height}
        priority={priority}
        sizes={variantSizes.loading}
        data-brand-logo={variant}
        className={`h-24 w-auto select-none object-contain md:h-32 ${className}`.trim()}
      />
    );
  }

  return (
    <span
      data-brand-logo={variant}
      className={`relative inline-flex shrink-0 overflow-hidden rounded-[0.4rem] border border-white/14 bg-[#12171d] shadow-[inset_0_0_0_1px_rgba(245,158,11,0.22)] ${frameClassName[variant]} ${className}`.trim()}
    >
      <Image
        src={SITE_LOGO.src}
        alt={SITE_LOGO.alt}
        width={SITE_LOGO.width}
        height={SITE_LOGO.height}
        priority={priority}
        sizes={variantSizes[variant]}
        className="absolute inset-[-10%] h-[120%] w-[120%] max-w-none select-none object-cover"
      />
    </span>
  );
}
