/**
 * Témoignages clientèle.
 * À remplacer par de vrais avis avec accord de leurs auteurs.
 */

export type Temoignage = {
  prenom: string;
  initiale: string;
  ville: string;
  atelier?: string;
  citation: string;
};

export const temoignages: ReadonlyArray<Temoignage> = [
  {
    prenom: "Claire",
    initiale: "C.",
    ville: "Vannes",
    atelier: "Punch Needle",
    citation:
      "Deux heures qui passent comme dix minutes. On repart avec une vraie pièce et l'envie de recommencer.",
  },
  {
    prenom: "Lucie",
    initiale: "L.",
    ville: "Arradon",
    atelier: "Macramé",
    citation:
      "Cadeau d'anniversaire de mes copines pour mes 30 ans, j'ai adoré. L'atmosphère de la boutique est unique.",
  },
  {
    prenom: "Anne",
    initiale: "A.",
    ville: "Auray",
    atelier: "Couture",
    citation:
      "Je n'avais jamais touché à une machine à coudre. Je suis repartie avec mon tote bag et la fierté qui va avec.",
  },
  {
    prenom: "Sophie",
    initiale: "S.",
    ville: "Vannes",
    atelier: "Privatisation EVJF",
    citation:
      "Privatisation pour mon EVJF : punch needle pour 8 filles, café-thé à volonté, on a passé un samedi parfait.",
  },
];
