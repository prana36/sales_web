import { readFile } from "node:fs/promises";
import { readdirSync, statSync } from "node:fs";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const __dirname = dirname(fileURLToPath(import.meta.url));

async function loadEnvLocal(path) {
  try {
    const file = await readFile(path, "utf8");
    for (const line of file.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
      const separatorIndex = trimmed.indexOf("=");
      const key = trimmed.slice(0, separatorIndex).trim();
      const value = trimmed.slice(separatorIndex + 1).trim();
      if (key && process.env[key] === undefined) process.env[key] = value;
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

await loadEnvLocal(resolve(root, ".env.local"));

const supabaseUrl =
  process.env.SUPABASE_URL ??
  process.env.VITE_SUPABASE_URL ??
  "https://nmrqkujlbusfoizdbawf.supabase.co";
const serviceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.SUPABASE_SERVICE_KEY;
const bucket =
  process.env.SUPABASE_STORAGE_BUCKET ??
  process.env.VITE_SUPABASE_STORAGE_BUCKET ??
  "media-library";

if (!serviceRoleKey) {
  throw new Error("Set SUPABASE_SERVICE_ROLE_KEY in .env.local or environment.");
}

const mimeTypes = new Map([
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".pdf", "application/pdf"],
]);

const SUPABASE_STORAGE = `${supabaseUrl.replace(/\/$/, "")}/storage/v1/object/${bucket}`;
const SUPABASE_REST = `${supabaseUrl.replace(/\/$/, "")}/rest/v1`;

async function uploadFile(localPath, storagePath) {
  const file = await readFile(localPath);
  const contentType = mimeTypes.get(extname(localPath).toLowerCase()) ?? "application/octet-stream";
  const url = `${SUPABASE_STORAGE}/${storagePath}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serviceRoleKey}`,
      apikey: serviceRoleKey,
      "Content-Type": contentType,
      "x-upsert": "true",
    },
    body: file,
  });

  if (!res.ok) {
    const msg = await res.text();
    console.error(`  FAILED ${storagePath}: ${res.status} ${msg}`);
    return false;
  }
  console.log(`  OK ${storagePath}`);
  return true;
}

