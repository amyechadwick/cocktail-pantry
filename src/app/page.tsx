import CocktailCard from "@/components/CocktailCard";
import { cocktails } from "@/data/cocktails";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-6 pb-16 pt-12 sm:px-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />
        <div className="absolute right-10 top-16 h-48 w-48 rounded-full bg-rose-200/10 blur-2xl" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">
            Cocktail Pantry
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Mix something memorable tonight.
          </h1>
          <p className="max-w-2xl text-base text-white/70">
            Explore classic and modern cocktails, with crisp instructions and
            exact measurements. Tap a drink to see its full recipe.
          </p>
        </div>
      </section>
      <main className="relative mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} />
          ))}
        </section>
      </main>
    </div>
  );
}
