import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">

        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">E</span>
          <span>Karma Roof Clean Inc.</span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/contact" onClick={closeMenu}>
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