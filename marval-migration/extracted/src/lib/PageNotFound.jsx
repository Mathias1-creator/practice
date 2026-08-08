import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem' }}>404</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#555' }}>
        Sorry, we couldn&apos;t find that page.
      </p>
      <Link
        to="/"
        style={{
          padding: '0.75rem 1.5rem',
          borderRadius: '6px',
          background: '#1a1a1a',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
