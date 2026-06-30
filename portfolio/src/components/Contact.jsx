import { useState } from 'react';

const WA_NUMBER = '22900000000'; // à remplacer par ton vrai numéro

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Bonjour, je suis ${form.name}.\n\n${form.message}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section className="section" id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="label">Contact</p>
          <h2 className="section-title">Prêt à construire<br/>avec moi ?</h2>
          <p className="contact-sub">Décrivez votre projet en quelques mots. Je réponds sous 24h.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom</label>
            <input
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Décrivez votre projet..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Envoyer sur WhatsApp →</button>
        </form>
      </div>
    </section>
  );
}
