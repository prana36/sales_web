import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Landmark, Tv, Award, ArrowRight } from "lucide-react";

export interface CaseStudy {
  slug: string;
  case_id: string;
  client: string;
  industry: string;
  tasks: string[];
  action: string;
  result: string;
  cities?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "icici-bank-sme-ceo-circle",
    case_id: "Case 01",
    client: "ICICI Bank Limited, SME CEO Circle",
    industry: "Emerging Markets, BFSI Industry Vertical",
    tasks: [
      "New Customer Acquisition by Liability Section in Emerging Markets of India"
    ],
    action: "The pain point of SME and MSME in Emerging markets was identified as Succession Planning in Family businesses. We addressed this through curated knowledge dissemination.",
    result: "Thunderous response in 38 cities (emerging markets identified by ICICI Bank) leading to new business acquisition and client engagement.",
    icon: Landmark,
  },
  {
    slug: "lg-electronics-india",
    case_id: "Case 02",
    client: "LG Electronics, India",
    industry: "Retail Trade",
    tasks: [
      "To train DSO, Area Managers and Branch Managers on Retail Sales Management",
      "To kindle the spirit of sales in the service team",
      "To coach the Modern Retail Trade Team on Key Account Management",
      "To train the large format retail store management team on Sell-Out Management.",
      "To coach the water purifier service team on AMC closures."
    ],
    action: "Co-create and Curate effective training programs for the Retail Sales, Large Format Retail Sales, Key Accounts, and service teams across multiple locations.",
    result: "All training programs rolled out across India in LG branches and regional offices with measurable results.",
    cities: "Cities covered in roll out plan: Chennai, Pune, Bhubaneshwar, Chandigarh, Greater Noida, Indore, Kolkata, etc.",
    icon: Tv,
  },
  {
    slug: "amway-mlm-distributors",
    case_id: "Case 03",
    client: "Amway (www.amway.in)",
    industry: "Multi Level Marketing",
    tasks: [
      "To empower the Diamond Distributors on MLM Best Practices"
    ],
    action: "A MDP program was curated and delivered at Indian Institute of Management, Kolkata for Top 25 Distributors in India; a follow-up series was undertaken in Gurgaon HO.",
    result: "Distributors started appreciating that MLM is not only about adding to the chain but also selling goods and services which are promised to the chain.",
    icon: Award,
  }
];

export default function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
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
    <section id="case_studies" className="bg-white px-4 py-12 sm:px-6 md:py-16">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-blue-900 tracking-wider uppercase mb-1">Business Consulting</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Showcasing some case studies from the annals of our success stories in the past.
          </p>
        </div>

        <div className="overflow-hidden py-2" ref={emblaRef}>
          <div className="flex">
            {caseStudies.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative min-w-0 flex-[0_0_100%] pl-4">
                  <div className="group flex h-full flex-col justify-between rounded-lg border border-gray-200/80 bg-gray-50 p-4 transition-all duration-300 hover:scale-[1.01] hover:border-blue-900/20 hover:bg-white hover:shadow-xl sm:p-5">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.case_id}</span>
                        <div className="bg-blue-50 text-blue-950 p-2 rounded-lg group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                          <Icon className="size-4" />
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 mb-1">
                        {item.client}
                      </h3>
                      <p className="text-[10px] font-semibold text-blue-900 uppercase tracking-wider mb-3">
                        {item.industry}
                      </p>

                      <div className="mb-3">
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Tasks:</h4>
                        <ul className="list-disc list-inside space-y-0.5 text-gray-700 text-xs">
                          {item.tasks.map((task, idx) => (
                            <li key={idx} className="leading-relaxed">{task}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-3">
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Action:</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">{item.action}</p>
                      </div>

                      <div className="mb-3">
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Result:</h4>
                        <p className="text-green-800 bg-green-50/50 p-2 rounded-lg border border-green-100 text-xs leading-relaxed">
                          {item.result}
                        </p>
                      </div>

                      {item.cities && (
                        <div className="mb-3">
                          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Locations:</h4>
                          <p className="text-[10px] text-gray-500 leading-relaxed">{item.cities}</p>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-gray-100 mt-3">
                      <Link
                        to={`/case-studies/${item.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:text-blue-700 transition-colors"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-5 bg-blue-900" : "w-1.5 bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
