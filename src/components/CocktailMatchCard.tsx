import Image from "next/image";
import Link from "next/link";
import type { Cocktail } from "@/types/cocktail";
import { ingredientLookup } from "@/data/ingredients";

type CocktailMatchCardProps = {
  cocktail: Cocktail;
  matchType: "complete" | "partial";
  missingIngredients?: string[];
};

const CocktailMatchCard = ({
  cocktail,
  matchType,
  missingIngredients = [],
}: CocktailMatchCardProps) => {
  const missingLabels = missingIngredients.map(
    (item) => ingredientLookup[item] ?? ingredientLookup[item.toLowerCase()] ?? item,
  );
  const isComplete = matchType === "complete";

  return (
    <Link
      href={`/cocktail/${cocktail.id}`}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-amber-200/60 hover:bg-white/10"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] shadow-lg ring-1 ring-white/30 ${
            isComplete
              ? "bg-amber-200 text-slate-950"
              : "bg-rose-500 text-white"
          }`}
        >
          {isComplete
            ? "Ready to mix"
            : `Missing ${missingIngredients.length}`}
        </span>
      </div>
      <div className="flex flex-col gap-2 px-5 py-4">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
          {cocktail.category}
        </p>
        <h3 className="text-xl font-semibold text-white">{cocktail.name}</h3>
        <p className="text-sm text-white/70">{cocktail.description}</p>
        {!isComplete && missingLabels.length > 0 ? (
          <div className="rounded-2xl border border-rose-200/20 bg-rose-200/10 px-3 py-2 text-xs text-rose-100">
            Missing: {missingLabels.join(", ")}
          </div>
        ) : null}
        <div className="flex items-center justify-between pt-2 text-xs text-white/50">
          <span>{cocktail.glass}</span>
          <span className="transition group-hover:text-amber-200">
            View recipe →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CocktailMatchCard;
