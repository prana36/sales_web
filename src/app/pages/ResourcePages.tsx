import {
  ArrowLeft,
  BookOpen,
  CalendarCheck,
  Clock,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Linkedin,
  Loader2,
  Quote,
} from "lucide-react";
import type React from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { publicAssetUrl } from "../api/dynamic-content";
import { useDynamicContent } from "../hooks/useDynamicContent";
import Reveal from "../components/shared/Reveal";

function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white pt-32 text-gray-900 md:pt-36">
      <section className="border-b border-gray-200 bg-gray-50 px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              {eyebrow}
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-brand-navy md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              {description}
            </p>
          </Reveal>
        </div>
      </section>
      <section className="px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">{children}</div>
      </section>
    </main>
  );
}

function LoadingState() {
  return (
    <div className="flex min-h-72 items-center justify-center rounded-3xl border border-gray-200 bg-gray-50">
      <Loader2 className="size-7 animate-spin text-brand-navy" />
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center">
      <p className="font-semibold text-gray-900">No {label} found.</p>
      <p className="mt-2 text-sm text-gray-500">
        Please check that the Supabase table has published records.
      </p>
    </div>
  );
}

function NotFoundState({ label, backTo }: { label: string; backTo: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
      <p className="text-xl font-bold text-gray-900">{label} not found</p>
      <Link
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white hover:bg-brand-navy-dark"
        to={backTo}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
    </div>
  );
}

