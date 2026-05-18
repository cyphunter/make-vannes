import { Quote, Star } from "lucide-react";
import { temoignages } from "@/data/temoignages";
import { SectionHeading } from "./section-heading";

export function Temoignages() {
  return (
    <section
      aria-labelledby="temoignages-title"
      className="relative bg-paper-warm texture-paper py-20 md:py-28"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Elles l'ont vécu"
          title="Des moments à elles seules"
          intro="Ce que disent celles et ceux qui ont passé deux heures (ou trois) à MAKE."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {temoignages.map((t, i) => (
            <figure
              key={t.prenom + t.atelier}
              className="group relative flex flex-col rounded-3xl bg-paper p-8 ring-1 ring-ink/8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg md:p-10"
            >
              {/* Quote XL en arrière-plan */}
              <Quote
                className="absolute right-6 top-6 h-16 w-16 text-brand/10 rotate-180"
                aria-hidden="true"
              />

              {/* Étoiles */}
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-gold text-gold"
                    aria-hidden="true"
                  />
                ))}
                <span className="sr-only">5 sur 5</span>
              </div>

              <blockquote className="relative mt-5 text-lg leading-relaxed text-ink md:text-xl">
                <span className="font-display text-brand">«</span> {t.citation}{" "}
                <span className="font-display text-brand">»</span>
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-4 border-t border-ink/10 pt-5 text-sm">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-paper font-display text-lg"
                >
                  {t.prenom.charAt(0)}
                </span>
                <span className="flex flex-col">
                  <span className="font-medium text-ink">
                    {t.prenom} {t.initiale} · {t.ville}
                  </span>
                  {t.atelier ? (
                    <span className="text-xs uppercase tracking-wider text-brand mt-0.5">
                      Atelier {t.atelier}
                    </span>
                  ) : null}
                </span>
              </figcaption>

              {/* Numéro discret */}
              <span
                aria-hidden="true"
                className="absolute left-4 bottom-4 font-display text-xs tabular-nums text-ink/15"
              >
                0{i + 1} / 0{temoignages.length}
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
