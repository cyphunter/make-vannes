/**
 * Source unique de vérité pour les informations du site MAKE Vannes.
 *
 * Pour modifier coordonnées, slogans, navigation, mentions légales :
 *   éditer ce fichier (toutes les valeurs entre guillemets sont modifiables).
 *
 * NE PAS toucher aux noms de clés ni à la structure — seulement les valeurs.
 */

export const siteConfig = {
  // ─── Identité ─────────────────────────────────────────────────────
  name: "MAKE",
  shortName: "MAKE",
  fullName: "MAKE Vannes",
  legalName: "MAKE Vannes",
  baseline: "Boutique-atelier · Fait Main · DIY · Vannes",
  description:
    "MAKE Vannes — boutique-atelier au cœur du quartier Saint-Patern : ateliers créatifs, mercerie et créateurs locaux. Apprenez à faire vous-même.",

  // ─── URL & locale ────────────────────────────────────────────────
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://makevannes.com",
  locale: "fr-FR",
  language: "fr",

  // ─── Contact & adresse boutique ──────────────────────────────────
  contact: {
    phone: "+33 0 00 00 00 00",
    phoneDisplay: "À renseigner",
    email: "contact@makevannes.com",
    address: "30 rue Saint-Patern",
    postalCode: "56000",
    city: "Vannes",
    region: "Bretagne",
    country: "FR",
    countryName: "France",
    // Coordonnées GPS du 30 rue Saint-Patern, Vannes
    geo: { latitude: 47.6595, longitude: -2.7565 },
    openingHours: ["Tu-Sa 10:30-19:00"],
    openingHoursLabel: "Mardi — Samedi · 10h30 – 19h\nFermé dimanche et lundi",
    openingHoursStructured: [
      { day: "Mardi", hours: "10h30 – 19h" },
      { day: "Mercredi", hours: "10h30 – 19h" },
      { day: "Jeudi", hours: "10h30 – 19h" },
      { day: "Vendredi", hours: "10h30 – 19h" },
      { day: "Samedi", hours: "10h30 – 19h" },
      { day: "Dimanche", hours: "Fermé" },
      { day: "Lundi", hours: "Fermé" },
    ],
  },

  // ─── Réseaux sociaux ─────────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/make.vannes/",
    facebook: "https://www.facebook.com/make.vannes/",
    linkedin: "",
    twitter: "",
    youtube: "",
    billetweb: "https://www.billetweb.fr/multi_event.php?multi=21066",
  },

  // ─── Mentions légales (à compléter avec le client) ───────────────
  legal: {
    siret: "À renseigner",
    rcs: "RCS Vannes",
    capital: "À renseigner",
    publisher: "À renseigner — gérante MAKE Vannes",
    host: {
      name: "Cloudflare Inc.",
      address: "101 Townsend Street, San Francisco, CA 94107, USA",
    },
    dpoEmail: "contact@makevannes.com",
  },

  // ─── Navigation principale ───────────────────────────────────────
  navigation: [
    { label: "La boutique", href: "/boutique" },
    { label: "Ateliers", href: "/ateliers" },
    { label: "Créateurs", href: "/createurs" },
    { label: "Privatisation", href: "/privatisation" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],

  // ─── CTAs récurrents ─────────────────────────────────────────────
  ctas: {
    bookWorkshop: { label: "Réserver un atelier", href: "/ateliers" },
    visitShop: { label: "Découvrir la boutique", href: "/boutique" },
    contact: { label: "Nous écrire", href: "/contact" },
    privatize: { label: "Privatiser un atelier", href: "/privatisation" },
  },

  // ─── Navigation footer (légal) ───────────────────────────────────
  footerNavigation: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "CGU", href: "/cgu" },
  ],

  // ─── Points forts / values affichés en home ─────────────────────
  highlights: [
    {
      title: "Apprendre à faire",
      body: "Ateliers à la carte sans abonnement, encadrés par des artisans passionnés.",
    },
    {
      title: "12 personnes max",
      body: "Petits groupes pour un vrai accompagnement et un moment convivial.",
    },
    {
      title: "Soutenir les créateurs",
      body: "Une boutique dédiée aux créateurs et artisans locaux, du Morbihan à toute la Bretagne.",
    },
    {
      title: "Au cœur de Vannes",
      body: "30 rue Saint-Patern, dans l'un des plus beaux quartiers historiques de la ville.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Construit une URL absolue canonique à partir d'un chemin.
 * Ex: canonicalUrl("/ateliers") → "https://makevannes.com/ateliers"
 */
export function canonicalUrl(path: string): string {
  const base = siteConfig.url.replace(/\/+$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean === "/" ? "" : clean}`;
}
