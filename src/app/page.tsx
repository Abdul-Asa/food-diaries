import { HeroPage } from "@/components/hero-content";
import { LandingSections } from "@/components/landing-sections";
import { getRecentReviews, toReviewDisplay } from "@/lib/reviews";

export default async function Home() {
  const reviews = await getRecentReviews(4);
  const recentReviews = reviews.map((review) => ({
    slug: review.slug,
    display: toReviewDisplay(review),
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
