import type { Metadata } from "next";
import { Cake, Sparkles, Briefcase, Heart, Users, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { canonicalUrl, siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/public/section-heading";
import { Faq } from "@/components/public/faq";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPrivatisation } from "@/data/faq";
import type { FAQPage, BreadcrumbList, WithContext } from "schema-dts";

export const metadata: Metadata = buildMetadata({
  title: "Privatiser un atelier — EVJF, anniversaires, team building",
  description:
    "Privatisez l'atelier MAKE pour 6 à 12 personnes : anniversaires, EVJF, team building, baby shower. À Vannes, sur-mesure et clé en main.",
  path: "/privatisation",
});

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqPrivatisation.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.reponse },
  })),
};

const breadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: canonicalUrl("/") },
    { "@type": "ListItem", position: 2, name: "Privatisation", item: canonicalUrl("/privatisation") },
  ],
};

const occasions = [
  {
    icon: Sparkles,
    title: "EVJF & EVG",
    body: "Une activité originale et conviviale pour célébrer entre ami·es.",
    tone: "bg-brand text-paper",
  },
  {
    icon: Cake,
    title: "Anniversaires",
    body: "Enfants ou adultes, on adapte l'atelier à votre groupe et au thème.",
    tone: "bg-accent text-paper",
  },
  {
    icon: Briefcase,
    title: "Team building",
    body: "Une parenthèse créative pour vos équipes, en demi-journée ou soirée.",
    tone: "bg-gold text-deep",
  },
  {
    icon: Heart,
    title: "Baby showers",
    body: "Un moment doux à partager, à thème (broderie de petits prénoms, etc.).",
    tone: "bg-deep text-paper",
  },
] as const;

export default function PrivatisationPage() {
  return (
    <main id="main-content">
      <JsonLd schema={faqSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <section className="relative isolate overflow-hidden mesh-warm noise-overlay">
        <div className="container-main relative py-20 md:py-28">
          <SectionHeading
            eyebrow="Sur-mesure"
            title="Privatisez l'atelier pour votre événement."
            intro="Un anniversaire, un EVJF, un team building ou une baby shower : nous transformons l'atelier en lieu privé pour votre groupe. Vous choisissez la technique, on s'occupe du reste."
          />
        </div>
      </section>

      <section className="container-main py-16 md:py-20" aria-label="Types d'événements">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((o) => {
            const Icon = o.icon;
            return (
              <div
                key={o.title}
                className="group relative rounded-3xl bg-paper p-7 ring-1 ring-ink/8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-warm"
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl shadow-md transition-transform duration-500 group-hover:rotate-6 ${o.tone}`}
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-2xl text-ink">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{o.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-paper-warm texture-paper py-20 md:py-28">
        <div className="container-main grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Comment ça marche" title="Trois étapes, zéro stress." />
            <ol className="mt-10 space-y-6">
              <Step n={1} title="On échange">
                Date souhaitée, nombre de personnes, atelier qui vous fait rêver, budget : tout
                commence par un message ou un appel.
              </Step>
              <Step n={2} title="On prépare">
                Devis détaillé sous 48h, vous validez, on prépare le matériel et la mise en place.
                Vous pouvez prévoir vos propres boissons et amuse-bouches.
              </Step>
              <Step n={3} title="Vous créez">
                Le jour J, vous arrivez, on vous accueille — il ne reste plus qu'à profiter et à
                créer ensemble.
              </Step>
            </ol>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-deep p-8 text-paper ring-1 ring-ink/10 shadow-xl md:p-10 noise-overlay">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/30 blur-3xl"
            />
            <p className="eyebrow !text-gold">En pratique</p>
            <h3 className="mt-3 font-display text-3xl">Tout ce qu'il faut savoir.</h3>
            <dl className="mt-7 space-y-4 text-sm relative">
              <Spec icon={Users} label="Effectif" value="6 à 12 personnes" />
              <Spec icon={Clock} label="Durée" value="2 à 3 heures + accueil" />
              <Spec icon={Sparkles} label="Tarif" value="à partir de 35 € / pers." />
              <Spec icon={Heart} label="Réservation" value="3 à 4 semaines à l'avance" />
            </dl>
          </div>
        </div>
      </section>

      <section
        className="container-main py-20 md:py-28"
        aria-labelledby="faq-privatisation-title"
      >
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Ce que vous voulez savoir avant de réserver."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Faq items={faqPrivatisation} id="faq-privatisation" />
        </div>
      </section>

      <CtaBandeau
        title="On prépare votre événement ?"
        body="Décrivez-nous votre projet en quelques lignes : date, effectif, atelier souhaité. Réponse sous 48h ouvrées."
        primary={siteConfig.ctas.contact}
      />
    </main>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-5">
      <span
        className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand font-display text-xl text-paper shadow-warm"
        aria-hidden="true"
      >
        {n}
      </span>
      <div>
        <h3 className="font-display text-2xl text-ink leading-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">{children}</p>
      </div>
    </li>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 border-b border-paper/10 pb-4 last:border-0 last:pb-0">
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold text-deep"
        aria-hidden="true"
      >
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <dt className="text-xs uppercase tracking-wider text-gold/90">{label}</dt>
        <dd className="mt-0.5 font-medium text-paper">{value}</dd>
      </div>
    </div>
  );
}