async function upsertDownload(record) {
  const url = `${SUPABASE_REST}/downloads`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serviceRoleKey}`,
      apikey: serviceRoleKey,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates",
    },
    body: JSON.stringify(record),
  });
  if (!res.ok) {
    const msg = await res.text();
    console.error(`  DB FAILED ${record.slug}: ${res.status} ${msg}`);
    return false;
  }
  console.log(`  DB OK ${record.slug}`);
  return true;
}

// --- STEP 1: Upload individual checklist PDFs ---
console.log("\n=== Uploading Sales Checklists ===");
const checklistDir = resolve(root, "public/pdf/sales-checklist");
const checklistFiles = readdirSync(checklistDir).filter(f => f.endsWith(".pdf"));

for (const file of checklistFiles) {
  const slug = file
    .replace(/\.pdf$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  await uploadFile(
    resolve(checklistDir, file),
    `downloads/checklist/${slug}/file.pdf`
  );
}

// --- STEP 2: Upload individual workbook PDFs ---
console.log("\n=== Uploading Sales Workbooks ===");
const workbookDir = resolve(root, "public/pdf/sales-workbook");
const workbookFiles = readdirSync(workbookDir).filter(f => f.endsWith(".pdf"));

for (const file of workbookFiles) {
  const slug = file
    .replace(/\.pdf$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .replace(/-+/g, "-");
  await uploadFile(
    resolve(workbookDir, file),
    `downloads/workbook/${slug}/file.pdf`
  );
}

// --- STEP 3: Upload testimonial PDFs ---
console.log("\n=== Uploading Testimonials ===");
const testimonialDir = resolve(root, "public/pdf/testimonial");
const testimonialFiles = readdirSync(testimonialDir).filter(f => f.endsWith(".pdf"));

for (const file of testimonialFiles) {
  const slug = file
    .replace(/\.pdf$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .replace(/-+/g, "-");
  await uploadFile(
    resolve(testimonialDir, file),
    `downloads/testimonial/${slug}/file.pdf`
  );
}

// --- STEP 4: Upload brochure PDF ---
console.log("\n=== Uploading Brochure ===");
const brochureDir = resolve(root, "public/pdf/brochure");
const brochureFiles = readdirSync(brochureDir).filter(f => f.endsWith(".pdf"));

for (const file of brochureFiles) {
  const slug = file
    .replace(/\.pdf$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .replace(/-+/g, "-");
  await uploadFile(
    resolve(brochureDir, file),
    `downloads/${slug}/file.pdf`
  );
}

// --- STEP 5: Update existing DB entries (fix file paths) ---
console.log("\n=== Updating existing DB entries ===");

// Fix existing individual entries + collection entries
const existingUpdates = [
  {
    slug: "sales-management-audit-system-checklist",
    title: "Sales Management Audit System Checklist",
    description: "A five-page checklist covering sales kit, DSR, sales policy, MIS, sales process, market intelligence, CRM, customer centricity, reference selling, cross selling, dashboard management, and service recovery.",
    category: "Checklist",
    file_path: "downloads/checklist/sales-management-audit-system-check-list-1-converted/file.pdf",
    thumbnail_path: "downloads/sales-management-audit-system-checklist/thumbnail.png",
    file_type: "PDF",
    button_label: "Download Checklist",
    sort_order: 1,
    is_published: true,
  },
  {
    slug: "lead-assessment-direct-selling-checklist",
    title: "Checklist for Lead Assessment in Direct Selling",
    description: "Checklist resource for assessing leads in a direct selling model.",
    category: "Checklist",
    file_path: "downloads/checklist/checklist-001a/file.pdf",
    thumbnail_path: "downloads/lead-assessment-direct-selling-checklist/thumbnail.png",
    file_type: "PDF",
    button_label: "Download Checklist",
    sort_order: 2,
    is_published: true,
  },
  {
    slug: "annual-sales-planning-workbook",
    title: "Annual Sales Planning Workbook",
    description: "Workbook resource for annual sales planning.",
    category: "Workbook",
    file_path: "downloads/workbook/workbook-for-annual-sales-planning/file.pdf",
    thumbnail_path: "downloads/annual-sales-planning-workbook/thumbnail.png",
    file_type: "PDF",
    button_label: "Download Workbook",
    sort_order: 3,
    is_published: true,
  },
  {
    slug: "sales-checklists",
    title: "Sales Checklists Collection",
    description: "Collection of checklists for lead assessment, sales management audit, FMCG sales managers, SME CEO sales management, distributor tracking, customer complaints, need analysis, sales training, and channel distribution.",
    category: "Checklist",
    file_path: "downloads/checklist/sales-management-audit-system-check-list-1-converted/file.pdf",
    thumbnail_path: "downloads/sales-checklists/thumbnail.png",
    file_type: "PDF",
    button_label: "View Checklists",
    sort_order: 5,
    is_published: true,
  },
  {
    slug: "sales-workbooks",
    title: "Sales Workbooks Collection",
    description: "Collection of workbooks including annual sales planning, rural marketing, capacity building, counselors, sales negotiations, lead generation, sales closing, ownership cost, CEO role in sales management, and sales audit system.",
    category: "Workbook",
    file_path: "downloads/workbook/workbook-for-annual-sales-planning/file.pdf",
    thumbnail_path: "downloads/sales-workbooks/thumbnail.png",
    file_type: "PDF",
    button_label: "View Workbooks",
    sort_order: 4,
    is_published: true,
  },
  {
    slug: "client-testimonials",
    title: "Client Testimonials",
    description: "Client appreciation and testimonial collection for sales training and consulting work.",
    category: "Testimonials",
    file_path: "downloads/testimonial/kems/file.pdf",
    thumbnail_path: "downloads/client-testimonials/thumbnail.png",
    file_type: "PDF",
    button_label: "View Testimonials",
    sort_order: 7,
    is_published: true,
  },
  {
    slug: "linkedin-recommendations",
    title: "LinkedIn Recommendations",
    description: "Professional recommendations and endorsements for Sanjay Singh and Strategic Concepts.",
    category: "Recommendations",
    file_path: "https://www.linkedin.com/in/sanjay4sales/details/recommendations/",
    thumbnail_path: "downloads/linkedin-recommendations/thumbnail.png",
    file_type: "Link",
    button_label: "View Recommendations",
    sort_order: 8,
    is_published: true,
  },
];

for (const entry of existingUpdates) {
  await upsertDownload(entry);
}

// Also re-upload the 3 existing individual PDFs to their new paths
console.log("\n=== Re-uploading existing individual PDFs ===");
await uploadFile(
  resolve(checklistDir, "Sales-Management-Audit-System-Check-List-1-converted.pdf"),
  "downloads/checklist/sales-management-audit-system-check-list-1-converted/file.pdf"
);
await uploadFile(
  resolve(checklistDir, "Checklist-001A.pdf"),
  "downloads/checklist/checklist-001a/file.pdf"
);
await uploadFile(
  resolve(workbookDir, "Workbook-for-Annual-Sales-Planning.pdf"),
  "downloads/workbook/workbook-for-annual-sales-planning/file.pdf"
);

// --- STEP 6: Insert all individual checklist entries ---
console.log("\n=== Inserting individual Sales Checklists ===");

const checklistEntries = [
  { title: "Checklist for Lead Assessment in Direct Selling", file: "Checklist-001A.pdf", sort: 1 },
  { title: "Checklist for Sales Management Audit System", file: "Sales-Management-Audit-System-Check-List-1-converted.pdf", sort: 2 },
  { title: "Checklist for 22 Question", file: "22-questions-1.pdf", sort: 3 },
  { title: "Checklist for FMCG Sales Managers", file: "The-Sales-Managers-Checklist.pdf", sort: 4 },
  { title: "Checklist for SME CEO Sales Management", file: "SME-CEO-Sales-Mgt-Checklist.pdf", sort: 5 },
  { title: "Checklist for Distributor Weekly Tracker", file: "Distributor_Weekly_Tracker.pdf", sort: 6 },
  { title: "Checklist for Vidarbha-Central India Region", file: "Know_your_Central_India-1.pdf", sort: 7 },
  { title: "Checklist for Educational Institute", file: "Checklist_for_Educational_Institutions-2.pdf", sort: 8 },
  { title: "Checklist for Customer Complaint Policy", file: "Customer_complaint_policy_toolkit-converted.pdf", sort: 9 },
  { title: "Checklist for Need Analysis", file: "Need_Analysis.pdf", sort: 10 },
  { title: "Checklist for Sales Management Review Chart", file: "sales_management_review_chart.pdf", sort: 11 },
  { title: "Checklist for Sales Managers Work on a Beat", file: "Sales_Managers_checklist_of_work_on_a_Beat_Map.pdf", sort: 12 },
  { title: "Checklist for Need Analysis for Financial Advisor", file: "Need_analysis_checklist.pdf", sort: 13 },
  { title: "Checklist for Salesmanship Quotient", file: "Salesmanship_Quotient.pdf", sort: 14 },
  { title: "Checklist for Sales Training", file: "Sales_Training_Assessment.pdf", sort: 15 },
  { title: "Checklist for the CEO Score Card", file: "THE_CEO_SCORECARD.pdf", sort: 16 },
  { title: "Checklist for Direct Selling Model", file: "Sales_Management_Audit_-_Direct_Selling_Model.pdf", sort: 17 },
  { title: "Checklist for Channel Distribution", file: "Sales_Management_Audit_-_Channel_of_Distribution_Model__Checklist_.pdf", sort: 18 },
];

for (const entry of checklistEntries) {
  const slug = entry.file.replace(/\.pdf$/i, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").replace(/-+/g, "-");
  await upsertDownload({
    slug,
    title: entry.title,
    description: `Sales checklist PDF resource: ${entry.title}.`,
    category: "Checklist",
    file_path: `downloads/checklist/${slug}/file.pdf`,
    thumbnail_path: null,
    file_type: "PDF",
    button_label: "Download Checklist",
    sort_order: 100 + entry.sort,
    is_published: true,
  });
}

// --- STEP 7: Insert all individual workbook entries ---
console.log("\n=== Inserting individual Sales Workbooks ===");

const workbookEntries = [
  { title: "Annual Sales Planning Workbook", file: "Workbook-for-Annual-Sales-Planning.pdf", sort: 1 },
  { title: "Rural Marketing Workbook", file: "Workbook-for-Rural-Marketing.pdf", sort: 2 },
  { title: "Capacity Building in Business Workbook", file: "workbook-for-Capacity-Building.pdf", sort: 3 },
  { title: "Counselors Workbook", file: "Workbook-for-Coun-Sell.pdf", sort: 4 },
  { title: "The Science of Sales Negotiations Workbook", file: "The-Science-of-Sales-Negotiation-workbook.pdf", sort: 5 },
  { title: "Lead Generation Workbook", file: "Lead-Generation-Workbook....pdf", sort: 6 },
  { title: "The Science of Sales Closing Workbook", file: "The-Science-of-Sales-Closings-WB.pdf", sort: 7 },
  { title: "Negotiation Skills Workbook", file: "Negotiation-Skills.pdf", sort: 8 },
  { title: "Total Ownership Cost Workbook", file: "Total-Ownership-Cost.pptx1-1.pdf", sort: 9 },
  { title: "X-Sell Action Selling System Workbook", file: "Workbook-for-X-Sell-Action-Selling-System.docx.pdf", sort: 10 },
  { title: "Role of a CEO in Sales Management Workbook", file: "Role-of-a-CEO-in-Sales-Management.pdf", sort: 11 },
  { title: "Sales Management Audit System Workbook", file: "Sales-Management-Audit-System-Check-List.pdf", sort: 12 },
  { title: "Managing Sales Effectively Workbook", file: "Managing-Sales-Effectively.pdf", sort: 13 },
  { title: "Mitigate Risk, Not Price Workbook", file: "Mitigate-Risk-not-price.pptx1_.pdf", sort: 14 },
  { title: "Creating Winning Teams Workbook", file: "Creating-Winning-Teams.pdf", sort: 15 },
];

for (const entry of workbookEntries) {
  const slug = entry.file.replace(/\.pdf$/i, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").replace(/-+/g, "-");
  await upsertDownload({
    slug,
    title: entry.title,
    description: `Sales workbook PDF resource: ${entry.title}.`,
    category: "Workbook",
    file_path: `downloads/workbook/${slug}/file.pdf`,
    thumbnail_path: null,
    file_type: "PDF",
    button_label: "Download Workbook",
    sort_order: 200 + entry.sort,
    is_published: true,
  });
}

// --- STEP 8: Insert testimonial entries ---
console.log("\n=== Inserting Testimonials ===");

const testimonialEntries = [
  { title: "KEMS Forgings - Rajeev Velur", file: "KEMS.pdf", sort: 1 },
  { title: "PIL ITALICA - Pratik Anchalkar", file: "PIL-ITALICA-FEEDBACK.pdf", sort: 2 },
  { title: "JJ Plastalloy - Shivam Bansal", file: "Plastalloy.pdf", sort: 3 },
  { title: "Avenues Payments - Naushad Contractor", file: "Avenues.pdf", sort: 4 },
  { title: "Maximess - Rahul Bajait", file: "Maximess-Jan-2020.pdf", sort: 5 },
  { title: "TIE Nagpur - Nidhi Bawashe", file: "TIE.pdf", sort: 6 },
  { title: "VIA - Suresh Rathi", file: "VIA-2019.pdf", sort: 7 },
  { title: "CII - Rahul Dixit", file: "Testimonial-to-Strategic-Concepts.pdf", sort: 8 },
  { title: "Grind Master Machines - Mohini Kelkar", file: "Grind-Master-Machines-Pvt-Ltd-ARG.pdf", sort: 9 },
];

for (const entry of testimonialEntries) {
  const slug = entry.file.replace(/\.pdf$/i, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").replace(/-+/g, "-");
  await upsertDownload({
    slug,
    title: entry.title,
    description: `Client testimonial from ${entry.title.replace(/ - .*$/, "")}.`,
    category: "Testimonials",
    file_path: `downloads/testimonial/${slug}/file.pdf`,
    thumbnail_path: null,
    file_type: "PDF",
    button_label: "View Testimonial",
    sort_order: 300 + entry.sort,
    is_published: true,
  });
}

console.log("\n✅ Done! All downloads seeded.");
