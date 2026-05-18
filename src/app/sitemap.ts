import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { ateliers } from "@/data/ateliers";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/+$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/ateliers`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/boutique`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/createurs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privatisation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${base}/confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${base}/cgu`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
  ];

  const ateliersRoutes: MetadataRoute.Sitemap = ateliers.map((a) => ({
    url: `${base}/ateliers/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...ateliersRoutes];
}
