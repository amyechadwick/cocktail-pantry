import Link from "next/link";
import { notFound } from "next/navigation";
import RecipeDetail from "@/components/RecipeDetail";
import { getCocktailById } from "@/data/cocktails";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CocktailPage({ params }: PageProps) {
  const { id } = await params;
  const cocktail = getCocktailById(id);

  if (!cocktail) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6 pb-20 pt-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.3em] text-amber-200/80 transition hover:text-amber-200"
        >
          ← Back to cocktails
        </Link>
        <RecipeDetail cocktail={cocktail} />
      </div>
    </div>
  );
}
