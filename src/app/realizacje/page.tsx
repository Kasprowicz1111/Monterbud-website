import { SectionPage } from "@/components/content/SectionPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Realizacje", "/realizacje");

export default function ProjectsPage() {
  return <SectionPage title="Realizacje" />;
}
