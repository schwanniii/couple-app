import { login } from './actions';

export default function LoginPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>❤️ Couple App Login</h2>
        <form style={styles.form}>
          <label htmlFor="email" style={styles.label}>E-Mail-Adresse</label>
          <input id="email" name="email" type="email" required style={styles.input} />

          <label htmlFor="password" style={styles.label}>Passwort</label>
          <input id="password" name="password" type="password" required style={styles.input} />

          {/* formAction sorgt dafür, dass die Server Action direkt aufgerufen wird */}
          <button formAction={login} style={styles.button}>Einloggen</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#dde8b9', fontFamily: 'sans-serif' },
  card: { backgroundColor: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', width: '90%', maxWidth: '400px', textAlign: 'center' },
  title: { marginBottom: '1.5rem', color: '#333' },
  form: { display: 'flex', flexDirection: 'column', textAlign: 'left' },
  label: { marginBottom: '0.5rem', fontSize: '14px', color: '#666' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '1.5rem', fontSize: '16px' },
  button: { padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#C8AEB1', color: '#fff', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }
};