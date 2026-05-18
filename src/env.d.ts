// Augmente le type CloudflareEnv généré par `wrangler types` avec les
// secrets (qui ne sont pas déclarés dans wrangler.jsonc mais via
// `wrangler secret put`). À mettre à jour à chaque ajout de secret.

interface CloudflareEnv {
  RESEND_API_KEY?: string;
  RESEND_WEBHOOK_SECRET?: string;
}

declare namespace Cloudflare {
  interface Env {
    RESEND_API_KEY?: string;
    RESEND_WEBHOOK_SECRET?: string;
  }
}
