import { Hand, Users, Heart, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const ICONS = [Hand, Users, Heart, MapPin] as const;
const TONES = [
  "bg-brand text-paper",
  "bg-accent text-paper",
  "bg-gold text-ink",
  "bg-deep text-paper",
] as const;

export function Highlights() {
  return (
    <section
      aria-labelledby="highlights-title"
      className="relative container-main py-20 md:py-28"
    >
      <h2 id="highlights-title" className="sr-only">
        Ce qui rend MAKE Vannes unique
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.highlights.map((h, i) => {
          const Icon = ICONS[i] ?? Hand;
          const tone = TONES[i] ?? TONES[0];
          return (
            <div
              key={h.title}
              className={cn(
                "group relative flex flex-col gap-5 rounded-2xl bg-paper p-7 ring-1 ring-ink/8 shadow-sm",
                "transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:ring-ink/15",
              )}
            >
              <span
                className={cn(
                  "grid h-14 w-14 shrink-0 place-items-center rounded-2xl shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110",
                  tone,
                )}
                aria-hidden="true"
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-display text-2xl text-ink">{h.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
              </div>
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 font-display text-sm tabular-nums text-ink/15"
              >
                0{i + 1}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
