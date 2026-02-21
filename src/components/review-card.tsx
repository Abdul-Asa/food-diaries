import Image from "next/image";
import Link from "next/link";
import type { NormalizedReviewDisplay } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  className?: string;
  display: NormalizedReviewDisplay;
  slug: string;
}

function RatingLine({ display }: { display: NormalizedReviewDisplay }) {
  const parts: string[] = [];
  const { score } = display;
  if (score.coffee !== null) {
    parts.push(`Coffee ${score.coffee}/5`);
  }
  if (score.aesthetic !== null) {
    parts.push(`Aesthetic ${score.aesthetic}/5`);
  }
  if (score.seating !== null) {
    parts.push(`Seating ${score.seating}/5`);
  }
  if (parts.length === 0) {
    return null;
  }
  return (
    <p className="font-ibm text-muted-foreground text-sm">
      {parts.join(" · ")}
    </p>
  );
}

export function ReviewCard({ slug, display, className }: ReviewCardProps) {
  const tagsLine = [display.priceTag, ...display.tags]
    .filter(Boolean)
    .join(" · ");

  return (
    <Link
      className={cn(
        "group flex border-2 border-border bg-card transition-all duration-200 hover:border-primary/30 hover:shadow-md",
        className
      )}
      href={`/reviews/${slug}`}
      style={{ boxShadow: "4px 4px 0 0 var(--border)" }}
    >
      <div className="relative h-32 w-40 shrink-0 sm:h-36 sm:w-48">
        {display.thumbnail ? (
          <Image
            alt=""
            className="object-cover"
            fill
            sizes="(max-width: 640px) 160px, 192px"
            src={display.thumbnail}
          />
        ) : (
          <div
            aria-hidden
            className="flex h-full w-full items-center justify-center bg-muted font-ibm text-muted-foreground text-xs"
          >
            No image
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 px-4 py-3 sm:px-5 sm:py-4">
        <span className="font-bold text-foreground underline decoration-primary/50 transition-colors group-hover:text-primary group-hover:decoration-primary">
          {display.title}
        </span>
        <p className="font-ibm text-muted-foreground text-sm">
          {display.location}
        </p>
        {tagsLine ? (
          <p className="font-ibm text-muted-foreground text-sm">{tagsLine}</p>
        ) : null}
        <RatingLine display={display} />
      </div>
    </Link>
  );
}
