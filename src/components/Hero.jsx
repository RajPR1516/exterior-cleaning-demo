import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          TRUSTED EXTERIOR CARE
        </div>

        <h1>
          Clean Outside.
          <br />
          <span>Protect What Matters.</span>
        </h1>

        <p>
          Professional roof cleaning, moss removal, pressure washing,
          window cleaning and gutter care for homes and businesses.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">
            Get My Free Quote
            <span>→</span>
          </Link>

          <a href="tel:+16047711804" className="btn btn-outline">
            <span className="phone-icon">☎</span>
            Call Us
          </a>
        </div>

        <div className="hero-trust">
          <div className="hero-trust-badge">
            <img
              src="/ratinglogo.jpeg"
              alt="Licensed, Insured, 5-Star Rated, WorkSafeBC"
              className="trust-banner-img"
            />
          </div>

          <div className="trust-divider"></div>

          <div className="hero-trust-rating">
            <strong>5.0</strong>
            <span>★★★★★</span>
            <small>Customer Rating</small>
          </div>
        </div>
      </div>

      <div className="hero-bottom-wave"></div>
    </section>
  );
}

export default Hero;