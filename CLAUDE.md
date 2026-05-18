# MAKE Vannes — instructions Claude (spécifiques projet)

> Règles agence : voir `../CLAUDE.md` à la racine de `freelance/`.
> Référence détaillée : voir `../CONVENTIONS.md`.

## Identité du projet

- **Client** : MAKE Vannes (boutique-atelier)
- **Activité** : boutique-atelier dédiée au Fait Main, au DIY et aux créateurs locaux. Mercerie, ateliers créatifs (broderie, couture, macramé, art floral, papier, crochet, punch needle, cuir, aquarelle, bijoux), espace boutique de créateurs, privatisations (anniversaires, EVJF, team building).
- **Adresse** : 30 rue Saint-Patern, 56000 Vannes (quartier Saint-Patern)
- **Horaires** : mardi–samedi 10h30–19h
- **Email** : contact@makevannes.com
- **Site** : `https://makevannes.com`
- **SITE_ID** : `make`
- **D1** : aucune (showcase pur — données dans `src/data/*.ts`)
- **R2 bucket** : `make-media`
- **Email expéditeur** : `contact@makevannes.com` (Resend)
- **Réseaux** : Facebook `make.vannes`, Instagram `@make.vannes`

## Direction artistique

- **Palette** :
  - `--color-paper` : #fdfaf3 (crème naturel papier kraft)
  - `--color-ink` : #1f1815 (brun profond)
  - `--color-muted` : #7a6b5d (taupe doux)
  - `--color-brand` : #b85c38 (terracotta — couleur principale Make)
  - `--color-brand-accent` : #5c8a5c (vert sauge — créatif, atelier)
  - `--color-highlight` : #e8b86b (ocre doré — chaleureux, accent)
  - `--color-cream` : #f3ead8 (sable clair — séparations douces)
- **Polices** : Fraunces (display, titres avec personnalité artisanale) + Inter (body, lisibilité moderne) — via `next/font`
- **Ton** : chaleureux, artisanal, accessible, féminin sans être mièvre. Inviter à créer, à partager, à apprendre. Tutoiement possible selon validation client (par défaut vouvoiement collectif "vous").

## Sources de contenu client-éditables

- **`src/lib/site-config.ts`** — coordonnées, navigation, mentions légales, social
- **`src/data/ateliers.ts`** — catalogue d'ateliers types (broderie, macramé, …)
- **`src/data/createurs.ts`** — créateurs représentés dans la boutique
- **`src/data/temoignages.ts`** — avis / quotes clientèle
- **`src/data/faq.ts`** — FAQ ateliers et privatisation

## Points d'attention spécifiques

- **V1 = showcase pur sans DB ni auth** — pas de back-office. Toute édition de contenu passe par GitHub (édition `site-config.ts` + `data/*.ts`).
- **Formulaire de contact** : Server Action → envoi Resend → destinataire `contact@makevannes.com` (var `CONTACT_TO_EMAIL`).
- **Pas d'inscription en ligne aux ateliers en V1** — bouton "Réserver" qui pointe vers Billetweb (système actuel utilisé par Make) ou ouvre formulaire de demande. À confirmer avec le client.
- **JSON-LD** : `LocalBusiness` (sous-type `Store`) sur layout root + `Event` / `EducationEvent` pour chaque atelier publié + `FAQPage` sur page ateliers.
- **Accessibilité PMR** : à vérifier avec le client, mentionner dans page À propos / Contact si applicable.
