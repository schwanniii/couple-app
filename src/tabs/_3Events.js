'use client';
import { useApp } from '@/context/AppContext';

export default function EventsTab() {
  const { appData, updateField } = useApp();

  return (
    <div>
      <p style={{ fontSize: '42px', textAlign: 'center' }}>Wie geht es dir? 🥰</p>
    </div>
  );
}



// return <p>Eure Jahrestage und Dates auf einen Blick.</p>;