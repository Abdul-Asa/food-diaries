import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CafeScoreCard } from "@/components/cafe-score-card";
import { getReviewBySlug } from "@/content/reviews/registry";
import {
  getAllReviews,
  getNormalizedScore,
  normalizeReviewDisplay,
} from "@/lib/reviews";
import type { ReviewFrontmatter } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllReviews().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getReviewBySlug(slug);
  if (!entry) {
    return { title: "Review not found" };
  }
  const f = entry.frontmatter as ReviewFrontmatter & {
    title?: string;
    excerpt?: string;
  };
  const title = f.title ?? f.name;
  const description = f.excerpt ?? (f as ReviewFrontmatter).excerpt;
  return {
    title: `${title} | Reviews`,
    description,
  };
}

export default async function ReviewDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getReviewBySlug(slug);
  if (!entry) {
    notFound();
  }

  const { Component, frontmatter } = entry;
  const review = { frontmatter, slug };
  const display = normalizeReviewDisplay(review);
  const score = getNormalizedScore(review);

  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      {display.cover ? (
        <div className="relative mb-8 aspect-21/9 w-full overflow-hidden border-2 border-border bg-muted">
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
            src={display.cover}
          />
        </div>
      ) : null}

      <header className="mb-8 text-center">
        <h1 className="font-bold font-poppins text-3xl tracking-tight md:text-4xl">
          {display.title}
        </h1>
        <p className="mt-2 font-ibm text-muted-foreground text-sm">
          {display.date}
        </p>
      </header>

      <div className="mb-10 flex justify-center">
        <CafeScoreCard className="w-full max-w-3xl" score={score} />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <Component />
      </div>
    </article>
  );
}
