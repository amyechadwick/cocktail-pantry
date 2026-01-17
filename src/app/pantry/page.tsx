"use client";

import { useEffect, useMemo, useState } from "react";
import CocktailMatchCard from "@/components/CocktailMatchCard";
import PantrySelector from "@/components/PantrySelector";
import { cocktails } from "@/data/cocktails";
import { matchCocktails } from "@/utils/cocktailMatcher";

const STORAGE_KEY = "pantrySelection";

const readStoredIngredients = (): string[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return [];
    }
    const parsed = JSON.parse(stored) as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export default function PantryPage() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const hydrate = () => {
      setSelectedIngredients(readStoredIngredients());
      setIsHydrated(true);
    };

    hydrate();
    window.addEventListener("pageshow", hydrate);

    return () => {
      window.removeEventListener("pageshow", hydrate);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(selectedIngredients),
    );
    window.dispatchEvent(new Event("pantry:updated"));
  }, [selectedIngredients, isHydrated]);

  const { completeMatches, partialMatches } = useMemo(
    () => matchCocktails(selectedIngredients, cocktails),
    [selectedIngredients],
  );

  return (
    <div className="min-h-screen px-6 pb-20 pt-10 sm:px-10">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-amber-200/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-52 w-52 rounded-full bg-rose-200/10 blur-3xl" />
        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">
            My Pantry
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Find cocktails you can mix right now.
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Pick the ingredients you have on hand and we will surface complete
            matches first, then close matches missing two ingredients or fewer.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <PantrySelector
            selectedIngredients={selectedIngredients}
            onSelectionChange={setSelectedIngredients}
          />
          <div className="space-y-8">
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
                  Complete Matches
                </h2>
                <span className="text-xs text-white/50">
                  {completeMatches.length} cocktails
                </span>
              </div>
              {completeMatches.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {completeMatches.map((cocktail) => (
                    <CocktailMatchCard
                      key={cocktail.id}
                      cocktail={cocktail}
                      matchType="complete"
                    />
                  ))}
                </div>
              ) : (
                <p className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
                  No complete matches yet. Add a few more ingredients to unlock
                  your first recipe.
                </p>
              )}
            </section>
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm uppercase tracking-[0.3em] text-rose-200/70">
                  Close Matches
                </h2>
                <span className="text-xs text-white/50">
                  {partialMatches.length} cocktails
                </span>
              </div>
              {partialMatches.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {partialMatches.map((match) => (
                    <CocktailMatchCard
                      key={match.cocktail.id}
                      cocktail={match.cocktail}
                      matchType="partial"
                      missingIngredients={match.missingIngredients}
                    />
                  ))}
                </div>
              ) : (
                <p className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
                  No close matches yet. Select at least two ingredients to see
                  near misses.
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
