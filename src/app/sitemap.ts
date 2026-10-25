import type { MetadataRoute } from "next";
import { metadataBase } from "@/lib/seo";
import { NAV_ITEMS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_ITEMS.map((item) => ({
    url: new URL(item.href, metadataBase).toString(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
