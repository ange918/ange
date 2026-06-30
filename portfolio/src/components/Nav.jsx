import { useState } from 'react';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projets' },
  { href: '#about',    label: 'À propos' },
  { href: '#contact',  label: 'Contact' },
];

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

        {/* Burger button — mobile only */}
        <button
          className={`burger${open ? ' burger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? ' mobile-drawer--open' : ''}`}>
        <ul>
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {open && <div className="drawer-backdrop" onClick={close} />}
    </>
  );
}
