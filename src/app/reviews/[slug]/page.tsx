import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ScoreCard } from "@/components/score-card";
import { getAllReviews, getReviewBySlug, toReviewDisplay } from "@/lib/reviews";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const reviews = await getAllReviews();
  return reviews.map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = await getReviewBySlug(slug);
  if (!review) {
    return { title: "Review not found" };
  }

  const title = review.frontmatter.title;
  return {
    title: `${title} | Reviews`,
    description: `Review for ${title} in ${review.frontmatter.address}.`,
  };
}

export default async function ReviewDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const review = await getReviewBySlug(slug);
  if (!review) {
    notFound();
  }

  const { Component } = review;
  const display = toReviewDisplay(review);

  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      <div className="relative mb-8 aspect-21/9 w-full overflow-hidden border-2 border-border bg-muted">
        <Image
          alt={display.title}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1152px"
          src={display.thumbnail ?? ""}
        />
      </div>

      <header className="mb-8 text-center">
        <h1 className="font-bold font-poppins text-3xl tracking-tight md:text-4xl">
          {display.title}
        </h1>
        <p className="mt-2 font-ibm text-muted-foreground text-sm">
          {display.date}
        </p>
      </header>

      <div className="mb-10 flex justify-center">
        <ScoreCard className="w-full max-w-3xl" score={display.score} />
      </div>

      <div className="max-w-none">
        <Component />
      </div>
    </article>
  );
}
