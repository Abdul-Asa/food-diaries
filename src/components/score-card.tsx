import { computeOverall, getValueLabel } from "@/lib/kebab-spots";
import type { KebabSpot, PriceTier } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ScoreCardProps {
  className?: string;
  spot: KebabSpot;
}

function PriceDisplay({ price }: { price: PriceTier }) {
  return <span className="font-mono text-foreground">{price}</span>;
}

export function ScoreCard({ spot, className }: ScoreCardProps) {
  const overall = computeOverall(spot);
  const value = getValueLabel(spot);

  return (
    <div
      className={cn("relative w-full min-w-[140px] max-w-[200px]", className)}
    >
      {/* Red offset shadow block (6–10px translate) */}
      <div
        aria-hidden
        className="absolute inset-0 translate-x-2 translate-y-2 border-2 border-foreground bg-primary"
      />
      <div
        className={cn(
          "relative border-2 border-foreground bg-background p-4",
          "flex flex-col gap-2"
        )}
      >
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-mono font-semibold text-foreground/80 text-xs uppercase tracking-wide">
            Overall
          </span>
          <span className="font-bold font-head text-3xl text-foreground tabular-nums">
            {overall}
          </span>
        </div>
        <div className="flex justify-between font-mono text-foreground text-sm">
          <span className="text-foreground/80">Quality</span>
          <span>{spot.quality}</span>
        </div>
        <div className="flex justify-between font-mono text-foreground text-sm">
          <span className="text-foreground/80">Aesthetic</span>
          <span>{spot.aesthetic}</span>
        </div>
        <div className="flex justify-between font-mono text-foreground text-sm">
          <span className="text-foreground/80">Price</span>
          <PriceDisplay price={spot.price} />
        </div>
        <div className="mt-1 flex justify-between font-mono font-semibold text-foreground text-sm">
          <span className="text-foreground/80">Value</span>
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
}
