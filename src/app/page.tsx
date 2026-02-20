import Link from "next/link";
import { ReviewGrid } from "@/components/review-grid";
import { SampleScoreCard } from "@/components/score-cards";
import { HeroText } from "@/components/text-animations";
import { getReviews } from "@/lib/mdx";

export default async function Home() {
  const reviews = getReviews();

  // Get the 3 most recent reviews
  const latestReviews = reviews
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, 3);

  return (
    <main className="flex flex-col">
      {/* Hero section */}
      <HeroSection />

      {/* Latest Reviews section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Latest Reviews</h2>
          <Link href="/reviews" className="text-amber-600 hover:text-amber-700">
            View all reviews →
          </Link>
        </div>
        <ReviewGrid reviews={latestReviews} />
      </section>
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
