import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Conditions générales d'utilisation",
  description: "Conditions d'utilisation du site MAKE Vannes.",
  path: "/cgu",
  noindex: true,
});

export default function Cgu() {
  return (
    <main
      id="main-content"
      className="container-main max-w-3xl py-16 prose prose-neutral prose-headings:font-display"
    >
      <h1>Conditions générales d'utilisation</h1>

      <p>
        Les présentes conditions générales d'utilisation (« CGU ») s'appliquent à toute utilisation
        du site {siteConfig.url}, édité par {siteConfig.legalName}. En naviguant sur ce site, vous
        acceptez les présentes CGU.
      </p>

      <h2>1. Objet du site</h2>
      <p>
        Le site présente l'activité de {siteConfig.fullName} (boutique-atelier dédiée au Fait Main et
        au DIY, située {siteConfig.contact.address}, {siteConfig.contact.postalCode}{" "}
        {siteConfig.contact.city}) et permet de prendre contact avec l'équipe.
      </p>

      <h2>2. Réservations d'ateliers</h2>
      <p>
        Les réservations effectives d'ateliers s'effectuent via la plateforme partenaire Billetweb ou
        directement en boutique. Les conditions de réservation, d'annulation et de remboursement
        applicables sont celles présentées au moment de la réservation, sur Billetweb ou par notre
        équipe.
      </p>

      <h2>3. Privatisations</h2>
      <p>
        Les demandes de privatisation font l'objet d'un devis personnalisé. Les conditions de
        paiement, d'acompte et d'annulation sont précisées dans le devis et acceptées par signature
        avant tout engagement définitif.
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments du site (textes, photos, illustrations, mises en page, logos) est
        protégé par le droit d'auteur. Toute reproduction sans autorisation préalable est interdite.
      </p>

      <h2>5. Disponibilité du site</h2>
      <p>
        {siteConfig.legalName} fait ses meilleurs efforts pour assurer la disponibilité du site, sans
        garantie de continuité absolue. Une indisponibilité ponctuelle ne saurait engager sa
        responsabilité.
      </p>

      <h2>6. Liens externes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers (Billetweb, réseaux sociaux). {siteConfig.legalName}{" "}
        n'est pas responsable du contenu, de la politique de confidentialité ni des pratiques de
        ces sites tiers.
      </p>

      <h2>7. Droit applicable</h2>
      <p>
        Les présentes CGU sont soumises au droit français. Tout litige est de la compétence des
        tribunaux français.
      </p>

      <h2>8. Contact</h2>
      <p>
        Pour toute question : <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    </main>
  );
}
