"use client";

import { useEffect, useMemo, useState } from "react";
import { Select } from "@/components/retroui/select";
import { ReviewCard } from "@/components/review-card";
import type { ReviewListItem } from "@/lib/types";

type SortOption = "latest" | "nearme" | "cheapest" | "rating";
type GeoStatus = "idle" | "loading" | "ready" | "error";

interface Coordinates {
  latitude: number;
  longitude: number;
}

const getDistanceInKm = (
  origin: Coordinates,
  target: Coordinates | undefined
): number => {
  if (!target) {
    return Number.POSITIVE_INFINITY;
  }

  const earthRadiusKm = 6371;
  const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;
  const latitudeDelta = toRadians(target.latitude - origin.latitude);
  const longitudeDelta = toRadians(target.longitude - origin.longitude);
  const a =
    Math.sin(latitudeDelta / 2) * Math.sin(latitudeDelta / 2) +
    Math.cos(toRadians(origin.latitude)) *
      Math.cos(toRadians(target.latitude)) *
      Math.sin(longitudeDelta / 2) *
      Math.sin(longitudeDelta / 2);
  const centralAngle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * centralAngle;
};

export function ReviewList({ items }: { items: ReviewListItem[] }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("latest");
  const [geoStatus, setGeoStatus] = useState<GeoStatus>("idle");
  const [userCoords, setUserCoords] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (
      (sort !== "nearme" && sort !== "cheapest" && sort !== "rating") ||
      userCoords !== null ||
      geoStatus === "loading"
    ) {
      return;
    }

    if (!("geolocation" in navigator)) {
      setGeoStatus("error");
      return;
    }

    setGeoStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setGeoStatus("ready");
      },
      () => {
        setGeoStatus("error");
      },
      { enableHighAccuracy: true, timeout: 10_000 }
    );
  }, [sort, userCoords, geoStatus]);

  const filteredAndSorted = useMemo(() => {
    const sorted = [...items].sort((a, b) => {
      return b.display.date.localeCompare(a.display.date, undefined, {
        numeric: true,
      });
    });

    const q = search.trim().toLowerCase();
    if (q) {
      return sorted.filter(
        (item) =>
          item.display.title.toLowerCase().includes(q) ||
          item.display.location.toLowerCase().includes(q)
      );
    }

    if (sort === "nearme" && userCoords) {
      return sorted.sort((a, b) => {
        const distanceA = getDistanceInKm(userCoords, a.display.coords);
        const distanceB = getDistanceInKm(userCoords, b.display.coords);
        return distanceA - distanceB;
      });
    }

    if (sort === "cheapest") {
      return sorted.sort((a, b) => {
        return a.display.score.price.localeCompare(b.display.score.price);
      });
    }

    if (sort === "rating") {
      return sorted.sort((a, b) => {
        return b.display.score.overall - a.display.score.overall;
      });
    }

    return sorted;
  }, [items, search, sort, userCoords]);

  return (
    <div className="flex flex-col gap-4 border-2 border-border">
      <div className="flex flex-wrap items-center gap-2 border-border border-b-2 bg-card p-2 sm:gap-3">
        <div className="w-full sm:flex-1">
          <input
            aria-label="Search reviews"
            className="h-9 w-full border border-border bg-background px-3 font-ibm text-sm outline-none focus:border-primary"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            type="search"
            value={search}
          />
        </div>
        <Select
          onValueChange={(value) => setSort(value as SortOption)}
          value={sort}
        >
          <Select.Trigger aria-label="Sort reviews" className="w-full sm:w-40">
            <Select.Value placeholder="Sort" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="latest">Latest</Select.Item>
            <Select.Item value="nearme">Near me</Select.Item>
            <Select.Item value="cheapest">Cheapest</Select.Item>
            <Select.Item value="rating">Rating</Select.Item>
          </Select.Content>
        </Select>
        {sort === "nearme" && geoStatus === "error" ? (
          <p className="w-full font-ibm text-muted-foreground text-xs sm:text-right">
            Location unavailable, showing latest instead.
          </p>
        ) : null}
      </div>

      <ul className="mx-auto flex w-full max-w-6xl flex-col gap-2 pb-8">
        {filteredAndSorted.map((item) => (
          <li key={item.slug}>
            <ReviewCard display={item.display} slug={item.slug} />
          </li>
        ))}
      </ul>
    </div>
  );
}
