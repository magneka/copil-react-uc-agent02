import { Link } from 'react-router-dom';

interface FeatureStoryCardProps {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  imagePosition?: 'left' | 'right';
}

export default function FeatureStoryCard({
  imageSrc,
  imageAlt,
  heading,
  body,
  ctaText,
  ctaLink,
  imagePosition = 'left',
}: Readonly<FeatureStoryCardProps>) {
  const className = `feature-story${imagePosition === 'right' ? ' feature-story--image-right' : ''}`;

  return (
    <section className={`${className} content-wrapper section`}>
      <div className="feature-story__image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="feature-story__text">
        <h2>{heading}</h2>
        <p>{body}</p>
        <Link to={ctaLink} className="cta-link">{ctaText} →</Link>
      </div>
    </section>
  );
}
