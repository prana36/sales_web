import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

import iciciImg from "../assets/images/case-study/icici.png";
import lgImg from "../assets/images/case-study/lg-case.png";
import amwayImg from "../assets/images/case-study/amway-case.png";

export interface CaseStudy {
  slug: string;
  case_id: string;
  client: string;
  industry: string;
  tasks: { label: string; text: string }[];
  action: { label: string; text: string };
  result: { label: string; text: string[] };
  thumbnail: string;
  captionLine1: string;
  captionLine2: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "icici-bank-sme-ceo-circle",
    case_id: "Case 01",
    client: "ICICI Bank Limited, SME CEO Circle",
    industry: "Emerging Markets, BFSI Industry Vertical",
    tasks: [
      { label: "Task:", text: "New Customer Acquisition by Liability Section in Emerging Markets of India" },
    ],
    action: {
      label: "Action:",
      text: "The pain point of SME and MSME in Emerging markets was identified as Succession Planning in Family Managed Businesses. Management Theater titled \u201CKissa Kursi Ka\u201D was enacted in the Nukkad Natak format. The topic delved with live challenges of Succession planning in Family Managed businesses",
    },
    result: {
      label: "Result",
      text: [
        "Thunderous response in 38 cities (emerging markets identified by ICICI Bank) leading to new business acquisitions",
        "New footprint of customers acquired in Varanasi, Goa, Indore, Kashipur, Nagpur, Pune, Noida, Guwahati, Raipur, Hyderabad, Faridabad, Jalandhar, Udaipur, Dehradun, Kanpur, Vadodara, Chandigarh, Sonipat, Jodhpur, Ludhiana, Kolhapur, Jaipur, Bengaluru, Mumbai, Ahmedabad",
      ],
    },
    thumbnail: iciciImg,
    captionLine1: "ICICI Bank Limited, SME CEO Circle",
    captionLine2: "Emerging Markets, BFSI Industry Vertical",
  },
  {
    slug: "lg-electronics-india",
    case_id: "Case 02",
    client: "LG Electronics, India",
    industry: "Retail Trade",
    tasks: [
      { label: "Task 1:", text: "To train DSO, Area Managers and Branch Managers on Retail Sales Management" },
      { label: "Task 2:", text: "To kindle the spirit of sales in the service team" },
      { label: "Task 3:", text: "To coach the Modern Retail Trade Team on Key Account Management" },
      { label: "Task 4:", text: "To train the large format retail store management team on Sell-Out Management." },
      { label: "Task 5:", text: "To coach the water purifier service team on AMC closures." },
    ],
    action: {
      label: "Action:",
      text: "Co-create and Curate effective training programs for the Retail Sales, Large Format Retail Sales, KAM Sales, Customer Service, Modern Retail Trade and Water Purifier divisions.",
    },
    result: {
      label: "Result",
      text: [
        "All training programs rolled out across India in LG branches and regional offices with measurable results in terms of incremental sales.",
        "Cities covered in roll out plan : Chennai, Pune, Bhubaneshwar, Chandigarh, Greater Noida, Indore, Kolkata, Lucknow, Ludhiana, Pune, Hyderabad, Mumbai, Bhopal, Delhi, Jaipur, Ahmedabad and Ghaziabad",
      ],
    },
    thumbnail: lgImg,
    captionLine1: "LG Electronics , India",
    captionLine2: "Retail Trade",
  },
  {
    slug: "amway-mlm-distributors",
    case_id: "Case 03",
    client: "Amway (www.amway.in)",
    industry: "Multi Level Marketing",
    tasks: [
      { label: "Task:", text: "To empower the Diamond Distributors on MLM Best Practices" },
    ],
    action: {
      label: "Action:",
      text: "A MDP program was curated and delivered at Indian Institute of Management, Kolkata for Top 25 Distributors in India; a follow-up series was undertaken in Gurgaon HO.",
    },
    result: {
      label: "Result",
      text: [
        "Distributors started appreciating that MLM is not only about adding to the chain but also selling goods and services which are promised to the chain.",
      ],
    },
    thumbnail: amwayImg,
    captionLine1: "www.amway.in",
    captionLine2: "Multi Level Marketing",
  },
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
    <section id="case_studies" className="bg-gray-50 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-800">
            Case Studies
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Business Consulting
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600">
            The proof of the pudding lies in its eating. Showcasing some case
            studies from the annals of our success stories in the past.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {caseStudies.map((item, index) => (
              <div key={index} className="relative min-w-0 flex-[0_0_100%]">
                <div className="grid min-h-[520px] overflow-hidden rounded-[10px] border border-gray-200 bg-white md:min-h-[480px] md:grid-cols-2">
                  <div className="flex flex-col">
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.client}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="py-3 text-center text-sm font-semibold text-gray-700">
                      {item.captionLine1}<br />
                      {item.captionLine2}
                    </p>
                  </div>
                  <div className="overflow-y-auto p-6 sm:p-8">
                    <h4 className="relative mb-7 inline-block pr-16 text-lg font-semibold text-gray-800 after:absolute after:right-0 after:top-2.5 after:h-0.5 after:w-10 after:bg-blue-900">
                      {item.case_id}
                    </h4>

                    {item.tasks.map((t, i) => (
                      <div key={i} className="group mb-5">
                        <span className="relative z-10 float-left w-[90px] bg-transparent px-1 py-0.5 text-sm font-bold text-gray-700 transition-all duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-0 before:bg-blue-900 before:transition-all before:duration-300 group-hover:text-white group-hover:before:w-full">
                          {t.label}
                        </span>
                        <p className="overflow-hidden pl-2 text-sm leading-relaxed text-gray-600">
                          {t.text}
                        </p>
                      </div>
                    ))}

                    <div className="group mb-5">
                      <span className="relative z-10 float-left w-[90px] bg-transparent px-1 py-0.5 text-sm font-bold text-gray-700 transition-all duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-0 before:bg-blue-900 before:transition-all before:duration-300 group-hover:text-white group-hover:before:w-full">
                        {item.action.label}
                      </span>
                      <div className="overflow-hidden pl-2 text-sm leading-relaxed text-gray-600">
                        {item.action.text}
                      </div>
                    </div>

                    <div className="group mb-5">
                      <span className="relative z-10 float-left w-[90px] bg-transparent px-1 py-0.5 text-sm font-bold text-gray-700 transition-all duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-0 before:bg-blue-900 before:transition-all before:duration-300 group-hover:text-white group-hover:before:w-full">
                        {item.result.label}
                      </span>
                      <div className="overflow-hidden pl-2 text-sm leading-relaxed text-gray-600">
                        {item.result.text.map((line, j) => (
                          <p key={j}>{line}</p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-gray-100 pt-4">
                      <Link
                        to={`/case-studies/${item.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 transition-colors hover:text-blue-700"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {caseStudies.map((_, i) => (
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
    </section>
  );
}
