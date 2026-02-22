"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const NAV_LINKS = [
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function HamburgerButton({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <button
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="relative z-50 flex aspect-square h-full cursor-pointer items-center justify-center border-border border-x-2 px-3 md:hidden"
      onClick={toggle}
      type="button"
    >
      <div className="flex h-5 w-6 flex-col justify-between">
        <motion.span
          animate={
            isOpen
              ? {
                  rotate: 45,
                  y: 8,
                }
              : { rotate: 0, y: 0 }
          }
          className="block h-[3px] w-full origin-center rounded-none bg-foreground"
          transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.span
          animate={
            isOpen ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }
          }
          className="block h-[3px] w-full origin-center rounded-none bg-foreground"
          transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.span
          animate={
            isOpen
              ? {
                  rotate: -45,
                  y: -8,
                }
              : { rotate: 0, y: 0 }
          }
          className="block h-[3px] w-full origin-center rounded-none bg-foreground"
          transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
    </button>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      className="fixed inset-0 z-40 flex flex-col bg-primary md:hidden"
      exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Decorative grid lines */}

      {/* Menu content */}
      <div className="flex flex-1 flex-col justify-center px-8">
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -60, opacity: 0 }}
              key={link.href}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                className="group flex items-center border-primary-foreground/20 border-b-2 py-5 no-underline"
                href={link.href}
                onClick={onClose}
              >
                <motion.span
                  animate={{ opacity: 1 }}
                  className="font-ibm text-primary-foreground/40 text-sm tabular-nums"
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                >
                  0{i + 1}
                </motion.span>
                <span className="ml-4 font-bold font-poppins text-5xl text-primary-foreground tracking-tight transition-transform duration-300 group-hover:translate-x-3">
                  {link.label}
                </span>
                <motion.span
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-auto font-bold text-2xl text-primary-foreground/60 transition-colors duration-300 group-hover:text-primary-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Bottom decorative element */}
        <motion.div
          animate={{ scaleX: 1 }}
          className="mt-12 origin-left border-primary-foreground/20 border-t-2 pt-6"
          initial={{ scaleX: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="font-ibm text-primary-foreground/50 text-xs uppercase tracking-widest"
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            Saints Food Diary
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed top-0 right-0 left-0 z-40 h-4 bg-background"
      />

      <nav className="fixed top-4 right-4 left-4 z-50 border-border border-y-2 bg-background">
        <div className="mx-auto flex h-12 items-stretch justify-between">
          <Link
            className="flex h-full items-stretch no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href="/"
            onClick={closeMenu}
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

          {/* Desktop nav */}
          <div className="hidden md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                className="flex animate-colors items-center justify-center border-border border-r-2 bg-card px-4 text-foreground text-lg first:border-l-2 hover:bg-primary hover:text-primary-foreground"
                href={link.href}
                key={link.href}
              >
                <span className="font-bold">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <HamburgerButton isOpen={mobileMenuOpen} toggle={toggleMenu} />
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu onClose={closeMenu} />}
      </AnimatePresence>
    </>
  );
}
