import { Link } from 'react-router-dom';

interface CtaBannerSectionProps {
  heading: string;
  body: string;
  ctaText: string;
  ctaLink: string;
}

export default function CtaBannerSection({ heading, body, ctaText, ctaLink }: Readonly<CtaBannerSectionProps>) {
  return (
    <section className="cta-banner content-wrapper section">
      <h2>{heading}</h2>
      <p>{body}</p>
      <Link to={ctaLink} className="btn-pill">{ctaText} →</Link>
    </section>
  );
}
