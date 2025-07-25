import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Client-side Supabase client (safe for browser)
export const supabaseBrowser = createClient(supabaseUrl, supabaseAnonKey);

// Server-side Supabase client (use only on the server, e.g. in server components, API routes, or getServerSideProps)
export const supabaseServer = () => {
  return createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });
}; 