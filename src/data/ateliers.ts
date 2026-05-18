/**
 * Catalogue d'ateliers MAKE Vannes.
 *
 * Pour ajouter / modifier un atelier : éditer ce fichier.
 * Pour les dates et inscriptions concrètes : Billetweb (`siteConfig.social.billetweb`).
 *
 * `slug` : doit être unique, kebab-case, utilisé dans l'URL `/ateliers/<slug>`.
 * `image` : chemin vers une image dans `/public/images/ateliers/` ou URL absolue.
 */

export type Atelier = {
  slug: string;
  nom: string;
  resumeCourt: string;
  description: string;
  duree: string;
  duree_iso: string; // pour JSON-LD Event (durée ISO 8601, ex "PT2H")
  prixMin?: number; // en euros, indicatif
  prixLabel?: string;
  niveau: "Débutant" | "Initiation" | "Tous niveaux" | "Intermédiaire";
  participantsMax: number;
  ageMin: number;
  inclus: string[];
  ambiance: string;
  image: string;
  imageAlt: string;
  couleur: "terracotta" | "sauge" | "ocre";
};

export const ateliers: ReadonlyArray<Atelier> = [
  {
    slug: "punch-needle",
    nom: "Punch Needle",
    resumeCourt:
      "La technique mi-tissage mi-broderie qui crée des reliefs doux et graphiques.",
    description:
      "Le punch needle est une technique textile qui combine broderie et tissage : on pique un fil épais à travers une toile tendue, et chaque point forme une boucle de velours. Pendant deux heures, vous repartez avec un tambour brodé prêt à accrocher — vous choisissez votre motif (ou utilisez les modèles graphiques de l'atelier) et la matière (effet velours ou effet plat).",
    duree: "2 heures",
    duree_iso: "PT2H",
    prixMin: 40,
    prixLabel: "à partir de 40 €",
    niveau: "Initiation",
    participantsMax: 12,
    ageMin: 12,
    inclus: [
      "Tambour à broder 15 cm",
      "Toile spéciale punch needle",
      "Aiguille punch needle prêtée",
      "Fils coton de qualité, plusieurs coloris",
      "Modèles graphiques préparés",
      "Boisson chaude offerte",
    ],
    ambiance: "Concentration douce, café-thé en main, musique en fond.",
    image: "/images/ateliers/punch-needle.webp",
    imageAlt: "Tambour brodé en punch needle aux fils colorés posé sur une table en bois clair",
    couleur: "terracotta",
  },
  {
    slug: "macrame",
    nom: "Macramé",
    resumeCourt: "Apprenez à nouer le coton pour créer suspensions et tentures murales.",
    description:
      "Une plante en suspension, une tenture murale, un porte-clé : avec quelques nœuds appris ensemble, vous repartez avec une création terminée. Idéal pour découvrir les bases du macramé moderne (nœud plat, nœud spirale, nœud d'alouette) dans une ambiance détendue.",
    duree: "2h30",
    duree_iso: "PT2H30M",
    prixMin: 45,
    prixLabel: "à partir de 45 €",
    niveau: "Débutant",
    participantsMax: 10,
    ageMin: 12,
    inclus: [
      "Cordes coton naturel",
      "Anneau ou bâton en bois",
      "Fiches mémo pour reproduire chez vous",
      "Boisson chaude offerte",
    ],
    ambiance: "Slow craft, on prend son temps, on discute.",
    image: "/images/ateliers/macrame.webp",
    imageAlt: "Suspension en macramé coton blanc avec frange, accrochée à un mur clair",
    couleur: "sauge",
  },
  {
    slug: "broderie",
    nom: "Broderie",
    resumeCourt: "Les points classiques revisités pour broder vos premiers motifs.",
    description:
      "Point arrière, point de chaînette, point de bourdon, point lancé : les fondamentaux pour démarrer la broderie sereinement. Vous repartez avec un tambour brodé d'un motif simple (fleur, lettrage ou paysage) que vous pourrez encadrer ou offrir.",
    duree: "2h",
    duree_iso: "PT2H",
    prixMin: 38,
    prixLabel: "à partir de 38 €",
    niveau: "Initiation",
    participantsMax: 12,
    ageMin: 10,
    inclus: [
      "Tambour à broder",
      "Toile pré-imprimée au choix",
      "Fils mouliné DMC",
      "Aiguilles + ciseaux à broder",
    ],
    ambiance: "Précision méditative, parfait pour décompresser.",
    image: "/images/ateliers/broderie.webp",
    imageAlt: "Tambour à broder en main avec une fleur en broderie aux fils roses et verts",
    couleur: "terracotta",
  },
  {
    slug: "couture",
    nom: "Couture",
    resumeCourt: "Vos premiers points machine sur un projet concret à emporter.",
    description:
      "Pochette, lingette démaquillante, tote bag, scrunchie : selon la session, vous découvrez la machine à coudre sur un projet utile et rapide. Idéal pour apprivoiser la machine ou s'y remettre après quelques années.",
    duree: "3h",
    duree_iso: "PT3H",
    prixMin: 55,
    prixLabel: "à partir de 55 €",
    niveau: "Tous niveaux",
    participantsMax: 6,
    ageMin: 14,
    inclus: [
      "Machine à coudre prêtée",
      "Tissus au choix (mercerie maison)",
      "Mercerie nécessaire (fils, élastique, fermeture…)",
      "Tutoriel imprimé",
    ],
    ambiance: "Ateliers limités à 6 pour un suivi personnalisé.",
    image: "/images/ateliers/couture.webp",
    imageAlt: "Mains qui guident un tissu sous l'aiguille d'une machine à coudre",
    couleur: "sauge",
  },
  {
    slug: "art-floral",
    nom: "Art floral",
    resumeCourt: "Composez un bouquet de saison guidé par une fleuriste partenaire.",
    description:
      "Bouquet rond, composition en mousse, couronne séchée : selon la saison et le thème de la session, vous composez avec des fleurs fraîches ou stabilisées issues de producteurs locaux. Animé par une fleuriste partenaire.",
    duree: "2h",
    duree_iso: "PT2H",
    prixMin: 55,
    prixLabel: "à partir de 55 €",
    niveau: "Tous niveaux",
    participantsMax: 8,
    ageMin: 14,
    inclus: [
      "Fleurs fraîches ou séchées (filière locale)",
      "Contenant ou support adapté",
      "Conseils d'entretien à emporter",
    ],
    ambiance: "Parfums, couleurs, on partage le sécateur.",
    image: "/images/ateliers/art-floral.webp",
    imageAlt: "Composition florale en cours sur un plan de travail avec sécateur et fleurs séchées",
    couleur: "sauge",
  },
  {
    slug: "tricot",
    nom: "Tricot",
    resumeCourt: "Maille endroit, maille envers : vos premières mailles en confiance.",
    description:
      "Monter ses mailles, tricoter, rabattre : la grammaire complète pour démarrer le tricot. Vous repartez avec un petit projet entamé (échantillon, marque-page ou bandeau) et toutes les clés pour continuer chez vous.",
    duree: "2h",
    duree_iso: "PT2H",
    prixMin: 38,
    prixLabel: "à partir de 38 €",
    niveau: "Débutant",
    participantsMax: 8,
    ageMin: 10,
    inclus: [
      "Laine de qualité (mercerie maison)",
      "Aiguilles prêtées le temps de l'atelier",
      "Fiche tutoriel",
    ],
    ambiance: "L'atelier le plus zen du planning.",
    image: "/images/ateliers/tricot.webp",
    imageAlt: "Mains qui tricotent une laine beige avec aiguilles en bois",
    couleur: "ocre",
  },
  {
    slug: "crochet",
    nom: "Crochet",
    resumeCourt: "La maille en l'air, la maille serrée et c'est parti.",
    description:
      "Le crochet, c'est un seul outil et des heures d'évasion. On apprend les mailles de base et on enchaîne sur un petit projet (sous-verre, marque-page ou amigurumi simple).",
    duree: "2h",
    duree_iso: "PT2H",
    prixMin: 38,
    prixLabel: "à partir de 38 €",
    niveau: "Débutant",
    participantsMax: 8,
    ageMin: 10,
    inclus: ["Crochet prêté", "Pelote de coton", "Fiche pas-à-pas"],
    ambiance: "Idéal pour les amoureux du fait main rapide.",
    image: "/images/ateliers/crochet.webp",
    imageAlt: "Crochet en bois avec un coton terracotta en cours de réalisation",
    couleur: "ocre",
  },
  {
    slug: "aquarelle",
    nom: "Aquarelle",
    resumeCourt: "Lâcher prise avec l'eau et la couleur, sans pression.",
    description:
      "Mouillé sur mouillé, fondus, glacis : les techniques de base de l'aquarelle botanique ou paysage. Pas besoin de savoir dessiner — on travaille à partir de croquis légers fournis.",
    duree: "2h30",
    duree_iso: "PT2H30M",
    prixMin: 45,
    prixLabel: "à partir de 45 €",
    niveau: "Initiation",
    participantsMax: 8,
    ageMin: 12,
    inclus: [
      "Papier aquarelle 300g",
      "Palette de couleurs prêtée",
      "Pinceaux prêtés",
      "Modèles fournis",
    ],
    ambiance: "Silence créatif, palette à partager.",
    image: "/images/ateliers/aquarelle.webp",
    imageAlt: "Pinceau aquarelle déposant du bleu sur un papier avec une palette à côté",
    couleur: "sauge",
  },
  {
    slug: "bijoux",
    nom: "Création de bijoux",
    resumeCourt: "Boucles d'oreilles ou collier — un bijou conçu et fini avec vous.",
    description:
      "Découvrez les techniques de montage de bijoux : perles, anneaux ouverts/fermés, pinces, fermoirs. Vous concevez et repartez avec un bijou complet (boucles ou collier au choix).",
    duree: "2h",
    duree_iso: "PT2H",
    prixMin: 42,
    prixLabel: "à partir de 42 €",
    niveau: "Débutant",
    participantsMax: 8,
    ageMin: 12,
    inclus: [
      "Apprêts qualité (argent ou doré)",
      "Sélection de perles, pierres, breloques",
      "Pinces prêtées",
    ],
    ambiance: "Pour soi, pour offrir, à customiser à l'infini.",
    image: "/images/ateliers/bijoux.webp",
    imageAlt: "Plan de travail avec perles, fil, pinces et bijoux en cours de réalisation",
    couleur: "ocre",
  },
  {
    slug: "cuir",
    nom: "Travail du cuir",
    resumeCourt: "Coudre le cuir à la main : un porte-clé, un porte-cartes, du sérieux.",
    description:
      "Découpe, marquage, perforation, couture sellier : les gestes fondateurs du travail du cuir, sur un petit objet à emporter (porte-clé, porte-cartes, marque-page).",
    duree: "3h",
    duree_iso: "PT3H",
    prixMin: 65,
    prixLabel: "à partir de 65 €",
    niveau: "Initiation",
    participantsMax: 6,
    ageMin: 14,
    inclus: [
      "Cuir tannage végétal (coloris au choix)",
      "Fil ciré",
      "Outils prêtés",
    ],
    ambiance: "Une odeur d'atelier authentique, du concret.",
    image: "/images/ateliers/cuir.webp",
    imageAlt: "Petit porte-cartes en cuir tannage végétal cousu main, posé sur un plan de bois",
    couleur: "terracotta",
  },
  {
    slug: "papier",
    nom: "Paper crafts",
    resumeCourt: "Origami, faire-part, carterie : le papier devient sculpture.",
    description:
      "Selon la session : faire-part, carterie embossée, fleurs en papier, marque-pages calligraphiés. Un atelier doux et minutieux pour les amoureux du beau papier.",
    duree: "2h",
    duree_iso: "PT2H",
    prixMin: 35,
    prixLabel: "à partir de 35 €",
    niveau: "Tous niveaux",
    participantsMax: 10,
    ageMin: 8,
    inclus: ["Papiers haut de gamme", "Outils prêtés", "Modèles fournis"],
    ambiance: "Doux, lent, contemplatif.",
    image: "/images/ateliers/papier.webp",
    imageAlt: "Atelier de carterie avec papiers colorés, pliage, ciseaux et règle en bois",
    couleur: "ocre",
  },
];

export function getAtelier(slug: string): Atelier | undefined {
  return ateliers.find((a) => a.slug === slug);
}
