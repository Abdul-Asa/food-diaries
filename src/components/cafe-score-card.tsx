"use client";

import type { NormalizedScore } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CafeScoreCardProps {
  className?: string;
  score: NormalizedScore;
}

function formatValue(value: number | string | boolean | null): string {
  if (value === null || value === undefined) {
    return "—";
  }
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  return String(value);
}

export function CafeScoreCard({ score, className }: CafeScoreCardProps) {
  const rows: { label: string; value: number | string | boolean | null }[] = [
    {
      label: "Coffee",
      value: score.coffee !== null ? `${score.coffee}/5` : null,
    },
    {
      label: "Aesthetic",
      value: score.aesthetic !== null ? `${score.aesthetic}/5` : null,
    },
    {
      label: "Seating",
      value: score.seating !== null ? `${score.seating}/5` : null,
    },
    { label: "Price", value: score.price },
    { label: "Food", value: score.food },
    { label: "Wi-fi", value: score.wifi },
  ];

  return (
    <div
      className={cn("flex border-2 border-border bg-background", className)}
      style={{ boxShadow: "4px 4px 0 0 var(--border)" }}
    >
      <div className="flex flex-col items-center justify-center gap-1 border-border border-r-2 px-6 py-6 sm:px-10 sm:py-8">
        <span className="font-ibm font-semibold text-foreground text-sm">
          Overall Score
        </span>
        <span className="font-bold font-poppins text-4xl text-primary italic leading-none sm:text-5xl">
          {score.overall}
        </span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-2 px-6 py-6 sm:grid-cols-3 sm:gap-x-10 sm:px-10 sm:py-8">
        {rows.map(({ label, value }) => (
          <div
            className="flex items-baseline justify-between gap-2 sm:flex-col sm:items-start sm:gap-0"
            key={label}
          >
            <span className="font-ibm font-medium text-foreground text-sm">
              {label}
            </span>
            <span className="font-ibm text-muted-foreground text-sm">
              {formatValue(value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
