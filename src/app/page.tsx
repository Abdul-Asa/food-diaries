import { HeroSection, Scoring } from "@/components/landing-sections";
import { ReviewList } from "@/components/review-list";
import { getAllReviews, toReviewDisplay } from "@/lib/reviews";

export default async function Home() {
  const allReviews = await getAllReviews();
  const items = allReviews.map((review) => ({
    slug: review.slug,
    display: toReviewDisplay(review),
  }));
  return (
    <>
      <HeroSection />
      <Scoring />
      <ReviewList items={items} />
    </>
  );
}
