import { NextResponse, type NextRequest } from "next/server";

/**
 * Middleware global.
 *
 * V1 = pas d'admin, donc pas de protection auth.
 * Responsabilité actuelle : redirections legacy (à activer lors de la refonte
 * si l'ancien site avait des URLs spécifiques à rediriger).
 *
 * Les headers de sécurité sont émis via next.config.ts → headers().
 */

const LEGACY_REDIRECTS: Record<string, string> = {
  // Exemple : "/old-atelier": "/ateliers/punch-needle",
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const redirect = LEGACY_REDIRECTS[pathname];
  if (redirect) {
    const url = req.nextUrl.clone();
    url.pathname = redirect;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon-|apple-touch-|manifest|robots.txt|sitemap.xml).*)",
  ],
};
