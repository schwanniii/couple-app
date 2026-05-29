'use client';
import { useApp } from '@/context/AppContext';

export default function HomeTab() {
  const { appData, updateField } = useApp();

  return (
    <div>
      <p style={{ fontSize: '42px', textAlign: 'center' }}>Halloi 👋</p>
    </div>
  );
}