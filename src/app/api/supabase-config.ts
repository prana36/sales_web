export const supabaseConfig = {
  url: (import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? "",
  anonKey: (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? "",
  storageBucket:
    (import.meta.env.VITE_SUPABASE_STORAGE_BUCKET as string | undefined) ??
    "media-library",
};

export function hasSupabasePublicConfig() {
  return Boolean(supabaseConfig.url && supabaseConfig.anonKey);
}
