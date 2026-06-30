import { skills, stats } from '../data/content';

export default function Skills() {
  return (
    <section className="section section-skills">
      <div className="section-header">
        <p className="label">Compétences</p>
        <h2 className="section-title">Ma stack technique.</h2>
      </div>
      <div className="skills-track-wrap">
        <div className="skills-track">
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="skill-pill">{s}</span>
          ))}
        </div>
      </div>
      <div className="stats-row">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
