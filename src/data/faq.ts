export type FaqItem = { question: string; reponse: string };

export const faqAteliers: ReadonlyArray<FaqItem> = [
  {
    question: "Faut-il avoir un niveau particulier pour participer ?",
    reponse:
      "Non, la grande majorité des ateliers sont accessibles aux débutants. Chaque fiche atelier précise le niveau et l'âge minimum. Nos animatrices et animateurs s'adaptent à votre rythme.",
  },
  {
    question: "Le matériel est-il fourni ?",
    reponse:
      "Oui, tout le matériel est inclus dans le tarif : outils, fournitures, supports. Vous repartez avec votre création terminée.",
  },
  {
    question: "Comment réserver un atelier ?",
    reponse:
      "Les réservations se font en ligne via notre plateforme partenaire Billetweb. Vous pouvez accéder à toutes les sessions disponibles depuis la page Ateliers, ou nous contacter directement si une date ne vous convient pas.",
  },
  {
    question: "Quelle est la politique d'annulation ?",
    reponse:
      "L'annulation est possible jusqu'à 7 jours avant l'atelier avec remboursement intégral. Entre 7 et 48 heures avant, un avoir équivalent vous sera proposé. Au-delà, l'atelier reste dû.",
  },
  {
    question: "Peut-on venir avec ses enfants ?",
    reponse:
      "Oui, certains ateliers ont une version enfants ou parent-enfant, le mercredi et pendant les vacances scolaires. L'âge minimum est précisé sur chaque fiche atelier.",
  },
  {
    question: "Peut-on offrir un atelier à quelqu'un ?",
    reponse:
      "Bien sûr — les bons cadeaux sont disponibles à la boutique et sur demande par mail. Valables un an sur l'ensemble des ateliers.",
  },
];

export const faqPrivatisation: ReadonlyArray<FaqItem> = [
  {
    question: "Combien de personnes pouvez-vous accueillir ?",
    reponse:
      "De 6 à 12 personnes selon l'atelier. Au-delà, nous étudions ensemble la possibilité de dédoubler l'animation.",
  },
  {
    question: "Quels types d'événements privatisez-vous ?",
    reponse:
      "Anniversaires (enfants et adultes), enterrements de vie de jeune fille, team building d'entreprise, baby showers, événements associatifs. Tout type d'occasion qui se prête au partage créatif.",
  },
  {
    question: "Combien de temps à l'avance faut-il réserver ?",
    reponse:
      "Idéalement 3 à 4 semaines avant la date souhaitée. En cas d'urgence, contactez-nous : nous faisons notre maximum pour vous trouver un créneau.",
  },
  {
    question: "Peut-on apporter à boire et à manger ?",
    reponse:
      "Oui, vous pouvez apporter boissons (champagne, vin, soft) et petites bouchées. Nous fournissons les verres et les couverts. Pas de plats chauds — l'espace reste un atelier créatif.",
  },
];
