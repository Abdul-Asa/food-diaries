import { HeroPage } from "@/components/hero-content";
import { LandingSections } from "@/components/landing-sections";
import { getRecentReviews, normalizeReviewDisplay } from "@/lib/reviews";

export default function Home() {
  const recentReviews = getRecentReviews(4).map((review) => ({
    slug: review.slug,
    display: normalizeReviewDisplay(review),
  }));

  return (
    <>
      <HeroPage />
      <div className="mx-auto w-full max-w-6xl">
        <LandingSections recentReviewItems={recentReviews} />
      </div>
    </>
  );
}
