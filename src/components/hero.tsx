import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16"
    >
      <div className="lg:col-span-8">
        <h1
          className="font-bold font-head text-4xl text-foreground leading-tight tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]"
          id="hero-heading"
        >
          Your guide to the tastiest Kebab spots in{" "}
          <span className="text-primary">Southampton.</span>
        </h1>
      </div>
      <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
        <div
          className={cn(
            "border-2 border-foreground bg-background p-4",
            "font-mono text-foreground text-sm leading-relaxed"
          )}
        >
          <p className="font-semibold uppercase tracking-wide">How we rate</p>
          <p className="mt-2">
            Overall score (0–100), quality & aesthetic (0–5), price band, and a
            value verdict—so you can pick the right spot fast.
          </p>
        </div>
      </div>
    </section>
  );
}
