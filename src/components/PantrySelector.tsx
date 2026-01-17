"use client";

import { useMemo, useState } from "react";
import { ingredientCategories, ingredientLookup } from "@/data/ingredients";

const toDisplayName = (value: string): string =>
  value
    .split(" ")
    .map((part) =>
      part.length > 0 ? `${part[0].toUpperCase()}${part.slice(1)}` : part,
    )
    .join(" ");

type PantrySelectorProps = {
  selectedIngredients: string[];
  onSelectionChange: (nextSelection: string[]) => void;
};

const PantrySelector = ({
  selectedIngredients,
  onSelectionChange,
}: PantrySelectorProps) => {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return ingredientCategories;
    }

    return ingredientCategories
      .map((category) => {
        const items = category.items.filter((item) =>
          item.name.toLowerCase().includes(normalizedQuery),
        );
        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [query]);

  const selectedChips = selectedIngredients
    .map((value) => ingredientLookup[value] ?? toDisplayName(value))
    .sort((a, b) => a.localeCompare(b));

  const toggleIngredient = (value: string) => {
    const isSelected = selectedIngredients.includes(value);
    const nextSelection = isSelected
      ? selectedIngredients.filter((item) => item !== value)
      : [...selectedIngredients, value];
    onSelectionChange(nextSelection);
  };

  const clearAll = () => onSelectionChange([]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
            Your ingredients
          </h2>
          <button
            type="button"
            onClick={clearAll}
            className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-amber-200"
            disabled={selectedIngredients.length === 0}
          >
            Clear all
          </button>
        </div>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search ingredients"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-amber-200/60 focus:outline-none"
        />
        {selectedChips.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedChips.map((label) => (
              <span
                key={label}
                className="rounded-full border border-amber-200/40 bg-amber-200/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-100"
              >
                {label}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-white/60">
            Select ingredients to start matching cocktails.
          </p>
        )}
      </div>
      <div className="mt-6 space-y-5">
        {filteredCategories.length === 0 ? (
          <p className="text-sm text-white/60">No ingredients match that.</p>
        ) : (
          filteredCategories.map((category) => (
            <div key={category.id} className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">
                {category.title}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {category.items.map((item) => (
                  <label
                    key={item.value}
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-slate-950/30 px-3 py-2 text-sm text-white/80 transition hover:border-amber-200/40"
                  >
                    <input
                      type="checkbox"
                      checked={selectedIngredients.includes(item.value)}
                      onChange={() => toggleIngredient(item.value)}
                      className="h-4 w-4 accent-amber-200"
                    />
                    <span>{item.name}</span>
                  </label>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PantrySelector;
