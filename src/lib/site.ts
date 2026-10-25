export const SITE = {
  name: "MONTERBUD",
  location: "Nowe Miasto Lubawskie",
  tagline: "Technologia. Precyzja. Doświadczenie.",
  motto: "PROJEKT • PRODUKCJA • MONTAŻ • SERWIS",
  description:
    "MONTERBUD — firma przemysłowa z Nowego Miasta Lubawskiego. Technologia. Precyzja. Doświadczenie.",
} as const;

/** Official hexagonal mark. Intrinsic size matches public/logo.png (1206×1179). */
export const SITE_LOGO = {
  src: "/logo.png",
  width: 1206,
  height: 1179,
  alt: "Logo MONTERBUD — znak firmy przemysłowej",
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
