import { MapPin } from "lucide-react";
import type { Createur } from "@/data/createurs";

export function CreateurCard({ createur }: { createur: Createur }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-paper ring-1 ring-ink/10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:ring-ink/20">
      <div className="relative aspect-square overflow-hidden bg-cream">
        {createur.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={createur.image}
            alt={createur.imageAlt ?? ""}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center font-display text-7xl text-ink/15">
            {createur.nom.charAt(0)}
          </div>
        )}

        {/* Overlay au hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Bio révélée au hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-5 transition-transform duration-500 group-hover:translate-y-0">
          <p className="text-sm leading-relaxed text-paper">{createur.bio}</p>
        </div>

        {/* Ville top-left */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-paper/95 px-3 py-1.5 text-xs text-ink shadow-sm">
          <MapPin className="h-3 w-3 text-brand" aria-hidden="true" />
          {createur.origine}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-brand font-medium">
          {createur.domaine}
        </p>
        <h3 className="mt-2 font-display text-2xl text-ink">{createur.nom}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/75 line-clamp-2">{createur.bio}</p>
      </div>
    </article>
  );
}
