import {
  ArrowLeft,
  BookOpen,
  CalendarCheck,
  Clock,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Loader2,
} from "lucide-react";
import type React from "react";
import { Link, useParams } from "react-router";
import { publicAssetUrl } from "../api/dynamic-content";
import { useDynamicContent } from "../hooks/useDynamicContent";

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
    <main className="min-h-screen bg-white pt-24 text-gray-900">
      <section className="border-b border-gray-200 bg-slate-50 px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-blue-950 md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            {description}
          </p>
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
    <div className="flex min-h-72 items-center justify-center rounded-[10px] border border-gray-200 bg-gray-50">
      <Loader2 className="size-7 animate-spin text-blue-900" />
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-[10px] border border-gray-200 bg-gray-50 p-8 text-center">
      <p className="font-semibold text-gray-900">No {label} found.</p>
      <p className="mt-2 text-sm text-gray-500">
        Please check that the Supabase table has published records.
      </p>
    </div>
  );
}

function NotFoundState({ label, backTo }: { label: string; backTo: string }) {
  return (
    <div className="rounded-[10px] border border-gray-200 bg-gray-50 p-8">
      <p className="text-xl font-bold text-gray-900">{label} not found</p>
      <Link
        className="mt-5 inline-flex items-center gap-2 rounded-[10px] bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
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
              className="overflow-hidden rounded-[10px] border border-gray-200 bg-white shadow-sm"
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
                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-600">
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
                  className="mt-6 inline-flex items-center gap-2 rounded-[10px] bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-400"
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
                className="mb-8 h-72 w-full rounded-[10px] object-cover md:h-[420px]"
                src={publicAssetUrl(course.image_path) ?? undefined}
              />
            ) : null}
            <p className="text-lg leading-8 text-gray-700">{course.description}</p>
            {course.highlights.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {course.highlights.map((highlight) => (
                  <div
                    className="flex items-start gap-3 rounded-[10px] border border-gray-200 bg-gray-50 p-4 text-sm font-semibold text-gray-700"
                    key={highlight}
                  >
                    <GraduationCap className="mt-0.5 size-5 flex-shrink-0 text-yellow-600" />
                    {highlight}
                  </div>
                ))}
              </div>
            ) : null}
          </article>
          <aside className="h-fit rounded-[10px] border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-gray-900">Program Info</h2>
            <div className="mt-5 space-y-4 text-sm text-gray-600">
              {course.duration ? <DetailRow icon={Clock} label="Duration" value={course.duration} /> : null}
              {course.mode ? <DetailRow icon={BookOpen} label="Mode" value={course.mode} /> : null}
              {course.level ? <DetailRow icon={GraduationCap} label="Level" value={course.level} /> : null}
              {course.price_label ? <DetailRow icon={CalendarCheck} label="Price" value={course.price_label} /> : null}
            </div>
            <a
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-yellow-500 px-4 py-3 text-sm font-bold text-gray-900 hover:bg-yellow-400"
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
              className="overflow-hidden rounded-[10px] border border-gray-200 bg-white shadow-sm"
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
                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-600">
                  {blog.category} / {blog.read_time_minutes} min read
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">{blog.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{blog.excerpt}</p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 rounded-[10px] bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
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
              className="mb-8 h-72 w-full rounded-[10px] object-cover md:h-[430px]"
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

export function DownloadsPage() {
  const { content, status } = useDynamicContent();

  return (
    <PageShell
      eyebrow="Consult4Sales Downloads"
      title="Sales checklists, workbooks, brochures, and proof resources"
      description="Access database-managed downloads and resource links like sales audit checklists, workbooks, brochures, testimonials, and recommendations."
    >
      {status === "loading" ? <LoadingState /> : null}
      {status === "empty" ? <EmptyState label="downloads" /> : null}
      {status === "ready" ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.downloads.map((download) => (
            <article
              className="overflow-hidden rounded-[10px] border border-gray-200 bg-white shadow-sm"
              key={download.id}
            >
              {publicAssetUrl(download.thumbnail_path) ? (
                <img
                  alt={download.title}
                  className="h-44 w-full object-cover"
                  src={publicAssetUrl(download.thumbnail_path) ?? undefined}
                />
              ) : null}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-600">
                  {download.category} / {download.file_type}
                </p>
                <h2 className="mt-2 text-xl font-bold text-gray-900">{download.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{download.description}</p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 rounded-[10px] bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                  to={`/downloads/${download.slug}`}
                >
                  View Resource
                  <Download className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </PageShell>
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
                className="mb-8 h-72 w-full rounded-[10px] object-cover md:h-[420px]"
                src={publicAssetUrl(download.thumbnail_path) ?? undefined}
              />
            ) : null}
            <p className="text-lg leading-8 text-gray-700">{download.description}</p>
          </article>
          <aside className="h-fit rounded-[10px] border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-gray-900">Resource Info</h2>
            <div className="mt-5 space-y-4 text-sm text-gray-600">
              <DetailRow icon={FileText} label="Category" value={download.category} />
              <DetailRow icon={Download} label="Type" value={download.file_type} />
            </div>
            <a
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-blue-900 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800"
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
      <Icon className="mt-0.5 size-5 flex-shrink-0 text-yellow-600" />
      <div>
        <p className="font-semibold text-gray-900">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}
