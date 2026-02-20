import { cn } from "@/lib/utils";

const criteria = [
  {
    term: "Overall",
    description: "0–100 score from quality, aesthetic, and price.",
  },
  {
    term: "Quality",
    description: "0–5 (half steps): taste, freshness, execution.",
  },
  {
    term: "Aesthetic",
    description: "0–5 (half steps): vibe, cleanliness, presentation.",
  },
  { term: "Price", description: "£ (budget), ££ (mid), £££ (splurge)." },
  {
    term: "Value",
    description:
      "Amazing Deal / Good / Okay / Not worth — from overall score and price.",
  },
] as const;

export function RatingExplanation() {
  return (
    <section
      aria-labelledby="rating-heading"
      className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8"
    >
      <h2
        className="font-bold font-head text-2xl text-foreground leading-tight tracking-tight sm:text-3xl"
        id="rating-heading"
      >
        Rating system
      </h2>
      <p className="mt-4 max-w-prose text-foreground leading-relaxed">
        We score each spot so you can compare at a glance. The overall number is
        derived from quality, aesthetic, and price—cheaper spots that deliver
        get a boost. Value tells you whether it's worth the trip and the cash.
      </p>
      <dl className="mt-6 grid gap-3 sm:grid-cols-1">
        {criteria.map(({ term, description }) => (
          <div className="flex flex-col gap-1" key={term}>
            <dt
              className={cn(
                "font-mono font-semibold text-foreground text-sm uppercase tracking-wide"
              )}
            >
              {term}
            </dt>
            <dd className="text-foreground/90 leading-relaxed">
              {description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
