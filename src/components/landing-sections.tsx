"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import type { Review } from "@/lib/reviews";

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

const RATING_CRITERIA = [
  {
    title: "Quality",
    description:
      "Meat freshness, portion size, bread, and that crucial sauce balance. We taste so you know what to order.",
  },
  {
    title: "Aesthetic",
    description:
      "Vibes matter. Late-night neon, steam off the grill, the way it looks on the plate. We rate the full experience.",
  },
  {
    title: "Price",
    description:
      "£ to £££ — we call it as we see it. Value isn’t just cheap; it’s what you get for your money.",
  },
  {
    title: "Value",
    description:
      "The final verdict: Amazing Deal, Good, Okay, or Not worth. No fluff. Just whether we’d go back.",
  },
] as const;

function useReveal(once = true) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once });
  return { ref, inView };
}

export function HowWeRate() {
  const { ref, inView } = useReveal();

  return (
    <motion.section
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      className="border-border border-t-2 py-16 md:py-24"
      initial={false}
      ref={ref}
      transition={{ duration: 0.7, ease: EASE_SMOOTH }}
    >
      <div className="mb-12 flex items-center gap-4">
        <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
          How we rate
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {RATING_CRITERIA.map((item, i) => (
          <motion.article
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            className="flex flex-col gap-3 border-2 border-border bg-card p-6 transition-shadow duration-200 hover:shadow-md"
            key={item.title}
            style={{ boxShadow: "4px 4px 0 0 var(--border)" }}
            transition={{
              duration: 0.5,
              delay: 0.08 * i,
              ease: EASE_SMOOTH,
            }}
          >
            <span className="font-ibm text-[10px] text-primary uppercase tracking-[0.2em]">
              {item.title}
            </span>
            <p className="font-ibm text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

interface SpotGridProps {
  recentReviews: Review[];
}

export function SpotGrid({ recentReviews }: SpotGridProps) {
  const { ref, inView } = useReveal();

  return (
    <motion.section
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      className="border-border border-t-2 py-16 md:py-24"
      initial={false}
      ref={ref}
      transition={{ duration: 0.7, ease: EASE_SMOOTH }}
    >
      <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
            Recent reviews
          </span>
          <h2 className="mt-2 font-bold font-poppins text-2xl tracking-tight md:text-3xl">
            More spots to try
          </h2>
        </div>
        <Link
          className="font-bold text-primary underline decoration-2 underline-offset-4 transition-colors hover:text-primary-hover"
          href="/reviews"
        >
          View all reviews &rarr;
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recentReviews.map((review, i) => (
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            key={review.slug}
            transition={{
              duration: 0.5,
              delay: 0.06 * i,
              ease: EASE_SMOOTH,
            }}
          >
            <Link
              className="group block border-2 border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              href={`/reviews/${review.slug}`}
              style={{ boxShadow: "4px 4px 0 0 var(--border)" }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-foreground transition-colors group-hover:text-primary">
                  {review.frontmatter.name}
                </h3>
                <span className="shrink-0 font-bold font-poppins text-primary text-xl">
                  {review.frontmatter.overall}
                </span>
              </div>
              <p className="mt-1 font-ibm text-muted-foreground text-xs uppercase tracking-wider">
                {review.frontmatter.area}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export function CtaSection() {
  const { ref, inView } = useReveal();

  return (
    <motion.section
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      className="border-border border-t-2 py-20 md:py-28"
      initial={false}
      ref={ref}
      transition={{ duration: 0.8, ease: EASE_SMOOTH }}
    >
      <div className="relative overflow-hidden border-2 border-border bg-primary py-16 md:py-20">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2L2 12l10 10 10-10L12 2z' fill='%23000'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-bold font-poppins text-3xl text-primary-foreground tracking-tight md:text-4xl">
            Ready to find your next kebab?
          </h2>
          <p className="mt-4 font-ibm text-primary-foreground/80 text-sm md:text-base">
            Every spot in Southampton, scored and reviewed. No sponsorships. No
            agenda.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              className="inline-flex border-2 border-primary-foreground bg-primary-foreground px-6 py-3 font-bold text-primary shadow-md transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              href="/reviews"
            >
              Read all reviews
            </Link>
            <Link
              className="inline-flex border-2 border-primary-foreground/80 bg-transparent px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              href="/about"
            >
              About the diary
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

interface LandingSectionsProps {
  recentReviews: Review[];
}

export function LandingSections({ recentReviews }: LandingSectionsProps) {
  return (
    <>
      <HowWeRate />
      <SpotGrid recentReviews={recentReviews} />
      <CtaSection />
    </>
  );
}
