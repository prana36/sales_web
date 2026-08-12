import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionKicker from "./shared/SectionKicker";
import { publicAssetUrl } from "../api/dynamic-content";
import { useDynamicContent } from "../hooks/useDynamicContent";

const fallbackCaseStudies = [
  {
    id: "1",
    slug: "lg-electronics",
    case_id: "LG001",
    client: "LG Electronics",
    industry: "Retail Trade",
    challenge: "To train DSO, Area Managers and Branch Managers on Retail Sales Management",
    outcome: "All training programs rolled out across India in LG branches and regional offices with measurable results in terms of incremental sales.",
    metric_value: "+23%",
    metric_label: "Incremental Sales Growth",
    thumbnail_path: "/images/case-study/lg-case.png",
    banner_image_paths: ["/images/case-study/lg-slide-1.png", "/images/case-study/lg-slide-2.png", "/images/case-study/lg-slide-3.png", "/images/case-study/lg-slide-4.png", "/images/case-study/lg-slide-5.png"],
    description: "LG Electronics case study - Retail Sales Management training",
    client_name: "LG Electronics",
    location: "India",
    duration: "6 months",
    csi: "High",
    category: "Corporate Training",
    detailed_content: ["Task 1: Train DSO, Area Managers and Branch Managers on Retail Sales Management", "Task 2: Kindle the spirit of sales in the service team", "Task 3: Coach the Modern Retail Trade Team on Key Account Management", "Task 4: Train the large format retail store management team on Sell-Out Management", "Task 5: Coach the water purifier service team on AMC closures"],
  },
  {
    id: "2",
    slug: "godrej",
    case_id: "GR001",
    client: "Godrej",
    industry: "Consumer Electronics",
    challenge: "To empower sales teams with advanced selling techniques and product knowledge",
    outcome: "Significant improvement in sales performance and customer acquisition metrics.",
    metric_value: "+18%",
    metric_label: "Sales Growth",
    thumbnail_path: "/images/case-study/godrej.jpg",
    banner_image_paths: ["/images/case-study/godrej-1.png", "/images/case-study/godrej-2.png"],
    description: "Godrej case study - Sales empowerment program",
    client_name: "Godrej",
    location: "India",
    duration: "4 months",
    csi: "Medium",
    category: "Corporate Training",
    detailed_content: ["Task: Empower sales teams with advanced selling techniques and product knowledge", "Action: Conducted MDP program at client premises", "Result: Measurable improvement in sales metrics"],
  },
  {
    id: "3",
    slug: "kohler",
    case_id: "KH001",
    client: "Kohler",
    industry: "Sanitaryware",
    challenge: "To train the sales team on modern retail strategies and key account management",
    outcome: "Successful rollout of training programs across India with incremental sales growth.",
    metric_value: "+15%",
    metric_label: "Incremental Sales",
    thumbnail_path: "/images/case-study/kohler.png",
    banner_image_paths: ["/images/case-study/kohler-1.png"],
    description: "Kohler case study - Sales training and KAM program",
    client_name: "Kohler",
    location: "India",
    duration: "3 months",
    csi: "Medium",
    category: "Corporate Training",
    detailed_content: ["Challenge: Train sales team on modern retail strategies and key account management", "Outcome: Successful program rollout with positive sales impact"],
  },
  {
    id: "4",
    slug: "ultratech",
    case_id: "UC001",
    client: "Ultratech Cements",
    industry: "Construction/Materials",
    challenge: "To build sales capability across national dealer network and modern trade channels",
    outcome: "Nationwide training rollout with sustained sales growth across all regions.",
    metric_value: "+28%",
    metric_label: "Sales Growth",
    thumbnail_path: "/images/case-study/lg-case-new.png",
    banner_image_paths: ["/images/case-study/icici-1.png", "/images/case-study/icici-2.png"],
    description: "Ultratech Cements case study - National dealer training",
    client_name: "Ultratech Cements",
    location: "India",
    duration: "8 months",
    csi: "High",
    category: "Corporate Training",
    detailed_content: ["Challenge: Build sales capability across national dealer network and modern trade channels", "Outcome: Nationwide training rollout with sustained sales growth"],
  },
  {
    id: "5",
    slug: "hul",
    case_id: "HL001",
    client: "HUL",
    industry: "FMCG",
    challenge: "To enhance sales force effectiveness and modern trade execution",
    outcome: "Improved trade execution metrics and increased modern trade sales.",
    metric_value: "+12%",
    metric_label: "Trade Growth",
    thumbnail_path: "/images/clients/1.jpg",
    banner_image_paths: ["/images/clients/2.jpg", "/images/clients/3.jpg"],
    description: "HUL case study - Sales force effectiveness program",
    client_name: "HUL",
    location: "India",
    duration: "5 months",
    csi: "Medium",
    category: "Corporate Training",
    detailed_content: ["Challenge: Enhance sales force effectiveness and modern trade execution", "Outcome: Improved trade execution and increased modern trade sales"],
  },
  {
    id: "6",
    slug: "calderys",
    case_id: "CD001",
    client: "Calderys",
    industry: "Refractories",
    challenge: "To develop key account management skills for major industrial clients",
    outcome: "Strengthened KAM capabilities and increased strategic account revenues.",
    metric_value: "+20%",
    metric_label: "Strategic Account Revenue",
    thumbnail_path: "/images/case-study/icici-3.png",
    banner_image_paths: ["/images/case-study/icici-4.png"],
    description: "Calderys case study - Key account management program",
    client_name: "Calderys",
    location: "India",
    duration: "4 months",
    csi: "Medium",
    category: "Corporate Training",
    detailed_content: ["Challenge: Develop key account management skills for major industrial clients", "Outcome: Strengthened KAM capabilities and increased strategic account revenues"],
  },
  {
    id: "7",
    slug: "icici-bank",
    case_id: "IC001",
    client: "ICICI Bank",
    industry: "BFSI",
    challenge: "To new customer acquisition by Liability Section in Emerging Markets of India",
    outcome: "Thunderous response in 38 cities leading to new business acquisitions",
    metric_value: "+38",
    metric_label: "Cities Covered",
    thumbnail_path: "/images/case-study/icici.png",
    banner_image_paths: ["/images/case-study/icici-1.png", "/images/case-study/icici-2.png", "/images/case-study/icici-3.png", "/images/case-study/icici-4.png"],
    description: "ICICI Bank case study - Emerging markets customer acquisition",
    client_name: "ICICI Bank",
    location: "India",
    duration: "12 months",
    csi: "High",
    category: "Corporate Training",
    detailed_content: ["Challenge: New customer acquisition by Liability Section in Emerging Markets of India", "Result: Thunderous response in 38 cities leading to new business acquisitions"],
  },
  {
    id: "8",
    slug: "lemken",
    case_id: "LM001",
    client: "Lemken",
    industry: "Agriculture",
    challenge: "To train distributor network on modern sales techniques and product demonstration",
    outcome: "Expanded distributor network and improved product demonstration metrics.",
    metric_value: "+15%",
    metric_label: "Distributor Growth",
    thumbnail_path: "/images/case-study/lg-slide-2.png",
    banner_image_paths: ["/images/case-study/lg-slide-3.png"],
    description: "Lemken case study - Distributor training program",
    client_name: "Lemken",
    location: "India",
    duration: "3 months",
    csi: "Medium",
    category: "Corporate Training",
    detailed_content: ["Challenge: Train distributor network on modern sales techniques and product demonstration", "Outcome: Expanded distributor network and improved product demonstration metrics"],
  },
  {
    id: "9",
    slug: "sbm",
    case_id: "SB001",
    client: "SBM",
    industry: "Banking",
    challenge: "To implement sales process optimization and MIS framework",
    outcome: "Optimized sales process with improved MIS reporting and conversion rates.",
    metric_value: "+22",
    metric_label: "Process Efficiency",
    thumbnail_path: "/images/case-study/sales-ki-niti.png",
    banner_image_paths: ["/images/case-study/lg-slide-4.png"],
    description: "SBM case study - Sales process optimization",
    client_name: "SBM",
    location: "India",
    duration: "6 months",
    csi: "High",
    category: "Corporate Training",
    detailed_content: ["Challenge: Implement sales process optimization and MIS framework", "Outcome: Optimized sales process with improved MIS reporting and conversion rates"],
  },
  {
    id: "10",
    slug: "jjppl",
    case_id: "JJ001",
    client: "JJPPL",
    industry: "Manufacturing",
    challenge: "To enhance sales team capabilities and implement result-driven coaching",
    outcome: "Improved sales productivity and reduced sales cycle time.",
    metric_value: "+18",
    metric_label: "Productivity Increase",
    thumbnail_path: "/images/case-study/sales-ke-rishte.png",
    banner_image_paths: ["/images/case-study/sales-ki-jaat.png"],
    description: "JJPPL case study - Sales coaching and productivity program",
    client_name: "JJPPL",
    location: "India",
    duration: "4 months",
    csi: "Medium",
    category: "Corporate Training",
    detailed_content: ["Challenge: Enhance sales team capabilities and implement result-driven coaching", "Outcome: Improved sales productivity and reduced sales cycle time"],
  },
];

