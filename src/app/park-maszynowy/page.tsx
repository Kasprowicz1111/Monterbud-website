import { SectionPage } from "@/components/content/SectionPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Park maszynowy", "/park-maszynowy");

export default function MachineryPage() {
  return <SectionPage title="Park maszynowy" />;
}
