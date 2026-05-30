// KEIN 'use client' hier oben! Wir prüfen den Login auf dem Server.
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { AppProvider } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';

export default async function Home() {
  const supabase = await createClient();

  // 1. Prüfen, ob ein Nutzer eingeloggt ist
  const { data: { user } } = await supabase.auth.getUser();

  // 2. Wenn nicht eingeloggt, sofort ab zur Login-Seite!
  if (!user) {
    redirect('/login');
  }

  // 3. Wenn eingeloggt, rendern wir das Layout.
  // Die Tabs importieren wir jetzt direkt im MainLayout, wo sie gebraucht werden!
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}


//test