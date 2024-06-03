"use client";
import Link from "next/link";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef, useState } from "react";

const Navbar: React.FC = () => {
  const playerRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (playerRef.current) {
      if (open) {
        playerRef.current.setPlayerDirection(-1);
        playerRef.current.play();
      } else {
        playerRef.current.setPlayerDirection(1);
        playerRef.current.play();
      }
    }
    setOpen(!open);
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
          <Link
            href="/blog"
            className="flex items-center border-l px-6 py-2 transition-colors duration-200 hover:bg-main hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="flex items-center border-l px-6 py-2 transition-colors duration-200 hover:bg-main hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="flex items-center border-l px-6 py-2 transition-colors duration-200 hover:bg-main hover:text-white"
          >
            Contact
          </Link>
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
      {open && (
        <div className="fixed h-full w-full bg-white shadow-lg">
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
