import { projects } from '../data/content';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <p className="label">Projets</p>
        <h2 className="section-title">Travaux sélectionnés.</h2>
      </div>
      <div className="projects-list">
        {projects.map((p) => (
          <a className="project-row" key={p.num} href={p.link}>
            <div className="project-meta">
              <span className="project-num">{p.num}</span>
              {p.tag && <span className="project-tag">{p.tag}</span>}
            </div>
            <div className="project-info">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              {p.stack && (
                <div className="project-stack">
                  {p.stack.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                </div>
              )}
            </div>
            <div className="project-thumb">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <span className="project-arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
