import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top footer-5-col">
          {/* Column 1: Brand & About */}
          <div className="footer-column footer-brand">
            <Link to="/" className="logo footer-logo" title="Karma Roof Clean Inc. Homepage">
              <div className="logo-text">
                <strong style={{ fontSize: "20px" }}>Karma Roof Clean Inc.</strong>
                <small style={{ letterSpacing: "1.5px" }}>EXTERIOR CARE</small>
              </div>
            </Link>
            <p>
              Professional residential and strata exterior cleaning across Metro Vancouver
              and the Fraser Valley. Protecting Canadian homes with soft wash technology and
              streak-free surface care.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <nav className="footer-column" aria-label="Footer Quick Links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/services">All Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/gallery">Transformations</Link>
            <Link to="/contact">Get Free Quote</Link>
          </nav>

          {/* Column 3: Services (Keyword-Enriched Internal Anchors) */}
          <nav className="footer-column" aria-label="Footer Services">
            <h4>Exterior Services</h4>
            <Link to="/services">Roof Cleaning &amp; Moss Removal</Link>
            <Link to="/services">Roof Revival &amp; Shingle Care</Link>
            <Link to="/services">Window Washing &amp; Glass Care</Link>
            <Link to="/services">Pressure Washing &amp; Concrete Care</Link>
            <Link to="/services">Gutter Cleaning &amp; Downspouts</Link>
          </nav>

          {/* Column 4: Badges & Trust Banner */}
          <div className="footer-column footer-badges">
            <h4>Our Guarantee</h4>
            <div className="banner-wrapper">
              <img
                src="/ratinglogo.jpeg"
                alt="5-Star Rated, 2-Year Warranty, Fully Licensed & Insured - Karma Roof Clean Inc."
                className="footer-trust-banner"
                loading="lazy"
                width="220"
                height="80"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
            <span className="badge-subtitle">Fully Licensed &amp; WorkSafeBC Covered</span>
          </div>

          {/* Column 5: Contact / Semantic Address */}
          <div className="footer-column footer-contact">
            <h4>Local Contact</h4>
            <address style={{ fontStyle: "normal" }}>
              <div>
                <a href="tel:+16047711804" aria-label="Call 604 771 1804">
                  +1 (604) 771-1804
                </a>
              </div>
              <div>
                <a href="tel:+17782290939" aria-label="Call 778 229 0939">
                  +1 (778) 229-0939
                </a>
              </div>
              <div>
                <a href="mailto:contact@karmaroofcleaninc.com">
                  contact@karmaroofcleaninc.com
                </a>
              </div>
              <p style={{ marginTop: "0.5rem", marginBottom: 0 }}>
                Metro Vancouver &amp; Fraser Valley, BC
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom">
          <span>
            © {currentYear} Karma Roof Clean Inc. All rights reserved. British Columbia, Canada.
          </span>
          <div>
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;