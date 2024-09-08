import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ssdqnlncmougkugzxdrw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzZHFubG5jbW91Z2t1Z3p4ZHJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4MTA1MTAsImV4cCI6MjA0MTM4NjUxMH0.FJoHDzImAQpXvfYwiAbys1T-TeoZqfP_zJ2ZpxujH1M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
