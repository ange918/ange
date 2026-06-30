import { useState } from 'react';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projets' },
  { href: '#about',    label: 'À propos' },
  { href: '#contact',  label: 'Contact' },
];

const GridIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="0"  y="0"  width="9" height="9" fill="currentColor"/>
    <rect x="13" y="0"  width="9" height="9" fill="currentColor"/>
    <rect x="0"  y="13" width="9" height="9" fill="currentColor"/>
    <rect x="13" y="13" width="9" height="9" fill="currentColor"/>
  </svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="#0a0a0a"/>
            <text x="5" y="20" fontSize="14" fontWeight="900" fill="white" fontFamily="Helvetica Neue, sans-serif">A</text>
          </svg>
          Ange Akonde
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          {LINKS.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>

        {/* Mobile menu trigger */}
        <button className="menu-trigger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span className="menu-trigger-label">{open ? 'CLOSE' : 'MENU'}</span>
          <GridIcon />
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      <div className={`mobile-drawer${open ? ' mobile-drawer--open' : ''}`}>
        <div className="drawer-top">
          <div className="nav-logo" style={{ color: '#fff' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="#fff"/>
              <text x="5" y="20" fontSize="14" fontWeight="900" fill="#0a0a0a" fontFamily="Helvetica Neue, sans-serif">A</text>
            </svg>
            Ange Akonde
          </div>
          <button className="menu-trigger menu-trigger--light" onClick={close} aria-label="Fermer">
            <span className="menu-trigger-label">CLOSE</span>
            <GridIcon />
          </button>
        </div>

        <ul className="drawer-links">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="drawer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </>
  );
}
