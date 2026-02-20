"use client";

import { Bell, LogOut, Menu, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <nav className="border-border border-y-2">
      <div className="mx-auto flex h-14 max-w-6xl items-stretch justify-between px-4 xl:px-0">
        <div className="flex items-center border-border border-x-2 px-4 font-head text-2xl">
          SING
        </div>
        <div className="flex gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <div className="relative">
              <MessageCircle aria-hidden className="size-6" strokeWidth={2} />
            </div>
            <div className="relative">
              <Bell aria-hidden className="size-6" strokeWidth={2} />
              <span
                aria-hidden
                className="absolute -top-px right-px size-2.5 rounded-full border-2 border-border bg-chart-3"
              />
            </div>
          </div>
          <div className="flex items-stretch border-border border-x-2">
            <Link
              className="flex items-center gap-2 bg-chart-4 px-4 font-medium"
              href="#"
            >
              <span className="relative flex size-9 overflow-hidden rounded-full border-2 border-border" />
              <span className="hidden md:inline">Zoe Smith</span>
            </Link>
            <Link
              className="hidden items-center gap-2 border-border border-l-2 bg-chart-3 px-4 font-medium md:flex"
              href="#"
            >
              <span>Log Out</span>
              <LogOut aria-hidden className="size-5" strokeWidth={2} />
            </Link>
            <div className="border-border border-l-2 md:hidden">
              <button
                aria-label="Open menu"
                className="flex h-full cursor-pointer items-center border-2 border-border bg-chart-2 p-2 font-head font-medium outline-none transition duration-200 hover:translate-y-0.5 hover:shadow-sm active:translate-x-0.5 active:translate-y-1 active:shadow-none md:px-4"
                type="button"
              >
                <Menu aria-hidden className="size-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
