import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { canonicalUrl, siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/public/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import type { BreadcrumbList, WithContext } from "schema-dts";

export const metadata: Metadata = buildMetadata({
  title: "Nous contacter — MAKE Vannes",
  description: `Une question sur un atelier ou une privatisation ? Écrivez-nous à ${siteConfig.contact.email} ou passez en boutique, 30 rue Saint-Patern à Vannes.`,
  path: "/contact",
});

const breadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: canonicalUrl("/") },
    { "@type": "ListItem", position: 2, name: "Contact", item: canonicalUrl("/contact") },
  ],
};

const hasPhone = siteConfig.contact.phoneDisplay !== "À renseigner";

export default function ContactPage() {
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
            eyebrow="On vous écoute"
            title="Nous contacter."
            intro="Le plus simple, c'est de passer en boutique. Sinon, écrivez-nous un email ou appelez-nous — on prend le temps de répondre."
          />
        </div>
      </section>

      <section className="container-main py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Email — carte principale */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-paper p-8 ring-1 ring-ink/10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-warm md:p-10"
          >
            <span
              className="grid h-16 w-16 place-items-center rounded-2xl bg-brand text-paper shadow-warm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
              aria-hidden="true"
            >
              <Mail className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <div>
              <p className="eyebrow">Email</p>
              <p className="mt-3 font-display text-3xl text-ink md:text-4xl break-words">
                {siteConfig.contact.email}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Question sur un atelier, demande de privatisation, proposition créateur ou simple
                coucou — on répond sous 48h ouvrées.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-brand">
              Ouvrir mon client mail
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>

          {/* Téléphone — carte secondaire */}
          {hasPhone ? (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-deep p-8 text-paper shadow-warm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:p-10 noise-overlay"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/30 blur-3xl"
              />
              <span
                className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gold text-deep shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                aria-hidden="true"
              >
                <Phone className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <div className="relative">
                <p className="eyebrow !text-gold">Téléphone</p>
                <p className="mt-3 font-display text-3xl text-paper md:text-4xl">
                  {siteConfig.contact.phoneDisplay}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper/75">
                  Du mardi au samedi, de 10h30 à 19h. On peut être en plein atelier — laissez un
                  message si on ne décroche pas.
                </p>
              </div>
              <span className="relative inline-flex items-center gap-2 text-sm font-medium text-gold">
                Appeler maintenant
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </a>
          ) : (
            <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-paper-warm p-8 ring-1 ring-ink/8 md:p-10">
              <span
                className="grid h-16 w-16 place-items-center rounded-2xl bg-accent text-paper shadow-sage transition-transform duration-500"
                aria-hidden="true"
              >
                <Instagram className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <div>
                <p className="eyebrow">Sur les réseaux</p>
                <p className="mt-3 font-display text-3xl text-ink md:text-4xl">
                  On se parle aussi en DM.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  Instagram et Facebook sont les autres canaux où on est joignables — on adore voir
                  vos créations partagées !
                </p>
              </div>
              <div className="flex gap-3">
                {siteConfig.social.instagram ? (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink ring-1 ring-ink/10 transition-colors hover:bg-brand hover:text-paper hover:ring-brand"
                    aria-label="Instagram MAKE Vannes"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
                {siteConfig.social.facebook ? (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink ring-1 ring-ink/10 transition-colors hover:bg-brand hover:text-paper hover:ring-brand"
                    aria-label="Facebook MAKE Vannes"
                  >
                    <Facebook className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
          )}
        </div>

        {/* Bande adresse + horaires */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-5 rounded-3xl bg-paper p-8 ring-1 ring-ink/10">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-paper shadow-sage"
              aria-hidden="true"
            >
              <MapPin className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="eyebrow">Boutique-atelier</p>
              <address className="not-italic mt-3 font-display text-xl text-ink leading-tight">
                {siteConfig.contact.address}
                <br />
                {siteConfig.contact.postalCode} {siteConfig.contact.city}
              </address>
              <p className="mt-3 text-sm text-ink/70">
                Quartier Saint-Patern — à deux pas des remparts.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${siteConfig.contact.address} ${siteConfig.contact.postalCode} ${siteConfig.contact.city}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand link-craft"
              >
                Itinéraire Google Maps
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-5 rounded-3xl bg-paper p-8 ring-1 ring-ink/10">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-deep shadow-gold"
              aria-hidden="true"
            >
              <Clock className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="eyebrow">Horaires</p>
              <p className="mt-3 whitespace-pre-line font-display text-xl text-ink leading-tight">
                {siteConfig.contact.openingHoursLabel}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-ink/70">
                {siteConfig.contact.openingHoursStructured.map((d) => (
                  <li key={d.day} className="flex justify-between gap-2 border-b border-ink/5 py-1">
                    <span className="font-medium text-ink">{d.day}</span>
                    <span className={d.hours === "Fermé" ? "text-muted-soft" : "text-ink/80"}>
                      {d.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Encart réseaux + relance */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-paper-warm p-8 ring-1 ring-ink/8">
            <div>
              <p className="eyebrow">Sur les réseaux</p>
              <p className="mt-3 font-display text-2xl text-ink">
                Suivez notre actu, nos nouveautés et les coulisses.
              </p>
            </div>
            <div className="flex gap-3">
              {siteConfig.social.instagram ? (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink ring-1 ring-ink/10 transition-colors hover:bg-brand hover:text-paper hover:ring-brand"
                  aria-label="Instagram MAKE Vannes"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
              ) : null}
              {siteConfig.social.facebook ? (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink ring-1 ring-ink/10 transition-colors hover:bg-brand hover:text-paper hover:ring-brand"
                  aria-label="Facebook MAKE Vannes"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>

          <Link
            href={siteConfig.ctas.bookWorkshop.href}
            className="group flex flex-col justify-between gap-4 rounded-3xl bg-brand p-8 text-paper shadow-warm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="eyebrow !text-paper/80">Plus rapide encore</p>
            <p className="font-display text-2xl leading-tight">
              Réservez directement un atelier sur Billetweb.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              Voir les dates
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
