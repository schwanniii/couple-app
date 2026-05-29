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



// return <p>Fragen und Antworten, eigene Fragen stellen.
// </p>;