export const PROJECT_CATEGORIES = [
  { id: "silosy", label: "Zbiorniki i silosy" },
  { id: "mieszalnie", label: "Mieszalnie pasz" },
  { id: "montaz", label: "Instalacje i montaż" },
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
  },
  {
    id: "zbiorniki-para",
    src: "/realizacje/zbiorniki-para.png",
    alt: "Para zbiorników na konstrukcji wsporczej",
    category: "silosy",
    span: "normal",
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

/** Homepage teaser: mixed categories, limited count. */
export const HOME_PROJECT_PHOTOS = HOME_PROJECT_IDS.flatMap((id) => {
  const photo = PROJECT_PHOTOS.find((item) => item.id === id);
  return photo ? [photo] : [];
});
