import { SampleScoreCard } from "@/components/score-cards";
import ShopList from "@/components/shop-list";
import { HeroText } from "@/components/text-animations";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section*/}
      <section className="mt-2 flex h-[calc(100svh-76px)] flex-col border p-3 md:mt-4 md:h-[calc(100vh-104px)] md:p-8">
        <div
          className="rellax flex h-full flex-col justify-center md:w-[80%]"
          data-rellax-speed="-2"
        >
          <HeroText
            className="text-center md:text-left"
            words="Your guide to the tastiest Kebab spots in Southampton."
          />
        </div>
        <div
          className="rellax z-10 flex h-full items-center justify-center p-4 md:justify-end"
          data-rellax-speed="1"
          data-rellax-zindex="1"
        >
          <SampleScoreCard />
        </div>
      </section>

      {/* Shop Broswer section*/}
      <section className="h-[200vh]">
        <ShopList />
      </section>
    </main>
  );
}
