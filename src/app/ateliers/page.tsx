import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { canonicalUrl, siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/public/section-heading";
import { AtelierCard } from "@/components/public/atelier-card";
import { Faq } from "@/components/public/faq";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { ateliers } from "@/data/ateliers";
import { faqAteliers } from "@/data/faq";
import type { FAQPage, BreadcrumbList, WithContext } from "schema-dts";

export const metadata: Metadata = buildMetadata({
  title: "Ateliers créatifs — DIY & Fait Main",
  description:
    "Punch needle, macramé, broderie, couture, art floral, aquarelle, bijoux… 11 ateliers à la carte à Vannes, groupes de 6 à 12 personnes, sans abonnement.",
  path: "/ateliers",
});

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqAteliers.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.reponse },
  })),
};

const breadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: canonicalUrl("/") },
    { "@type": "ListItem", position: 2, name: "Ateliers", item: canonicalUrl("/ateliers") },
  ],
};

export default function AteliersPage() {
  return (
    <main id="main-content">
      <JsonLd schema={faqSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <section className="relative isolate overflow-hidden mesh-warm noise-overlay">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
        />
        <div className="container-main relative py-20 md:py-28">
          <SectionHeading
            eyebrow="Le programme"
            title="11 ateliers créatifs, à la carte."
            intro="Des techniques traditionnelles aux pratiques contemporaines, tous nos ateliers sont accessibles aux débutants. Matériel fourni, vous repartez avec votre création."
          />

          {siteConfig.social.billetweb ? (
            <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-paper p-8 ring-1 ring-ink/10 shadow-md md:flex-row md:items-center md:justify-between md:p-10">
              <div className="flex items-start gap-5">
                <span
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand text-paper shadow-warm"
                  aria-hidden="true"
                >
                  <Calendar className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-2xl text-ink">Voir le planning & réserver</p>
                  <p className="mt-1.5 text-sm text-muted">
                    Dates et inscriptions sur notre billetterie partenaire Billetweb.
                  </p>
                </div>
              </div>
              <Button asChild size="lg" className="shrink-0">
                <a
                  href={siteConfig.social.billetweb}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir les dates
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          ) : null}
        </div>
      </section>

      <section className="container-main py-16 md:py-20" aria-label="Liste des ateliers">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ateliers.map((a, i) => (
            <AtelierCard key={a.slug} atelier={a} priority={i < 3} />
          ))}
        </div>
      </section>

      <section
        className="bg-paper-warm texture-paper py-20 md:py-28"
        aria-labelledby="faq-ateliers-title"
      >
        <div className="container-main">
          <SectionHeading
            eyebrow="Questions fréquentes"
            title="Les réponses aux questions qu'on nous pose le plus."
            align="center"
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Faq items={faqAteliers} id="faq-ateliers" />
          </div>
        </div>
      </section>

      <CtaBandeau
        title="Une demande spécifique ?"
        body="Vous cherchez un atelier qui n'est pas dans le planning, ou une date sur-mesure pour un groupe ? Écrivez-nous, on adore les défis."
        primary={siteConfig.ctas.contact}
      />

      <p className="container-main pb-16 text-center text-sm text-muted">
        <Link href="/" className="link-craft">
          Retour à l'accueil
        </Link>
      </p>
    </main>
  );
}
