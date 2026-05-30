'use client';
import { useApp } from '@/context/AppContext';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function SettingsTab() {
  const [userEmail, setUserEmail] = useState('');
  const supabase = createClient();
  const { appData, updateField } = useApp();

  useEffect(() => {
    async function getUserData() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUserEmail(user.email);
    }
  }

    getUserData();
  }, []);


  return (
    <div>
      <div>
        <p style={{ fontSize: '42px', textAlign: 'center' }}>Jaaaaaaaaa aaaaaaaaaa 💟🥰💌</p>
      </div>
      <p style={{ fontSize: '16px', textAlign: 'center', paddingTop: '150px' }}>Eingeloggt als: <strong>{userEmail}</strong></p>
    </div>
  );
}



// sachen wie Profil.