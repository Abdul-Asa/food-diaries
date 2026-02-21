import { frontmatter as alisFrontmatter } from "@/content/reviews/alis-kebab-house.mdx";
import { frontmatter as beirutFrontmatter } from "@/content/reviews/beirut-nights.mdx";
import { frontmatter as noorsFrontmatter } from "@/content/reviews/noors-kitchen.mdx";
import { frontmatter as sultansFrontmatter } from "@/content/reviews/sultans-delight.mdx";
import { frontmatter as wrapShopFrontmatter } from "@/content/reviews/the-wrap-shop.mdx";
import type { ReviewFrontmatter, ScoreCard } from "@/lib/types";

export interface Review {
  frontmatter: ReviewFrontmatter;
  slug: string;
}

function toReview(slug: string, frontmatter: Record<string, unknown>): Review {
  const meta = frontmatter as unknown as ReviewFrontmatter;
  return { frontmatter: meta, slug };
}

const ALL_REVIEWS: Review[] = [
  toReview("sultans-delight", sultansFrontmatter),
  toReview("alis-kebab-house", alisFrontmatter),
  toReview("the-wrap-shop", wrapShopFrontmatter),
  toReview("noors-kitchen", noorsFrontmatter),
  toReview("beirut-nights", beirutFrontmatter),
];

export function getFeaturedReview(): Review | undefined {
  return ALL_REVIEWS.find((r) => r.frontmatter.featured);
}

export function getAllReviews(): Review[] {
  return [...ALL_REVIEWS];
}

/** Recent reviews for the homepage grid (excludes featured, returns up to limit). */
export function getRecentReviews(limit = 4): Review[] {
  return ALL_REVIEWS.filter((r) => !r.frontmatter.featured).slice(0, limit);
}

export function getScoreFromReview(review: Review): ScoreCard {
  const f = review.frontmatter;
  return {
    aesthetic: f.aesthetic,
    overall: f.overall,
    price: f.price,
    quality: f.quality,
    value: f.value,
  };
}
