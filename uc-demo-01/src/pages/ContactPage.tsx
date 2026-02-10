import { useContactPage } from './useContactPage';

export default function ContactPage() {
  const { formData, submitted, handleChange, handleSubmit } = useContactPage();

  return (
    <div className="content-wrapper section">
      <h1>Kontakter</h1>
      <p>
        Har du tilbakemeldinger, spørsmål eller ønsker å komme i kontakt med oss?
        Fyll ut skjemaet under, så hører du fra oss så snart som mulig.
      </p>

      {submitted ? (
        <p style={{ fontWeight: 500, color: 'var(--color-heading)' }}>
          Takk for din melding! Vi tar kontakt snart.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__field">
            <label htmlFor="name">Navn</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">E-post</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">Melding</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-pill">
            Send melding →
          </button>
        </form>
      )}
    </div>
  );
}
