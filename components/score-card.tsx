"use client";
import { motion } from "framer-motion";

export default function ScoreCard() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        delay: 0.5,
        damping: 20,
      }}
      className="flex min-h-60 w-4/5 flex-col border bg-pale p-2 shadow-[4px_4px_0px_red] sm:w-[65%] sm:p-6 md:flex-row lg:w-1/2 lg:shadow-[8px_8px_0px_red] xl:border-[3px] xl:p-12"
    >
      <div className="flex flex-col justify-center gap-1 text-center md:gap-2 md:p-4">
        <h2 className="font-ibm text-[clamp(1rem,1.5vw,4rem)] font-semibold">
          Overall
        </h2>
        <p className="text-[clamp(1.85rem,5vw,10rem)] font-bold text-main">
          100
        </p>
      </div>
      <div className="m-3 border-l border-t border-main xl:mx-8" />
      <div className="flex w-full flex-col items-center gap-4 text-center sm:flex-row">
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col items-center gap-1 md:gap-2">
            <h2 className="font-ibm text-[clamp(1rem,1.5vw,4rem)] font-semibold">
              Quality
            </h2>
            <p className="text-[clamp(1rem,1.5vw,4rem)] font-bold text-main">
              5/5
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-1 md:gap-2">
            <h2 className="font-ibm text-[clamp(1rem,1.5vw,4rem)] font-semibold">
              Aesthetic
            </h2>
            <p className="text-[clamp(1rem,1.5vw,4rem)] font-bold text-main">
              5/5
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col items-center gap-1 md:gap-2">
            <h2 className="font-ibm text-[clamp(1rem,1.5vw,4rem)] font-semibold">
              Price
            </h2>
            <p className="text-[clamp(1rem,1.5vw,4rem)] font-bold text-main">
              £
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-1 md:gap-2">
            <h2 className="font-ibm text-[clamp(1rem,1.5vw,4rem)] font-semibold">
              Value
            </h2>
            <p className="text-[clamp(1rem,1.5vw,4rem)] font-semibold text-main">
              Amazing Deal
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
