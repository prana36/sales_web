import { CheckCircle2 } from "lucide-react";

const expertise = [
  "Direct Sales",
  "Channel of Distribution",
  "Retail Trade",
  "Modern Retail Trade",
  "Key Account Management",
  "Industrial Selling",
  "Exports",
  "E-Commerce",
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
      <div className="flex items-center gap-6 ml-6 md:ml-12">
        <span className="shrink-0 text-sm font-bold text-brand-navy uppercase tracking-wider whitespace-nowrap">
          Areas of Core Expertise
        </span>
        <div className="overflow-hidden flex-1">
          <div className="expertise-track">
            {[...expertise, ...expertise].map((item, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap"
              >
                <CheckCircle2 className="size-4 text-brand-gold" />
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
