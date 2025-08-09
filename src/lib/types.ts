export type Metric = {
  label: string;
  value: number | string;
};

export type Info = {
  label: string;
  value: string;
};

export type ReviewMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  score: number;
  metrics: Metric[];
  info: Info[];
};

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};
