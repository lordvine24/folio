import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      color: '#333',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Oops! Page Not Found</h2>
      <p style={{ marginBottom: '2rem', maxWidth: '400px' }}>
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link 
        to="/" 
        style={{
          textDecoration: 'none',
          color: '#fff',
          backgroundColor: '#007bff',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
