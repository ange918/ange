export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="#0a0a0a"/>
            <text x="5" y="20" fontSize="14" fontWeight="900" fill="white" fontFamily="Helvetica Neue, sans-serif">A</text>
          </svg>
          <span>Ange Akonde</span>
        </div>
        <nav className="footer-nav">
          <a href="#services">Services</a>
          <a href="#projects">Projets</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© BigSixteen 2026. Tous droits réservés.</span>
        <span>Cotonou, Bénin</span>
      </div>
    </footer>
  );
}
