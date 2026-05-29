// 'use client';
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        // Hier fordern wir die von Supabase gewünschten Methoden explizit an:
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Das fängt Fehler ab, wenn die Funktion aus einer Server Component 
            // aufgerufen wird, die keine Cookies schreiben darf.
          }
        },
      },
    }
  )
}