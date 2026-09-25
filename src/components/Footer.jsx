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
    <small>EXTERIOR CARE</small>
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
            <a href="tel:+16047711804">+1 (604)771-1804</a>
            <a href="tel:+17782290939">+1 (778)229-0939</a>
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