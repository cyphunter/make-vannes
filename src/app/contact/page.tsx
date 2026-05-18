import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { canonicalUrl, siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/public/section-heading";
import { InfoPratique } from "@/components/public/info-pratique";
import { ContactForm } from "@/components/public/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import type { BreadcrumbList, WithContext } from "schema-dts";

export const metadata: Metadata = buildMetadata({
  title: "Nous écrire — MAKE Vannes",
  description: `Une question sur un atelier, une privatisation ou une demande créateur ? Écrivez-nous à ${siteConfig.contact.email} ou via le formulaire.`,
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

export default function ContactPage() {
  return (
    <main id="main-content">
      <JsonLd schema={breadcrumbSchema} />

      <section className="relative isolate overflow-hidden mesh-warm noise-overlay">
        <div className="container-main relative py-20 md:py-28">
          <SectionHeading
            eyebrow="On vous écoute"
            title="Nous écrire."
            intro="Question sur un atelier, demande de privatisation, proposition de partenariat créateur, ou simple coucou : ce formulaire arrive directement dans notre boîte mail."
          />
        </div>
      </section>

      <section className="container-main py-16 md:py-20 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="rounded-3xl bg-paper p-8 ring-1 ring-ink/10 shadow-lg md:p-10">
            <ContactForm />
          </div>
        </div>
        <aside className="md:col-span-5 space-y-6">
          <InfoPratique />
          <div className="rounded-3xl bg-paper-warm p-8 ring-1 ring-ink/8">
            <p className="eyebrow">Bon à savoir</p>
            <h2 className="mt-3 font-display text-2xl text-ink">Délais de réponse</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Nous répondons généralement sous 48 heures ouvrées (mardi–samedi). Pour les
              privatisations, prévoyez idéalement 3 à 4 semaines avant la date souhaitée.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
