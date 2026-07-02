# Supabase Config

Use these files for Supabase configuration:

- `website-landing/.env.local` for public website read access.
- `sales_admin/.env.local` for private admin write access.

Do not commit real `.env.local` files.

## website-landing/.env.local

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
VITE_SUPABASE_STORAGE_BUCKET=media-library
```

## sales_admin/.env.local

```env
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY
SUPABASE_STORAGE_BUCKET=media-library
```

## Config Modules

- Landing config: `website-landing/src/app/api/supabase-config.ts`
- Admin config: `sales_admin/lib/supabase-config.ts`

The landing app must only use the anon key. The admin app uses the service-role
key only on the server side through Next.js server actions.
