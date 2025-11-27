import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://uuzpxkhgdupippcflpys.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1enB4a2hnZHVwaXBwY2ZscHlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzMjY3ODAsImV4cCI6MjA3NTkwMjc4MH0.7Bp7IoS-b6qYBqnWnsW3BxlVHZHKkKzi3FyzghIbiWo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
