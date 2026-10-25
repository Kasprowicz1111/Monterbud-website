import { SectionPage } from "@/components/content/SectionPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Oferta", "/oferta");

export default function OfferPage() {
  return <SectionPage title="Oferta" />;
}
