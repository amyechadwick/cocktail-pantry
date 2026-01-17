import Image from "next/image";
import type { Cocktail } from "@/types/cocktail";

const RecipeDetail = ({ cocktail }: { cocktail: Cocktail }) => {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-6 left-6 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
            {cocktail.category}
          </span>
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            {cocktail.name}
          </h1>
          <p className="max-w-md text-sm text-white/80">
            {cocktail.description}
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
            Ingredients
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {cocktail.ingredients.map((ingredient) => (
              <li
                key={`${ingredient.name}-${ingredient.amount}`}
                className="flex items-start justify-between gap-4 border-b border-white/10 pb-2"
              >
                <span className="font-medium text-white">
                  {ingredient.name}
                </span>
                <span className="text-white/60">{ingredient.amount}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
            Instructions
          </h2>
          <ol className="mt-4 space-y-4 text-sm text-white/80">
            {cocktail.instructions.map((step, index) => (
              <li key={`${cocktail.id}-${index}`} className="flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-200/40 text-xs text-amber-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
            Serve
          </h2>
          <div className="mt-3 text-sm text-white/80">
            Glassware: <span className="text-white">{cocktail.glass}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;
