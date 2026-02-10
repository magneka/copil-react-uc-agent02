interface ServiceItem {
  icon: string;
  label: string;
}

interface ServiceCardsSectionProps {
  heading: string;
  description: string;
  services: ServiceItem[];
}

export default function ServiceCardsSection({ heading, description, services }: Readonly<ServiceCardsSectionProps>) {
  return (
    <div className="content-wrapper section">
      <section className="service-cards">
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className="service-cards__grid">
          {services.map((service) => (
            <div key={service.label} className="service-card">
              <img src={service.icon} alt={service.label} />
              <h3>{service.label}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
