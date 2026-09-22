import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <Link to="/" className="logo footer-logo">

              <div className="logo-mark">
                <span>EW</span>
              </div>

              <div className="logo-text">
                <strong>EverWash</strong>
                <small>EXTERIOR CLEANING</small>
              </div>

            </Link>

            <p>
              Professional exterior cleaning designed to keep your
              property looking clean, protected and cared for.
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

            <a href="tel:+15555555555">
              +1 (555) 555-5555
            </a>

            <a href="mailto:hello@everwash.com">
              hello@everwash.com
            </a>

            <span>Victoria, BC</span>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} EverWash Exterior Cleaning.
            All rights reserved.
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