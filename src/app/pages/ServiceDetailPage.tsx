import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Link, useParams } from "react-router";
import { publicAssetUrl } from "../api/dynamic-content";
import FaqGroup from "../components/shared/FaqGroup";
import { useDynamicContent } from "../hooks/useDynamicContent";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { content, status } = useDynamicContent();
  const service = content.services.find((s) => s.slug === slug);

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-white pt-24 text-gray-900">
        <div className="flex min-h-72 items-center justify-center">
          <Loader2 className="size-7 animate-spin text-brand-navy" />
        </div>
      </main>
    );
  }

  if (!service) {
    return (
      <main className="min-h-screen bg-white pt-24 text-gray-900">
        <section className="px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-brand-navy font-semibold">
            <ArrowLeft className="size-4" /> Back to Home
          </Link>
        </section>
      </main>
    );
  }

  const relatedCaseStudies = service.related_case_study_slugs
    .map((relSlug) => content.caseStudies.find((cs) => cs.slug === relSlug))
    .filter((cs): cs is NonNullable<typeof cs> => Boolean(cs));

  return (
    <main className="min-h-screen bg-white pt-24 text-gray-900">
      <section className="border-b border-gray-200 bg-gray-50 px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <Link to="/#solutions_services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy mb-4 hover:text-brand-navy-light transition-colors">
            <ArrowLeft className="size-4" /> Back to Services
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-1">
            Consult4Sales Service
          </p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-brand-navy md:text-5xl">
            {service.name}
            {service.hindi_title ? (
              <span className="ml-3 text-2xl font-semibold text-gray-400 md:text-3xl">
                ({service.hindi_title})
              </span>
            ) : null}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            {service.summary}
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {publicAssetUrl(service.image_path) ? (
                <img
                  src={publicAssetUrl(service.image_path) ?? undefined}
                  alt={service.name}
                  className="mb-8 h-56 w-auto object-contain"
                />
              ) : null}

              <div className="space-y-4">
                {service.description_paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600 text-sm leading-relaxed md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {service.faqs.length ? (
                <div className="mt-10 space-y-8">
                  <h2 className="text-xl font-bold text-gray-900">
                    Not Yet Sure? Let's Help You With Suitable Answers
                  </h2>
                  {service.faqs.map((faqGroup) => (
                    <FaqGroup
                      key={faqGroup.group}
                      title={faqGroup.group}
                      faqs={faqGroup.items}
                    />
                  ))}
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sticky top-28">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                  Related Case Studies
                </h3>
                {relatedCaseStudies.length ? (
                  <div className="space-y-3">
                    {relatedCaseStudies.map((cs) => (
                      <Link
                        key={cs.slug}
                        to={`/case-studies/${cs.slug}`}
                        className="group flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white p-3 text-sm transition-colors hover:border-brand-navy/30"
                      >
                        <span className="font-semibold text-gray-800 group-hover:text-brand-navy">
                          {cs.client}
                        </span>
                        <ArrowRight className="size-4 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-navy" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No related case studies yet.</p>
                )}

                <a
                  href="/#contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-4 py-3 text-sm font-bold text-brand-navy-950 hover:bg-brand-gold-light"
                >
                  Enquire Now
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
