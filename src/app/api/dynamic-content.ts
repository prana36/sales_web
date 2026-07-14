export type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string;
  duration: string | null;
  mode: string | null;
  level: string | null;
  price_label: string | null;
  cta_label: string;
  cta_url: string;
  image_path: string | null;
  video_path: string | null;
  brochure_path: string | null;
  highlights: string[];
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  cover_image_path: string | null;
  video_path: string | null;
  read_time_minutes: number;
};

export type Download = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  file_path: string;
  thumbnail_path: string | null;
  file_type: string;
  button_label: string;
};

export type Setting = {
  id: string;
  key: string;
  value: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  case_id: string;
  client: string;
  industry: string;
  challenge: string;
  outcome: string;
  metric_value: string;
  metric_label: string;
  thumbnail_path: string | null;
  banner_image_paths: string[];
  description: string;
  client_name: string | null;
  location: string | null;
  duration: string | null;
  csi: string | null;
  category: string | null;
  detailed_content: string[];
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceFaqGroup = {
  group: string;
  items: ServiceFaqItem[];
};

export type Service = {
  id: string;
  slug: string;
  name: string;
  hindi_title: string | null;
  summary: string;
  description_paragraphs: string[];
  image_path: string | null;
  faqs: ServiceFaqGroup[];
  related_case_study_slugs: string[];
};

export type DynamicContent = {
  courses: Course[];
  blogs: Blog[];
  downloads: Download[];
  caseStudies: CaseStudy[];
  services: Service[];
};

import { hasSupabasePublicConfig, supabaseConfig } from "./supabase-config";

async function fetchTable<T>(table: string): Promise<T[]> {
  if (!hasSupabasePublicConfig()) {
    return [];
  }

  const response = await fetch(
    `${supabaseConfig.url}/rest/v1/${table}?select=*&is_published=eq.true&order=sort_order.asc`,
    {
      headers: {
        apikey: supabaseConfig.anonKey,
        Authorization: `Bearer ${supabaseConfig.anonKey}`,
      },
    },
  );

  console.log(`Fetched ${table}:`, response);

  if (!response.ok) {
    console.error(
      `Failed to fetch ${table}:`,
      response.status,
      response.statusText,
    );
    throw new Error(`Unable to load ${table}`);
  }

  return response.json();
}

export function publicAssetUrl(path: string | null | undefined) {
  if (!path) {
    return null;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (!supabaseConfig.url) {
    return null;
  }

  return `${supabaseConfig.url}/storage/v1/object/public/${supabaseConfig.storageBucket}/${path}`;
}

export async function getDynamicContent(): Promise<DynamicContent> {
  const [courses, blogs, downloads, caseStudies, services] = await Promise.all([
    fetchTable<Course>("courses"),
    fetchTable<Blog>("blogs"),
    fetchTable<Download>("downloads"),
    fetchTable<CaseStudy>("case_studies"),
    fetchTable<Service>("services"),
  ]);

  console.log("Fetched dynamic content:", { courses, blogs, downloads, caseStudies, services });

  return { courses, blogs, downloads, caseStudies, services };
}

export async function getSetting(key: string): Promise<string | null> {
  if (!hasSupabasePublicConfig()) {
    return null;
  }

  try {
    const settings = await fetchTable<Setting>("settings");
    const setting = settings.find((s) => s.key === key);
    return setting?.value ?? null;
  } catch {
    return null;
  }
}
