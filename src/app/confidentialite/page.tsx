import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: "Comment MAKE Vannes traite vos données personnelles — finalités, durées, vos droits.",
  path: "/confidentialite",
  noindex: true,
});

export default function Confidentialite() {
  return (
    <main
      id="main-content"
      className="container-main max-w-3xl py-16 prose prose-neutral prose-headings:font-display"
    >
      <h1>Politique de confidentialité</h1>

      <p>
        La présente politique décrit comment {siteConfig.legalName} traite vos données personnelles
        lorsque vous utilisez ce site ({siteConfig.url}).
      </p>

      <h2>1. Données collectées</h2>
      <ul>
        <li>
          <strong>Formulaire de contact</strong> : nom, email, téléphone (facultatif), sujet, message.
          Transmis par email à notre équipe.
        </li>
        <li>
          <strong>Analytics</strong> : Cloudflare Web Analytics — métriques agrégées anonymes (pages
          vues, performance). Aucun cookie tiers, aucune donnée personnelle identifiable.
        </li>
      </ul>

      <h2>2. Finalités</h2>
      <ul>
        <li>Répondre à vos demandes via le formulaire de contact</li>
        <li>Vous renseigner sur nos ateliers, privatisations ou créateurs</li>
        <li>Améliorer la performance et l'ergonomie du site (analytics anonymes)</li>
      </ul>

      <h2>3. Base légale</h2>
      <p>
        Consentement explicite (formulaire de contact, case à cocher RGPD) ou intérêt légitime
        (analytics agrégés anonymes).
      </p>

      <h2>4. Durée de conservation</h2>
      <ul>
        <li>Demandes de contact : 3 ans après le dernier échange</li>
        <li>Analytics : agrégés sans stockage individuel</li>
      </ul>

      <h2>5. Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de
        limitation, de portabilité et d'opposition. Pour exercer ces droits :{" "}
        <a href={`mailto:${siteConfig.legal.dpoEmail}`}>{siteConfig.legal.dpoEmail}</a>.
      </p>
      <p>
        Vous pouvez également déposer une réclamation auprès de la{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          CNIL
        </a>
        .
      </p>

      <h2>6. Cookies</h2>
      <p>
        Ce site n'utilise aucun cookie tiers de tracking. Cloudflare Web Analytics fonctionne sans
        cookie. Aucun bandeau cookies n'est donc requis.
      </p>

      <h2>7. Hébergement</h2>
      <p>
        Le site est hébergé par {siteConfig.legal.host.name} ({siteConfig.legal.host.address}).
      </p>

      <h2>8. Email transactionnel</h2>
      <p>
        Les emails envoyés depuis ce site sont expédiés via Resend Inc., 2261 Market Street #5039,
        San Francisco, CA 94114, USA. Aucune donnée n'est conservée à des fins commerciales.
      </p>
    </main>
  );
}
