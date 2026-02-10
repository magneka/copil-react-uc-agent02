import { Link } from 'react-router-dom';

interface ValueItem {
  title: string;
  description: string;
}

interface ValuesGridSectionProps {
  heading: string;
  values: ValueItem[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ValuesGridSection({ heading, values, ctaText, ctaLink }: Readonly<ValuesGridSectionProps>) {
  return (
    <section className="values-grid content-wrapper section">
      <h2>{heading}</h2>
      <div className="values-grid__cards">
        {values.map((value) => (
          <div key={value.title} className="value-card">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
      {ctaText && ctaLink && (
        <Link to={ctaLink} className="cta-link">{ctaText} →</Link>
      )}
    </section>
  );
}
