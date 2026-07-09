import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionKicker from "./shared/SectionKicker";

import iciciImg from "../assets/images/case-study/icici.png";
import lgImg from "../assets/images/case-study/lg-case.png";
import amwayImg from "../assets/images/case-study/amway-case.png";

export interface CaseStudy {
  slug: string;
  case_id: string;
  client: string;
  industry: string;
  challenge: string;
  outcome: string;
  metricValue: string;
  metricLabel: string;
  thumbnail: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "icici-bank-sme-ceo-circle",
    case_id: "Case 01",
    client: "ICICI Bank Limited, SME CEO Circle",
    industry: "Emerging Markets, BFSI Industry Vertical",
    challenge:
      "Acquire new liability customers across India's emerging markets, while easing succession-planning anxieties inside family-run SMEs.",
    outcome:
      "The 'Kissa Kursi Ka' business-theatre roadshow toured emerging markets nationwide, opening fresh customer footprints for ICICI Bank in every city.",
    metricValue: "38",
    metricLabel: "Emerging-market cities activated",
    thumbnail: iciciImg,
  },
  {
    slug: "lg-electronics-india",
    case_id: "Case 02",
    client: "LG Electronics, India",
    industry: "Retail Trade",
    challenge:
      "Lift frontline performance across five sales functions at once — General & Modern Trade, Key Accounts, Large Format Retail and Water Purifier Service.",
    outcome:
      "Co-curated training rolled out branch by branch nationwide, with Modern Trade and Sell-Out teams posting measurable incremental sales.",
    metricValue: "17+",
    metricLabel: "Cities covered in the rollout",
    thumbnail: lgImg,
  },
  {
    slug: "amway-mlm-distributors",
    case_id: "Case 03",
    client: "Amway (www.amway.in)",
    industry: "Multi Level Marketing",
    challenge:
      "Diamond Distributors needed a sharper grip on ethical, sustainable MLM practice — beyond simply growing the downline.",
    outcome:
      "An MDP at IIM Kolkata, followed by a Gurgaon HO series, shifted distributor mindset toward genuine product and service selling.",
    metricValue: "Top 25",
    metricLabel: "Diamond Distributors coached",
    thumbnail: amwayImg,
  },
];

export default function CaseStudies() {
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
                        src={item.thumbnail}
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
                          {item.metricValue}
                        </span>
                        <span className="text-xs leading-snug text-gray-500">
                          {item.metricLabel}
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
      </div>
    </section>
  );
}
