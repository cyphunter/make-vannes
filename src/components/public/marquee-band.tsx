import { Sparkles } from "lucide-react";

const items = [
  "Fait main",
  "Créateurs locaux",
  "Petits groupes",
  "Sans abonnement",
  "Matériel fourni",
  "Mercerie",
  "Atelier ouvert",
  "Cœur de Vannes",
];

export function MarqueeBand() {
  const looped = [...items, ...items];
  return (
    <section
      aria-hidden="true"
      className="border-y border-ink/10 bg-ink py-5 text-paper overflow-hidden"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {looped.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-5 px-6 font-display text-2xl"
          >
            <span>{item}</span>
            <Sparkles className="h-4 w-4 shrink-0 text-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}
