import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeContactCta } from "@/components/home/HomeContactCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeProjectsTeaser } from "@/components/home/HomeProjectsTeaser";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeProjectsTeaser />
      <HomeContactCta />
    </>
  );
}
