import Image from "next/image";
import { SITE_LOGO } from "@/lib/site";

export type BrandLogoVariant = "nav" | "footer" | "loading";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  priority?: boolean;
  className?: string;
};

const frameClassName: Record<Exclude<BrandLogoVariant, "loading">, string> = {
  nav: "h-14 w-14 md:h-16 md:w-16",
  footer: "h-14 w-14 md:h-[4.5rem] md:w-[4.5rem]",
};

const variantSizes: Record<BrandLogoVariant, string> = {
  nav: "128px",
  footer: "144px",
  loading: "256px",
};

/**
 * Official MONTERBUD mark. Always object-contain so the full hexagon stays visible.
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
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden bg-graphite p-1 ${frameClassName[variant]} ${className}`.trim()}
    >
      <Image
        src={SITE_LOGO.src}
        alt={SITE_LOGO.alt}
        width={SITE_LOGO.width}
        height={SITE_LOGO.height}
        priority={priority}
        sizes={variantSizes[variant]}
        className="h-full w-full select-none object-contain"
      />
    </span>
  );
}
