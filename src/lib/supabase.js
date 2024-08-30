import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ckinuniegvbwoqebvtum.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNraW51bmllZ3Zid29xZWJ2dHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5OTM4NTQsImV4cCI6MjA0MDU2OTg1NH0.CILi0sceIFWjPfDQOLESLseLUHg6nB_tPehGI2MC0HQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
