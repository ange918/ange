import { whyMe } from '../data/content';

export default function WhyMe() {
  return (
    <section className="section section-dark" id="about">
      <div className="section-header">
        <p className="label light">Pourquoi moi</p>
        <h2 className="section-title light">Pourquoi me faire<br/>appel pour votre<br/>projet ?</h2>
      </div>
      <div className="whyme-grid">
        {whyMe.map((item) => (
          <div className="whyme-card" key={item.num}>
            <span className="whyme-num">{item.num}</span>
            <h3 className="whyme-title">{item.title}</h3>
            <p className="whyme-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
