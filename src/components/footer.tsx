import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-2 border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between md:gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link
            className="flex items-center gap-3 no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href="/"
          >
            <Image
              alt="Saints Food Diary"
              height={40}
              src="/icons/logo.png"
              width={40}
            />
            <span className="font-bold text-foreground text-lg">
              Saints Food Diary
            </span>
          </Link>
          <p className="max-w-xs font-ibm text-muted-foreground text-sm leading-relaxed">
            Unholy amounts of kebabs were eaten in the making of these reviews.
          </p>
        </div>

        {/* Nav + meta */}
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
          <nav aria-label="Footer navigation">
            <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
              Navigation
            </span>
            <ul className="mt-3 flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    className="font-bold text-foreground transition-colors hover:text-primary"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-border border-t-2 bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="font-ibm text-muted-foreground text-xs">
            &copy; {year}, Saints Food Diary. Made with love by{" "}
            <a
              className="font-bold text-foreground underline decoration-border underline-offset-2 transition-colors hover:text-primary"
              href="https://asa-dev.vercel.app"
            >
              Asa
            </a>
            .
          </p>
          <div className="flex items-center gap-6">
            <Link
              className="font-ibm text-muted-foreground text-xs underline decoration-border underline-offset-2 transition-colors hover:text-foreground"
              href="/disclaimers"
            >
              Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
