import { steps } from '../data/content';

export default function Process() {
  return (
    <section className="section section-dark">
      <div className="section-header">
        <p className="label light">Comment je travaille</p>
        <h2 className="section-title light">Les étapes<br/>d'un projet.</h2>
      </div>
      <div className="process-list">
        {steps.map((s) => (
          <div className="process-row" key={s.num}>
            <span className="process-num">{s.num}</span>
            <span className="process-phase">{s.phase}</span>
            <div className="process-content">
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="process-cta">
        <a href="#contact" className="btn-primary-light">Démarrer un projet →</a>
        <p className="process-cta-sub">Première consultation gratuite</p>
      </div>
    </section>
  );
}
