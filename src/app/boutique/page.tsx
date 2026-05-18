import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Scissors, Palette } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { canonicalUrl, siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/public/section-heading";
import { CreateurCard } from "@/components/public/createur-card";
import { InfoPratique } from "@/components/public/info-pratique";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { createurs } from "@/data/createurs";
import type { BreadcrumbList, WithContext } from "schema-dts";

export const metadata: Metadata = buildMetadata({
  title: "La boutique — créateurs locaux & mercerie",
  description:
    "Trois espaces sous un même toit : une mercerie de qualité, une sélection de créateurs locaux et un atelier ouvert. À Vannes, rue Saint-Patern.",
  path: "/boutique",
});

const breadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: canonicalUrl("/") },
    { "@type": "ListItem", position: 2, name: "La boutique", item: canonicalUrl("/boutique") },
  ],
};

const espaces = [
  {
    icon: ShoppingBag,
    title: "Boutique de créateurs",
    body: "Une sélection rigoureuse de bijoux, céramique, papeterie, cosmétique naturelle, textile et accessoires — tous signés par des créateurs et créatrices basés en Bretagne.",
    tone: "brand",
  },
  {
    icon: Scissors,
    title: "Mercerie & matières premières",
    body: "Tissus, fils, laines, cuirs, perles, papiers, accessoires : tout pour démarrer ou poursuivre vos projets DIY. Sélection en évolution constante.",
    tone: "accent",
  },
  {
    icon: Palette,
    title: "Atelier ouvert",
    body: "Au fond de la boutique, l'atelier accueille jusqu'à 12 personnes. On y vient pour apprendre, créer et repartir avec son œuvre.",
    tone: "gold",
  },
] as const;

const toneClasses = {
  brand: "bg-brand text-paper",
  accent: "bg-accent text-paper",
  gold: "bg-gold text-deep",
} as const;

export default function BoutiquePage() {
  return (
    <main id="main-content">
      <JsonLd schema={breadcrumbSchema} />

      <section className="relative isolate overflow-hidden mesh-warm noise-overlay">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
        />
        <div className="container-main relative py-20 md:py-28">
          <SectionHeading
            eyebrow="Trois espaces sous un même toit"
            title="Une boutique pensée pour qui aime créer."
            intro="MAKE, c'est une boutique de créateurs, une mercerie pour matériauthèque et un atelier vivant — réunis dans un lieu chaleureux au cœur de Saint-Patern."
          />
        </div>
      </section>

      <section className="container-main py-16 md:py-20" aria-label="Les trois espaces">
        <div className="grid gap-6 md:grid-cols-3">
          {espaces.map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={e.title}
                className="group relative flex flex-col gap-5 rounded-3xl bg-paper p-8 ring-1 ring-ink/10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-warm"
              >
                <span
                  className={`grid h-16 w-16 place-items-center rounded-2xl shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 ${toneClasses[e.tone]}`}
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <div>
                  <h2 className="font-display text-3xl text-ink leading-tight">{e.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{e.body}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-6 font-display text-sm tabular-nums text-ink/15"
                >
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-paper-warm texture-paper py-20 md:py-28">
        <div className="container-main">
          <SectionHeading
            eyebrow="Découvrir"
            title="Les créateurs en boutique."
            intro="La sélection évolue au fil des saisons et des nouvelles rencontres. Voici quelques signatures à retrouver actuellement en boutique."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {createurs.map((c) => (
              <CreateurCard key={c.slug} createur={c} />
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted">
            Vous êtes créateur·rice et souhaitez nous proposer vos pièces ?{" "}
            <Link href="/contact" className="text-brand link-craft font-medium">
              Écrivez-nous
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="container-main py-20 md:py-28">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] mesh-deep noise-overlay p-12 text-paper md:p-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05]">
              La boutique, c'est aussi un lieu où l'on{" "}
              <span className="ital-mark !text-gold">vient flâner.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-paper/80 md:text-xl leading-relaxed">
              Entrez juste pour voir, repartez avec une idée. Nous vous accueillons du mardi au
              samedi, de 10h30 à 19h.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/ateliers">
                  Voir aussi les ateliers
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-main pb-24">
        <InfoPratique />
      </section>
    </main>
  );
}
