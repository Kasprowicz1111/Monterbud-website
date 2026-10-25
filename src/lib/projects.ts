export const PROJECT_CATEGORIES = [
  { id: "silosy", label: "Zbiorniki i silosy" },
  { id: "mieszalnie", label: "Mieszalnie pasz" },
  { id: "konstrukcje", label: "Konstrukcje stalowe" },
  { id: "montaz", label: "Instalacje i montaż" },
  { id: "pozostale", label: "Pozostałe realizacje" },
] as const;

export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];

export type ProjectPhoto = {
  id: string;
  src: string;
  alt: string;
  category: ProjectCategoryId;
  albumId?: string;
  featured?: boolean;
  span: "wide" | "tall" | "normal";
  objectPosition?: string;
};

export type ProjectAlbum = {
  id: string;
  title: string;
  category: ProjectCategoryId;
  coverId: string;
  photoIds: string[];
};

export const HERO_PHOTO = {
  src: "/realizacje/hero-silos.png",
  alt: "Instalacja silosów zbożowych MONTERBUD",
} as const;

export const PROJECT_PHOTOS: ProjectPhoto[] = [
  {
    id: "hero-silos",
    src: "/realizacje/hero-silos.png",
    alt: "Bateria silosów z wieżą transportową",
    category: "silosy",
    albumId: "silosy-elewator",
    featured: true,
    span: "wide",
    objectPosition: "center 40%",
  },
  {
    id: "silosy-elewator",
    src: "/realizacje/silosy-elewator.png",
    alt: "Silosy przy hali z elewatorem",
    category: "silosy",
    albumId: "silosy-elewator",
    featured: true,
    span: "normal",
  },
  {
    id: "silosy-wieza",
    src: "/realizacje/silosy-wieza.png",
    alt: "Silos i konstrukcja wieży transportowej",
    category: "silosy",
    albumId: "silosy-elewator",
    span: "tall",
  },
  {
    id: "silosy-bateria",
    src: "/realizacje/silosy-bateria.png",
    alt: "Bateria silosów na konstrukcji stalowej",
    category: "silosy",
    featured: true,
    span: "tall",
  },
  {
    id: "silosy-rzad",
    src: "/realizacje/silosy-rzad.png",
    alt: "Rząd silosów przy budynku",
    category: "silosy",
    featured: true,
    span: "normal",
  },
  {
    id: "zbiorniki-logo",
    src: "/realizacje/zbiorniki-logo.png",
    alt: "Zbiorniki stożkowe z oznaczeniem MONTERBUD",
    category: "silosy",
    featured: true,
    span: "normal",
    objectPosition: "center 80%",
  },
  {
    id: "zbiorniki-para",
    src: "/realizacje/zbiorniki-para.png",
    alt: "Para zbiorników na konstrukcji wsporczej",
    category: "silosy",
    span: "normal",
  },
  {
    id: "silosy-hala",
    src: "/realizacje/silosy-hala.png",
    alt: "Silosy przy hali produkcyjnej",
    category: "silosy",
    span: "wide",
  },
  {
    id: "img-9495",
    src: "/realizacje/img_9495.jpg",
    alt: "Zbiornik na konstrukcji wsporczej przy hali",
    category: "silosy",
    span: "tall",
    objectPosition: "center 35%",
  },
  {
    id: "mieszalnia-hala",
    src: "/realizacje/mieszalnia-hala.png",
    alt: "Linia technologiczna w hali",
    category: "mieszalnie",
    featured: true,
    span: "wide",
  },
  {
    id: "mieszalnia",
    src: "/realizacje/mieszalnia.png",
    alt: "Instalacja mieszalni wewnątrz hali",
    category: "mieszalnie",
    albumId: "mieszalnia-wnetrze",
    featured: true,
    span: "normal",
  },
  {
    id: "mieszalnia-detal",
    src: "/realizacje/mieszalnia-detal.png",
    alt: "Zespół urządzeń mieszalni w hali",
    category: "mieszalnie",
    albumId: "mieszalnia-wnetrze",
    span: "normal",
  },
  {
    id: "podnosniki",
    src: "/realizacje/podnosniki.png",
    alt: "Zbiorniki i przenośnik kubełkowy w hali",
    category: "mieszalnie",
    span: "normal",
  },
  {
    id: "mieszalnia-hala-pelna",
    src: "/realizacje/mieszalnia-hala-pelna.jpg",
    alt: "Kompletna linia w hali",
    category: "mieszalnie",
    span: "wide",
  },
  {
    id: "mieszalnia-zbiornik",
    src: "/realizacje/mieszalnia-zbiornik.jpg",
    alt: "Zespół mieszający w hali",
    category: "mieszalnie",
    span: "normal",
  },
  {
    id: "mieszalnia-platforma",
    src: "/realizacje/mieszalnia-platforma.png",
    alt: "Urządzenie z platformą serwisową",
    category: "mieszalnie",
    span: "tall",
  },
  {
    id: "mieszalnia-konstrukcja",
    src: "/realizacje/mieszalnia-konstrukcja.png",
    alt: "Konstrukcja nośna instalacji w hali",
    category: "mieszalnie",
    span: "normal",
  },
  {
    id: "img-9488",
    src: "/realizacje/img_9488.jpg",
    alt: "Zbiornik stożkowy w hali",
    category: "mieszalnie",
    span: "tall",
  },
  {
    id: "konstrukcja-oznaczenie",
    src: "/realizacje/oznaczenie-konstrukcja.jpg",
    alt: "Element konstrukcji stalowej z oznaczeniem MONTERBUD",
    category: "konstrukcje",
    span: "normal",
    objectPosition: "center 40%",
  },
  {
    id: "montaz",
    src: "/realizacje/montaz.png",
    alt: "Montaż silosów na placu budowy",
    category: "montaz",
    featured: true,
    span: "normal",
  },
  {
    id: "przenosniki-slimakowe",
    src: "/realizacje/przenosniki-slimakowe.png",
    alt: "Przenośniki przygotowane do realizacji",
    category: "montaz",
    span: "wide",
    objectPosition: "center 60%",
  },
  {
    id: "silos-elewator-montaz",
    src: "/realizacje/silos-elewator-montaz.png",
    alt: "Montaż silosu z elewatorem przy budynku",
    category: "montaz",
    span: "tall",
    objectPosition: "center 30%",
  },
  {
    id: "montaz-zuraw",
    src: "/realizacje/montaz-zuraw.png",
    alt: "Montaż konstrukcji zbiornika przy dźwigu",
    category: "montaz",
    span: "normal",
  },
  {
    id: "przenosniki-zaklad",
    src: "/realizacje/przenosniki-zaklad.jpg",
    alt: "Przenośniki na placu zakładu",
    category: "montaz",
    span: "normal",
  },
  {
    id: "pojazd-przenosniki",
    src: "/realizacje/pojazd-przenosniki.jpg",
    alt: "Realizacja MONTERBUD",
    category: "pozostale",
    span: "normal",
  },
  {
    id: "sterowanie",
    src: "/realizacje/sterowanie.png",
    alt: "Realizacja MONTERBUD",
    category: "pozostale",
    span: "normal",
  },
  {
    id: "img-9496",
    src: "/realizacje/img_9496.jpg",
    alt: "Realizacja MONTERBUD",
    category: "pozostale",
    span: "wide",
    objectPosition: "center 70%",
  },
];

