import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="relative isolate mt-24 overflow-hidden bg-deep text-paper noise-overlay">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
      />

      {/* Bandeau intro grande typo */}
      <div className="container-main relative border-b border-paper/10 py-16 md:py-20">
        <p className="eyebrow !text-gold">Ravis de vous rencontrer</p>
        <p className="mt-5 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-paper">
          Apprendre. Créer. <span className="ital-mark !text-gold">Repartir.</span>
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={siteConfig.ctas.bookWorkshop.href}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-deep"
          >
            {siteConfig.ctas.bookWorkshop.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={siteConfig.ctas.contact.href}
            className="inline-flex items-center gap-2 rounded-full ring-1 ring-paper/30 px-6 py-3 text-sm text-paper transition-colors hover:bg-paper hover:text-deep"
          >
            {siteConfig.ctas.contact.label}
          </Link>
        </div>
      </div>

      <div className="container-main relative py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl text-paper">
              {siteConfig.name}
              <span className="ml-2 text-xs uppercase tracking-[0.3em] text-gold">Vannes</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              {siteConfig.baseline}
            </p>
            <div className="mt-6 flex gap-3">
              {siteConfig.social.instagram ? (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/5 text-paper ring-1 ring-paper/20 transition-all hover:bg-brand hover:ring-brand"
                  aria-label="Instagram MAKE Vannes"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
              {siteConfig.social.facebook ? (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/5 text-paper ring-1 ring-paper/20 transition-all hover:bg-brand hover:ring-brand"
                  aria-label="Facebook MAKE Vannes"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Visiter</p>
            <nav aria-label="Navigation principale (pied de page)">
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-paper/75 transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">La boutique</p>
            <address className="not-italic mt-5 space-y-3 text-sm text-paper/75">
              <span className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.postalCode} {siteConfig.contact.city}
                </span>
              </span>
              <span className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span className="whitespace-pre-line">{siteConfig.contact.openingHoursLabel}</span>
              </span>
              <span className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-paper/75 transition-colors hover:text-gold link-craft"
                >
                  {siteConfig.contact.email}
                </a>
              </span>
            </address>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Informations</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {siteConfig.footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container-main border-t border-paper/10 py-6 text-xs text-paper/60 flex flex-wrap items-center justify-between gap-3">
        <span>
          © {new Date().getFullYear()} {siteConfig.legalName} — Tous droits réservés.
        </span>
        <span className="text-paper/50">Conçu à Vannes, avec soin.</span>
      </div>
    </footer>
  );
}
