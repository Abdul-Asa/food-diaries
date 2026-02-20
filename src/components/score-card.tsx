"use client";

import type { ScoreCard as ScoreCardType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ScoreCardProps {
  className?: string;
  score: ScoreCardType;
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-ibm font-semibold text-[clamp(0.8rem,1.2vw,1.05rem)]">
        {label}
      </span>
      <span className="font-bold text-[clamp(0.9rem,1.4vw,1.25rem)] text-primary">
        {value}
      </span>
    </div>
  );
}

export function ScoreCard({ score, className }: ScoreCardProps) {
  return (
    <div
      className={cn(
        "flex select-none border-[3px] border-border bg-background",
        className
      )}
      style={{ boxShadow: "8px 8px 0 0 var(--primary)" }}
    >
      {/* Overall score */}
      <div className="flex flex-col items-center justify-center gap-1 p-5 sm:gap-2 sm:p-8 md:p-10">
        <span className="font-ibm font-semibold text-[clamp(0.85rem,1.3vw,1.1rem)]">
          Overall
        </span>
        <span className="font-bold text-[clamp(2.8rem,6vw,5.5rem)] text-primary italic leading-none">
          {score.overall}
        </span>
      </div>

      {/* Divider */}
      <div className="my-5 w-px bg-primary/30 sm:my-6" />

      {/* Stats grid */}
      <div className="grid flex-1 grid-cols-2 content-center gap-x-4 gap-y-3 p-5 sm:gap-x-10 sm:gap-y-5 sm:p-8 md:p-10">
        <StatItem label="Quality" value={`${score.quality}/5`} />
        <StatItem label="Price" value={score.price} />
        <StatItem label="Aesthetic" value={`${score.aesthetic}/5`} />
        <StatItem label="Value" value={score.value} />
      </div>
    </div>
  );
}
