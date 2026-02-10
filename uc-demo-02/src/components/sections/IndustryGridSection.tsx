import type { ReactNode } from 'react';

interface IndustryItem {
  title: string;
  description: string | ReactNode;
}

interface IndustryGridSectionProps {
  heading: string;
  intro: string;
  industries: IndustryItem[];
}

export default function IndustryGridSection({ heading, intro, industries }: Readonly<IndustryGridSectionProps>) {
  return (
    <section className="industry-grid content-wrapper section">
      <h2>{heading}</h2>
      <p>{intro}</p>
      <div className="industry-grid__cards">
        {industries.map((item) => (
          <div key={item.title} className="industry-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
