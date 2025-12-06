import React from 'react';
import { Link } from 'react-router-dom';

export default function ChooseRegister() {
  return (
    <div className="centered-container">
      <div className="blur-bg"></div>
      <div className="form-box" style={{textAlign: 'center', padding: '2rem 1.5rem'}}>
        <div style={{fontSize: '2.2rem', marginBottom: '0.5rem', color: 'var(--color-accent)'}}>
          <span role="img" aria-label="food">🍽️</span>
        </div>
        <div className="form-title" style={{marginBottom: '1.2rem', fontSize: '1.5rem', fontWeight: 600}}>Welcome to Swiggy Reels</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.7rem', margin: '1.2rem 0'}}>
          <Link to="/user/register">
            <button type="button" style={{width: '100%', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: 'var(--border-radius)', padding: '0.8rem 0', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', marginBottom: '0.2rem'}}>Register as User</button>
          </Link>
          <Link to="/foodpartner/register">
            <button type="button" style={{width: '100%', background: 'var(--color-accent)', color: '#fff', border: 'none', borderRadius: 'var(--border-radius)', padding: '0.8rem 0', fontSize: '1rem', fontWeight: 600, cursor: 'pointer'}}>Register as Food Partner</button>
          </Link>
        </div>
        <div style={{marginTop: '0.8rem', fontSize: '0.98rem', color: 'var(--color-text)'}}>Already registered?<br />
          <Link className="form-link" style={{display: 'inline', fontWeight: 500}} to="/user/login">Login as User</Link> | <Link className="form-link" style={{display: 'inline', fontWeight: 500}} to="/foodpartner/login">Login as Partner</Link>
        </div>
      </div>
    </div>
  );
}
