import { ScoreCard } from "@/components/score-card";
import type { KebabSpot } from "@/lib/types";
import { cn } from "@/lib/utils";

interface KebabSpotCardProps {
  slug?: string;
  spot: KebabSpot;
}

export function KebabSpotCard({ spot, slug }: KebabSpotCardProps) {
  const anchor = slug ?? spot.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <article
      aria-labelledby={`spot-name-${anchor}`}
      className={cn(
        "grid gap-6 border-2 border-foreground bg-background p-6",
        "grid-cols-1 lg:grid-cols-[1fr_auto]"
      )}
    >
      <div className="flex min-w-0 flex-col gap-2">
        <h2
          className="font-bold font-head text-foreground text-xl leading-tight tracking-tight sm:text-2xl"
          id={`spot-name-${anchor}`}
        >
          {spot.name}
        </h2>
        <p className="font-mono text-foreground/90 text-sm">{spot.address}</p>
        <p className="text-foreground leading-relaxed">{spot.verdict}</p>
        <a
          className="mt-2 font-medium text-primary underline-offset-4 hover:underline"
          href={`#${anchor}`}
        >
          Read more
        </a>
      </div>
      <div className="flex items-start justify-start lg:justify-end">
        <ScoreCard spot={spot} />
      </div>
    </article>
  );
}
