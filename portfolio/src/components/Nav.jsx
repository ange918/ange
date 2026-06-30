export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="6" fill="#0a0a0a"/>
          <text x="5" y="20" fontSize="14" fontWeight="900" fill="white" fontFamily="Helvetica Neue, sans-serif">A</text>
        </svg>
        Ange Akonde
      </div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
