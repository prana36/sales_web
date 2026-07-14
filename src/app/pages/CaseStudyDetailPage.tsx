import { ArrowLeft, Loader2 } from "lucide-react";
import { Link, useParams } from "react-router";
import { publicAssetUrl } from "../api/dynamic-content";
import { useDynamicContent } from "../hooks/useDynamicContent";

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { content, status } = useDynamicContent();
  const study = content.caseStudies.find((c) => c.slug === slug);

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-white pt-24 text-gray-900">
        <div className="flex min-h-72 items-center justify-center">
          <Loader2 className="size-7 animate-spin text-brand-navy" />
        </div>
      </main>
    );
  }

  if (!study) {
    return (
      <main className="min-h-screen bg-white pt-24 text-gray-900">
        <section className="px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Case Study Not Found</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-brand-navy font-semibold">
            <ArrowLeft className="size-4" /> Back to Home
          </Link>
        </section>
      </main>
    );
  }

  const bannerImages = study.banner_image_paths.length
    ? study.banner_image_paths
    : study.thumbnail_path
      ? [study.thumbnail_path]
      : [];

  return (
    <main className="min-h-screen bg-white pt-24 text-gray-900">
      <section className="border-b border-gray-200 bg-gray-50 px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy mb-4 hover:text-brand-navy-light transition-colors">
            <ArrowLeft className="size-4" /> Back to Home
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-1">
            {study.industry}
          </p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-brand-navy md:text-5xl">
            {study.client}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            {study.description}
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {bannerImages.map((img, i) => (
                  <div key={img} className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                    <img
                      src={publicAssetUrl(img) ?? undefined}
                      alt={`${study.client} - Image ${i + 1}`}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Case Details</h2>
                {study.detailed_content.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600 text-sm leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sticky top-28">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Brief Case Detail</h3>
                <div className="space-y-4">
                  {study.client_name ? (
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Client Name</p>
                      <p className="text-sm font-semibold text-gray-800">{study.client_name}</p>
                    </div>
                  ) : null}
                  {study.location ? (
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Location</p>
                      <p className="text-sm text-gray-700">{study.location}</p>
                    </div>
                  ) : null}
                  {study.duration ? (
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Duration</p>
                      <p className="text-sm font-semibold text-gray-800">{study.duration}</p>
                    </div>
                  ) : null}
                  {study.csi ? (
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Customer Satisfaction Index</p>
                      <p className="text-sm font-semibold text-green-700">{study.csi}</p>
                    </div>
                  ) : null}
                  {study.category ? (
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Category</p>
                      <p className="text-sm font-semibold text-brand-navy">{study.category}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
