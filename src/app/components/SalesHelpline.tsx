import { Headphones } from "lucide-react";
import Reveal from "./shared/Reveal";

export default function SalesHelpline() {
  return (
    <section id="sales_mitra_helpline" className="px-4 py-14 sm:px-6 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-navy-950 p-6 text-white sm:p-10 md:p-14">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-navy/20 to-transparent" />

            <div className="relative z-10 max-w-2xl">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                <span className="flex size-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold">
                  <Headphones className="size-7" />
                </span>
                <h2 className="text-3xl leading-tight md:text-4xl font-bold">Sales Mitra Helpline</h2>
              </div>

              <p className="text-white/60 mb-8 leading-relaxed">
                Daily, diligent, and interactive support for sales teams and
                field staff. Sales Mitra helps companies keep salespeople
                engaged, guided, and accountable between training interventions.
              </p>

              <a href="#contact" className="inline-flex bg-brand-gold text-brand-navy px-8 py-3.5 rounded-full hover:bg-brand-gold-light transition-all hover:shadow-lg hover:-translate-y-0.5 font-semibold">
                Know More
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
