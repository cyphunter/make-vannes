import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { canonicalUrl } from "@/lib/site-config";
import { SectionHeading } from "@/components/public/section-heading";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import type { BreadcrumbList, WithContext } from "schema-dts";

export const metadata: Metadata = buildMetadata({
  title: "À propos — l'histoire de MAKE Vannes",
  description:
    "MAKE est née en septembre 2019 d'une envie : créer à Vannes un lieu où l'on apprend à faire, à transmettre et à célébrer le geste artisanal.",
  path: "/a-propos",
});

const breadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: canonicalUrl("/") },
    { "@type": "ListItem", position: 2, name: "À propos", item: canonicalUrl("/a-propos") },
  ],
};

const valeurs = [
  {
    title: "La transmission",
    body: "Chaque atelier est pensé comme un moment d'apprentissage joyeux : techniques solides, conseils pour continuer à la maison, fiches pour ne rien oublier.",
    tone: "bg-brand text-paper",
  },
  {
    title: "Le local d'abord",
    body: "Nous travaillons avec des créateurs et fournisseurs basés en Bretagne — du Morbihan principalement. Quand c'est possible, nous favorisons les matières naturelles et les circuits courts.",
    tone: "bg-accent text-paper",
  },
  {
    title: "L'accessibilité",
    body: "Pas d'abonnement, pas de pré-requis : MAKE est un lieu où l'on essaye, où l'on se trompe, où l'on apprend — quel que soit son niveau.",
    tone: "bg-gold text-deep",
  },
  {
    title: "Le temps long",
    body: "Le fait main demande du temps. C'est précisément ce qu'on vient chercher ici : ralentir, se concentrer sur un geste, repartir apaisée.",
    tone: "bg-deep text-paper",
  },
] as const;

export default function AProposPage() {
  return (
    <main id="main-content">
      <JsonLd schema={breadcrumbSchema} />

      <section className="relative isolate overflow-hidden mesh-warm noise-overlay">
        <div className="container-main relative py-20 md:py-28">
          <p className="eyebrow">L'aventure</p>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] text-ink max-w-4xl">
            Une boutique-atelier{" "}
            <span className="ital-mark">ouverte à Vannes</span>{" "}
            depuis 2019.
          </h1>
        </div>
      </section>

      <section className="container-main py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-ink/80">
            <p className="first-letter:font-display first-letter:text-7xl first-letter:font-medium first-letter:text-brand first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
              MAKE est née en septembre 2019 dans le quartier Saint-Patern à Vannes — l'un des plus
              anciens et plus vivants quartiers de la ville. L'idée était simple : ouvrir un lieu où
              l'on rassemble une boutique de créateurs locaux, une mercerie sérieuse et un atelier
              capable d'accueillir tous les curieux.
            </p>
            <p>
              Depuis, nous avons accueilli des centaines de personnes — débutantes intimidées par la
              machine à coudre, retraitées passionnées de broderie, équipes d'entreprise venues
              décompresser, futures mariées et leurs copines, parents et enfants un mercredi
              après-midi.
            </p>
            <p>
              Ce qu'on aime ici, ce n'est pas seulement créer. C'est apprendre, transmettre, célébrer
              le geste — et continuer à faire vivre l'artisanat à hauteur de quartier.
            </p>
          </div>
          <aside className="md:col-span-5 relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-cream ring-1 ring-ink/10 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/atelier-make.webp"
                alt="Vue de l'intérieur de la boutique-atelier MAKE Vannes, lumineuse et chaleureuse"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-deep/30 to-transparent"
              />
            </div>
            {/* Badge année */}
            <div className="absolute -left-4 -bottom-4 rotate-[-4deg] rounded-2xl bg-deep px-5 py-4 text-paper shadow-warm">
              <p className="font-display text-3xl leading-none text-gold">2019</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-paper/70">
                Année d'ouverture
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-paper-warm texture-paper py-20 md:py-28">
        <div className="container-main">
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Ce qui nous anime au quotidien."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {valeurs.map((v, i) => (
              <div
                key={v.title}
                className="group relative flex gap-5 rounded-3xl bg-paper p-8 ring-1 ring-ink/8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-warm md:p-10"
              >
                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-display text-xl shadow-md ${v.tone}`}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink leading-tight">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-main py-20 md:py-28">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] mesh-deep noise-overlay p-12 text-paper md:p-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl"
          />
          <h2 className="relative font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] max-w-3xl">
            Saint-Patern, c'est notre adresse…{" "}
            <span className="ital-mark !text-gold">et notre inspiration.</span>
          </h2>
          <p className="relative mt-6 max-w-2xl text-lg text-paper/80 md:text-xl leading-relaxed">
            Boulangeries, restaurants, ateliers d'artistes, brocanteurs : c'est l'un des plus beaux
            quartiers de Vannes intra-muros. Venez flâner, on en fait partie.
          </p>
          <div className="relative mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Nous rendre visite
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-paper ring-paper/40 hover:bg-paper hover:text-ink"
            >
              <Link href="/ateliers">Découvrir les ateliers</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
