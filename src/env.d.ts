// Augmente le type CloudflareEnv généré par `wrangler types` avec les
// secrets éventuels (déclarés via `wrangler secret put`). Aucun secret
// requis en V1 (showcase pur, contact direct par email/téléphone).
// À mettre à jour si on ré-introduit un secret côté Cloudflare.

interface CloudflareEnv {
  // Aucun secret pour l'instant.
}

declare namespace Cloudflare {
  interface Env {
    // Aucun secret pour l'instant.
  }
}
