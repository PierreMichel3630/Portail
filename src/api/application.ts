import { supabase } from "./supabase";

export const SUPABASE_APPLICATION_TABLE = "portail_application";

export const selectApplications = () =>
  supabase.from(SUPABASE_APPLICATION_TABLE).select();
