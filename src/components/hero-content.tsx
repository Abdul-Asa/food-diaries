"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { ScoreCard } from "@/components/score-card";
import type { ScoreCard as ScoreCardType } from "@/lib/types";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FEATURED_SCORE: ScoreCardType = {
  overall: 100,
  quality: 5,
  aesthetic: 5,
  price: "£",
  value: "Good",
};

const KEBAB_SPOTS = [
  "Sultan's Delight",
  "Ali's Kebab House",
  "The Wrap Shop",
  "Noor's Kitchen",
  "Beirut Nights",
  "Soton Grill",
  "Kebab King",
  "The Flame Pit",
  "Anatolia",
  "Marmaris BBQ",
  "Istanbul Express",
  "Portswood Grill",
];

function HeroSection() {
  const { scrollY } = useScroll();
  const cardY = useTransform(scrollY, [0, 600], [0, -120]);

  return (
    <section className="relative flex min-h-[calc(100vh-6rem)] flex-col justify-between gap-10 py-12 md:flex-row md:items-center md:gap-12 lg:gap-16">
      {/* Left */}
      <div className="flex shrink-0 flex-col items-center gap-5 text-center md:items-start md:text-left">
        {/* Location badge */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE_SMOOTH }}
        >
          <span className="inline-block border-2 border-border px-3 py-1 font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.25em] shadow-xs">
            Southampton
          </span>
        </motion.div>

        {/* Title */}
        <div className="flex flex-col">
          <div className="overflow-hidden pr-1">
            <motion.div
              animate={{ y: "0%" }}
              initial={{ y: "110%" }}
              transition={{ duration: 1, delay: 0.1, ease: EASE_OUT }}
            >
              <h1 className="cursor-default font-bold font-poppins text-[clamp(4rem,12vw,8rem)] leading-[0.88] tracking-[-0.04em] transition-transform duration-300 ease-out hover:-translate-y-1.5">
                SAINTS
              </h1>
            </motion.div>
          </div>
          <div className="overflow-hidden pr-1">
            <motion.div
              animate={{ y: "0%" }}
              initial={{ y: "110%" }}
              transition={{ duration: 1, delay: 0.18, ease: EASE_OUT }}
            >
              <span className="block cursor-default font-bold font-poppins text-[clamp(4rem,12vw,8rem)] text-primary leading-[0.88] tracking-[-0.04em] transition-transform duration-300 ease-out hover:-translate-y-1.5">
                FOOD
              </span>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              animate={{ y: "0%" }}
              initial={{ y: "110%" }}
              transition={{ duration: 1, delay: 0.26, ease: EASE_OUT }}
            >
              <p className="cursor-default font-bold font-poppins text-[clamp(4rem,12vw,8rem)] text-foreground leading-[0.88] tracking-[-0.04em] transition-transform duration-300 ease-out hover:-translate-y-1.5">
                DIARY
              </p>
            </motion.div>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="max-w-sm font-ibm text-muted-foreground text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE_SMOOTH }}
        >
          Your guide to the tastiest kebab spots in Southampton
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE_SMOOTH }}
        >
          <Link
            className="border-2 border-border bg-primary px-5 py-2.5 font-bold text-primary-foreground shadow-md transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            href="/reviews"
          >
            Read Reviews
          </Link>
          <Link
            className="border-2 border-border bg-card px-5 py-2.5 font-bold text-foreground shadow-md transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            href="/about"
          >
            About &rarr;
          </Link>
        </motion.div>
      </div>

      {/* Right */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex cursor-grab justify-center active:cursor-grabbing md:justify-end"
        drag
        dragElastic={0.12}
        dragSnapToOrigin
        initial={{ opacity: 0, y: 40 }}
        style={{ y: cardY }}
        transition={{ duration: 1.2, delay: 0.35, ease: EASE_OUT }}
        whileDrag={{ scale: 1.04 }}
      >
        <div className="flex max-w-md -rotate-2 flex-col gap-3">
          <ScoreCard score={FEATURED_SCORE} />
          <div className="hidden items-center justify-between px-1 md:flex">
            <div>
              <h3 className="font-bold text-sm">Sultan&apos;s Delight</h3>
              <p className="font-ibm text-muted-foreground text-xs">
                Portswood, SO17
              </p>
            </div>
            <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              Latest
            </span>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-10"
        initial={{ opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          className="flex flex-col items-center gap-1"
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="text-muted-foreground text-sm">&darr;</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MarqueeStrip() {
  return (
    <div className="-mx-4 border-border border-y-[3px] bg-foreground">
      <Marquee duration={25} pauseOnHover>
        {KEBAB_SPOTS.map((spot) => (
          <span className="flex items-center gap-6 px-6 py-3" key={spot}>
            <span className="font-ibm text-background text-xs uppercase tracking-[0.2em]">
              {spot}
            </span>
            <span className="text-[10px] text-primary">&#9670;</span>
          </span>
        ))}
      </Marquee>
      <div className="border-background/10 border-t">
        <Marquee duration={35} pauseOnHover reverse>
          {KEBAB_SPOTS.map((spot) => (
            <span
              className="flex items-center gap-6 px-6 py-3"
              key={`${spot}-rev`}
            >
              <span className="font-bold font-poppins text-background/50 text-xs uppercase tracking-[0.15em]">
                {spot}
              </span>
              <span className="text-[10px] text-primary/50">&#9733;</span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

function FeaturedReview() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 1.2, ease: EASE_SMOOTH }}
    >
      <div className="mb-8 flex items-center gap-4">
        <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
          Featured Review
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
        {/* Score Card */}
        <ScoreCard className="shrink-0" score={FEATURED_SCORE} />

        {/* Review content */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold font-poppins text-3xl tracking-tight md:text-4xl">
            Sultan&apos;s Delight
          </h2>
          <p className="font-ibm text-muted-foreground text-sm">
            Portswood Road, Southampton &middot; Reviewed Jan 2026
          </p>
          <p className="max-w-lg text-foreground/80 leading-relaxed">
            A hidden gem tucked away on Portswood Road. The lamb doner is carved
            fresh off the spit, the salad is crisp, and the garlic sauce hits
            different at 2am. This is the one.
          </p>
          <Link
            className="group mt-2 flex items-center gap-2 font-bold text-primary transition-colors hover:text-primary-hover"
            href="/reviews/sultans-delight"
          >
            Read Full Review
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

function StatsBar() {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      className="border-border border-t-2 py-12"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-10 md:gap-14">
          {[
            { number: "12", label: "Spots Reviewed" },
            { number: "4.2", label: "Avg Rating" },
            { number: "SO14\u201317", label: "Postcodes" },
          ].map(({ number, label }) => (
            <div key={label}>
              <span className="font-bold font-poppins text-2xl md:text-3xl">
                {number}
              </span>
              <p className="mt-1 font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                {label}
              </p>
            </div>
          ))}
        </div>
        <p className="max-w-xs font-ibm text-muted-foreground text-sm leading-relaxed">
          Every kebab spot in Southampton, reviewed honestly. No sponsorships.
          No&nbsp;agenda. Just&nbsp;kebabs.
        </p>
      </div>
    </motion.section>
  );
}

export function HeroPage() {
  return (
    <div className="flex flex-col">
      <div className="mx-auto w-full max-w-6xl">
        <HeroSection />
      </div>
      <MarqueeStrip />
      <div className="mx-auto w-full max-w-6xl">
        <FeaturedReview />
        <StatsBar />
      </div>
    </div>
  );
}
