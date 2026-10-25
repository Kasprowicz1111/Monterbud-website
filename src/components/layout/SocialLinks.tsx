import { Facebook, Instagram } from "lucide-react";
import { SITE } from "@/lib/site";

type SocialLinksProps = {
  size?: number;
  showLabels?: boolean;
  className?: string;
};

export function SocialLinks({
  size = 14,
  showLabels = false,
  className = "",
}: SocialLinksProps) {
  const items = [
    { href: SITE.facebook, label: "Facebook", Icon: Facebook },
    { href: SITE.instagram, label: "Instagram", Icon: Instagram },
  ] as const;

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-white/85 transition-colors hover:text-accent"
          aria-label={`${label} MONTERBUD`}
        >
          <Icon size={size} strokeWidth={1.75} />
          {showLabels ? <span className="hidden sm:inline">{label}</span> : null}
        </a>
      ))}
    </div>
  );
}
