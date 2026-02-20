"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <nav className="sticky top-0 z-20 bg-pale">
      <div className="flex h-2 w-full justify-between border text-[clamp(1rem,1vw,4rem)] md:h-4">
        <div className="flex font-semibold">
          <Link className="hidden border-r bg-main md:block" href={"/"}>
            <Image alt="logo" height={40} src="/icons/logo.png" width={40} />w
          </Link>
          <Link
            className={cn(
              "focus-visible:outline-main",
              "flex items-center border-r px-6 py-1 transition-colors duration-200 hover:bg-main hover:text-white"
            )}
            href={"/"}
          >
            Food diaries
          </Link>
        </div>

        <div className="group hidden md:flex">
          {navLinks.map((link, index) => {
            return (
              <Link
                className={cn(
                  "focus-visible:outline-main",
                  "flex items-center border-l px-6 py-1 transition-colors duration-200 hover:bg-main hover:text-white"
                )}
                href={link.href}
                key={index}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
