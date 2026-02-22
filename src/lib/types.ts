export interface AboutFrontmatter {
  title: string;
}

export type PriceTier = "£" | "££" | "£££";

export type ValueLabel = "Amazing Deal" | "Good" | "Okay" | "Not worth";

export interface ReviewScore {
  aesthetic: number;
  overall: number;
  price: PriceTier;
  quality: number;
  value: ValueLabel;
}

export interface ReviewFrontmatter {
  address: string;
  coords?: {
    latitude: number;
    longitude: number;
  };
  date: string;
  hours?: string;
  review: ReviewScore;
  thumbnail?: string;
  title: string;
  type?: "restaurant" | string;
}

export interface ReviewDisplay {
  coords?: {
    latitude: number;
    longitude: number;
  };
  date: string;
  location: string;
  score: ReviewScore;
  thumbnail: string | null;
  title: string;
}

export interface ReviewListItem {
  display: ReviewDisplay;
  slug: string;
}
