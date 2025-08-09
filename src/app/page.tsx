import { SampleScoreCard } from "@/components/score-cards";
import { HeroText } from "@/components/text-animations";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero section */}
      <HeroSection />

      {/* Shop Broswer section*/}
    </main>
  );
}

const HeroSection = () => (
  <section className="mt-2 flex h-[calc(100svh-68px)] flex-col border p-3 md:mt-4 md:h-[calc(100vh-84px)] md:p-8">
    <div
      className="rellax will-change-transform transform-gpu flex h-full flex-col justify-center md:w-[80%]"
      data-rellax-speed="-2"
    >
      <HeroText
        className="text-center md:text-left"
        words="Your guide to the tastiest Kebab spots in Southampton."
      />
    </div>
    <div
      className="rellax will-change-transform transform-gpu z-10 flex h-full items-center justify-center p-4 md:justify-end"
      data-rellax-speed="1"
      data-rellax-zindex="1"
    >
      <SampleScoreCard />
    </div>
  </section>
);
