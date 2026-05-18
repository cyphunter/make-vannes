/**
 * Créateurs représentés dans la boutique MAKE Vannes.
 *
 * Liste indicative à valider / compléter avec le client.
 */

export type Createur = {
  slug: string;
  nom: string;
  domaine: string;
  bio: string;
  origine: string;
  instagram?: string;
  image?: string;
  imageAlt?: string;
};

export const createurs: ReadonlyArray<Createur> = [
  {
    slug: "atelier-coton",
    nom: "Atelier Coton",
    domaine: "Textile & accessoires",
    bio: "Pochettes, lingettes, tote bags cousus main à partir de cotons doux. Pièces uniques en séries très courtes.",
    origine: "Vannes (56)",
    instagram: "",
    image: "/images/createurs/atelier-coton.webp",
    imageAlt: "Pochettes en tissu coton aux motifs graphiques",
  },
  {
    slug: "ceramiste-mor",
    nom: "Céramique Mor",
    domaine: "Céramique utilitaire",
    bio: "Bols, tasses et petits plats tournés et émaillés à la main. Émaux mats, terres locales bretonnes.",
    origine: "Auray (56)",
    image: "/images/createurs/ceramiste-mor.webp",
    imageAlt: "Tasses en céramique émaillée aux tons sable et terracotta",
  },
  {
    slug: "savonnerie-armorique",
    nom: "Savonnerie d'Armorique",
    domaine: "Cosmétique naturelle",
    bio: "Savons saponifiés à froid, baumes et huiles, formulés en Bretagne avec ingrédients bio et locaux.",
    origine: "Lorient (56)",
    image: "/images/createurs/savonnerie.webp",
    imageAlt: "Savons faits main empilés avec des fleurs séchées",
  },
  {
    slug: "atelier-bijoux-marine",
    nom: "Marine Bijoux",
    domaine: "Bijoux contemporains",
    bio: "Bagues, colliers et boucles en argent et laiton. Esthétique minimaliste inspirée des paysages morbihannais.",
    origine: "Vannes (56)",
    image: "/images/createurs/marine-bijoux.webp",
    imageAlt: "Bagues en argent sur un fond beige",
  },
  {
    slug: "illustration-elen",
    nom: "Elen Illustrations",
    domaine: "Papeterie & affiches",
    bio: "Illustrations à l'aquarelle, cartes, affiches numérotées. Univers botanique, doux et poétique.",
    origine: "Vannes (56)",
    image: "/images/createurs/elen.webp",
    imageAlt: "Affiches illustrées à l'aquarelle avec motifs botaniques",
  },
  {
    slug: "bougies-saline",
    nom: "Saline",
    domaine: "Bougies parfumées",
    bio: "Cire végétale, parfums de Grasse, contenants céramique réutilisables. Fragrances inspirées du golfe.",
    origine: "Sarzeau (56)",
    image: "/images/createurs/saline.webp",
    imageAlt: "Bougie en pot céramique avec fumée légère",
  },
];

export function getCreateur(slug: string): Createur | undefined {
  return createurs.find((c) => c.slug === slug);
}
