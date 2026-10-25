import type { Metadata } from "next";
import { SITE } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
    "mieszalnie pasz",
    "silosy",
    "magazyny zboża",
    "CNC",
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

export function pageMetadata(title: string, path: string): Metadata {
  return {
    title,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description: SITE.description,
      url: path,
      locale: "pl_PL",
      siteName: SITE.name,
    },
  };
}
