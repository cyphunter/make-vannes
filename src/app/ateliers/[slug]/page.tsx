import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Users, BadgeCheck, Cake, Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { canonicalUrl, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { ateliers, getAtelier } from "@/data/ateliers";
import type { Course, BreadcrumbList, WithContext } from "schema-dts";

export function generateStaticParams() {
  return ateliers.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const atelier = getAtelier(slug);
  if (!atelier)
    return buildMetadata({
      title: "Atelier introuvable",
      path: `/ateliers/${slug}`,
      noindex: true,
    });

  return buildMetadata({
    title: `Atelier ${atelier.nom}`,
    description: `${atelier.resumeCourt} Durée ${atelier.duree}, groupes de ${atelier.participantsMax} max, à Vannes.`,
    path: `/ateliers/${slug}`,
    imageUrl: atelier.image,
  });
}

export default async function AtelierPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const atelier = getAtelier(slug);
  if (!atelier) notFound();

  const courseSchema: WithContext<Course> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `Atelier ${atelier.nom}`,
    description: atelier.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.fullName,
      sameAs: siteConfig.url,
    },
    inLanguage: "fr-FR",
    audience: { "@type": "Audience", audienceType: atelier.niveau },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseWorkload: atelier.duree_iso,
      location: {
        "@type": "Place",
        name: siteConfig.fullName,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address,
          postalCode: siteConfig.contact.postalCode,
          addressLocality: siteConfig.contact.city,
          addressCountry: siteConfig.contact.country,
        },
      },
    },
  };

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: canonicalUrl("/") },
      { "@type": "ListItem", position: 2, name: "Ateliers", item: canonicalUrl("/ateliers") },
      {
        "@type": "ListItem",
        position: 3,
        name: atelier.nom,
        item: canonicalUrl(`/ateliers/${atelier.slug}`),
      },
    ],
  };

  return (
    <main id="main-content">
      <JsonLd schema={courseSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <article className="container-main pt-12 pb-20 md:pt-16">
        <nav
          aria-label="Fil d'Ariane"
          className="mb-10 flex items-center gap-2 text-sm text-muted"
        >
          <Link
            href="/ateliers"
            className="inline-flex items-center gap-1.5 hover:text-brand transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Tous les ateliers
          </Link>
        </nav>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Atelier · {atelier.niveau}</p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-ink">
              {atelier.nom}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75 md:text-xl">
              {atelier.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <InfoBlock icon={Clock} label="Durée" value={atelier.duree} />
              <InfoBlock
                icon={Users}
                label="Participants"
                value={`Jusqu'à ${atelier.participantsMax}`}
              />
              <InfoBlock icon={BadgeCheck} label="Niveau" value={atelier.niveau} />
              <InfoBlock icon={Cake} label="Âge minimum" value={`${atelier.ageMin} ans`} />
            </div>

            <section aria-labelledby="inclus-title" className="mt-12">
              <h2 id="inclus-title" className="font-display text-3xl text-ink">
                Ce qui est inclus
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {atelier.inclus.map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-paper-warm p-4 text-sm text-ink"
                  >
                    <span
                      className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-paper"
                      aria-hidden="true"
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="relative overflow-hidden rounded-3xl bg-cream ring-1 ring-ink/10 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={atelier.image}
                  alt={atelier.imageAlt}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-deep/40 to-transparent"
                />
              </div>

              <div className="rounded-3xl bg-deep p-7 text-paper shadow-warm">
                {atelier.prixLabel ? (
                  <>
                    <p className="text-xs uppercase tracking-wider text-gold/90">Tarif</p>
                    <p className="mt-1.5 font-display text-4xl text-paper">
                      {atelier.prixLabel}
                    </p>
                  </>
                ) : null}
                <p className="mt-4 text-sm italic text-paper/75">{atelier.ambiance}</p>

                {siteConfig.social.billetweb ? (
                  <Button asChild className="mt-6 w-full">
                    <a
                      href={siteConfig.social.billetweb}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir les prochaines dates
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                ) : null}
                <Button
                  asChild
                  variant="outline"
                  className="mt-3 w-full text-paper ring-paper/30 hover:bg-paper hover:text-deep"
                >
                  <Link href="/contact">Demande sur-mesure</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-paper-warm p-5 ring-1 ring-ink/8">
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-paper shadow-sm"
        aria-hidden="true"
      >
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
        <p className="mt-0.5 font-medium text-ink">{value}</p>
      </div>
    </div>
  );
}
