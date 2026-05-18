# Livraison — MAKE Vannes

> Document remis le jour de la mise en ligne. À conserver précieusement.

## Informations générales

- **Site** : https://makevannes.com
- **Mis en ligne le** : `JJ/MM/AAAA`
- **Développeur** : Kevin — fostraceur999@gmail.com
- **Repo GitHub** : `<URL>`

## Comment modifier le contenu du site

Tout le contenu textuel principal vit dans **trois zones** sur GitHub :

### 1. Coordonnées, slogans, navigation, mentions légales

Fichier : `src/lib/site-config.ts`

Pour modifier :
1. GitHub → `src/lib/site-config.ts` → crayon ✏️
2. Modifier les valeurs **entre guillemets** uniquement (ex : `phone: "06 12 34 56 78"`)
3. "Commit changes"
4. Le site se met à jour automatiquement en 2–3 min.

### 2. Catalogue d'ateliers

Fichier : `src/data/ateliers.ts`

Chaque atelier est un bloc avec : nom, description, durée, prix indicatif, niveau, ce qui est inclus. Vous pouvez ajouter, retirer ou modifier un atelier. **Ne changez pas le `slug`** d'un atelier existant (l'URL en dépend).

### 3. Créateurs en boutique

Fichier : `src/data/createurs.ts`

Ajouter / retirer un créateur, modifier sa bio et son origine. Image dans `public/images/createurs/` (WebP, ~800×800 px, < 200 KB).

### 4. FAQ et témoignages

Fichiers : `src/data/faq.ts` et `src/data/temoignages.ts`. Édition libre.

### 5. Ajouter une image

1. Préparer l'image : **WebP** (ou JPG), max 1920×1080 pour hero, 800×600 pour vignettes, **< 300 KB**.
2. GitHub → `public/images/` → "Add file" → "Upload files"
3. Référencer dans `site-config.ts` ou `data/*.ts` selon où elle apparaît.

## Réservations d'ateliers

Les inscriptions passent par **Billetweb** (votre plateforme actuelle). Le site renvoie vers le lien défini dans `siteConfig.social.billetweb`. Vous gérez vos dates et tarifs réels là-bas — le site est uniquement vitrine.

## Accès importants

| Service | URL | Compte |
|---|---|---|
| **Cloudflare** | https://dash.cloudflare.com | `<email>` (2FA actif) |
| **Resend** (envoi mails contact) | https://resend.com | `<email>` |
| **GitHub** (code) | `<URL repo>` | `<username>` |
| **OVH** (domaine) | https://www.ovh.com/manager | `<identifiant>` |
| **Google Search Console** | https://search.google.com/search-console | `<email>` |
| **Billetweb** (ateliers) | https://www.billetweb.fr | `<email>` |
| **BetterStack** (monitoring) | https://betterstack.com | `<email>` |

> Conservez ces accès dans un gestionnaire de mots de passe (1Password, Bitwarden).

## Formulaire de contact

- Les messages arrivent à `contact@makevannes.com` (variable `CONTACT_TO_EMAIL` côté Cloudflare).
- Vous pouvez **répondre directement au mail reçu** — il sera envoyé à la personne qui a écrit.
- Anti-spam : champ caché (honeypot) + consentement RGPD obligatoire + rate limiting Cloudflare.

## Sauvegarde

- **Code & contenu** : versionnés sur GitHub (historique complet, retour arrière possible).
- **Médias** : R2 Cloudflare, redondés (durabilité 99.999999999%).

## Procédure d'urgence

### Site cassé / inaccessible

1. Vérifier https://www.cloudflarestatus.com/
2. Contacter Kevin : fostraceur999@gmail.com
3. Rollback possible en 30s vers la version précédente (Kevin s'en charge).

### Spam / abus formulaire

Le formulaire a un honeypot et un consentement obligatoire. En cas d'abus, Kevin peut activer un rate limiting renforcé via le WAF Cloudflare en 5 min.

### Compromission compte

1. Changer immédiatement le mot de passe Cloudflare + activer 2FA si pas déjà fait.
2. Contacter Kevin pour audit logs et rotation des secrets.

## Maintenance

- **Sécurité** (mises à jour dépendances) : `<incluses dans le forfait / à la demande>`
- **Évolutions** (nouvelles fonctionnalités) : devis au cas par cas
- **Support** : `<email / délai>`

## Contact

**Kevin** — Développeur freelance
fostraceur999@gmail.com

---

*Document généré à la mise en ligne. N'hésitez pas à me contacter pour toute question.*
