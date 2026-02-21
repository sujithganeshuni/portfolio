"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScroll || currentScroll < 50) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`w-full py-6 fixed top-0 left-0 bg-[#F5F5F7]/80 backdrop-blur-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition"
        >
          Sujith Ganeshuni
        </Link>

        <div className="flex items-center gap-8 text-sm text-[#6E6E73]">
          <Link href="/projects" className="hover:text-black transition-colors">
            Projects
          </Link>
          <Link href="/credentials" className="hover:text-black transition-colors">
            Credentials
          </Link>
          <Link href="/about" className="hover:text-black transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}