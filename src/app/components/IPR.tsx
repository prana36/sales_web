/// <reference types="vite/client" />
import { BookOpenText } from "lucide-react";
import { Link } from "react-router";
import Reveal from "./shared/Reveal";
import SectionKicker from "./shared/SectionKicker";

const iprPrograms: { name: string; url: string }[] = [
  { name: "Sales Ki Jaat", url: "/services/sales-ki-jaat" },
  { name: "Sales Ki Vidhi", url: "/services/sales-ki-vidhi" },
  { name: "Sales Ki Niti", url: "/services/sales-ki-niti" },
  { name: "Sales Katha", url: "/services/sales-katha" },
  { name: "Sales Karmas", url: "" },
  { name: "Sales Ke Rishte", url: "/services/sales-ke-rishte" },
  { name: "Sales Mein Molbhav", url: "/services/sales-mein-molbhav" },
  { name: "X-Sell", url: "" },
  { name: "SellWell", url: "" },
  { name: "More Calls = More Sales", url: "" },
];

export default function IPR() {
  return (
    <section
      id="ipr"
      className="border-y border-gray-150 bg-gray-50 px-4 py-14 sm:px-6 md:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionKicker className="mb-3">Our Intellectual Property</SectionKicker>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We take pride in our{" "}
            <span className="text-brand-navy">Intellectual Property Rights</span>
          </h2>
          <div className="mx-auto flex w-16 items-center justify-center gap-2">
            <div className="w-16 h-1 bg-brand-gold rounded" />
            <BookOpenText className="size-5 text-brand-gold" />
            <div className="w-16 h-1 bg-brand-gold rounded" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {iprPrograms.map((program) =>
              program.url ? (
                <Link
                  key={program.name}
                  to={program.url}
                  className="group inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-navy hover:bg-brand-navy hover:text-white hover:shadow-lg"
                >
                  <BookOpenText className="size-4 text-brand-gold group-hover:text-brand-gold" />
                  {program.name}
                </Link>
              ) : (
                <span
                  key={program.name}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy shadow-sm"
                >
                  <BookOpenText className="size-4 text-brand-gold" />
                  {program.name}
                </span>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
