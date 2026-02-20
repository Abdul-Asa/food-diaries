"use client";

export function ScoreCard() {
  return (
    <div className="flex min-h-60 w-4/5 flex-col border bg-pale p-2 shadow-[4px_4px_0px_red] sm:w-[65%] sm:p-6 md:flex-row lg:w-1/2 lg:shadow-[8px_8px_0px_red] xl:border-[3px] xl:p-12">
      <div className="flex flex-col justify-center gap-1 text-center md:gap-2 md:p-4">
        <h2 className="font-ibm font-semibold text-[clamp(1rem,1.5vw,4rem)]">
          Overall
        </h2>
        <p className="font-bold text-[clamp(1.85rem,5vw,10rem)] text-main">
          100
        </p>
      </div>
      <div className="m-3 border-main border-t border-l xl:mx-8" />
      <div className="flex w-full flex-col items-center gap-4 text-center sm:flex-row">
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col items-center gap-1 md:gap-2">
            <h2 className="font-ibm font-semibold text-[clamp(1rem,1.5vw,4rem)]">
              Quality
            </h2>
            <p className="font-bold text-[clamp(1rem,1.5vw,4rem)] text-main">
              5/5
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-1 md:gap-2">
            <h2 className="font-ibm font-semibold text-[clamp(1rem,1.5vw,4rem)]">
              Aesthetic
            </h2>
            <p className="font-bold text-[clamp(1rem,1.5vw,4rem)] text-main">
              5/5
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col items-center gap-1 md:gap-2">
            <h2 className="font-ibm font-semibold text-[clamp(1rem,1.5vw,4rem)]">
              Price
            </h2>
            <p className="font-bold text-[clamp(1rem,1.5vw,4rem)] text-main">
              £
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-1 md:gap-2">
            <h2 className="font-ibm font-semibold text-[clamp(1rem,1.5vw,4rem)]">
              Value
            </h2>
            <p className="font-semibold text-[clamp(1rem,1.5vw,4rem)] text-main">
              Amazing Deal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
