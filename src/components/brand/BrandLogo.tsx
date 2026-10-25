import Image from "next/image";
import { SITE_LOGO } from "@/lib/site";

export type BrandLogoVariant = "nav" | "footer" | "loading";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  priority?: boolean;
  className?: string;
};

const variantClassName: Record<BrandLogoVariant, string> = {
  nav: "h-10 w-auto md:h-11",
  footer: "h-12 w-auto md:h-14",
  loading: "h-24 w-auto md:h-32",
};

const variantSizes: Record<BrandLogoVariant, string> = {
  nav: "40px",
  footer: "48px",
  loading: "128px",
};

/**
 * Official MONTERBUD mark for chrome and the future loading screen.
 * Dark charcoal in the source file is left intact so it sits on the graphite UI.
 */
export function BrandLogo({
  variant = "nav",
  priority = false,
  className = "",
}: BrandLogoProps) {
  return (
    <Image
      src={SITE_LOGO.src}
      alt={SITE_LOGO.alt}
      width={SITE_LOGO.width}
      height={SITE_LOGO.height}
      priority={priority}
      sizes={variantSizes[variant]}
      data-brand-logo={variant}
      className={`select-none object-contain ${variantClassName[variant]} ${className}`.trim()}
    />
  );
}
