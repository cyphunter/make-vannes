import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { canonicalUrl } from "@/lib/site-config";
import { SectionHeading } from "@/components/public/section-heading";
import { CreateurCard } from "@/components/public/createur-card";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { JsonLd } from "@/components/seo/json-ld";
import { createurs } from "@/data/createurs";
import type { BreadcrumbList, WithContext } from "schema-dts";

export const metadata: Metadata = buildMetadata({
  title: "Les créateurs MAKE — artisans de Bretagne",
  description:
    "Bijoux, céramique, papeterie, savons, bougies, textile… Découvrez les créateurs et créatrices que nous mettons à l'honneur à MAKE Vannes.",
  path: "/createurs",
});

const breadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: canonicalUrl("/") },
    { "@type": "ListItem", position: 2, name: "Créateurs", item: canonicalUrl("/createurs") },
  ],
};

export default function CreateursPage() {
  return (
    <main id="main-content">
      <JsonLd schema={breadcrumbSchema} />

      <section className="relative isolate overflow-hidden mesh-warm noise-overlay">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        />
        <div className="container-main relative py-20 md:py-28">
          <SectionHeading
            eyebrow="Le collectif"
            title="Les créateurs qui peuplent la boutique."
            intro="MAKE défend le geste artisanal et la production locale. Voici les signatures que nous sélectionnons pour leur singularité, leur qualité et leur ancrage breton."
          />
        </div>
      </section>

      <section className="container-main py-16 md:py-20" aria-label="Liste des créateurs">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {createurs.map((c) => (
            <CreateurCard key={c.slug} createur={c} />
          ))}
        </div>
      </section>

      <CtaBandeau
        title="Vous êtes créateur ou créatrice ?"
        body="Vous fabriquez de jolies choses en Bretagne ? Présentez-nous votre univers — nous sommes ouverts aux nouvelles rencontres."
        primary={{ label: "Proposer mes créations", href: "/contact" }}
      />

      <p className="container-main pb-16 text-center text-sm text-muted">
        <Link href="/boutique" className="link-craft">
          Retour à la boutique
        </Link>
      </p>
    </main>
  );
}
