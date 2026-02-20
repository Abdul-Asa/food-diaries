"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <nav className="border-border border-y-2">
      <div className="mx-auto flex h-12 items-stretch justify-between">
        <Link
          className="flex h-full items-stretch no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          href="/"
        >
          <div className="flex border-border border-l-2">
            <div className="flex aspect-square items-center justify-center border-border border-r-2 bg-card px-2">
              <Image
                alt="Saints Food Diary logo"
                height={50}
                src="/icons/logo.png"
                width={50}
              />
            </div>
            <div className="flex animate-colors items-center justify-center border-border border-r-2 bg-card px-4 text-foreground text-lg hover:bg-primary hover:text-primary-foreground">
              <span className="font-bold">Food diaries</span>
            </div>
          </div>
        </Link>
        <div className="flex">
          <Link
            className="flex animate-colors items-center justify-center border-border border-x-2 bg-card px-4 text-foreground text-lg hover:bg-primary hover:text-primary-foreground"
            href="/reviews"
          >
            <span className="font-bold">Reviews</span>
          </Link>
          <Link
            className="flex animate-colors items-center justify-center border-border border-r-2 bg-card px-4 text-foreground text-lg hover:bg-primary hover:text-primary-foreground"
            href="/about"
          >
            <span className="font-bold">About</span>
          </Link>
          <Link
            className="flex animate-colors items-center justify-center border-border border-r-2 bg-card px-4 text-foreground text-lg hover:bg-primary hover:text-primary-foreground"
            href="/contact"
          >
            <span className="font-bold">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
