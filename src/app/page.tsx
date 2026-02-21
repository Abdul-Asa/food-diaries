import { HeroPage } from "@/components/hero-content";
import { LandingSections } from "@/components/landing-sections";

export default function Home() {
  return (
    <>
      <HeroPage />
      <div className="mx-auto w-full max-w-6xl">
        <LandingSections />
      </div>
    </>
  );
}
