import { useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: "⌂",
    title: "Roof Cleaning & Moss Removal",
    schemaType: "RoofCleaning",
    text: "Low-pressure soft wash treatment that safely kills moss, lichen, and black algae without damaging asphalt shingles or cedar shakes.",
    price: "From $399 CAD",
    priceRaw: "399"
  },
  {
    number: "02",
    icon: "✦",
    title: "Roof Revival & Shingle Treatment",
    schemaType: "RoofMaintenance",
    text: "Bio-based rejuvenation spray that restores flexibility to dry, aging shingles and adds up to 5–10 years of roof life in wet climates.",
    price: "Custom Estimate",
    priceRaw: null
  },
  {
    number: "03",
    icon: "◈",
    title: "Window Washing (Interior & Exterior)",
    schemaType: "WindowCleaning",
    text: "Streak-free, purified water-fed pole cleaning for windows, glass railings, skylights, and screens across multi-story homes.",
    price: "From $149 CAD",
    priceRaw: "149"
  },
  {
    number: "04",
    icon: "◆",
    title: "Pressure Washing & Concrete Surface Cleaning",
    schemaType: "PressureWashing",
    text: "Deep-clean driveways, stone patios, aggregate walkways, vinyl siding, and pool decks to remove slippery grime and winter salt residue.",
    price: "From $199 CAD",
    priceRaw: "199"
  },
  {
    number: "05",
    icon: "▱",
    title: "Gutter Cleaning & Downspout Clearing",
    schemaType: "GutterCleaning",
    text: "Hand-removal of trapped pine needles, leaves, and silt followed by full downspout water-flow testing to stop foundation overflow.",
    price: "From $149 CAD",
    priceRaw: "149"
  },
  {
    number: "06",
    icon: "✚",
    title: "Complete Property Exterior Packages",
    schemaType: "BuildingMaintenance",
    text: "Seasonal full-envelope wash packages customized for residential properties, strata townhomes, and commercial storefronts.",
    price: "Custom Package",
    priceRaw: null
  }
];

function Services() {
  // Inject Service Catalog Schema for rich Google search cards
  useEffect(() => {
    const scriptId = "services-catalog-schema";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "EverWash Professional Exterior Cleaning Services",
        "description": "Comprehensive exterior cleaning and maintenance services across Canada.",
        "itemListElement": services.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Service",
            "name": service.title,
            "description": service.text,
            "provider": {
              "@type": "HomeAndConstructionBusiness",
              "name": "EverWash Exterior Cleaning",
              "url": "https://www.everwash.ca/"
            },
            ...(service.priceRaw
              ? {
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "CAD",
                    "price": service.priceRaw,
                    "availability": "https://schema.org/InStock"
                  }
                }
              : {})
          }
        }))
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
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">PROFESSIONAL EXTERIOR CARE</span>

          <h2 id="services-title">
            Complete exterior care.
            <br />
            <span>One trusted Canadian team.</span>
          </h2>

          <p>
            From eliminating rooftop moss blooms to flushing clogged rain gutters and pressure
            washing weathered concrete, we keep your property protected across every season.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span className="service-number" aria-hidden="true">
                  {service.number}
                </span>

                <div className="service-icon" aria-hidden="true">
                  {service.icon}
                </div>
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className="service-bottom">
                <span className="service-price">{service.price}</span>

                <Link
                  to="/contact"
                  className="service-link"
                  aria-label={`Get a quote for ${service.title}`}
                >
                  Get Quote →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;