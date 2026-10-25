export const SITE = {
  name: "MONTERBUD",
  location: "Nowe Miasto Lubawskie",
  tagline: "Technologia. Precyzja. Doświadczenie.",
  motto: "PROJEKT • PRODUKCJA • MONTAŻ • SERWIS",
  description:
    "MONTERBUD — projekt, produkcja, montaż i serwis instalacji przemysłowych z Nowego Miasta Lubawskiego. Mieszalnie pasz, magazyny zboża, linie do produkcji peletu, CNC.",
  about:
    "MONTERBUD z Nowego Miasta Lubawskiego zajmuje się projektowaniem, produkcją, montażem i serwisem. W centrum działalności są mieszalnie pasz, magazyny zboża, linie do produkcji peletu, obróbka CNC oraz konstrukcje i wyposażenie dla rolnictwa.",
  contact: {
    email: "monterbud@monterbud.eu",
    phone: "660 588 721",
    phoneHref: "tel:+48660588721",
    street: "ul. Grunwaldzka 93",
    postal: "13-300 Nowe Miasto Lubawskie",
  },
} as const;

export const PROJECT_PHOTOS = [
  {
    src: "/realizacje/silosy.png",
    alt: "Bateria silosów zbożowych MONTERBUD",
    title: "Magazyny zboża",
    note: "Silosy i konstrukcje",
  },
  {
    src: "/realizacje/mieszalnia.png",
    alt: "Mieszalnia pasz — instalacja wewnętrzna MONTERBUD",
    title: "Mieszalnie pasz",
    note: "Instalacje kompletne",
  },
  {
    src: "/realizacje/przenosniki.png",
    alt: "Przenośniki ślimakowe i zbiorniki MONTERBUD",
    title: "Wyposażenie",
    note: "Przenośniki i zbiorniki",
  },
] as const;

export const CAPABILITIES = [
  {
    key: "projekt",
    title: "Projekt",
    text: "Przygotowanie instalacji i konstrukcji pod konkretne zadanie — od układu po wykonanie.",
  },
  {
    key: "produkcja",
    title: "Produkcja",
    text: "Wykonanie w zakładzie: zbiorniki, przenośniki, konstrukcje stalowe i elementy CNC.",
  },
  {
    key: "montaz",
    title: "Montaż",
    text: "Składanie i uruchamianie instalacji na obiekcie — silosy, transport surowców, mieszalnie.",
  },
  {
    key: "serwis",
    title: "Serwis",
    text: "Wsparcie po oddaniu: utrzymanie, korekty i dalsza współpraca przy rozbudowie.",
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
