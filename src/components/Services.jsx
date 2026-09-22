import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: "⌂",
    title: "Roof Cleaning",
    text: "Remove moss, algae and buildup with roof-safe cleaning methods.",
    price: "From $399"
  },
  {
    number: "02",
    icon: "✦",
    title: "Roof Revival",
    text: "Help extend the life of aging asphalt shingles with protective treatment.",
    price: "Custom Quote"
  },
  {
    number: "03",
    icon: "◈",
    title: "Window Washing",
    text: "Crystal-clear interior and exterior windows without streaks.",
    price: "From $149"
  },
  {
    number: "04",
    icon: "◆",
    title: "Pressure Washing",
    text: "Refresh driveways, patios, siding, decks and outdoor surfaces.",
    price: "From $199"
  },
  {
    number: "05",
    icon: "▱",
    title: "Gutter Cleaning",
    text: "Clear leaves and debris and keep your drainage system flowing.",
    price: "From $149"
  },
  {
    number: "06",
    icon: "✚",
    title: "Exterior Care",
    text: "Customized cleaning packages for residential and commercial properties.",
    price: "Custom Quote"
  }
];

function Services() {
  return (
    <section className="section services-section" id="services">

      <div className="container">

        <div className="section-heading centered">

          <span className="eyebrow">WHAT WE DO</span>

          <h2>
            Complete exterior care.
            <br />
            <span>One trusted team.</span>
          </h2>

          <p>
            From the roof above you to the driveway beneath your feet,
            we keep your property clean, protected and looking its best.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-top">

                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>

              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className="service-bottom">

                <span>{service.price}</span>

                <Link to="/contact">
                  Get Quote →
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;