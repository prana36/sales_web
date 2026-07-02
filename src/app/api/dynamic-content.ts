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

export type DynamicContent = {
  courses: Course[];
  blogs: Blog[];
  downloads: Download[];
};

import {
  hasSupabasePublicConfig,
  supabaseConfig,
} from "./supabase-config";

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

  if (!response.ok) {
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
  const [courses, blogs, downloads] = await Promise.all([
    fetchTable<Course>("courses"),
    fetchTable<Blog>("blogs"),
    fetchTable<Download>("downloads"),
  ]);

  return { courses, blogs, downloads };
}