export function CoursesPage() {
  const { content, status } = useDynamicContent();

  return (
    <PageShell
      eyebrow="Consult4Sales Courses"
      title="Sales learning programs for every stage of the sales journey"
      description="Browse database-powered courses inspired by Consult4Sales programs such as Sales Baptism, Sales Marathon, Sales ManEdge, Sales Ki Pathshala, and specialist sales interventions."
    >
      {status === "loading" ? <LoadingState /> : null}
      {status === "empty" ? <EmptyState label="courses" /> : null}
      {status === "ready" ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.courses.map((course) => (
            <article
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              key={course.id}
            >
              {publicAssetUrl(course.image_path) ? (
                <img
                  alt={course.title}
                  className="h-52 w-full object-cover"
                  src={publicAssetUrl(course.image_path) ?? undefined}
                />
              ) : null}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  {course.mode ?? "Training"}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">{course.title}</h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                  {course.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-gray-600">
                  {course.duration ? <span>{course.duration}</span> : null}
                  {course.level ? <span>{course.level}</span> : null}
                  {course.price_label ? <span>{course.price_label}</span> : null}
                </div>
                <Link
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-navy-950 hover:bg-brand-gold-light"
                  to={`/courses/${course.slug}`}
                >
                  View Course
                  <ExternalLink className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </PageShell>
  );
}

export function CourseDetailPage() {
  const { slug } = useParams();
  const { content, status } = useDynamicContent();
  const course = content.courses.find((item) => item.slug === slug);

  return (
    <PageShell
      eyebrow="Course Details"
      title={course?.title ?? "Course"}
      description={course?.subtitle ?? "Database-powered course detail from Consult4Sales."}
    >
      {status === "loading" ? <LoadingState /> : null}
      {status !== "loading" && !course ? <NotFoundState backTo="/courses" label="Course" /> : null}
      {course ? (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article>
            {publicAssetUrl(course.image_path) ? (
              <img
                alt={course.title}
                className="mb-8 h-72 w-full rounded-2xl object-cover md:h-[420px]"
                src={publicAssetUrl(course.image_path) ?? undefined}
              />
            ) : null}
            <p className="text-lg leading-8 text-gray-700">{course.description}</p>
            {course.highlights.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {course.highlights.map((highlight) => (
                  <div
                    className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm font-semibold text-gray-700"
                    key={highlight}
                  >
                    <GraduationCap className="mt-0.5 size-5 flex-shrink-0 text-brand-gold" />
                    {highlight}
                  </div>
                ))}
              </div>
            ) : null}
          </article>
          <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-bold text-gray-900">Program Info</h2>
            <div className="mt-5 space-y-4 text-sm text-gray-600">
              {course.duration ? <DetailRow icon={Clock} label="Duration" value={course.duration} /> : null}
              {course.mode ? <DetailRow icon={BookOpen} label="Mode" value={course.mode} /> : null}
              {course.level ? <DetailRow icon={GraduationCap} label="Level" value={course.level} /> : null}
              {course.price_label ? <DetailRow icon={CalendarCheck} label="Price" value={course.price_label} /> : null}
            </div>
            <a
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-4 py-3 text-sm font-bold text-brand-navy-950 hover:bg-brand-gold-light"
              href={course.cta_url}
              rel="noopener noreferrer"
              target={course.cta_url.startsWith("http") ? "_blank" : undefined}
            >
              {course.cta_label}
              <ExternalLink className="size-4" />
            </a>
          </aside>
        </div>
      ) : null}
    </PageShell>
  );
}

export function BlogsPage() {
  const { content, status } = useDynamicContent();

  return (
    <PageShell
      eyebrow="Consult4Sales Blogs"
      title="Sales ideas, consulting notes, and practical field learning"
      description="Read database-managed articles on sales training, sales process, negotiation, sales DNA, and SME growth consulting."
    >
      {status === "loading" ? <LoadingState /> : null}
      {status === "empty" ? <EmptyState label="blogs" /> : null}
      {status === "ready" ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.blogs.map((blog) => (
            <article
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              key={blog.id}
            >
              {publicAssetUrl(blog.cover_image_path) ? (
                <img
                  alt={blog.title}
                  className="h-52 w-full object-cover"
                  src={publicAssetUrl(blog.cover_image_path) ?? undefined}
                />
              ) : null}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  {blog.category} / {blog.read_time_minutes} min read
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">{blog.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{blog.excerpt}</p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white hover:bg-brand-navy-dark"
                  to={`/blogs/${blog.slug}`}
                >
                  Read Blog
                  <FileText className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </PageShell>
  );
}

export function BlogDetailPage() {
  const { slug } = useParams();
  const { content, status } = useDynamicContent();
  const blog = content.blogs.find((item) => item.slug === slug);

  return (
    <PageShell
      eyebrow={blog?.category ?? "Blog"}
      title={blog?.title ?? "Blog"}
      description={blog?.excerpt ?? "Database-powered blog detail from Consult4Sales."}
    >
      {status === "loading" ? <LoadingState /> : null}
      {status !== "loading" && !blog ? <NotFoundState backTo="/blogs" label="Blog" /> : null}
      {blog ? (
        <article className="mx-auto max-w-4xl">
          {publicAssetUrl(blog.cover_image_path) ? (
            <img
              alt={blog.title}
              className="mb-8 h-72 w-full rounded-2xl object-cover md:h-[430px]"
              src={publicAssetUrl(blog.cover_image_path) ?? undefined}
            />
          ) : null}
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-semibold text-gray-600">
            <span>{blog.author}</span>
            <span>{blog.read_time_minutes} min read</span>
          </div>
          <div className="space-y-5 text-lg leading-9 text-gray-700">
            {(blog.content || blog.excerpt).split(/\n+/).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      ) : null}
    </PageShell>
  );
}

import saregamaImg from "../assets/images/case-study/icici.png";
import salesWorkbookImg from "../assets/images/case-study/lg-case.png";

const dlStyles = `
.single-pdf-1 { margin: 2px 0 15px; }
.single-pdf-1 ul { list-style: none; padding: 0; margin: 0; }
.single-pdf-1 ul li { list-style: none; display: flex; align-items: flex-start; gap: 6px; padding: 2px 0; }
.single-pdf-1 ul li a { text-decoration: none; }
.single-pdf-1 ul li a h6.name { display: inline; font-size: 14px; font-weight: 600; color: #333; margin: 0; line-height: 1.4; cursor: pointer; }
.single-pdf-1 ul li a h6.name:hover { color: #1B619C; }
.img-wb { box-shadow: rgba(27,97,156,0.15) 0 60px 40px -7px; border-radius: 20px; }
#style-7::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.15); background-color: #f5f5f5; border-radius: 10px; }
#style-7::-webkit-scrollbar { width: 5px; background-color: #f5f5f5; }
#style-7::-webkit-scrollbar-thumb { border-radius: 10px; background-image: linear-gradient(to top, #1B619C 44%, #1A60A8 72%, #0E2A44 86%); }
.testimonial-box-2 .content::after { border-color: #0E2A44 transparent transparent; border-style: solid; border-width: 19px 13px; content: ""; position: absolute; right: 26px; }
`;

const categoryMeta: Record<string, { subtitle: string; desc: string }> = {
  Checklist: { subtitle: "Downloads for", desc: "Free sales checklists to improve your sales process and manage your sales function effectively." },
  Workbook: { subtitle: "Downloads for", desc: "Free sales workbooks covering sales planning, negotiation, closing, and more." },
  Testimonials: { subtitle: "With Respect To Each Client", desc: "What our clients say about us." },
  Brochure: { subtitle: "Downloads for", desc: "Download the complete Strategic Concepts brochure." },
  Recommendations: { subtitle: "", desc: "Professional recommendations and endorsements from our network." },
};

function DownloadList({ items }: { items: Download[] }) {
  const downloadUrl = (item: Download) => {
    if (item.file_type === "Link") return item.file_path;
    return publicAssetUrl(item.file_path) ?? "#";
  };
  return (
    <div className="max-h-[460px] overflow-y-auto pr-2" id="style-7">
      <div className="grid gap-0 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.id} className="single-pdf-1">
            <ul className="service-list">
              <li>
                <span><Download className="inline size-3.5 text-brand-navy" /></span>
                <a
                  href={downloadUrl(item)}
                  download={item.file_type === "PDF"}
                  target={item.file_type === "Link" ? "_blank" : undefined}
                  rel={item.file_type === "Link" ? "noopener noreferrer" : undefined}
                  className="ml-onclick-form"
                >
                  <h6 className="name">{item.title}</h6>
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DownloadsPage() {
  const { content, status } = useDynamicContent();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  const categories = ["Checklist", "Workbook", "Brochure", "Testimonials", "Recommendations"];

  const filtered = activeCategory
    ? content.downloads.filter((d) => d.category === activeCategory)
    : content.downloads;

  const meta = activeCategory ? categoryMeta[activeCategory] : null;

  return (
    <>
    <style>{dlStyles}</style>
    <PageShell
      eyebrow="Consult4Sales Downloads"
      title={
        activeCategory === "Checklist" ? "Sales-Checklist"
        : activeCategory === "Workbook" ? "Sales-Workbooks"
        : activeCategory === "Testimonials" ? "Clients Appreciate Us"
        : activeCategory === "Brochure" ? "Strategic Concepts Brochure"
        : activeCategory === "Recommendations" ? "Recommendations"
        : "Sales checklists, workbooks, brochures, and proof resources"
      }
      description={
        activeCategory === "Checklist" ? "Download our Sales Checklist for free which helps you to improve sales process."
        : activeCategory === "Workbook" ? "Download our Sales Workbooks to learn the science of selling, sales closing, sales planning etc."
        : activeCategory === "Testimonials" ? "Read what client says about us."
        : activeCategory === "Brochure" ? "Download the complete Strategic Concepts Brochure here."
        : activeCategory === "Recommendations" ? "The recommendation by our clients encourage us to work more efficiently."
        : "Access database-managed downloads and resource links like sales audit checklists, workbooks, brochures, testimonials, and recommendations."
      }
    >
      {status === "ready" && !activeCategory ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchParams({ category: cat })}
              className="group flex flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-lg"
            >
              <Download className="mb-4 size-10 text-brand-navy transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold text-gray-900">{cat}</h3>
              <p className="mt-2 text-sm text-gray-500">
                {content.downloads.filter((d) => d.category === cat).length} resources
              </p>
            </button>
          ))}
        </div>
      ) : null}

      {status === "ready" && activeCategory === "Checklist" ? (
        <div>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">{meta?.subtitle}</p>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Sales-Checklist</h2>
              <DownloadList items={filtered} />
            </div>
            <div className="lg:col-span-5">
              <div className="img-wb">
                <img src={saregamaImg} alt="Sales Checklists" className="w-full rounded-2xl shadow-lg" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => setSearchParams({})}
              className="text-sm font-semibold text-brand-navy hover:text-brand-navy-light"
            >
              &larr; Back to all downloads
            </button>
          </div>
        </div>
      ) : null}

      {status === "ready" && activeCategory === "Workbook" ? (
        <div>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">{meta?.subtitle}</p>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Sales-Workbooks</h2>
              <DownloadList items={filtered} />
            </div>
            <div className="lg:col-span-5">
              <div className="img-wb">
                <img src={salesWorkbookImg} alt="Sales Workbooks" className="w-full rounded-2xl shadow-lg" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => setSearchParams({})}
              className="text-sm font-semibold text-brand-navy hover:text-brand-navy-light"
            >
              &larr; Back to all downloads
            </button>
          </div>
        </div>
      ) : null}

      {status === "ready" && activeCategory === "Testimonials" ? (
        <div>
          <div className="mb-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">With Respect To Each Client</p>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Clients Appreciate Us</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((item) => (
              <div key={item.id} className="testimonial-box-2 flex flex-col rounded-3xl bg-brand-navy-950 p-6 text-white">
                <div className="flex-1">
                  <p className="mb-4 text-sm leading-relaxed italic text-white/90">
                    &ldquo;{item.description.replace(/^.{120}.*?(\s|$)/, "$&").slice(0, 200)}&rdquo;
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title.replace(/ - .*$/, "")}</h4>
                    <p className="text-xs text-white/70">{item.title.includes(" - ") ? item.title.replace(/^[^-]+ - /, "") : ""}</p>
                  </div>
                  <a
                    href={publicAssetUrl(item.file_path) ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/30"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={() => setSearchParams({})}
              className="text-sm font-semibold text-brand-navy hover:text-brand-navy-light"
            >
              &larr; Back to all downloads
            </button>
          </div>
        </div>
      ) : null}

      {status === "ready" && activeCategory === "Brochure" ? (
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">Downloads for</p>
          <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">Our Brochures</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/25 hover:shadow-lg"
              >
                <span className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-brand-navy/[0.06] text-brand-navy">
                  <FileText className="size-5" />
                </span>
                <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                <p className="mb-6 flex-1 text-sm text-gray-500">{item.description}</p>
                <a
                  href={publicAssetUrl(item.file_path) ?? "#"}
                  download
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-navy-dark"
                >
                  <Download className="size-4" />
                  Download
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={() => setSearchParams({})}
              className="text-sm font-semibold text-brand-navy hover:text-brand-navy-light"
            >
              &larr; Back to all downloads
            </button>
          </div>
        </div>
      ) : null}

      {status === "ready" && activeCategory === "Recommendations" ? (
        <div>
          <div className="mb-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">From Our Network</p>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Recommendations</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-navy/[0.06] text-brand-navy">
                    <Quote className="size-4" />
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2]">
                    <Linkedin className="size-4" />
                  </span>
                </div>
                <div className="flex-1">
                  <p className="mb-4 text-sm leading-relaxed text-gray-700">
                    &ldquo;{item.description.replace(/^.{120}.*?(\s|$)/, "$&").slice(0, 200)}&rdquo;
                  </p>
                </div>
                <a
                  href={item.file_path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
                >
                  View on LinkedIn
                  <ExternalLink className="size-4" />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={() => setSearchParams({})}
              className="text-sm font-semibold text-brand-navy hover:text-brand-navy-light"
            >
              &larr; Back to all downloads
            </button>
          </div>
        </div>
      ) : null}

      {status === "loading" ? <LoadingState /> : null}
      {status === "empty" || (status === "ready" && filtered.length === 0 && activeCategory) ? (
        <EmptyState label="downloads" />
      ) : null}
    </PageShell>
    </>
  );
}

export function DownloadDetailPage() {
  const { slug } = useParams();
  const { content, status } = useDynamicContent();
  const download = content.downloads.find((item) => item.slug === slug);

  return (
    <PageShell
      eyebrow={download?.category ?? "Download"}
      title={download?.title ?? "Download"}
      description={download?.description ?? "Database-powered download detail from Consult4Sales."}
    >
      {status === "loading" ? <LoadingState /> : null}
      {status !== "loading" && !download ? (
        <NotFoundState backTo="/downloads" label="Download" />
      ) : null}
      {download ? (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article>
            {publicAssetUrl(download.thumbnail_path) ? (
              <img
                alt={download.title}
                className="mb-8 h-72 w-full rounded-2xl object-cover md:h-[420px]"
                src={publicAssetUrl(download.thumbnail_path) ?? undefined}
              />
            ) : null}
            <p className="text-lg leading-8 text-gray-700">{download.description}</p>
          </article>
          <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-bold text-gray-900">Resource Info</h2>
            <div className="mt-5 space-y-4 text-sm text-gray-600">
              <DetailRow icon={FileText} label="Category" value={download.category} />
              <DetailRow icon={Download} label="Type" value={download.file_type} />
            </div>
            <a
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-4 py-3 text-sm font-bold text-white hover:bg-brand-navy-dark"
              href={publicAssetUrl(download.file_path) ?? "#"}
              rel="noopener noreferrer"
              target="_blank"
            >
              {download.button_label}
              <ExternalLink className="size-4" />
            </a>
          </aside>
        </div>
      ) : null}
    </PageShell>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 size-5 flex-shrink-0 text-brand-gold" />
      <div>
        <p className="font-semibold text-gray-900">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}
