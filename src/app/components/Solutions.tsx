import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionKicker from "./shared/SectionKicker";

import kathaImg from "../assets/images/services/sales-katha.png";
import rishteImg from "../assets/images/services/sales-ke-rishte.png";
import jaatImg from "../assets/images/services/sales-ki-jaat.png";
import nitiImg from "../assets/images/services/sales-ki-niti.png";
import vidhiImg from "../assets/images/services/sales-ki-vidhi.png";
import molbhavImg from "../assets/images/services/sales-mein-molbhav.png";

const programs = [
  {
    name: "Sales Mein Molbhav",
    slug: "sales-mein-molbhav",
    summary:
      "Focuses on sales negotiation process, sales negotiation skills, tactics, selling and bargaining skills, forming part of the 'Sales Me Molbhav' framework.",
    image: molbhavImg,
  },
  {
    name: "Sales Katha",
    slug: "sales-katha",
    summary:
      "Storytelling-based approach to explain sales to customers; emphasizes communicating via stories in addition to FAB and FAQ.",
    image: kathaImg,
  },
  {
    name: "Sales Ke Rishte",
    slug: "sales-ke-rishte",
    summary:
      "Proprietary customer relationship management system focusing on tools and features to leverage Customer LifeTime Value (CLTV).",
    image: rishteImg,
  },
  {
    name: "Sales Ki Jaat",
    slug: "sales-ki-jaat",
    summary:
      "Focuses on the DNA of Sales in salesperson's skills, enriching salesmanship with consultant skills to build a repository of sales expertise.",
    image: jaatImg,
  },
  {
    name: "Sales Ki Vidhi",
    slug: "sales-ki-vidhi",
    summary:
      "Answers 'how to sell?' by focusing on sales life cycle, methods, techniques and processes of effective selling.",
    image: vidhiImg,
  },
  {
    name: "Sales Ki Niti",
    slug: "sales-ki-niti",
    summary:
      "Sales strategy program focusing on sales planning, techniques and strategic selling to improve sales.",
    image: nitiImg,
  },
];

export default function Solutions() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", breakpoints: { "(min-width: 768px)": { slidesToScroll: 2 } } },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section id="solutions_services" className="bg-gray-50 px-4 py-14 sm:px-6 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <SectionKicker className="mb-3">What We Offer</SectionKicker>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Solutions / Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            We provide 360 degrees solutions on Sales Management for all forms
            of selling across industry verticals and geographies.
          </p>
        </Reveal>

        <div>
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="-ml-4 flex sm:-ml-6">
              {programs.map((program, index) => (
                <div key={index} className="relative min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_50%] sm:pl-6 lg:flex-[0_0_33.3333%]">
                  <div className="group flex h-full cursor-pointer flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-navy/25 hover:shadow-xl sm:p-8">
                    <div>
                      <div className="w-full">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="size-20 object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-navy transition-colors">
                        {program.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {program.summary}
                      </p>
                    </div>
                    <Link
                      to={`/services/${program.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-light transition-all mt-auto group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {programs.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "w-6 bg-brand-navy" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
