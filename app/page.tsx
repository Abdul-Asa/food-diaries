"use client";
import ScoreCard from "@/components/score-card";
import { WordPullUp } from "@/components/text-animation";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import Rellax from "rellax";

export default function Home() {
  useEffect(() => {
    new Rellax(".rellax");
  }, []);

  return (
    <main className="flex flex-col">
      {/* Abstract into Hero component*/}
      <section className="mt-2 flex h-[calc(100vh-76px)] flex-col border p-3 md:mt-4 md:h-[calc(100vh-104px)] md:p-8">
        <div
          className="rellax flex h-full flex-col justify-center md:w-[80%]"
          data-rellax-speed="-2"
        >
          <WordPullUp
            className="text-center md:text-left"
            words="Your guide to the tastiest Kebab spots in Southampton."
          />
        </div>
        <div
          className="rellax flex h-full items-center justify-center p-4 md:justify-end"
          data-rellax-speed="1"
          data-rellax-zindex="1"
        >
          <ScoreCard />
        </div>
      </section>

      {/* Abstract into filter component*/}
      <div className="sticky top-0 z-10 bg-pale">
        <div className="h-2 w-full" />
        <div className="flex justify-center border">
          <div className="flex w-full max-w-[1000px] justify-between border-x bg-pale font-semibold">
            <Link
              href={"/"}
              className="flex items-center border-r px-6 py-2 hover:bg-main hover:text-white"
            >
              Food diaries
            </Link>
            <Link
              href={"/"}
              className="flex items-center border-l px-6 py-2 hover:bg-main hover:text-white"
            >
              Food diaries
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract into List component*/}
      <section className="flex justify-center border-x">
        <div className="grid w-full max-w-[1000px] grid-cols-1 gap-x-4 self-center md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div
              key={i}
              className="col-span-1 grid h-40 items-center justify-center border-x border-b bg-teal-300 lg:col-span-3"
            >
              Dairy {i}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
