"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { Marquee } from "@/components/marquee";
import { Badge } from "@/components/retroui/badge";
import { Button } from "@/components/retroui/button";
import { ScoreCard } from "@/components/score-card";
import type { ReviewScore } from "@/lib/types";

const HERO_SCORE_CARD = {
  aesthetic: 5,
  overall: 5,
  price: "££",
  quality: 4,
  value: "Good",
} satisfies ReviewScore;

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
const RATING_CRITERIA = [
  {
    title: "Quality",
    description:
      "Meat freshness, portion size, bread, and that crucial sauce balance. ",
  },
  {
    title: "Aesthetic",
    description:
      "Vibes matter. The packaging, the presentation. Can I post it on my story?",
  },
  {
    title: "Price",
    description: "£ to £££. Simple",
  },
  {
    title: "Value",
    description:
      "Amazing Deal, Good, Okay, or Not worth. Based on the other criterias.",
  },
] as const;

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];
function useReveal(once = true) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once });
  return { ref, inView };
}

function HeroIntro() {
  const { scrollY } = useScroll();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const cardY = useTransform(scrollY, [0, 600], [0, -120]);

  return (
    <section
      className="relative flex min-h-[calc(100vh-9rem)] flex-col justify-between gap-10 py-12 md:flex-row md:items-center md:gap-12 lg:gap-16"
      ref={constraintsRef}
    >
      {/* Left */}
      <div className="flex shrink-0 flex-col items-center gap-5 text-center md:items-start md:text-left">
        {/* Location badge */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE_SMOOTH }}
        >
          <Badge
            className="font-ibm text-[10px] uppercase tracking-[0.25em]"
            size="sm"
            variant="outline"
          >
            Southampton
          </Badge>
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
          Your guide to the tastiest kebab spots
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE_SMOOTH }}
        >
          <Button asChild variant="default">
            <Link href="/reviews">Read Reviews</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/about">About &rarr;</Link>
          </Button>
        </motion.div>
      </div>

      {/* Right */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex cursor-grab justify-center active:cursor-grabbing md:justify-end"
        drag
        dragConstraints={constraintsRef}
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
        className="absolute bottom-1 left-1/2 -translate-x-1/2 md:bottom-10"
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

export function HeroSection() {
  return (
    <div className="flex flex-col">
      <div className="mx-auto my-4 w-full border-2 border-border p-1 sm:p-4">
        <div className="mx-auto w-full max-w-6xl">
          <HeroIntro />
        </div>
      </div>
      <MarqueeStrip />
    </div>
  );
}

export function Scoring() {
  const { ref, inView } = useReveal();

  return (
    <motion.section
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      className="py-16 md:py-24"
      initial={false}
      ref={ref}
      transition={{ duration: 0.7, ease: EASE_SMOOTH }}
    >
      <div className="mb-12 flex items-center gap-4">
        <span className="font-ibm font-semibold text-sm uppercase tracking-[0.25em]">
          Scoring
        </span>
        <div className="h-[2px] flex-1 bg-border" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
            Fancy a kebab?
          </h2>
          <p className="mt-4 font-ibm text-primary-foreground/80 text-sm md:text-base">
            Here are my honest notes on the spots I&apos;ve tried. No
            sponsorships, no agenda.
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
