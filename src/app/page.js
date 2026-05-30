import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { AppProvider } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';

export default async function Home() {
  try {
    const supabase = await createClient();

    // Falls die Umgebungsvariablen komplett leer sind, werfen wir manuell einen Fehler
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      throw new Error("Supabase URL fehlt in den Umgebungsvariablen!");
    }

    // 1. Prüfen, ob ein Nutzer eingeloggt ist
    const { data: { user }, error } = await supabase.auth.getUser();

    // 2. Wenn nicht eingeloggt oder Fehler, ab zur Login-Seite
    if (error || !user) {
      redirect('/login');
    }

    // 3. Wenn eingeloggt, wird die App normal gerendert
    return (
      <AppProvider>
        <MainLayout />
      </AppProvider>
    );

  } catch (e) {
    console.error("KRITISCHER FEHLER IM SERVER-BUILD:", e.message);
    
    // FALLBACK: Wenn irgendetwas auf dem Server schiefgeht, 
    // zwingen wir Vercel, den Nutzer auf /login zu schicken, statt ein 404 anzuzeigen!
    redirect('/login');
  }
}