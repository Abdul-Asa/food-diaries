"use client";
import Link from "next/link";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];
const menuVars = {
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
const containerVars = {
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

const Navbar: React.FC = () => {
  const playerRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClick = () => {
    if (playerRef.current) {
      if (open) {
        playerRef.current.setPlayerDirection(-1);
        playerRef.current.setPlayerSpeed(2);
        playerRef.current.play();
      } else {
        playerRef.current.setPlayerDirection(1);
        playerRef.current.setPlayerSpeed(1);
        playerRef.current.play();
      }
    }
    toggleMenu();
  };

  return (
    <nav className="relative z-10 bg-pale">
      <div className="h-2 w-full md:h-4" />
      <div className="flex justify-between border text-[clamp(1rem,1vw,4rem)]">
        <div className="flex font-semibold">
          <Link href={"/"} className="hidden border-r bg-main md:block">
            <Image src="/logo.png" alt="logo" width={60} height={60} />
          </Link>
          <Link
            href={"/"}
            className="flex items-center border-r px-6 py-2 hover:bg-main hover:text-white"
          >
            Food diaries
          </Link>
        </div>

        <div className="hidden md:flex">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="flex items-center border-l px-6 py-2 transition-colors duration-200 hover:bg-main hover:text-white"
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className="flex md:hidden">
          <button
            onClick={handleClick}
            className="flex items-center border-l px-6 py-2 transition-colors duration-200 hover:bg-main hover:text-white"
          >
            <Player
              ref={playerRef}
              keepLastFrame={true}
              src="/menu.json"
              style={{ height: "30px", width: "30px" }}
            ></Player>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute flex w-full origin-top border-x border-b bg-pale"
          >
            <motion.div
              variants={containerVars}
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

const mobileLinkVars = {
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
const MobileNavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="flex cursor-pointer items-center text-3xl uppercase transition-colors hover:text-main"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default Navbar;
