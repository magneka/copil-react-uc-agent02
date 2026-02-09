import { Link } from 'react-router-dom';

interface ContactPerson {
  name: string;
  profileLink: string;
  title: string;
  imageSrc: string;
  email: string;
  phone: string;
}

interface ContactCardSectionProps {
  heading: string;
  description: string;
  people: ContactPerson[];
}

export default function ContactCardSection({ heading, description, people }: Readonly<ContactCardSectionProps>) {
  return (
    <div className="content-wrapper section">
    <section className="contact-card">
      <h2>{heading}</h2>
      <p>{description}</p>
      <div className="contact-card__grid">
        {people.map((person) => (
          <div key={person.email} className="person-card">
            <img className="person-card__photo" src={person.imageSrc} alt={person.name} />
            <Link to={person.profileLink} className="person-card__name">
              {person.name} →
            </Link>
            <span className="person-card__title">{person.title}</span>
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <a href={`tel:${person.phone}`}>{person.phone}</a>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
