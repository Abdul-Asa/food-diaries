export interface ExamplePostFrontmatter {
  author: string;
  date: string;
  title: string;
}

export type PriceTier = "£" | "££" | "£££";

export type ValueLabel = "Amazing Deal" | "Good" | "Okay" | "Not worth";

export interface KebabSpot {
  address: string;
  aesthetic: number;
  name: string;
  price: PriceTier;
  quality: number;
  verdict: string;
}
