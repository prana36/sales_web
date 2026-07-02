-- Supabase setup for consult4sales dynamic content.
-- Run this in Supabase SQL editor, then create the storage bucket below.

create extension if not exists pgcrypto;

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  subtitle text,
  description text not null,
  duration text,
  mode text,
  level text,
  price_label text,
  cta_label text not null default 'Enquire Now',
  cta_url text not null default '#contact',
  image_path text,
  video_path text,
  brochure_path text,
  highlights text[] not null default '{}',
  sort_order integer not null default 0,
  is_published boolean not null default true,
  published_at timestamptz default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content text not null,
  author text not null default 'Strategic Concepts',
  category text not null default 'Sales',
  cover_image_path text,
  video_path text,
  read_time_minutes integer not null default 4,
  is_featured boolean not null default false,
  sort_order integer not null default 0,
  is_published boolean not null default true,
  published_at timestamptz default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.downloads (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null,
  category text not null default 'Guide',
  file_path text not null,
  thumbnail_path text,
  file_type text not null default 'PDF',
  button_label text not null default 'Download',
  sort_order integer not null default 0,
  is_published boolean not null default true,
  published_at timestamptz default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.courses add column if not exists video_path text;
alter table public.blogs add column if not exists video_path text;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_courses_updated_at on public.courses;
create trigger set_courses_updated_at
before update on public.courses
for each row execute function public.set_updated_at();

drop trigger if exists set_blogs_updated_at on public.blogs;
create trigger set_blogs_updated_at
before update on public.blogs
for each row execute function public.set_updated_at();

drop trigger if exists set_downloads_updated_at on public.downloads;
create trigger set_downloads_updated_at
before update on public.downloads
for each row execute function public.set_updated_at();

alter table public.courses enable row level security;
alter table public.blogs enable row level security;
alter table public.downloads enable row level security;

drop policy if exists "Published courses are readable" on public.courses;
create policy "Published courses are readable"
on public.courses for select
using (is_published = true);

drop policy if exists "Published blogs are readable" on public.blogs;
create policy "Published blogs are readable"
on public.blogs for select
using (is_published = true);

drop policy if exists "Published downloads are readable" on public.downloads;
create policy "Published downloads are readable"
on public.downloads for select
using (is_published = true);

-- Admin writes use the service-role key from sales_admin server actions.
-- Do not expose the service-role key in website-landing.

-- Storage bucket:
-- Create a public bucket named: media-library
-- Folder convention:
--   media-library/blogs/{blog_id}/cover.jpg
--   media-library/blogs/{blog_id}/video.mp4
--   media-library/courses/{course_id}/cover.jpg
--   media-library/courses/{course_id}/video.mp4
--   media-library/courses/{course_id}/brochure.pdf
--   media-library/downloads/{download_id}/file.pdf
--   media-library/downloads/{download_id}/thumbnail.jpg
--
-- Public URL format:
-- https://YOUR_PROJECT.supabase.co/storage/v1/object/public/media-library/blogs/{blog_id}/cover.jpg
