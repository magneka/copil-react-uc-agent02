import { useState } from 'react';
import type { ReactNode } from 'react';

interface AccordionItem {
  label: string;
  content: string | ReactNode;
}

interface AccordionSectionProps {
  items: AccordionItem[];
}

export default function AccordionSection({ items }: Readonly<AccordionSectionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={item.label} className="accordion__item">
          <button className="accordion__trigger" onClick={() => toggle(i)}>
            {item.label}
            <span className={`accordion__chevron${openIndex === i ? ' accordion__chevron--open' : ''}`}>
              ▾
            </span>
          </button>
          <div className={`accordion__content${openIndex === i ? ' accordion__content--open' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
