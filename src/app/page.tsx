import Link from "next/link";
import CocktailCard from "@/components/CocktailCard";
import { cocktails } from "@/data/cocktails";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-6 pb-16 pt-4 sm:px-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />
        <div className="absolute right-10 top-16 h-48 w-48 rounded-full bg-rose-200/10 blur-2xl" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Mix something memorable tonight.
            </h1>
          </div>
          <Link
            href="/pantry"
            className="group relative w-full max-w-sm justify-self-start overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-amber-200/60 hover:bg-white/5 lg:justify-self-end"
          >
            <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-amber-200/20 blur-2xl" />
            <div className="absolute -bottom-12 left-0 h-28 w-28 rounded-full bg-rose-200/20 blur-2xl" />
            <div className="relative space-y-3">
              <p className="text-base font-semibold text-white">
                Select the ingredients in your pantry
              </p>
              <p className="text-sm font-semibold text-white/80">
                Have vodka, lime, and soda?
              </p>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span>See cocktail suggestions</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-200/80 transition group-hover:border-amber-200/60">
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
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
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
