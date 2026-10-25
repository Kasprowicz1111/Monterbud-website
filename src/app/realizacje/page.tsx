import { PageIntro } from "@/components/content/PageIntro";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Realizacje",
  "/realizacje",
  "Poznaj wybrane realizacje MONTERBUD — zbiorniki, silosy, mieszalnie pasz oraz montaż instalacji.",
);

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <PageIntro
        title="Nasze realizacje"
        description="Poznaj wybrane realizacje MONTERBUD."
      />
      <div className="mt-12">
        <ProjectGallery />
      </div>
    </section>
  );
}
