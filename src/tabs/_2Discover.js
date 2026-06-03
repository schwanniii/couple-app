'use client';
import { useApp } from '@/context/AppContext';

export default function DiscoverTab() {
  const { appData, updateField } = useApp();

  return (
    <div>
      <p style={{ fontSize: '42px', textAlign: 'center' }}>Naaaaaa 🙃</p>
    </div>
  );
}



// Fragen und Antworten, eigene Fragen stellen.
// auf Supabase-Tabellen zugreifen können testen