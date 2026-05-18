# MAKE Vannes

Site vitrine Next.js 16 + Cloudflare Workers pour **MAKE Vannes** — boutique-atelier dédiée au Fait Main et au DIY (30 rue Saint-Patern, 56000 Vannes).

> Règles agence : voir `../CLAUDE.md` et `../CONVENTIONS.md`.
> Instructions projet : `./CLAUDE.md`.

## Démarrage rapide

```bash
# 1. Installer
npm install

# 2. Ressources Cloudflare (à créer une fois)
wrangler r2 bucket create make-media
wrangler kv namespace create make-kv
# → coller l'id KV dans wrangler.jsonc

# 3. Dev local
npm run dev          # http://localhost:3000
npm run preview      # build OpenNext + preview Workers local

# 4. Secrets prod (une fois)
wrangler secret put RESEND_API_KEY
wrangler secret put RESEND_WEBHOOK_SECRET   # si webhook activé

# 5. Deploy
npm run deploy
```

## Stack

- **Next.js 16** App Router + React 19 + TypeScript strict
- **Cloudflare Workers** via `@opennextjs/cloudflare`
- **Tailwind v4** (CSS-first via `@theme`)
- **Resend** + React Email pour le formulaire de contact
- **Zod** validation, **sanitize-html** content
- **Aucune DB ni auth** — V1 showcase pur, données dans `src/data/*.ts`

## Édition de contenu (client)

| Quoi | Où |
|---|---|
| Coordonnées, navigation, mentions légales | `src/lib/site-config.ts` |
| Catalogue d'ateliers | `src/data/ateliers.ts` |
| Liste des créateurs | `src/data/createurs.ts` |
| FAQ ateliers & privatisation | `src/data/faq.ts` |
| Témoignages | `src/data/temoignages.ts` |
| Images | `public/images/...` (WebP/AVIF, ≤ 300 KB) |

## Pages

- `/` — accueil
- `/ateliers` + `/ateliers/[slug]` — catalogue d'ateliers
- `/boutique` — concept boutique 3 espaces
- `/createurs` — liste des créateurs
- `/privatisation` — EVJF, anniversaires, team building
- `/a-propos` — histoire de la boutique
- `/contact` — formulaire (Resend)
- `/mentions-legales`, `/confidentialite`, `/cgu` — légal
- `/health` — endpoint monitoring
- `/sitemap.xml`, `/robots.txt`

## Scripts

| Script | Effet |
|---|---|
| `npm run dev` | Serveur dev Next.js |
| `npm run build` | Build OpenNext (production Workers) |
| `npm run preview` | Build + preview Workers local |
| `npm run deploy` | Build + deploy Workers prod |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Checklists

- Avant livraison : [`PRELAUNCH.md`](./PRELAUNCH.md)
- Doc client : [`LIVRAISON.md`](./LIVRAISON.md)
