import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = 'https://qxgdsdhflozqevvjrxxx.supabase.co'

const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4Z2RzZGhmbG96cWV2dmpyeHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjk4NzMsImV4cCI6MTk4Mzc0NTg3M30.aeAeh0IAgAbt2zHtCJB0tK7aBIlTcOaU2keYCLFhc1w'

const supabase = createClient(PROJECT_URL, PUBLIC_KEY)
export function videoService() {
  return {
    getAllVideos() {
      return supabase.from('video').select('*')
    }
  }
}
