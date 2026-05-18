import Link from "next/link";
import { Clock, Users, ArrowUpRight } from "lucide-react";
import type { Atelier } from "@/data/ateliers";
import { cn } from "@/lib/utils";

const couleurClasses: Record<
  Atelier["couleur"],
  { bg: string; ring: string; text: string; tag: string }
> = {
  terracotta: {
    bg: "bg-brand/10",
    ring: "ring-brand/30",
    text: "text-brand",
    tag: "bg-brand text-paper",
  },
  sauge: {
    bg: "bg-accent/10",
    ring: "ring-accent/30",
    text: "text-accent",
    tag: "bg-accent text-paper",
  },
  ocre: {
    bg: "bg-gold/15",
    ring: "ring-gold/40",
    text: "text-ink",
    tag: "bg-gold text-ink",
  },
};

export function AtelierCard({
  atelier,
  priority = false,
}: {
  atelier: Atelier;
  priority?: boolean;
}) {
  const c = couleurClasses[atelier.couleur];
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-paper ring-1 ring-ink/10 shadow-sm",
        "transition-all duration-500 hover:-translate-y-1.5 hover:shadow-warm hover:ring-ink/20",
      )}
    >
      <Link
        href={`/ateliers/${atelier.slug}`}
        className="flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        aria-label={`Voir l'atelier ${atelier.nom}`}
      >
        <div className={cn("relative aspect-[4/5] overflow-hidden", c.bg)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={atelier.image}
            alt=""
            loading={priority ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent opacity-90"
          />

          {/* Badge niveau (top left) */}
          <span
            className={cn(
              "absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider shadow-sm",
              c.tag,
            )}
          >
            {atelier.niveau}
          </span>

          {/* Arrow (top right) */}
          <span
            aria-hidden="true"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-paper/95 text-ink shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-paper"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>

          {/* Titre overlay (bottom) */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-3xl leading-tight text-paper drop-shadow-sm">
              {atelier.nom}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <p className="text-sm leading-relaxed text-ink/75">{atelier.resumeCourt}</p>

          <dl className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-ink/8 pt-4 text-xs text-muted">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                <dt className="sr-only">Durée</dt>
                <dd>{atelier.duree}</dd>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" aria-hidden="true" />
                <dt className="sr-only">Participants</dt>
                <dd>{atelier.participantsMax} max</dd>
              </span>
            </div>
            {atelier.prixLabel ? (
              <div className="font-display text-base text-brand">
                <dt className="sr-only">Prix</dt>
                <dd>{atelier.prixLabel}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </Link>
    </article>
  );
}
