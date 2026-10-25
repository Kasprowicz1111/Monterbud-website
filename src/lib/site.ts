export const SITE = {
  name: "MONTERBUD",
  location: "Nowe Miasto Lubawskie",
  tagline: "Technologia. Precyzja. Doświadczenie.",
  motto: "PROJEKT • PRODUKCJA • MONTAŻ • SERWIS",
  description:
    "MONTERBUD — projekt, produkcja, montaż i serwis instalacji przemysłowych z Nowego Miasta Lubawskiego. Mieszalnie pasz, magazyny zboża, linie do produkcji peletu, CNC.",
  about:
    "MONTERBUD z Nowego Miasta Lubawskiego zajmuje się projektowaniem, produkcją, montażem i serwisem. W centrum działalności są mieszalnie pasz, magazyny zboża, linie do produkcji peletu, obróbka CNC oraz konstrukcje i wyposażenie dla rolnictwa.",
  instagram: "https://www.instagram.com/_monterbud_/",
  contact: {
    email: "monterbud@monterbud.eu",
    phone: "+48 660 588 721",
    phoneHref: "tel:+48660588721",
    street: "ul. Grunwaldzka 93",
    city: "Nowe Miasto Lubawskie",
    hoursShort: "Pon.–Pt. 7:00–15:00",
    hoursLong: "Poniedziałek–piątek: 7:00–15:00",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=ul.+Grunwaldzka+93%2C+Nowe+Miasto+Lubawskie",
  },
} as const;

export const HERO_PHOTO = {
  src: "/realizacje/hero-silos.png",
  alt: "Instalacja silosów zbożowych MONTERBUD",
} as const;

export const PROJECT_PHOTOS = [
  {
    src: "/realizacje/hero-silos.png",
    alt: "Silosy zbożowe z wieżą transportową",
    span: "wide",
  },
  {
    src: "/realizacje/silosy-bateria.png",
    alt: "Bateria silosów na konstrukcji stalowej",
    span: "tall",
  },
  {
    src: "/realizacje/mieszalnia.png",
    alt: "Instalacja mieszalni pasz wewnątrz hali",
    span: "normal",
  },
  {
    src: "/realizacje/silosy-elewator.png",
    alt: "Silosy przy hali z elewatorem",
    span: "normal",
  },
  {
    src: "/realizacje/zbiorniki-logo.png",
    alt: "Zbiorniki ekspedycyjne MONTERBUD",
    span: "normal",
  },
  {
    src: "/realizacje/mieszalnia-hala.png",
    alt: "Linia technologiczna w hali produkcyjnej",
    span: "wide",
  },
] as const;

export const PROJECT_GALLERY = [
  ...PROJECT_PHOTOS,
  {
    src: "/realizacje/silosy-rzad.png",
    alt: "Rząd silosów przy budynku",
    span: "normal",
  },
  {
    src: "/realizacje/podnosniki.png",
    alt: "Zbiorniki i przenośnik kubełkowy",
    span: "normal",
  },
  {
    src: "/realizacje/zbiorniki-para.png",
    alt: "Para zbiorników na konstrukcji",
    span: "normal",
  },
  {
    src: "/realizacje/montaz.png",
    alt: "Montaż silosów na placu budowy",
    span: "normal",
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
