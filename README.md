# Consult4Sales Website

A React and Vite website for Consult4Sales, a sales consulting and training brand. The site includes the main marketing homepage, service pages, case studies, pricing, careers, team profiles, and dynamic resource pages for courses, blogs, and downloads.

## Tech Stack

- React 18
- Vite 6
- TypeScript
- Tailwind CSS 4
- React Router
- Motion / Framer Motion
- Radix UI, MUI, Lucide icons, Sonner, Recharts
- Supabase REST and Storage for dynamic resources

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL, usually:

```text
http://localhost:5173/
```

Build for production:

```bash
npm run build
```

The production build is generated in `dist/`.

## Environment Variables

Dynamic courses, blogs, downloads, and media are loaded from Supabase when public configuration is available. Create a local environment file and add:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
VITE_SUPABASE_STORAGE_BUCKET=media-library
```

Do not commit real `.env.local` files or service-role keys. The website should only use the Supabase anon key.

## Available Scripts

```bash
npm run dev
```

Runs the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run upload:media
```

Uploads storage media using `api/upload-storage-media.mjs`.

## App Routes

The main route definitions live in `src/app/App.tsx`.

- `/` - Homepage
- `/sales-consultant-india` - Sales consultant page
- `/top-sales-trainer` - Top sales trainer page
- `/core-team` - Core team page
- `/career` - Careers page
- `/pricing` - Pricing page
- `/gap-analysis` - Gap analysis page
- `/learning-outcome` - Learning outcome page
- `/outcome-tracking` - Outcome tracking page
- `/case-studies/:slug` - Case study detail page
- `/courses` and `/courses/:slug` - Courses
- `/blogs` and `/blogs/:slug` - Blogs
- `/downloads` and `/downloads/:slug` - Downloads

Unknown routes fall back to the homepage.

## Project Structure

```text
api/
  Supabase schema, seed data, media upload scripts, and setup notes
public/
  Static hosting files such as redirects
src/
  app/
    api/         Supabase client helpers and dynamic content types
    assets/      Local app assets
    components/  Reusable page sections and UI components
    hooks/       React hooks
    pages/       Route-level pages
    App.tsx      Router and page composition
  imports/       Figma/imported component output
  styles/        Global styles, fonts, theme, and Tailwind entry files
  main.tsx       React entry point
```

## Supabase Setup

Supabase schema, seed files, and media manifests are in `api/`.

Useful files:

- `api/SUPABASE_SETUP.md`
- `api/supabase-schema.sql`
- `api/consult4sales-live-seed.sql`
- `api/seed-dynamic-content.json`
- `api/storage-media-manifest.json`

The frontend reads published rows from the `courses`, `blogs`, `downloads`, and `settings` tables through Supabase REST endpoints.

## Deployment Notes

This is a static Vite app. Any static hosting provider that can serve `dist/` should work.

The repo includes:

- `public/_redirects` for SPA fallback support on hosts such as Netlify
- `public/.htaccess` for Apache-style routing support
- `vercel.json` for Vercel deployment configuration

After deployment, configure the same `VITE_SUPABASE_*` variables in the hosting provider environment.

## Dependency Resolution Note

`vite.config.ts` includes explicit aliases for `react-router` and `motion-dom`. They point Vite to existing CommonJS builds because the installed package metadata references ESM files that are not present in the local install. Keep these aliases unless the affected dependencies are upgraded or reinstalled in a way that restores their advertised ESM entry files.

## Design Origin

The project began from a Figma Make export and has been adapted into the Consult4Sales website.

Original design reference:

<https://www.figma.com/design/L7HPNTK57O6fbxWvltoQUG/Design-Landing-Page-UI>
