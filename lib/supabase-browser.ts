import { createBrowserClient } from "@supabase/ssr";

// Returns a browser Supabase client. createBrowserClient is internally
// a singleton so calling this multiple times is safe.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Convenience singleton for components that import { supabase }
export const supabase = createClient();
