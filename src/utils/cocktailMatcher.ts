import type { Cocktail } from "@/types/cocktail";

export type PartialMatch = {
  cocktail: Cocktail;
  missingIngredients: string[];
  matchCount: number;
};

const descriptorRegex =
  /\b(fresh|freshly|premium|organic|chilled|cold|large|small)\b/g;

const synonymMap: Record<string, string> = {
  "blanco tequila": "tequila",
  "silver tequila": "tequila",
  "tequila blanco": "tequila",
  "white rum": "rum",
  "light rum": "rum",
  "dark rum": "rum",
  bourbon: "bourbon whiskey",
  rye: "rye whiskey",
  "orange liqueur": "triple sec",
  kahlua: "coffee liqueur",
  "sugar syrup": "simple syrup",
  "agave nectar": "agave syrup",
  "demerara syrup": "demerara sugar",
  "soda water": "club soda",
  "sparkling water": "club soda",
  "kosher salt": "salt",
  "sea salt": "salt",
  "mint sprig": "mint leaves",
  mint: "mint leaves",
};

export const normalizeIngredientName = (name: string): string => {
  const cleaned = name
    .toLowerCase()
    .replace(/\(.*?\)/g, " ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(descriptorRegex, " ")
    .replace(/\s+/g, " ")
    .trim();

  return synonymMap[cleaned] ?? cleaned;
};

const splitAlternatives = (ingredient: string): string[] =>
  ingredient
    .split(/\s+or\s+|\s*\/\s*/g)
    .map((part) => part.trim())
    .filter(Boolean);

const normalizeIngredientOptions = (ingredient: string): string[] => {
  const parts = splitAlternatives(ingredient);
  if (parts.length === 0) {
    return [normalizeIngredientName(ingredient)];
  }
  return parts.map((part) => normalizeIngredientName(part));
};

const toDisplayName = (value: string): string =>
  value
    .split(" ")
    .map((part) =>
      part.length > 0 ? `${part[0].toUpperCase()}${part.slice(1)}` : part,
    )
    .join(" ");

const formatMissingLabel = (options: string[]): string => {
  const labels = options.map((option) => toDisplayName(option));
  return labels.join(" or ");
};

export const matchCocktails = (
  selectedIngredients: string[],
  cocktails: Cocktail[],
): {
  completeMatches: Cocktail[];
  partialMatches: PartialMatch[];
} => {
  const normalizedSelected = selectedIngredients.map(normalizeIngredientName);
  const selectedSet = new Set(normalizedSelected);
  const completeMatches: Cocktail[] = [];
  const partialMatches: PartialMatch[] = [];

  cocktails.forEach((cocktail) => {
    let matchCount = 0;
    const missingIngredients: string[] = [];

    cocktail.ingredients.forEach((ingredient) => {
      const options = normalizeIngredientOptions(ingredient.name);
      const matched = options.some((option) => selectedSet.has(option));

      if (matched) {
        matchCount += 1;
      } else {
        missingIngredients.push(formatMissingLabel(options));
      }
    });

    if (missingIngredients.length === 0) {
      completeMatches.push(cocktail);
      return;
    }

    if (missingIngredients.length <= 2 && matchCount >= 2) {
      partialMatches.push({ cocktail, missingIngredients, matchCount });
    }
  });

  partialMatches.sort((a, b) => b.matchCount - a.matchCount);

  return { completeMatches, partialMatches };
};
