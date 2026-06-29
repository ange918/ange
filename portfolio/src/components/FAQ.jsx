import { useState } from 'react';
import { faqs } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section" id="faq">
      <div className="section-header">
        <p className="label">FAQ</p>
        <h2 className="section-title">Questions fréquentes.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div
            className={`faq-item${open === i ? ' open' : ''}`}
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-q">
              <span>{item.q}</span>
              <span className="faq-icon">{open === i ? '−' : '+'}</span>
            </div>
            {open === i && <p className="faq-a">{item.a}</p>}
          </div>
        ))}
      </div>
      <div className="faq-contact">
        <p>Vous avez une autre question ?</p>
        <a href="https://wa.me/229XXXXXXXX" className="faq-link">Écrivez-moi directement →</a>
      </div>
    </section>
  );
}