export default function CaseStudies() {
  const { content, status } = useDynamicContent();
  const caseStudies = content.caseStudies.length > 0 ? content.caseStudies : fallbackCaseStudies;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
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

  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, caseStudies.length]);

  const pauseAutoplay = () => emblaApi?.plugins()?.autoplay?.stop();
  const resumeAutoplay = () => emblaApi?.plugins()?.autoplay?.play();

  return (
    <section id="case_studies" className="bg-gray-50 px-4 py-14 sm:px-6 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <SectionKicker className="mb-3">Case Studies</SectionKicker>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Business Consulting
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600">
            The proof of the pudding lies in its eating. Showcasing some case
            studies from the annals of our success stories in the past.
          </p>
        </Reveal>

        {status === "loading" ? (
          <div className="flex min-h-72 items-center justify-center rounded-3xl border border-gray-200 bg-white">
            <Loader2 className="size-7 animate-spin text-brand-navy" />
          </div>
        ) : null}

        {status !== "loading" && caseStudies.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center">
            <p className="font-semibold text-gray-900">No case studies found.</p>
            <p className="mt-2 text-sm text-gray-500">
              Please check that the Supabase table has published records.
            </p>
          </div>
        ) : null}

        {status !== "loading" && caseStudies.length > 0 ? (
          <div
            className="relative"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {caseStudies.map((item) => (
                  <div key={item.slug} className="min-w-0 flex-[0_0_100%]">
                    <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm md:h-[500px] md:grid-cols-2">
                      <div className="relative h-64 md:h-full">
                        <img
                          src={publicAssetUrl(item.thumbnail_path) ?? undefined}
                          alt={item.client}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-x-0 top-0 flex justify-between p-5">
                          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wide text-brand-navy shadow-sm backdrop-blur-sm">
                            {item.case_id}
                          </span>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 pt-14">
                          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/30 backdrop-blur-sm">
                            {item.industry}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col p-6 sm:p-8">
                        <h3 className="text-xl font-bold leading-snug text-brand-navy md:text-2xl">
                          {item.client}
                        </h3>

                        <div className="mt-5 flex items-center gap-4 rounded-xl border border-brand-navy/10 bg-brand-navy/[0.04] px-4 py-3">
                          <span className="text-2xl font-extrabold leading-none text-brand-navy">
                            {item.metric_value}
                          </span>
                          <span className="text-xs leading-snug text-gray-500">
                            {item.metric_label}
                          </span>
                        </div>

                        <div className="mt-5 space-y-4">
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-brand-gold">
                              The Challenge
                            </p>
                            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-600">
                              {item.challenge}
                            </p>
                          </div>
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-brand-gold">
                              The Outcome
                            </p>
                            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-600">
                              {item.outcome}
                            </p>
                          </div>
                        </div>

                        <div className="mt-auto pt-6">
                          <Link
                            to={`/case-studies/${item.slug}`}
                            className="group inline-flex items-center gap-2 rounded-full border border-brand-navy px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                          >
                            Read Full Case Study
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous case study"
              className="absolute left-2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden size-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition-colors hover:border-brand-navy hover:text-brand-navy md:flex"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next case study"
              className="absolute right-2 top-1/2 translate-x-1/2 -translate-y-1/2 hidden size-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition-colors hover:border-brand-navy hover:text-brand-navy md:flex"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        ) : null}

        {status !== "loading" && caseStudies.length > 0 ? (
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="text-sm font-semibold text-gray-400">
              {String(selectedIndex + 1).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "w-8 bg-brand-navy" : "w-4 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-400">
              {String(caseStudies.length).padStart(2, "0")}
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