export const PROJECT_ALBUMS: ProjectAlbum[] = [
  {
    id: "silosy-elewator",
    title: "Silosy z elewatorem",
    category: "silosy",
    coverId: "hero-silos",
    photoIds: ["hero-silos", "silosy-elewator", "silosy-wieza"],
  },
  {
    id: "mieszalnia-wnetrze",
    title: "Mieszalnia w hali",
    category: "mieszalnie",
    coverId: "mieszalnia",
    photoIds: ["mieszalnia", "mieszalnia-detal"],
  },
];

export function getPhotoById(id: string) {
  return PROJECT_PHOTOS.find((photo) => photo.id === id);
}

export function getCategoryLabel(id: ProjectCategoryId) {
  return PROJECT_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

export function getAlbumById(id: string) {
  return PROJECT_ALBUMS.find((album) => album.id === id);
}

export function getAlbumPhotos(album: ProjectAlbum) {
  return album.photoIds
    .map((photoId) => getPhotoById(photoId))
    .filter((photo): photo is ProjectPhoto => Boolean(photo));
}

const HOME_PROJECT_IDS = [
  "hero-silos",
  "mieszalnia-hala",
  "silosy-bateria",
  "montaz",
  "zbiorniki-logo",
  "mieszalnia",
  "silosy-rzad",
] as const;

export const HOME_PROJECT_PHOTOS = HOME_PROJECT_IDS.flatMap((id) => {
  const photo = PROJECT_PHOTOS.find((item) => item.id === id);
  return photo ? [photo] : [];
});
