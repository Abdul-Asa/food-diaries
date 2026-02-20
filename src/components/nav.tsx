import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#blog", label: "Blog" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="border-foreground border-b-2">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link
          className="flex items-center gap-3 font-bold font-head text-foreground text-xl tracking-tight no-underline"
          href="/"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
            <span className="h-2 w-2 rounded-full bg-primary-foreground" />
          </span>
          Food diaries
        </Link>
        <ul className="flex list-none flex-wrap gap-6 p-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                className={cn(
                  "font-medium text-foreground underline-offset-4 hover:underline"
                )}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
