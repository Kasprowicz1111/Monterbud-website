export const SITE = {
  name: "MONTERBUD",
  location: "Nowe Miasto Lubawskie",
  tagline: "Technologia. Precyzja. Doświadczenie.",
  description:
    "MONTERBUD — firma przemysłowa z Nowego Miasta Lubawskiego. Technologia. Precyzja. Doświadczenie.",
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Start" },
  { href: "/o-firmie", label: "O firmie" },
  { href: "/oferta", label: "Oferta" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/park-maszynowy", label: "Park maszynowy" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
