import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page introuvable",
  description: "Cette page n'existe pas ou a été déplacée.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="container-main flex min-h-[60vh] flex-col items-center justify-center py-24 text-center"
    >
      <p className="font-display text-7xl text-brand md:text-9xl">404</p>
      <h1 className="mt-6 font-display text-3xl text-ink md:text-4xl">Page introuvable</h1>
      <p className="mt-4 max-w-md text-muted">
        La page que vous cherchez n'existe pas, a été déplacée ou n'est plus accessible.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-brand px-7 py-3 text-paper shadow-warm hover:bg-ink"
        >
          Retour à l'accueil
        </Link>
        <Link
          href="/ateliers"
          className="inline-flex items-center rounded-full bg-paper px-7 py-3 text-ink ring-1 ring-ink/15 hover:bg-cream"
        >
          Voir les ateliers
        </Link>
      </div>
    </main>
  );
}
