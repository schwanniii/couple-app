'use server'; // Das macht diese Datei zu einer sicheren Server Action

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server'; // Hier nutzen wir deine server.js!

export async function login(formData) {
  const supabase = await createClient();

  // Daten aus dem Formular auslesen
  const email = formData.get('email');
  const password = formData.get('password');

  // Login bei Supabase anfragen
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Wenn das Passwort oder die E-Mail falsch ist, leiten wir mit Fehlermeldung um
    redirect('/login?error=true');
  }

  // Cache leeren und den eingeloggten Nutzer auf die Hauptseite schicken
  revalidatePath('/', 'layout');
  redirect('/');
}