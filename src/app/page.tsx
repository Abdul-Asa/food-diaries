import { HeroPage } from "@/components/hero-content";
import { LandingSections } from "@/components/landing-sections";
import { getFeaturedReview, getRecentReviews } from "@/lib/reviews";

export default function Home() {
  const featuredReview = getFeaturedReview();
  const recentReviews = getRecentReviews(4);

  return (
    <>
      <HeroPage featuredReview={featuredReview} />
      <div className="mx-auto w-full max-w-6xl">
        <LandingSections recentReviews={recentReviews} />
      </div>
    </>
  );
}
