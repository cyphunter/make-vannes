# Checklist pré-livraison — MAKE Vannes

À cocher **à 100 %** avant mise en ligne. Aucune exception.

## Contenu à valider avec le client

- [ ] **Numéro de téléphone** (`siteConfig.contact.phoneDisplay` + `.phone`)
- [ ] **SIRET, capital, RCS, directrice publication** (`siteConfig.legal`)
- [ ] **Liste réelle des ateliers** (`src/data/ateliers.ts`) — descriptions, prix réels, niveaux
- [ ] **Liste réelle des créateurs** en boutique (`src/data/createurs.ts`)
- [ ] **Témoignages réels** avec accord écrit (`src/data/temoignages.ts`)
- [ ] **Lien Billetweb réel** (`siteConfig.social.billetweb`)
- [ ] **Photos vraies** dans `public/images/` :
  - [ ] `hero-make.webp` (image hero)
  - [ ] `about-make.webp` (intérieur boutique)
  - [ ] `ateliers/{slug}.webp` (1 par atelier)
  - [ ] `createurs/{slug}.webp` (1 par créateur)
  - [ ] `og.jpg` (1200×630 — image OpenGraph)
- [ ] **Coordonnées GPS** exactes du 30 rue Saint-Patern dans `siteConfig.contact.geo`

## Qualité technique

- [ ] Lighthouse mobile ≥ 95 sur les 4 catégories (joindre rapport)
- [ ] LCP < 2.5s · INP < 200ms · CLS < 0.1 · FCP < 1.8s
- [ ] `npm run typecheck` : 0 erreur
- [ ] `npm run lint` : 0 erreur
- [ ] Bundle JS initial < 170 KB gzip
- [ ] Console navigateur : 0 erreur / 0 warning bloquant

## Accessibilité

- [ ] Navigation clavier complète (Tab / Shift+Tab / Enter / Esc)
- [ ] Focus visible partout
- [ ] Skip-to-content fonctionnel
- [ ] Contraste 4.5:1 vérifié axe DevTools
- [ ] Tous `alt` renseignés (vides si décoratif)
- [ ] Formulaire contact : `<label>` lié, erreurs lues par lecteur d'écran
- [ ] `prefers-reduced-motion` respecté

## SEO

- [ ] 1 seul `<h1>` par page
- [ ] `Metadata` Next.js sur toutes les pages
- [ ] JSON-LD valide :
  - [ ] `Store` (layout root) — testé Rich Results Test
  - [ ] `Course` (chaque atelier)
  - [ ] `FAQPage` (ateliers + privatisation)
  - [ ] `BreadcrumbList` (toutes pages > niveau 1)
- [ ] OpenGraph image 1200×630 testée (Facebook Debugger)
- [ ] `sitemap.xml` accessible (`/sitemap.xml`)
- [ ] `robots.txt` valide
- [ ] Google Search Console : site ajouté + sitemap soumis
- [ ] Bing Webmaster Tools : ajouté

## Sécurité

- [ ] Test [securityheaders.com](https://securityheaders.com) → **A+**
  - [ ] CSP / HSTS / X-Frame-Options / X-Content-Type-Options / Referrer-Policy / Permissions-Policy
- [ ] HTTPS partout, 0 mixed content
- [ ] Validation Zod sur Server Action `contact`
- [ ] Honeypot + consentement RGPD sur formulaire
- [ ] Secrets via `wrangler secret put`, 0 clé en clair dans le repo

## Légal RGPD

- [ ] Page Mentions légales complète (SIRET, capital, directrice publication)
- [ ] Page Politique de confidentialité publiée
- [ ] Page CGU publiée
- [ ] Case RGPD non pré-cochée + lien politique
- [ ] Pas de bandeau cookies (Cloudflare Web Analytics uniquement)

## Email (Resend)

- [ ] Domaine `makevannes.com` vérifié sur Resend (statut "verified")
- [ ] SPF + DKIM (3 CNAME) + DMARC en DNS Cloudflare
- [ ] Test envoi formulaire vers Gmail / Outlook / ProtonMail → reçus en inbox
- [ ] `from` = `contact@makevannes.com`
- [ ] Webhook bounces configuré (optionnel)

## DNS / Domaine

- [ ] OVH NS pointe vers Cloudflare
- [ ] A/CNAME @ et www → Workers (proxy ON 🟠)
- [ ] DNS Resend (SPF + DKIM + DMARC) propagés
- [ ] SSL/TLS mode "Full (strict)"
- [ ] Email forwarding `contact@makevannes.com` → email gérante MAKE (via Cloudflare Email Routing si email pas géré ailleurs)

## Assets

- [ ] Images en WebP/AVIF, < 300 KB
- [ ] Hero LCP < 200 KB
- [ ] Favicon complet : `/favicon.ico`, `/icon-192.png`, `/icon-512.png`, `/apple-touch-icon.png`
- [ ] Polices via `next/font` (preload + display swap) ✓

## Responsive & cross-browser

- [ ] Tests sur 5 breakpoints : 375 / 768 / 1024 / 1440 / 1920
- [ ] iOS Safari + Android Chrome
- [ ] Pas de scrollbar horizontale à 320px
- [ ] Touch targets ≥ 44×44px (menu mobile vérifié)

## Pages d'erreur

- [ ] `/not-found.tsx` personnalisée et testée (URL bidon)
- [ ] `/error.tsx` personnalisée et testée (forcer une exception)

## Monitoring

- [ ] `observability.enabled = true` dans `wrangler.jsonc` ✓
- [ ] `/health` répond 200
- [ ] Cloudflare Web Analytics activé
- [ ] Uptime monitoring externe configuré (BetterStack / UptimeRobot)

## Repo & CI/CD

- [ ] README à jour ✓
- [ ] Branches protégées (main protégée, PR review)
- [ ] Secrets GitHub Actions : `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- [ ] Deploy auto sur push `main` vérifié

## Livraison client

- [ ] `LIVRAISON.md` rempli (accès, comment éditer, procédures)
- [ ] Tableau d'accès remis (Cloudflare, Resend, GitHub, OVH, GSC, monitoring)
- [ ] Démo client : tour du site, comment éditer `site-config.ts` et `data/*.ts` via GitHub
- [ ] Contrat de maintenance signé (si applicable)
