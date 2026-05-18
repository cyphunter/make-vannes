import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden mesh-warm noise-overlay">
      {/* Halos décoratifs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-3xl"
      />

      <div className="container-main relative grid gap-12 py-20 md:grid-cols-12 md:py-28 lg:py-36">
        <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center animate-fade-up">
          <p className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Boutique-atelier · Saint-Patern · Vannes
          </p>

          <h1 className="mt-7 font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] text-ink">
            Apprenez{" "}
            <span className="ital-mark">à faire</span>
            <span className="block">vous-même.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75 md:text-xl">
            Au cœur du quartier Saint-Patern, MAKE rassemble une mercerie, des créateurs locaux et
            des ateliers créatifs à la carte. Venez créer, repartez avec votre œuvre — et l'envie de
            recommencer.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href={siteConfig.ctas.bookWorkshop.href}>
                {siteConfig.ctas.bookWorkshop.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={siteConfig.ctas.visitShop.href}>{siteConfig.ctas.visitShop.label}</Link>
            </Button>
          </div>

          {/* Mini-stats / reassurance */}
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-7">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">Ateliers</dt>
              <dd className="mt-1 font-display text-3xl text-ink">11</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">Personnes max</dt>
              <dd className="mt-1 font-display text-3xl text-ink">12</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">Créateurs</dt>
              <dd className="mt-1 font-display text-3xl text-ink">15+</dd>
            </div>
          </dl>
        </div>

        {/* Composition visuelle — 2 images + sticker rotatif */}
        <div className="md:col-span-5 lg:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full">
            {/* Image principale */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-cream shadow-xl ring-1 ring-ink/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/atelier-make.webp"
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              {/* Overlay subtil */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-deep/15 via-transparent to-transparent"
              />
            </div>

            {/* Image secondaire — détail */}
            <div className="absolute -left-6 -bottom-8 hidden h-44 w-44 overflow-hidden rounded-2xl bg-paper shadow-warm ring-4 ring-paper md:block lg:h-52 lg:w-52">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/detail-fil.webp"
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Sticker rotatif */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-8 hidden md:block"
            >
              <div className="relative h-32 w-32 lg:h-40 lg:w-40">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full animate-rotate-slow text-ink"
                >
                  <defs>
                    <path
                      id="hero-sticker-path"
                      d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text fontSize="9" letterSpacing="2.2" fontWeight="500">
                    <textPath href="#hero-sticker-path">
                      FAIT MAIN · CRÉATEURS LOCAUX · ATELIERS À LA CARTE ·
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-paper shadow-warm">
                  <Star className="h-5 w-5" fill="currentColor" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Badge prix / petit groupe */}
            <div className="absolute -right-3 bottom-6 hidden lg:block">
              <div className="rotate-3 rounded-2xl bg-deep px-5 py-4 text-paper shadow-lg">
                <p className="font-display text-2xl leading-none text-gold">12 max</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-paper/70">
                  petits groupes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
