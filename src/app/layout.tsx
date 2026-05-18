import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { siteConfig, canonicalUrl } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import type { Store, WithContext } from "schema-dts";
import "./globals.css";

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} — ${siteConfig.baseline}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.fullName,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  keywords: [
    "boutique atelier Vannes",
    "DIY Vannes",
    "ateliers créatifs Vannes",
    "mercerie Vannes",
    "créateurs Morbihan",
    "punch needle Vannes",
    "macramé Vannes",
    "broderie Vannes",
    "EVJF Vannes",
    "fait main Bretagne",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfaf3" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1815" },
  ],
  width: "device-width",
  initialScale: 1,
};

const storeSchema: WithContext<Store> = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": canonicalUrl("/#store"),
  name: siteConfig.fullName,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  description: siteConfig.description,
  image: `${siteConfig.url}/og.jpg`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    postalCode: siteConfig.contact.postalCode,
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.region,
    addressCountry: siteConfig.contact.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.contact.geo.latitude,
    longitude: siteConfig.contact.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:30",
      closes: "19:00",
    },
  ],
  sameAs: Object.values(siteConfig.social).filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.language} className={`${fontBody.variable} ${fontDisplay.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Aller au contenu principal
        </a>
        <JsonLd schema={storeSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
