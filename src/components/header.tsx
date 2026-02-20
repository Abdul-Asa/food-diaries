"use client";

import Image from "next/image";

export function Header() {
  return (
    <nav className="sticky top-0 z-20">
      <Image alt="logo" height={40} src="/icons/logo.png" width={40} />
    </nav>
  );
}
