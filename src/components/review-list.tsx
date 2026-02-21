"use client";

import { useMemo, useState } from "react";
import { Checkbox } from "@/components/retroui/checkbox";
import { Select } from "@/components/retroui/select";
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
            <label
              className="flex cursor-pointer items-center gap-2 font-ibm text-sm"
              htmlFor="filter-reviewed"
            >
              <Checkbox
                checked={reviewed}
                id="filter-reviewed"
                onCheckedChange={(checked) => setReviewed(checked === true)}
                size="sm"
              />
              Reviewed
            </label>
            <label
              className="flex cursor-pointer items-center gap-2 font-ibm text-sm"
              htmlFor="filter-wifi"
            >
              <Checkbox
                checked={wifi}
                id="filter-wifi"
                onCheckedChange={(checked) => setWifi(checked === true)}
                size="sm"
              />
              Wi-fi
            </label>
            <label
              className="flex cursor-pointer items-center gap-2 font-ibm text-sm"
              htmlFor="filter-food"
            >
              <Checkbox
                checked={food}
                id="filter-food"
                onCheckedChange={(checked) => setFood(checked === true)}
                size="sm"
              />
              Food
            </label>
          </div>
          <div className="flex items-center gap-1 sm:pl-4">
            <label className="font-ibm text-sm" htmlFor="review-sort">
              Sort:
            </label>
            <Select
              onValueChange={(value) => setSort(value as SortOption)}
              value={sort}
            >
              <Select.Trigger aria-label="Sort reviews" id="review-sort">
                <Select.Value placeholder="Sort" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="latest">Latest</Select.Item>
                <Select.Item value="nearme">Near me</Select.Item>
              </Select.Content>
            </Select>
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
