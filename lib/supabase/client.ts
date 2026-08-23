import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  ""

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const SUPABASE_SCHEMA = process.env.NEXT_PUBLIC_SUPABASE_SCHEMA || "kinghouse"

export function createBrowserSupabaseClient() {
  if (!isSupabaseConfigured) {
    return null
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
    db: {
      schema: SUPABASE_SCHEMA,
    },
  })
}

