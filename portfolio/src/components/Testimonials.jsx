import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section className="section section-dark">
      <div className="section-header">
        <p className="label light">Témoignages</p>
        <h2 className="section-title light">Ce que disent<br/>les clients.</h2>
      </div>
      <div className="testimonials-list">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p className="testimonial-quote">"{t.quote}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.initial}</div>
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
              <div className="testimonial-stars">★★★★★</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
