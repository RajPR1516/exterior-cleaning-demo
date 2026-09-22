import { Link } from "react-router-dom";

const services = [
  {
    title: "Roof Cleaning",
    description:
      "Professional roof cleaning designed to remove moss, algae and accumulated debris while using surface-appropriate methods.",
    features: [
      "Moss and algae removal",
      "Low-pressure cleaning",
      "Property protection",
      "Post-service cleanup"
    ]
  },
  {
    title: "Roof Revival",
    description:
      "A roof maintenance treatment designed to help preserve and extend the useful life of aging asphalt shingles.",
    features: [
      "Shingle conditioning",
      "Protective treatment",
      "Detailed inspection",
      "Maintenance recommendations"
    ]
  },
  {
    title: "Window Washing",
    description:
      "Interior and exterior window cleaning for residential and commercial properties.",
    features: [
      "Interior glass",
      "Exterior glass",
      "Frames and sills",
      "Screen cleaning"
    ]
  },
  {
    title: "Pressure Washing",
    description:
      "Restore outdoor surfaces including driveways, patios, walkways, decks and selected exterior surfaces.",
    features: [
      "Driveways",
      "Walkways",
      "Patios",
      "Decks and siding"
    ]
  },
  {
    title: "Gutter Cleaning",
    description:
      "Remove leaves and debris and help keep your property's drainage system functioning properly.",
    features: [
      "Gutter debris removal",
      "Downspout checks",
      "Cleanup",
      "Maintenance plans"
    ]
  }
];

function ServicesPage() {
  return (
    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">OUR SERVICES</span>

          <h1>
            Exterior care
            <br />
            <span>done properly.</span>
          </h1>

          <p>
            Professional cleaning services for roofs, windows, gutters
            and outdoor surfaces.
          </p>

        </div>

      </section>

      <section className="section service-detail-section">

        <div className="container">

          <div className="service-detail-grid">

            {services.map((service, index) => (
              <article className="service-detail-card" key={service.title}>

                <span className="detail-number">
                  0{index + 1}
                </span>

                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="text-link">
                  Request a Quote →
                </Link>

              </article>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default ServicesPage;