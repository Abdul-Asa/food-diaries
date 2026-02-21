import { frontmatter as alisFrontmatter } from "@/content/reviews/alis-kebab-house.mdx";
import { frontmatter as beirutFrontmatter } from "@/content/reviews/beirut-nights.mdx";
import { frontmatter as noorsFrontmatter } from "@/content/reviews/noors-kitchen.mdx";
import { frontmatter as sultansFrontmatter } from "@/content/reviews/sultans-delight.mdx";
import { frontmatter as wrapShopFrontmatter } from "@/content/reviews/the-wrap-shop.mdx";
import type {
  NormalizedReviewDisplay,
  NormalizedScore,
  ReviewFrontmatter,
  ScoreCard,
} from "@/lib/types";

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

function isCafeFrontmatter(
  f: ReviewFrontmatter | Record<string, unknown>
): f is Record<string, unknown> & {
  review: Record<string, unknown>;
  title?: string;
  date?: string;
} {
  const r = (f as Record<string, unknown>).review;
  return typeof r === "object" && r !== null && "overall" in r;
}

function toBool(v: boolean | string | undefined): boolean | null {
  if (v === undefined) {
    return null;
  }
  if (typeof v === "boolean") {
    return v;
  }
  if (typeof v === "string") {
    return v.toLowerCase() === "yes" || v.toLowerCase() === "true";
  }
  return null;
}

/** Normalized score for list and detail UI (supports both legacy and café frontmatter). */
export function getNormalizedScore(review: Review): NormalizedScore {
  const f = review.frontmatter as unknown as Record<string, unknown>;
  if (isCafeFrontmatter(f)) {
    const r = f.review as Record<string, unknown>;
    return {
      overall: Number(r.overall) ?? 0,
      coffee: typeof r.coffee === "number" ? r.coffee : null,
      aesthetic: typeof r.aesthetic === "number" ? r.aesthetic : null,
      seating: typeof r.seating === "number" ? r.seating : null,
      price: typeof r.price === "string" ? r.price : null,
      food: toBool(r.food as boolean | string | undefined),
      wifi: toBool(r.wifi as boolean | string | undefined),
    };
  }
  const leg = review.frontmatter as ReviewFrontmatter;
  return {
    overall: leg.overall,
    coffee: leg.quality ?? null,
    aesthetic: leg.aesthetic ?? null,
    seating: null,
    price: leg.price ?? null,
    food: null,
    wifi: null,
  };
}

/** Normalized display shape for list cards and detail (title, location, thumbnail, score, tags). */
export function normalizeReviewDisplay(
  review: Review
): NormalizedReviewDisplay {
  const f = review.frontmatter as unknown as Record<string, unknown>;
  const score = getNormalizedScore(review);
  const isCafe = isCafeFrontmatter(f);

  const title =
    (isCafe && typeof f.title === "string"
      ? f.title
      : (review.frontmatter as ReviewFrontmatter).name) ?? "";
  const date =
    (isCafe && typeof f.date === "string"
      ? f.date
      : (review.frontmatter as ReviewFrontmatter).reviewedDate) ?? "";
  const address =
    (typeof f.address === "string"
      ? f.address
      : (review.frontmatter as ReviewFrontmatter).address) ?? "";
  const location =
    address.split("\n")[0]?.trim() ??
    (review.frontmatter as ReviewFrontmatter).area ??
    "";

  let thumbnail: string | null = null;
  let cover: string | null = null;
  if (typeof f.thumbnail === "string") {
    thumbnail = f.thumbnail;
  }
  if (typeof f.cover === "string") {
    cover = f.cover;
  }

  const priceTag = score.price ?? null;
  const tags: string[] = [];
  if (score.food === true) {
    tags.push("Food");
  }
  if (score.wifi === true) {
    tags.push("Wi-Fi");
  }

  return {
    title,
    location,
    date,
    thumbnail,
    cover,
    score,
    priceTag,
    tags,
  };
}
