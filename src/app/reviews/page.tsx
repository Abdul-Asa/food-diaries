import { ReviewList } from "@/components/review-list";
import { getAllReviews, toReviewDisplay } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
  description:
    "Honest kebab spot reviews in Southampton. Quality, aesthetic, price, and value — no sponsorships.",
};

export default async function ReviewsPage() {
  const allReviews = await getAllReviews();
  const items = allReviews.map((review) => ({
    slug: review.slug,
    display: toReviewDisplay(review),
  }));

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <header className="mb-12 border-border border-b-2 pb-6">
        <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
          All reviews
        </span>
        <h1 className="mt-2 font-bold font-poppins text-3xl tracking-tight md:text-4xl">
          Kebab spots reviewed
        </h1>
        <p className="mt-3 font-ibm text-muted-foreground text-sm">
          Every spot I&apos;ve tried. Both in person and delivery.
        </p>
      </header>

      <ReviewList items={items} />
    </div>
  );
}
