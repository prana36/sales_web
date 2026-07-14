-- Supabase setup for consult4sales case studies + services (dynamic content).
-- Run this in Supabase SQL editor after api/supabase-schema.sql.

create extension if not exists pgcrypto;

create table if not exists public.case_studies (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  case_id text not null,
  client text not null,
  industry text not null,
  challenge text not null,
  outcome text not null,
  metric_value text not null,
  metric_label text not null,
  thumbnail_path text,
  banner_image_paths text[] not null default '{}',
  description text not null,
  client_name text,
  location text,
  duration text,
  csi text,
  category text,
  detailed_content text[] not null default '{}',
  sort_order integer not null default 0,
  is_published boolean not null default true,
  published_at timestamptz default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  hindi_title text,
  summary text not null,
  description_paragraphs text[] not null default '{}',
  image_path text,
  faqs jsonb not null default '[]',
  related_case_study_slugs text[] not null default '{}',
  sort_order integer not null default 0,
  is_published boolean not null default true,
  published_at timestamptz default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_case_studies_updated_at on public.case_studies;
create trigger set_case_studies_updated_at
before update on public.case_studies
for each row execute function public.set_updated_at();

drop trigger if exists set_services_updated_at on public.services;
create trigger set_services_updated_at
before update on public.services
for each row execute function public.set_updated_at();

alter table public.case_studies enable row level security;
alter table public.services enable row level security;

drop policy if exists "Published case studies are readable" on public.case_studies;
create policy "Published case studies are readable"
on public.case_studies for select
using (is_published = true);

drop policy if exists "Published services are readable" on public.services;
create policy "Published services are readable"
on public.services for select
using (is_published = true);

-- Admin writes use the service-role key from sales_admin server actions / seed scripts.
-- Do not expose the service-role key in website-landing.

-- Storage bucket (reuses existing "media-library" bucket):
--   media-library/case-studies/{slug}/thumbnail.jpg
--   media-library/case-studies/{slug}/banner-1.jpg (etc.)
--   media-library/services/{slug}/cover.png
