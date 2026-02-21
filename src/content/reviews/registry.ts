import type { ComponentType } from "react";
import AlisKebabHouse, {
  frontmatter as alisFrontmatter,
} from "@/content/reviews/alis-kebab-house.mdx";
import BeirutNights, {
  frontmatter as beirutFrontmatter,
} from "@/content/reviews/beirut-nights.mdx";
import NoorsKitchen, {
  frontmatter as noorsFrontmatter,
} from "@/content/reviews/noors-kitchen.mdx";
import SultansDelight, {
  frontmatter as sultansFrontmatter,
} from "@/content/reviews/sultans-delight.mdx";
import TheWrapShop, {
  frontmatter as wrapShopFrontmatter,
} from "@/content/reviews/the-wrap-shop.mdx";
import type { ReviewFrontmatter } from "@/lib/types";

type MDXComponent = ComponentType;

const REGISTRY: Record<
  string,
  { Component: MDXComponent; frontmatter: ReviewFrontmatter }
> = {
  "sultans-delight": {
    Component: SultansDelight,
    frontmatter: sultansFrontmatter as unknown as ReviewFrontmatter,
  },
  "alis-kebab-house": {
    Component: AlisKebabHouse,
    frontmatter: alisFrontmatter as unknown as ReviewFrontmatter,
  },
  "the-wrap-shop": {
    Component: TheWrapShop,
    frontmatter: wrapShopFrontmatter as unknown as ReviewFrontmatter,
  },
  "noors-kitchen": {
    Component: NoorsKitchen,
    frontmatter: noorsFrontmatter as unknown as ReviewFrontmatter,
  },
  "beirut-nights": {
    Component: BeirutNights,
    frontmatter: beirutFrontmatter as unknown as ReviewFrontmatter,
  },
};

export function getReviewBySlug(slug: string): {
  Component: MDXComponent;
  frontmatter: ReviewFrontmatter;
} | null {
  const entry = REGISTRY[slug];
  return entry ?? null;
}
