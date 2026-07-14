// One-off seed script: uploads case-study/service images to Supabase Storage
// and upserts rows into public.case_studies / public.services.
//
// Usage: node --env-file=.env.seed.local scripts/seed-dynamic-content.mjs
//
// Reads SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY from the environment
// (populated via .env.seed.local, which is git-ignored and never shipped
// to the client bundle).

import fs from "fs";
import path from "path";
import { caseStudies, OLD_SITE_IMG_DIR } from "./case-studies-data.mjs";
import { services, SERVICES_IMG_DIR } from "./services-data.mjs";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = "media-library";

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.");
  process.exit(1);
}

function extOf(filePath) {
  const e = path.extname(filePath).toLowerCase();
  return e || ".png";
}

function contentTypeFor(ext) {
  switch (ext) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    default:
      return "application/octet-stream";
  }
}

async function uploadFile(localAbsPath, storagePath) {
  const ext = extOf(localAbsPath);
  const contentType = contentTypeFor(ext);
  const data = fs.readFileSync(localAbsPath);

  const res = await fetch(
    `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${storagePath}`,
    {
      method: "POST",
      headers: {
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        "Content-Type": contentType,
        "x-upsert": "true",
      },
      body: data,
    },
  );

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Upload failed for ${storagePath}: ${res.status} ${body}`);
  }

  return storagePath;
}

async function upsertRows(table, rows) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?on_conflict=slug`, {
    method: "POST",
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify(rows),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Upsert failed for ${table}: ${res.status} ${body}`);
  }
}

async function seedCaseStudies() {
  console.log(`\nSeeding ${caseStudies.length} case studies...`);
  const rows = [];

  for (let i = 0; i < caseStudies.length; i++) {
    const cs = caseStudies[i];
    const thumbLocal = path.join(OLD_SITE_IMG_DIR, cs.thumbnail);
    const thumbExt = extOf(cs.thumbnail);
    const thumbStoragePath = `case-studies/${cs.slug}/thumbnail${thumbExt}`;
    await uploadFile(thumbLocal, thumbStoragePath);

    const bannerPaths = [];
    const banners = cs.banners && cs.banners.length ? cs.banners : [cs.thumbnail];
    for (let b = 0; b < banners.length; b++) {
      const bannerLocal = path.join(OLD_SITE_IMG_DIR, banners[b]);
      const bannerExt = extOf(banners[b]);
      const bannerStoragePath = `case-studies/${cs.slug}/banner-${b + 1}${bannerExt}`;
      await uploadFile(bannerLocal, bannerStoragePath);
      bannerPaths.push(bannerStoragePath);
    }

    rows.push({
      slug: cs.slug,
      case_id: cs.case_id,
      client: cs.client,
      industry: cs.industry,
      challenge: cs.challenge,
      outcome: cs.outcome,
      metric_value: cs.metric_value,
      metric_label: cs.metric_label,
      thumbnail_path: thumbStoragePath,
      banner_image_paths: bannerPaths,
      description: cs.description,
      client_name: cs.client_name,
      location: cs.location,
      duration: cs.duration,
      csi: cs.csi,
      category: cs.category,
      detailed_content: cs.detailed_content,
      sort_order: i,
      is_published: true,
    });

    console.log(`  [${i + 1}/${caseStudies.length}] uploaded + prepared: ${cs.slug}`);
  }

  await upsertRows("case_studies", rows);
  console.log("Case studies upserted.");
}

async function seedServices() {
  console.log(`\nSeeding ${services.length} services...`);
  const rows = [];

  for (let i = 0; i < services.length; i++) {
    const svc = services[i];
    const imgLocal = path.join(SERVICES_IMG_DIR, svc.image);
    const imgExt = extOf(svc.image);
    const imgStoragePath = `services/${svc.slug}/cover${imgExt}`;
    await uploadFile(imgLocal, imgStoragePath);

    rows.push({
      slug: svc.slug,
      name: svc.name,
      hindi_title: svc.hindi_title,
      summary: svc.summary,
      description_paragraphs: svc.description_paragraphs,
      image_path: imgStoragePath,
      faqs: svc.faqs,
      related_case_study_slugs: svc.related_case_study_slugs,
      sort_order: i,
      is_published: true,
    });

    console.log(`  [${i + 1}/${services.length}] uploaded + prepared: ${svc.slug}`);
  }

  await upsertRows("services", rows);
  console.log("Services upserted.");
}

async function main() {
  await seedCaseStudies();
  await seedServices();
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
