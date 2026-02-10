import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  imageSrc: string;
  imageAlt: string;
  clientName: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  direction?: 'text-left' | 'text-right';
}

export default function CaseStudyCard({
  imageSrc,
  imageAlt,
  clientName,
  description,
  ctaText,
  ctaLink,
  direction = 'text-left',
}: Readonly<CaseStudyCardProps>) {
  const className = `case-study${direction === 'text-right' ? ' case-study--text-right' : ''}`;

  return (
    <div className={className}>
      <div className="case-study__panel">
        <h2>{clientName}</h2>
        <p>{description}</p>
        <Link to={ctaLink} className="cta-link">{ctaText} →</Link>
      </div>
      <div className="case-study__image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
}
