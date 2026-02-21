"use client";

import { useMemo, useState } from "react";
import { ReviewCard } from "@/components/review-card";
import type { NormalizedReviewDisplay } from "@/lib/types";
import { cn } from "@/lib/utils";

type SortOption = "latest" | "nearme";

interface ReviewListItem {
  display: NormalizedReviewDisplay;
  slug: string;
}

interface ReviewListProps {
  className?: string;
  /** If true, hide filter bar (e.g. for landing "Recent reviews"). */
  compact?: boolean;
  items: ReviewListItem[];
}

export function ReviewList({
  items,
  className,
  compact = false,
}: ReviewListProps) {
  const [search, setSearch] = useState("");
  const [reviewed, setReviewed] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [food, setFood] = useState(false);
  const [sort, setSort] = useState<SortOption>("latest");

  const filteredAndSorted = useMemo(() => {
    let list = [...items];

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (item) =>
          item.display.title.toLowerCase().includes(q) ||
          item.display.location.toLowerCase().includes(q)
      );
    }
    if (reviewed) {
      list = list.filter((item) => item.display.date);
    }
    if (wifi) {
      list = list.filter((item) => item.display.score.wifi === true);
    }
    if (food) {
      list = list.filter((item) => item.display.score.food === true);
    }

    if (sort === "latest") {
      list.sort((a, b) => {
        const dA = a.display.date;
        const dB = b.display.date;
        return dB.localeCompare(dA, undefined, { numeric: true });
      });
    }
    if (sort === "nearme") {
      list.sort((a, b) => a.display.title.localeCompare(b.display.title));
    }

    return list;
  }, [items, search, reviewed, wifi, food, sort]);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {!compact && (
        <div className="flex flex-wrap items-center gap-2 border-2 border-border bg-card p-2 sm:flex-nowrap sm:gap-0 sm:divide-x-2 sm:divide-border">
          <div className="w-full sm:flex-1 sm:pr-2">
            <input
              aria-label="Search reviews"
              className="h-9 w-full border border-border bg-background px-3 font-ibm text-sm outline-none focus:border-primary"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              type="search"
              value={search}
            />
          </div>
          <div className="flex items-center gap-4 sm:gap-6 sm:px-4">
            <label className="flex cursor-pointer items-center gap-2 font-ibm text-sm">
              <input
                checked={reviewed}
                className="size-4"
                onChange={(e) => setReviewed(e.target.checked)}
                type="checkbox"
              />
              Reviewed
            </label>
            <label className="flex cursor-pointer items-center gap-2 font-ibm text-sm">
              <input
                checked={wifi}
                className="size-4"
                onChange={(e) => setWifi(e.target.checked)}
                type="checkbox"
              />
              Wi-fi
            </label>
            <label className="flex cursor-pointer items-center gap-2 font-ibm text-sm">
              <input
                checked={food}
                className="size-4"
                onChange={(e) => setFood(e.target.checked)}
                type="checkbox"
              />
              Food
            </label>
          </div>
          <div className="flex items-center gap-1 sm:pl-4">
            <label className="font-ibm text-sm" htmlFor="review-sort">
              Sort:
            </label>
            <select
              className="border border-border bg-background px-2 py-1.5 font-ibm text-sm outline-none focus:border-primary"
              id="review-sort"
              onChange={(e) => setSort(e.target.value as SortOption)}
              value={sort}
            >
              <option value="latest">Latest</option>
              <option value="nearme">Near me</option>
            </select>
          </div>
        </div>
      )}

      <ul className="flex flex-col gap-2">
        {filteredAndSorted.map((item) => (
          <li key={item.slug}>
            <ReviewCard display={item.display} slug={item.slug} />
          </li>
        ))}
      </ul>
    </div>
  );
}
