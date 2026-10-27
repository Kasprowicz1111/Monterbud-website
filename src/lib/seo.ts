import type { Metadata } from "next";
import { SITE } from "@/lib/site";

const defaultProductionUrl = "https://monterbud.eu";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production" ? defaultProductionUrl : "http://localhost:3000");

export const metadataBase = new URL(siteUrl);

export const defaultMetadata: Metadata = {
  metadataBase,
  title: {
    default: `${SITE.name} | ${SITE.location}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "MONTERBUD",
    "Nowe Miasto Lubawskie",
    "silosy",
    "zbiorniki",
    "mieszalnie pasz",
    "instalacje przemysłowe",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.location}`,
    description: SITE.description,
    images: [
      {
        url: "/realizacje/hero-silos.png",
        alt: "Instalacja silosów MONTERBUD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.location}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function pageMetadata(title: string, path: string, description?: string): Metadata {
  const text = description ?? SITE.description;

  return {
    title,
    description: text,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description: text,
      url: path,
      locale: "pl_PL",
      siteName: SITE.name,
    },
  };
}
