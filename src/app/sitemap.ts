import type { MetadataRoute } from "next";
import { getAllReviews } from "@/lib/reviews";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://saints-diary.abdul-asa.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const reviews = await getAllReviews();

  const reviewEntries: MetadataRoute.Sitemap = reviews.map((review) => {
    const date = review.frontmatter.date;
    const lastModified = Number.isNaN(Date.parse(date))
      ? new Date()
      : new Date(date);
    return {
      url: `${baseUrl}/reviews/${review.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: review.frontmatter.thumbnail
        ? [`${baseUrl}${review.frontmatter.thumbnail}`]
        : undefined,
    };
  });

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/disclaimers`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  return [...staticPages, ...reviewEntries];
}
