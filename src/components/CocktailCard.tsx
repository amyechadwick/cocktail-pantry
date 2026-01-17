import Image from "next/image";
import Link from "next/link";
import type { Cocktail } from "@/types/cocktail";

const CocktailCard = ({ cocktail }: { cocktail: Cocktail }) => {
  return (
    <Link
      href={`/cocktail/${cocktail.id}`}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-amber-200/60 hover:bg-white/10"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
      </div>
      <div className="flex flex-col gap-2 px-5 py-4">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
          {cocktail.category}
        </p>
        <h3 className="text-xl font-semibold text-white">{cocktail.name}</h3>
        <p className="text-sm text-white/70">{cocktail.description}</p>
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

export default CocktailCard;
