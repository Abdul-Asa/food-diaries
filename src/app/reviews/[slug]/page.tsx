import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ScoreCard } from "@/components/score-card";
import { JsonLd } from "@/components/seo/json-ld";
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
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://saints-diary.abdul-asa.dev";

  if (!review) {
    return { title: "Review not found" };
  }

  const title = review.frontmatter.title;
  const description = `Review for ${title} in ${review.frontmatter.address}.`;
  const thumbnail = review.frontmatter.thumbnail;

  return {
    title: `${title} — Review`,
    description,
    alternates: {
      canonical: `/reviews/${slug}`,
    },
    openGraph: {
      title: `${title} | Saints Food Diary`,
      description,
      type: "article",
      images: thumbnail
        ? [
            {
              url: thumbnail.startsWith("http")
                ? thumbnail
                : `${baseUrl}${thumbnail}`,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Saints Food Diary`,
      description,
      images: thumbnail
        ? [thumbnail.startsWith("http") ? thumbnail : `${baseUrl}${thumbnail}`]
        : undefined,
    },
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
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://saints-diary.abdul-asa.dev";
  const articleUrl = `${baseUrl}/reviews/${slug}`;

  let imageUrl: string | undefined;
  if (display.thumbnail) {
    imageUrl = display.thumbnail.startsWith("http")
      ? display.thumbnail
      : `${baseUrl}${display.thumbnail}`;
  } else {
    imageUrl = undefined;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: display.title,
    description: `Review for ${display.title} in ${display.location}.`,
    image: imageUrl,
    datePublished: review.frontmatter.date,
    dateModified: review.frontmatter.date,
    author: {
      "@type": "Person",
      name: "Saints Food Diary",
    },
    publisher: {
      "@type": "Organization",
      name: "Saints Food Diary",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={articleSchema} />
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
