import { CheckCircle2 } from "lucide-react";

const expertise = [
  "Direct Sales",
  "Industrial Sales",
  "Institutional",
  "Exports",
  "Franchisee",
  "Channel of Distribution",
  "Modern Retail Trade",
  "Key Account Management",
  "E Commerce",
  "Govt Tenders",
  "Multi Level Marketing",
];

export default function ExpertiseMarquee() {
  return (
    <section className="border-y border-brand-navy/10 bg-brand-navy/[0.03] py-4 overflow-hidden">
      <style>{`
        @keyframes expertise-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .expertise-track {
          display: flex;
          gap: 2.5rem;
          width: fit-content;
          animation: expertise-scroll 20s linear infinite;
        }
        .expertise-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="flex flex-col gap-2 pl-4 pr-4 sm:pl-6 sm:pr-6 md:flex-row md:items-center md:gap-6 md:pl-12 md:pr-0">
        <span className="shrink-0 text-xs font-bold text-brand-navy uppercase tracking-wider whitespace-nowrap sm:text-sm">
          Areas of Core Expertise
        </span>
        <div className="overflow-hidden md:flex-1">
          <div className="expertise-track">
            {[...expertise, ...expertise].map((item, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap"
              >
                <CheckCircle2 className="size-4 shrink-0 text-brand-gold" />
                <span className="font-medium text-gray-800 text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
