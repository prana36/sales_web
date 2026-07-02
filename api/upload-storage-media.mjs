import { readFile } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = resolve(root, "api/storage-media-manifest.json");
await loadEnvLocal(resolve(root, ".env.local"));
const cliOptions = parseCliOptions(process.argv.slice(2));
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));

const supabaseUrl =
  cliOptions.url ??
  cliOptions._[0] ??
  process.env.SUPABASE_URL ??
  process.env.VITE_SUPABASE_URL;
const serviceRoleKey =
  cliOptions["service-role-key"] ??
  cliOptions.serviceKey ??
  cliOptions._[2] ??
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.SUPABASE_SERVICE_KEY;
const bucket =
  cliOptions.bucket ??
  cliOptions._[1] ??
  process.env.SUPABASE_STORAGE_BUCKET ??
  process.env.VITE_SUPABASE_STORAGE_BUCKET ??
  "media-library";

const mimeTypes = new Map([
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".webp", "image/webp"],
  [".svg", "image/svg+xml"],
  [".pdf", "application/pdf"],
]);

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error(
    "Pass --url and --service-role-key, or set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before running this script.",
  );
}

async function loadEnvLocal(path) {
  try {
    const file = await readFile(path, "utf8");

    for (const line of file.split(/\r?\n/)) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
        continue;
      }

      const separatorIndex = trimmed.indexOf("=");
      const key = trimmed.slice(0, separatorIndex).trim();
      const value = trimmed.slice(separatorIndex + 1).trim();

      if (key && process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}

function parseCliOptions(args) {
  const options = { _: [] };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (!arg.startsWith("--")) {
      options._.push(arg);
      continue;
    }

    const [rawKey, inlineValue] = arg.slice(2).split("=", 2);
    const value = inlineValue ?? args[index + 1];

    if (inlineValue === undefined) {
      index += 1;
    }

    if (rawKey && value) {
      options[rawKey] = value;
    }
  }

  return options;
}

for (const item of manifest) {
  const sourcePath = resolve(root, item.source);
  const file = await readFile(sourcePath);
  const contentType =
    mimeTypes.get(extname(sourcePath).toLowerCase()) ?? "application/octet-stream";
  const uploadUrl = `${supabaseUrl.replace(/\/$/, "")}/storage/v1/object/${bucket}/${item.target}`;

  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serviceRoleKey}`,
      apikey: serviceRoleKey,
      "Content-Type": contentType,
      "x-upsert": "true",
    },
    body: file,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Failed to upload ${item.target}: ${response.status} ${message}`);
  }

  console.log(`Uploaded ${item.source} -> ${bucket}/${item.target}`);
}
