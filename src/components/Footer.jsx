import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top footer-5-col">
          {/* Column 1: Brand & About */}
          <div className="footer-column footer-brand">
            <Link to="/" className="logo footer-logo">
              <div className="logo-text">
                <strong style={{ fontSize: "20px" }}>Karma Roof Clean Inc.</strong>
                <small style={{ letterSpacing: "1.5px" }}>EXTERIOR CARE</small>
              </div>
            </Link>
            <p>
              Professional exterior cleaning designed to keep your
              property looking clean, protected, and cared for.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-column">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h4>Services</h4>
            <Link to="/services">Roof Cleaning</Link>
            <Link to="/services">Roof Revival</Link>
            <Link to="/services">Window Washing</Link>
            <Link to="/services">Pressure Washing</Link>
            <Link to="/services">Gutter Cleaning</Link>
          </div>

          {/* Column 4: Badges & Trust Banner */}
          <div className="footer-column footer-badges">
            <h4>Guaranteed</h4>
            <div className="banner-wrapper">
              <img
                src="/ratinglogo.jpeg"
                alt="Licensed, Insured, 5-Star Rated, 2 Year Warranty - Karma Roof Clean Inc."
                className="footer-trust-banner"
              />
            </div>
            <span className="badge-subtitle">Fully Licensed &amp; WorkSafeBC Covered</span>
          </div>

          {/* Column 5: Contact */}
          <div className="footer-column footer-contact">
            <h4>Contact</h4>
            <a href="tel:+16047711804">+1 (604) 771-1804</a>
            <a href="tel:+17782290939">+1 (778) 229-0939</a>
            <a href="mailto:contact@karmaroofcleaninc.com">
              contact@karmaroofcleaninc.com
            </a>
            <span>Vancouver, BC</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Karma Roof Clean Inc. All rights reserved.
          </span>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;