import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionKicker from "./shared/SectionKicker";
import { publicAssetUrl } from "../api/dynamic-content";
import { useDynamicContent } from "../hooks/useDynamicContent";

export default function CaseStudies() {
  const { content, status } = useDynamicContent();
  const caseStudies = content.caseStudies;

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
