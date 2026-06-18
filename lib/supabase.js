import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export async function getWebsiteGenerationById(id) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("website_generations")
    .select("*, leads(display_name, primary_category, primary_phone, primary_website)")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  if (!data?.lead_id) return data;

  const { data: locations, error: locationsError } = await supabase
    .from("lead_locations")
    .select("*")
    .eq("lead_id", data.lead_id)
    .order("created_at", { ascending: true });

  if (locationsError) throw locationsError;
  return {
    ...data,
    lead_locations: locations || []
  };
}
