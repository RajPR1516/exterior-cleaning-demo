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
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/favicon.png"
            alt="Karma Roof Clean Inc. Logo"
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
            <small>EXTERIOR CARE </small>
          </div>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <Link to="/" className={isActive("/")} onClick={closeMenu}>
            Home
          </Link>

          <Link to="/services" className={isActive("/services")} onClick={closeMenu}>
            Services
          </Link>

          <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
            About
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
    </header>
  );
}

export default Navbar;