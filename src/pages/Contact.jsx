import { useEffect } from "react";
import QuoteForm from "../components/QuoteForm";

function Contact() {
  // Update document title, meta tags, and canonical URL for Canadian Local SEO
  useEffect(() => {
    document.title = "Contact EverWash | Free Exterior Cleaning Estimate Canada";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Request a free, no-obligation exterior cleaning quote with EverWash. Trusted Canadian roof cleaning, window washing, gutter maintenance, and pressure washing services.";

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.everwash.ca/contact";

    // Inject ContactPage JSON-LD Schema
    const scriptId = "contact-page-schema";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact EverWash Exterior Cleaning",
        "url": "https://www.everwash.ca/contact",
        "description": "Get in touch with EverWash for exterior cleaning quotes and inquiries across Canada.",
        "mainEntity": {
          "@type": "HomeAndConstructionBusiness",
          "name": "EverWash Exterior Cleaning",
          "url": "https://www.everwash.ca/",
          "telephone": "+1-800-555-0199",
          "email": "info@everwash.ca",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
            "addressLocality": "Toronto",
            "addressRegion": "ON",
            "postalCode": "M5V 2T6",
            "addressCountry": "CA"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Canada"
          },
          "openingHours": "Mo-Sa 08:00-18:00"
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
      {/* Hero Header */}
      <section className="page-hero contact-page-hero">
        <div className="container">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1>
            Let's talk about
            <br />
            <span>your property.</span>
          </h1>
          <p>
            Request your free, fast, and no-obligation exterior cleaning estimate.
            Proudly serving residential and commercial properties across Canada.
          </p>
        </div>
      </section>

      {/* Direct Contact & Trust Band */}
      <section className="section contact-details-section">
        <div className="container">
          <div className="contact-quick-info" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", marginBottom: "2rem" }}>
            <div>
              <h3>Fast Phone Estimates</h3>
              <p>Prefer to speak with an exterior specialist directly?</p>
              <a href="tel:+18005550199" className="contact-phone-link" style={{ fontWeight: "bold" }}>
                📞 (800) 555-0199
              </a>
            </div>
            <div>
              <h3>Operating Hours</h3>
              <p>Monday – Saturday: 8:00 AM – 6:00 PM</p>
              <p>Sunday: Closed (Emergency dispatch available)</p>
            </div>
            <div>
              <h3>Service Coverage</h3>
              <p>Residential homes, strata complexes, and commercial properties.</p>
              <p>Fast turnaround on all online quote submissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Component */}
      <QuoteForm />
    </div>
  );
}

export default Contact;