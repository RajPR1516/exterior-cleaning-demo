import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setOpen(false);
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <header className="navbar-wrapper">
      {/* Top Utility Bar for Local SEO & Instant Call Conversion */}
      <div className="nav-top-bar" style={{ fontSize: "0.85rem", padding: "0.35rem 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <span>📍 Serving Metro Vancouver &amp; Fraser Valley, BC</span>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="tel:+17782290939" style={{ textDecoration: "none", color: "inherit", fontWeight: "600" }}>
              📞 (778) 229-0939
            </a>
            <span aria-hidden="true">|</span>
            <a href="tel:+16047711804" style={{ textDecoration: "none", color: "inherit", fontWeight: "600" }}>
              (604) 771-1804
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="logo" onClick={closeMenu} title="Karma Roof Clean Inc. Home">
            <img
              src="/favicon.png"
              alt="Karma Roof Clean Inc. Logo - Exterior Cleaning British Columbia"
              width="100"
              height="100"
              loading="eager"
              fetchpriority="high"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                display: "block",
                borderRadius: "6px",
              }}
            />
            <div className="logo-text">
              <strong>Karma Roof Clean Inc.</strong>
              <small>EXTERIOR CARE</small>
            </div>
          </Link>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            type="button"
          >
            {open ? "✕" : "☰"}
          </button>

          <nav
            className={open ? "nav-links open" : "nav-links"}
            aria-label="Main Navigation"
          >
            <Link to="/" className={isActive("/")} onClick={closeMenu}>
              Home
            </Link>

            <Link to="/services" className={isActive("/services")} onClick={closeMenu}>
              Services
            </Link>

            <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
              About
            </Link>

            <Link to="/gallery" className={isActive("/gallery")} onClick={closeMenu}>
              Transformations
            </Link>

            <Link to="/contact" className={isActive("/contact")} onClick={closeMenu}>
              Contact
            </Link>

            <Link
              to="/contact"
              className="nav-cta"
              onClick={closeMenu}
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;