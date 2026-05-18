import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/public/hero";
import { MarqueeBand } from "@/components/public/marquee-band";
import { Highlights } from "@/components/public/highlights";
import { SectionHeading } from "@/components/public/section-heading";
import { AtelierCard } from "@/components/public/atelier-card";
import { CreateurCard } from "@/components/public/createur-card";
import { Temoignages } from "@/components/public/temoignages";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { InfoPratique } from "@/components/public/info-pratique";
import { Button } from "@/components/ui/button";
import { ateliers } from "@/data/ateliers";
import { createurs } from "@/data/createurs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: null,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const ateliersVedette = ateliers.slice(0, 6);
  const createursVedette = createurs.slice(0, 3);

  return (
    <main id="main-content">
      <Hero />
      <MarqueeBand />
      <Highlights />

      <section
        className="container-main py-20 md:py-28"
        aria-labelledby="ateliers-home-title"
      >
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Nos ateliers"
            title="Apprenez le geste, repartez avec l'objet."
            intro="Ateliers à la carte (sans abonnement), groupes de 6 à 12 personnes, encadrés par des artisans passionnés."
          />
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link href="/ateliers">
              Tous les ateliers
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ateliersVedette.map((a, i) => (
            <AtelierCard key={a.slug} atelier={a} priority={i < 3} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Button asChild variant="secondary" className="w-full">
            <Link href="/ateliers">
              Tous les ateliers
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper-warm texture-paper py-20 md:py-28">
        <div className="container-main">
          <SectionHeading
            eyebrow="La boutique"
            title="Des créateurs locaux, choisis avec soin."
            intro="Bijoux, céramique, papeterie, cosmétique, textile : la boutique met à l'honneur les artisans du Morbihan et d'ailleurs en Bretagne. Le matin, on découvre. L'après-midi, on crée."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {createursVedette.map((c) => (
              <CreateurCard key={c.slug} createur={c} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="secondary">
              <Link href="/createurs">
                Découvrir tous les créateurs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Temoignages />

      <CtaBandeau
        title="Un anniversaire, un EVJF, un team building ?"
        body="Privatisez un atelier pour 6 à 12 personnes, choisissez votre technique, on s'occupe du reste — café, thé et bonne humeur compris."
        primary={siteConfig.ctas.privatize}
        secondary={siteConfig.ctas.contact}
      />

      <section className="container-main pb-24">
        <InfoPratique />
      </section>
    </main>
  );
}
