"use client";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Reviews", href: "/reviews" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-20 bg-pale">
      <div className="h-2 w-full md:h-4" />
      <div className="flex justify-between border text-[clamp(1rem,1vw,4rem)]">
        <div className="flex font-semibold">
          <Link href={"/"} className="hidden border-r bg-main md:block">
            <Image src="/icons/logo.png" alt="logo" width={40} height={40} />
          </Link>
          <Link
            href={"/"}
            className={cn(
              "focus-visible:outline-main",
              "flex items-center border-r px-6 py-1 transition-colors duration-200 hover:bg-main hover:text-white",
            )}
          >
            Food diaries
          </Link>
        </div>

        <div className="group hidden md:flex">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "focus-visible:outline-main",
                  "flex items-center border-l px-6 py-1 transition-colors duration-200 hover:bg-main hover:text-white",
                )}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
