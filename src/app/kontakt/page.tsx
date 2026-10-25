import { SectionPage } from "@/components/content/SectionPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Kontakt", "/kontakt");

export default function ContactPage() {
  return <SectionPage title="Kontakt" />;
}
