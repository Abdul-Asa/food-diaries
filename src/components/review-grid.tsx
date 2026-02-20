import type { ReviewMetadata } from "@/lib/types";
import { ReviewCard } from "./review-card";

interface ReviewGridProps {
  reviews: {
    slug: string;
    metadata: ReviewMetadata;
  }[];
}

export function ReviewGrid({ reviews }: ReviewGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.slug} {...review} />
      ))}
    </div>
  );
}
