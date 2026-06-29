import { services } from '../data/content';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="section-header">
        <p className="label">Services</p>
        <h2 className="section-title">Ce que je réalise</h2>
        <p className="section-sub">Des solutions digitales sur mesure pour vos projets.</p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <span className="service-num">0{i + 1}</span>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
