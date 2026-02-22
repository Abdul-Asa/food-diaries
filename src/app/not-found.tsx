import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
        Error 404
      </span>
      <h1 className="mt-4 font-bold font-poppins text-6xl text-foreground tracking-tight md:text-7xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-ibm text-muted-foreground text-sm">
        This kebab doesn&apos;t exist. Maybe it was taken off the menu, or you
        took a wrong turn on Portswood Road.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          className="border-2 border-border bg-primary px-5 py-2.5 font-bold text-primary-foreground shadow-md transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          href="/"
        >
          Back to home
        </Link>
        <Link
          className="border-2 border-border bg-card px-5 py-2.5 font-bold text-foreground shadow-md transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          href="/reviews"
        >
          Browse reviews
        </Link>
      </div>
    </div>
  );
}
