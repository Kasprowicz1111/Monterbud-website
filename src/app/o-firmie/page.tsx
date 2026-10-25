import { SectionPage } from "@/components/content/SectionPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("O firmie", "/o-firmie");

export default function AboutPage() {
  return <SectionPage title="O firmie" />;
}
