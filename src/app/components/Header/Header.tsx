"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-[#0c1533]">
      <div className="text-lg font-bold">Simbian</div>
      <nav className="hidden md:flex space-x-6 text-sm">
        <Link
          href="/"
          className={pathname === "/" ? "font-bold text-blue-400" : ""}
        >
          Without Simbian
        </Link>
        <Link
          href="/WithSimbian"
          className={
            pathname === "/WithSimbian" ? "font-bold text-blue-400" : ""
          }
        >
          With Simbian
        </Link>
      </nav>
      <a
        href="#"
        className="bg-white text-[#0a1026] px-4 py-2 rounded-full font-semibold shadow"
      >
        Book a Demo
      </a>
    </header>
  );
}
