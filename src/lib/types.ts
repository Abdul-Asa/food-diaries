export interface AboutFrontmatter {
  title: string;
}

export type PriceTier = "£" | "££" | "£££";

export type ValueLabel = "Amazing Deal" | "Good" | "Okay" | "Not worth";

export interface ReviewScore {
  aesthetic: number;
  overall: number;
  price: PriceTier | string;
  quality: number;
  value: ValueLabel | string;
}

export interface ReviewFrontmatter {
  address: string;
  coords?: {
    latitude: number;
    longitude: number;
  };
  cover?: string;
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
  cover: string | null;
  date: string;
  location: string;
  score: ReviewScore;
  thumbnail: string | null;
  title: string;
}
