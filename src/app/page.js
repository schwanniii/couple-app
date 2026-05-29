// KEIN 'use client' hier oben! Wir prüfen den Login auf dem Server.
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { AppProvider } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';

import HomeTab from '@/tabs/_1Home';
import DiscoverTab from '@/tabs/_2Discover';
import EventsTab from '@/tabs/_3Events';
import NotificationsTab from '@/tabs/_4Notifications';
import SettingsTab from '@/tabs/_5Settings';

function AppContent({ tabId }) {
  switch (tabId) {
    case 0: return <HomeTab />;
    case 1: return <DiscoverTab />;
    case 2: return <EventsTab />;
    case 3: return <NotificationsTab />;
    case 4: return <SettingsTab />;
    default: return <p>Seite nicht gefunden.</p>;
  }
}

export default async function Home() {
  const supabase = await createClient();

  // 1. Prüfen, ob ein Nutzer eingeloggt ist
  const { data: { user } } = await supabase.auth.getUser();

  // 2. Wenn nicht eingeloggt, sofort ab zur Login-Seite!
  if (!user) {
    redirect('/login');
  }

  // 3. Wenn eingeloggt, wird die App normal gerendert
  return (
    <AppProvider>
      <MainLayout>
        {(tabId) => <AppContent tabId={tabId} />}
      </MainLayout>
    </AppProvider>
  );
}