"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "pantrySelection";

const readPantryCount = () => {
  if (typeof window === "undefined") {
    return 0;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return 0;
    }
    const parsed = JSON.parse(stored) as string[];
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
};

const Header = () => {
  const [pantryCount, setPantryCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setPantryCount(readPantryCount());
    };

    updateCount();
    window.addEventListener("pantry:updated", updateCount);

    return () => {
      window.removeEventListener("pantry:updated", updateCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-200/10 via-transparent to-rose-200/10" />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.4em] text-amber-200/80">
            Cocktail Pantry
          </span>
          <span className="text-lg font-semibold text-white">
            Cocktail Recipes
          </span>
        </Link>
        <Link
          href="/pantry"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-200/60 hover:bg-white/10"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-200/80">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8.5h12" />
              <path d="M7.5 8.5v9a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-9" />
              <path d="M9.5 8.5V6.5a2.5 2.5 0 0 1 5 0v2" />
            </svg>
          </span>
          <span>My Pantry</span>
          <span
            className={`flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-2 text-xs font-semibold transition ${
              pantryCount > 0
                ? "bg-amber-200/80 text-slate-950"
                : "bg-white/10 text-white/60"
            }`}
          >
            {pantryCount}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
