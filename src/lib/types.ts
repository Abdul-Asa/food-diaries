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
