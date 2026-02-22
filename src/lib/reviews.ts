import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type {
  PriceTier,
  ReviewDisplay,
  ReviewFrontmatter,
  ValueLabel,
} from "@/lib/types";

interface ReviewModule {
  default: ComponentType;
  frontmatter: unknown;
}

export interface Review {
  Component: ComponentType;
  frontmatter: ReviewFrontmatter;
  slug: string;
}

const REVIEWS_DIRECTORY = path.join(process.cwd(), "src/content/reviews");
const PUBLIC_DIRECTORY = path.join(process.cwd(), "public");
const MDX_EXTENSION_PATTERN = /\.mdx$/;
const IMAGE_PLACEHOLDERS = [
  "/assets/unikebab-thumb.jpeg",
  "/assets/pizzaz-thumb.png",
  "/assets/corniche-thumb.jpeg",
  "/assets/Zorbas-thumb.jpeg",
  "/assets/SKH-thumb.jpeg",
  "/assets/GDK-thumb.jpeg",
] as const;

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

const isNumber = (value: unknown): value is number => {
  return typeof value === "number" && Number.isFinite(value);
};

const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

const toSlug = (fileName: string): string => {
  return fileName.replace(MDX_EXTENSION_PATTERN, "");
};

const toFilePathFromPublic = (assetPath: string): string => {
  const normalizedPath = assetPath.startsWith("/")
    ? assetPath.slice(1)
    : assetPath;
  return path.join(PUBLIC_DIRECTORY, normalizedPath);
};

const hasImageAsset = (assetPath: string): boolean => {
  return existsSync(toFilePathFromPublic(assetPath));
};

const getPlaceholderImage = (slug: string): string => {
  const hash = Array.from(slug).reduce((total, char) => {
    return total + char.charCodeAt(0);
  }, 0);

  return IMAGE_PLACEHOLDERS[hash % IMAGE_PLACEHOLDERS.length];
};

const resolveImage = (slug: string, value: unknown): string => {
  if (isString(value) && hasImageAsset(value)) {
    return value;
  }

  return getPlaceholderImage(slug);
};

const parseFrontmatter = (
  value: unknown,
  slug: string
): ReviewFrontmatter | null => {
  if (!isObject(value)) {
    return null;
  }

  const { title, date, address, review, thumbnail, hours, coords, type } =
    value;
  if (!(isString(title) && isString(date) && isString(address))) {
    return null;
  }

  if (!isObject(review)) {
    return null;
  }

  const { overall, aesthetic, quality, price, value: scoreValue } = review;
  if (
    !(
      isNumber(overall) &&
      isNumber(aesthetic) &&
      isNumber(quality) &&
      isString(price) &&
      isString(scoreValue)
    )
  ) {
    return null;
  }

  let parsedCoords: ReviewFrontmatter["coords"];
  if (coords !== undefined) {
    if (!isObject(coords)) {
      return null;
    }

    const { latitude, longitude } = coords;
    if (!(isNumber(latitude) && isNumber(longitude))) {
      return null;
    }

    parsedCoords = { latitude, longitude };
  }

  return {
    title,
    date,
    address,
    review: {
      overall,
      aesthetic,
      quality,
      price: price as PriceTier,
      value: scoreValue as ValueLabel,
    },
    thumbnail: resolveImage(slug, thumbnail),
    hours: isString(hours) ? hours : undefined,
    coords: parsedCoords,
    type: isString(type) ? type : undefined,
  };
};

const getReviewSlugs = (): string[] => {
  return readdirSync(REVIEWS_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(toSlug);
};

const getSafeTimestamp = (date: string): number => {
  const time = Date.parse(date);
  return Number.isNaN(time) ? 0 : time;
};

const importReviewModule = async (
  slug: string
): Promise<ReviewModule | null> => {
  try {
    return (await import(`@/content/reviews/${slug}.mdx`)) as ReviewModule;
  } catch {
    return null;
  }
};

export const getReviewBySlug = async (slug: string): Promise<Review | null> => {
  const module = await importReviewModule(slug);
  if (!module) {
    return null;
  }

  const frontmatter = parseFrontmatter(module.frontmatter, slug);
  if (!frontmatter) {
    return null;
  }

  return {
    slug,
    frontmatter,
    Component: module.default,
  };
};

export const getAllReviews = async (): Promise<Review[]> => {
  const slugs = getReviewSlugs();
  const entries = await Promise.all(slugs.map((slug) => getReviewBySlug(slug)));

  return entries
    .filter((entry): entry is Review => entry !== null)
    .sort(
      (a, b) =>
        getSafeTimestamp(b.frontmatter.date) -
        getSafeTimestamp(a.frontmatter.date)
    );
};

export const getRecentReviews = async (limit = 4): Promise<Review[]> => {
  const reviews = await getAllReviews();
  return reviews.slice(0, limit);
};

export const toReviewDisplay = (review: Review): ReviewDisplay => {
  const { frontmatter } = review;

  return {
    title: frontmatter.title,
    location: frontmatter.address,
    coords: frontmatter.coords,
    date: frontmatter.date,
    thumbnail: frontmatter.thumbnail ?? null,
    score: frontmatter.review,
  };
};
