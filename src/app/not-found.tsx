import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
          Not Found
        </p>
        <h1 className="mt-4 text-3xl text-white">Recipe missing</h1>
        <p className="mt-3 text-sm text-white/70">
          We could not find that cocktail recipe. Head back to the list to pick
          another one.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-amber-200/40 px-5 py-2 text-xs uppercase tracking-[0.3em] text-amber-200 transition hover:border-amber-200 hover:text-white"
        >
          Back to cocktails
        </Link>
      </div>
    </div>
  );
}
