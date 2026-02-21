export interface AboutFrontmatter {
  title: string;
}

export interface ExamplePostFrontmatter {
  author: string;
  date: string;
  title: string;
}

export type PriceTier = "£" | "££" | "£££";

export type ValueLabel = "Amazing Deal" | "Good" | "Okay" | "Not worth";

export interface ScoreCard {
  aesthetic: number;
  overall: number;
  price: PriceTier;
  quality: number;
  value: ValueLabel;
}

export interface KebabSpot {
  address: string;
  name: string;
  score: ScoreCard;
}

/** Nested review shape from café-style MDX (e.g. Bread Yard). */
export interface CafeReviewScore {
  aesthetic?: number;
  coffee?: number;
  food?: boolean | string;
  overall: number;
  price?: string;
  seating?: number;
  wifi?: boolean | string;
}

/** Frontmatter for café/shop-style reviews (thumbnail, cover, review.*). */
export interface CafeReviewFrontmatter {
  address: string;
  coords?: { latitude: number; longitude: number };
  cover?: string;
  date: string;
  excerpt?: string;
  featured?: boolean;
  hours?: string;
  review: CafeReviewScore;
  thumbnail?: string;
  title: string;
  type?: string;
}

/** Normalized score for list + detail UI (works with both old and new frontmatter). */
export interface NormalizedScore {
  aesthetic: number | null;
  coffee: number | null;
  food: boolean | null;
  overall: number;
  price: string | null;
  seating: number | null;
  wifi: boolean | null;
}

/** Single display shape for list cards and detail header (from adapter). */
export interface NormalizedReviewDisplay {
  cover: string | null;
  date: string;
  location: string;
  priceTag: string | null;
  score: NormalizedScore;
  tags: string[];
  thumbnail: string | null;
  title: string;
}

export interface ReviewFrontmatter {
  address: string;
  aesthetic: number;
  area: string;
  excerpt: string;
  featured?: boolean;
  name: string;
  overall: number;
  price: PriceTier;
  quality: number;
  reviewedDate: string;
  slug: string;
  value: ValueLabel;
}

/** Union: legacy flat frontmatter or café-style nested frontmatter. */
export type AnyReviewFrontmatter =
  | ReviewFrontmatter
  | (CafeReviewFrontmatter & { slug?: string; name?: string });
