import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo">
  <img 
    src="/favicon.png" 
    alt="Karma Roof Clean Inc. Logo" 
    style={{ 
      width: "100px", 
      height: "100px", 
      objectFit: "contain",
      borderRadius: "8px"
    }}
  />

  <div className="logo-text">
    <strong>Karma Roof Clean Inc.</strong>
    <small>EXTERIOR CARE &amp; RESTORATION</small>
  </div>
</Link>

            <p>
              Professional exterior cleaning designed to keep your
              property looking clean, protected, and cared for.
            </p>

            <div className="footer-rating">
              <strong>★★★★★</strong>
              <span>5.0 Customer Rating</span>
            </div>
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <Link to="/services">Roof Cleaning</Link>
            <Link to="/services">Roof Revival</Link>
            <Link to="/services">Window Washing</Link>
            <Link to="/services">Pressure Washing</Link>
            <Link to="/services">Gutter Cleaning</Link>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <a href="tel:+15555555555">+1 (555) 555-5555</a>
            <a href="mailto:hello@karmaroofclean.com">
              hello@karmaroofclean.com
            </a>
            <span>Victoria, BC</span>
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