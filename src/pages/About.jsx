import { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  // Update document title, meta tags, and canonical tag for Canadian SEO
  useEffect(() => {
    document.title = "About EverWash | Professional Exterior Cleaners in Canada";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Learn about EverWash, Canada's trusted exterior property maintenance team. Over 10 years specializing in soft roof washing, gutter clearing, window cleaning, and pressure washing.";

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.everwash.ca/about";

    // Inject AboutPage + LocalBusiness JSON-LD Schema
    const scriptId = "about-page-schema";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About EverWash Exterior Cleaning",
        "description": "Professional Canadian exterior property maintenance and washing services.",
        "url": "https://www.everwash.ca/about",
        "mainEntity": {
          "@type": "HomeAndConstructionBusiness",
          "name": "EverWash Exterior Cleaning",
          "url": "https://www.everwash.ca/",
          "areaServed": {
            "@type": "Country",
            "name": "Canada"
          },
          "knowsAbout": [
            "Soft Wash Roof Cleaning",
            "Gutter Debris Removal",
            "Residential Window Washing",
            "Commercial Pressure Washing",
            "Efflorescence and Salt Removal"
          ]
        }
      });
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="inner-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ABOUT EVERWASH CANADA</span>
          <h1>
            People who care
            <br />
            <span>about the work.</span>
          </h1>
          <p>
            A dedicated Canadian exterior cleaning company built around quality workmanship,
            specialized equipment, and reliable property care tailored to our climate.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-card">
              <strong>10+</strong>
              <span>Years Serving Canadian Communities</span>
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow">OUR STORY & VALUES</span>
            <h2>
              Built on hard work,
              <br />
              <span>quality, and trust.</span>
            </h2>

            <p>
              EverWash started with a straightforward vision: provide commercial-grade exterior
              cleaning and property protection without confusing quotes or hidden fees.
            </p>

            <p>
              Canadian weather is notoriously demanding on building envelopes. From damp,
              moss-accumulating autumns to harsh winter salt residue and heavy freeze-thaw cycles,
              exterior maintenance is essential for preserving property value.
            </p>

            <p>
              Today our trained and insured crew works with residential homeowners, strata councils,
              and commercial managers to restore roofs, windows, gutters, siding, and driveways.
              We use eco-conscious detergents safe for northern landscaping, along with regulated
              low-pressure soft washing techniques that preserve your building materials.
            </p>

            {/* Credibility & Local Proof Badges */}
            <div className="about-trust-highlights">
              <ul>
                <li>✓ 100% Insured & Safety-Compliant Workmanship</li>
                <li>✓ Low-Pressure Soft Wash Systems (Zero Shingle Damage)</li>
                <li>✓ Eco-Friendly, Biodegradable Cleaning Solutions</li>
              </ul>
            </div>

            {/* Performance Metrics */}
            <div className="about-stats">
              <div>
                <strong>1,000+</strong>
                <span>Properties Restored</span>
              </div>
              <div>
                <strong>5.0★</strong>
                <span>Client Satisfaction</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>Fast Quote Turnaround</span>
              </div>
            </div>

            <Link to="/contact" className="btn btn-dark">
              Request a Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;