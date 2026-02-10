import { Link } from 'react-router-dom';

interface HeroSectionProps {
  heading: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroSection({ heading, body, ctaText, ctaLink, imageSrc, imageAlt }: Readonly<HeroSectionProps>) {
  return (
    <section className="hero content-wrapper">
      <div className="hero__text">
        <h1>{heading}</h1>
        <p>{body}</p>
        <Link to={ctaLink} className="cta-link">{ctaText} →</Link>
      </div>
      {imageSrc && (
        <div className="hero__image">
          <img src={imageSrc} alt={imageAlt || ''} />
        </div>
      )}
    </section>
  );
}
