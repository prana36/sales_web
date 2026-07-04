import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import kathaImg from "../assets/images/services/sales-katha.png";
import rishteImg from "../assets/images/services/sales-ke-rishte.png";
import jaatImg from "../assets/images/services/sales-ki-jaat.png";
import nitiImg from "../assets/images/services/sales-ki-niti.png";
import vidhiImg from "../assets/images/services/sales-ki-vidhi.png";
import molbhavImg from "../assets/images/services/sales-mein-molbhav.png";

const programs = [
  {
    name: "Sales Mein Molbhav",
    url: "#contact",
    summary:
      "Focuses on sales negotiation process, sales negotiation skills, tactics, selling and bargaining skills, forming part of the 'Sales Me Molbhav' framework.",
    image: molbhavImg,
  },
  {
    name: "Sales Katha",
    url: "#contact",
    summary:
      "Storytelling-based approach to explain sales to customers; emphasizes communicating via stories in addition to FAB and FAQ.",
    image: kathaImg,
  },
  {
    name: "Sales Ke Rishte",
    url: "#contact",
    summary:
      "Proprietary customer relationship management system focusing on tools and features to leverage Customer LifeTime Value (CLTV).",
    image: rishteImg,
  },
  {
    name: "Sales Ki Jaat",
    url: "#contact",
    summary:
      "Focuses on the DNA of Sales in salesperson's skills, enriching salesmanship with consultant skills to build a repository of sales expertise.",
    image: jaatImg,
  },
  {
    name: "Sales Ki Vidhi",
    url: "#contact",
    summary:
      "Answers 'how to sell?' by focusing on sales life cycle, methods, techniques and processes of effective selling.",
    image: vidhiImg,
  },
  {
    name: "Sales Ki Niti",
    url: "#contact",
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

  return (
    <section id="solutions_services" className="bg-gray-50 px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-800 tracking-wider uppercase mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Solutions / Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            We provide 360 degrees solutions on Sales Management for all forms
            of selling across industry verticals and geographies.
          </p>
        </div>

        <div className="mb-24">
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex">
              {programs.map((program, index) => (
                <div key={index} className="relative min-w-0 flex-[0_0_85%] pl-4 sm:flex-[0_0_45%] lg:flex-[0_0_30%]">
                  <div className="group flex h-full cursor-pointer flex-col justify-between rounded-[10px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.03] hover:border-blue-900/30 hover:shadow-xl sm:p-8">
                    <div>
                      <div className="w-full">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="size-20 object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                        {program.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {program.summary}
                      </p>
                    </div>
                    <a
                      href={program.url}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700 transition-all mt-auto group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
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
                  i === selectedIndex ? "w-6 bg-blue-900" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
            Areas of Core Expertise
          </h3>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-[10px] border border-gray-200 hover:shadow-md transition-all group"
              >
                <CheckCircle2 className="size-5 text-yellow-500 group-hover:text-blue-900 transition-colors flex-shrink-0" />
                <span className="font-medium text-gray-800 text-sm md:text-base">
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
