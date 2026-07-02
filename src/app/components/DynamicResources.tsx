import { useEffect, useState } from "react";
import { BookOpen, Download as DownloadIcon, FileText, Loader2 } from "lucide-react";
import {
  DynamicContent,
  getDynamicContent,
  publicAssetUrl,
} from "../api/dynamic-content";

const emptyContent: DynamicContent = {
  courses: [],
  blogs: [],
  downloads: [],
};

export default function DynamicResources() {
  const [content, setContent] = useState<DynamicContent>(emptyContent);
  const [status, setStatus] = useState<"loading" | "ready" | "empty">("loading");

  useEffect(() => {
    let isMounted = true;

    getDynamicContent()
      .then((data) => {
        if (!isMounted) {
          return;
        }

        setContent(data);
        setStatus(
          data.courses.length || data.blogs.length || data.downloads.length
            ? "ready"
            : "empty",
        );
      })
      .catch(() => {
        if (isMounted) {
          setStatus("empty");
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (status === "empty") {
    return null;
  }

  return (
    <section id="resources" className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-900">
            Knowledge Hub
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Courses, blogs, and downloads from the sales desk
          </h2>
        </div>

        {status === "loading" ? (
          <div className="flex min-h-48 items-center justify-center rounded-[10px] border border-gray-200 bg-gray-50">
            <Loader2 className="size-6 animate-spin text-blue-900" />
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2 text-blue-900">
                <BookOpen className="size-5" />
                <h3 className="text-xl font-bold text-gray-900">Courses</h3>
              </div>
              <div className="space-y-4">
                {content.courses.slice(0, 3).map((course) => (
                  <article
                    className="overflow-hidden rounded-[10px] border border-gray-200 bg-gray-50 shadow-sm"
                    key={course.id}
                  >
                    {publicAssetUrl(course.image_path) ? (
                      <img
                        alt={course.title}
                        className="h-40 w-full object-cover"
                        src={publicAssetUrl(course.image_path) ?? undefined}
                      />
                    ) : null}
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-yellow-600">
                        {course.mode ?? "Training"}
                      </p>
                      <h4 className="mt-2 text-lg font-bold text-gray-900">{course.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{course.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-gray-600">
                        {course.duration ? <span>{course.duration}</span> : null}
                        {course.level ? <span>{course.level}</span> : null}
                      </div>
                      <a
                        className="mt-5 inline-flex rounded-[10px] bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400"
                        href={course.cta_url}
                      >
                        {course.cta_label}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-blue-900">
                <FileText className="size-5" />
                <h3 className="text-xl font-bold text-gray-900">Blogs</h3>
              </div>
              <div className="space-y-4">
                {content.blogs.slice(0, 3).map((blog) => (
                  <article
                    className="overflow-hidden rounded-[10px] border border-gray-200 bg-white shadow-sm"
                    key={blog.id}
                  >
                    {publicAssetUrl(blog.cover_image_path) ? (
                      <img
                        alt=""
                        className="h-36 w-full object-cover"
                        src={publicAssetUrl(blog.cover_image_path) ?? undefined}
                      />
                    ) : null}
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-yellow-600">
                        {blog.category} / {blog.read_time_minutes} min read
                      </p>
                      <h4 className="mt-2 text-lg font-bold text-gray-900">{blog.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{blog.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-blue-900">
                <DownloadIcon className="size-5" />
                <h3 className="text-xl font-bold text-gray-900">Downloads</h3>
              </div>
              <div className="space-y-4">
                {content.downloads.slice(0, 4).map((download) => (
                  <article
                    className="overflow-hidden rounded-[10px] border border-gray-200 bg-gray-50 shadow-sm"
                    key={download.id}
                  >
                    {publicAssetUrl(download.thumbnail_path) ? (
                      <img
                        alt={download.title}
                        className="h-36 w-full object-cover"
                        src={publicAssetUrl(download.thumbnail_path) ?? undefined}
                      />
                    ) : null}
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-yellow-600">
                        {download.category} / {download.file_type}
                      </p>
                      <h4 className="mt-2 text-lg font-bold text-gray-900">{download.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {download.description}
                      </p>
                      <a
                        className="mt-5 inline-flex items-center gap-2 rounded-[10px] bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
                        href={publicAssetUrl(download.file_path) ?? "#contact"}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <DownloadIcon className="size-4" />
                        {download.button_label}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
