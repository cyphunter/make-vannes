import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site MAKE Vannes — éditeur, hébergeur, propriété intellectuelle.",
  path: "/mentions-legales",
  noindex: true,
});

export default function MentionsLegales() {
  const { legalName, legal, contact, url } = siteConfig;

  return (
    <main
      id="main-content"
      className="container-main max-w-3xl py-16 prose prose-neutral prose-headings:font-display"
    >
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        <strong>{legalName}</strong>
        <br />
        SIRET : {legal.siret} — {legal.rcs}
        <br />
        Capital social : {legal.capital}
        <br />
        Siège social : {contact.address}, {contact.postalCode} {contact.city}, {contact.countryName}
        <br />
        Email : <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        Directrice de la publication : {legal.publisher}
      </p>

      <h2>Hébergeur</h2>
      <p>
        <strong>{legal.host.name}</strong>
        <br />
        {legal.host.address}
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site ({url}) — textes, images, logos, vidéos — sont la
        propriété exclusive de {legalName} ou de leurs auteurs respectifs. Toute reproduction,
        représentation, modification, publication, adaptation, totale ou partielle, sans autorisation
        écrite préalable est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données personnelles collectées via ce site est décrit dans la{" "}
        <a href="/confidentialite">politique de confidentialité</a>. Pour exercer vos droits RGPD,
        contacter : <a href={`mailto:${legal.dpoEmail}`}>{legal.dpoEmail}</a>.
      </p>

      <h2>Conditions d'utilisation</h2>
      <p>
        Les conditions d'utilisation du site sont détaillées dans les <a href="/cgu">CGU</a>.
      </p>
    </main>
  );
}
