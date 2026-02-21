"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { ScoreCard } from "@/components/score-card";
import type { ScoreCard as ScoreCardType } from "@/lib/types";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

const MARQUEE_KEBAB_SPOTS = [
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

const HERO_SCORE_CARD = {
  aesthetic: 5,
  overall: 5,
  price: "££",
  quality: 4,
  value: "Amazing Deal",
} satisfies ScoreCardType;

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
          <ScoreCard score={HERO_SCORE_CARD} />
          {/* {featuredReview && (
            <div className="hidden items-center justify-between px-1 md:flex">
              <div>
                <h3 className="font-bold text-sm">
                  {featuredReview.frontmatter.name}
                </h3>
                <p className="font-ibm text-muted-foreground text-xs">
                  {featuredReview.frontmatter.area}
                </p>
              </div>
              <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                Latest
              </span>
            </div>
          )} */}
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
        {MARQUEE_KEBAB_SPOTS.map((spot) => (
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
          {MARQUEE_KEBAB_SPOTS.map((spot) => (
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

export function HeroPage() {
  return (
    <div className="flex flex-col">
      <div className="mx-auto w-full max-w-6xl">
        <HeroSection />
      </div>
      <MarqueeStrip />
    </div>
  );
}
