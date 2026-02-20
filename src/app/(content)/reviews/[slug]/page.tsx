import { notFound } from "next/navigation";
import { getReviews } from "@/lib/mdx";

interface ReviewPageProps {
  params: {
    slug: string;
  };
}

// This function tells Next.js which paths to pre-render
export async function generateStaticParams() {
  const reviews = await getReviews();
  return reviews.map((review) => ({
    slug: review.slug,
  }));
}

export async function generateMetadata({ params }: ReviewPageProps) {
  const reviews = await getReviews();
  const review = reviews.find((r) => r.slug === params.slug);

  if (!review) {
    return {
      title: "Review Not Found",
    };
  }

  return {
    title: review.metadata.title,
    description: review.metadata.summary,
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const reviews = await getReviews();
  const review = reviews.find((r) => r.slug === params.slug);

  if (!review) {
    notFound();
  }

  // The actual content will be rendered through the MDX components
  return (
    <article className="container mx-auto px-4 py-8">
      <div className="prose prose-lg mx-auto">
        {/* The MDX content will be automatically rendered here */}
      </div>
    </article>
  );
}
