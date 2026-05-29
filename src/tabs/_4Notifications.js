'use client';
import { useApp } from '@/context/AppContext';

export default function NotificationsTab() {
  const { appData, updateField } = useApp();

  return (
    <div>
      <p style={{ fontSize: '42px', textAlign: 'center' }}>mariekig? 🥺</p>
    </div>
  );
}



// falls jemand eine Frage stellt oder auf eine antwortet oder einen Termin einträgt.