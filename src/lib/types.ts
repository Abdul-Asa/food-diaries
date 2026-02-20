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
