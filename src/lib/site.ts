export const SITE = {
  name: "MONTERBUD",
  location: "Nowe Miasto Lubawskie",
  tagline: "Technologia. Precyzja. Doświadczenie.",
  motto: "PROJEKT • PRODUKCJA • MONTAŻ • SERWIS",
  description:
    "MONTERBUD z Nowego Miasta Lubawskiego — projekt, produkcja, montaż i serwis. Realizacje obejmują zbiorniki, silosy i instalacje przemysłowe.",
  about:
    "MONTERBUD to firma z Nowego Miasta Lubawskiego działająca w branży przemysłowej. Projekt, produkcja, montaż i serwis to cztery filary działalności, które widać w prezentowanych realizacjach: zbiornikach, silosach i instalacjach technologicznych.",
  facebook: "https://www.facebook.com/monterbudnowemiastolub/?locale=pl_PL",
  instagram: "https://www.instagram.com/_monterbud_/",
  contact: {
    email: "monterbud@monterbud.eu",
    phone: "+48 660 588 721",
    phoneHref: "tel:+48660588721",
    street: "ul. Grunwaldzka 93",
    city: "Nowe Miasto Lubawskie",
    hoursShort: "Pon.–Pt. 7:00–15:00",
    hoursBar: "Poniedziałek–piątek, 7:00–15:00",
    hoursLong: "Poniedziałek–piątek: 7:00–15:00",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=ul.+Grunwaldzka+93%2C+Nowe+Miasto+Lubawskie",
  },
} as const;

export const CAPABILITIES = [
  {
    key: "projekt",
    title: "Projekt",
    text: "Przygotowanie układu instalacji i konstrukcji pod konkretne zadanie — od koncepcji po wykonanie.",
  },
  {
    key: "produkcja",
    title: "Produkcja",
    text: "Wykonanie elementów i zespołów w zakładzie: zbiorniki, silosy oraz konstrukcje towarzyszące instalacjom.",
  },
  {
    key: "montaz",
    title: "Montaż",
    text: "Składanie i uruchamianie instalacji na obiekcie — od konstrukcji wsporczych po kompletne układy magazynowania.",
  },
  {
    key: "serwis",
    title: "Serwis",
    text: "Wsparcie po oddaniu instalacji oraz dalsza współpraca przy utrzymaniu i rozbudowie.",
  },
] as const;

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
