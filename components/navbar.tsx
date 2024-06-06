"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MenuButton } from "./menu-button";

const navLinks = [
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];
const menuVariant = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const containerVariant = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};
const mobileLinkVariant = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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
          {navLinks.map((link, index) => {
            return (
              <Link
                key={index}
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
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center border-l px-6 py-2 transition-colors duration-200 hover:bg-main hover:text-white"
          >
            <MenuButton
              strokeWidth={2}
              isOpen={open}
              color={isHovered ? "white" : "black"}
              height={16}
              width={32}
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute flex w-full origin-top border-x border-b bg-pale"
          >
            <motion.div
              variants={containerVariant}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex h-full w-full flex-col"
            >
              {navLinks.map((link, index) => {
                return (
                  <div
                    className={cn(
                      "flex w-full overflow-hidden p-4",
                      index < navLinks.length - 1 && "border-b",
                    )}
                    key={index}
                  >
                    <MobileNavLink
                      key={index}
                      title={link.title}
                      href={link.href}
                    />
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MobileNavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <motion.div
      variants={mobileLinkVariant}
      className="flex cursor-pointer items-center text-3xl uppercase transition-colors hover:text-main"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default Navbar;
