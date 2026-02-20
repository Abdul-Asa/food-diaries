import { ReviewGrid } from "@/components/review-grid";
import { getReviews } from "@/lib/mdx";

export const metadata = {
  title: "Restaurant Reviews",
  description: "Discover our latest restaurant reviews and food experiences",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  // Sort reviews by date, newest first
  reviews.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Restaurant Reviews</h1>
      <ReviewGrid reviews={reviews} />
    </div>
  );
}
