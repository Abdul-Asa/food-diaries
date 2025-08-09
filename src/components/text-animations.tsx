"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export function HeroText({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  // Process words
  const processedWords = words.split(" ").map((word, i) => {
    if (word === "<br/>") {
      return <br key={i} />;
    } else if (word === "") {
      return <span key={i}>&nbsp;</span>;
    } else {
      return (
        <motion.span
          key={i}
          whileHover={{ color: "#e03131", y: -2 }}
          className={cn(
            word.startsWith("Southampton") && "text-main",
            "will-change-transform transform-gpu pr-2 sm:pr-4 md:pr-6"
          )}
          variants={framerProps}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      );
    }
  });

  return (
    <motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "text-[clamp(1.85rem,6vw,10rem)] font-bold drop-shadow-sm",
        className
      )}
    >
      {processedWords}
    </motion.h1>
  );
}
