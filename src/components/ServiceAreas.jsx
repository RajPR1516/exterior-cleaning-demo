import { useEffect } from "react";
import { Link } from "react-router-dom";

const areas = [
  { name: "Vancouver", region: "Metro Vancouver" },
  { name: "North Vancouver", region: "North Shore" },
  { name: "West Vancouver", region: "North Shore" },
  { name: "Burnaby", region: "Metro Vancouver" },
  { name: "New Westminster", region: "Metro Vancouver" },
  { name: "Richmond", region: "Metro Vancouver" },
  { name: "Coquitlam", region: "Tri-Cities" },
  { name: "Port Coquitlam", region: "Tri-Cities" },
  { name: "Port Moody", region: "Tri-Cities" },
  { name: "Surrey", region: "Fraser Valley / South of Fraser" },
  { name: "Delta", region: "Metro Vancouver" },
  { name: "Langley", region: "Fraser Valley" },
  { name: "White Rock", region: "South of Fraser" },
  { name: "Maple Ridge", region: "Fraser Valley" },
  { name: "Aldergrove", region: "Fraser Valley" },
  { name: "Abbotsford", region: "Fraser Valley" },
  { name: "Chilliwack", region: "Fraser Valley" },
  { name: "Mission", region: "Fraser Valley" },
];

function ServiceAreas() {
  // Inject areaServed schema into page for regional Google Local Search
  useEffect(() => {
    const scriptId = "service-areas-schema";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "EverWash Exterior Cleaning",
        "url": "https://www.everwash.ca/",
        "areaServed": areas.map((item) => ({
          "@type": "City",
          "name": item.name,
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "British Columbia"
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
    <section className="areas-section" aria-label="Service Areas">
      <div className="container areas-grid">
        <div className="areas-header">
          <span className="eyebrow">BRITISH COLUMBIA SERVICE AREA</span>

          <h2>
            Serving communities
            <br />
            <span>across the Lower Mainland &amp; Fraser Valley.</span>
          </h2>

          <p>
            The wet coastal climate of Southwestern BC accelerates moss, algae, and grime buildup
            on roofs, siding, and gutters. EverWash delivers prompt, insured residential and
            commercial exterior cleaning across Metro Vancouver and the Fraser Valley.
          </p>

          <div className="areas-actions">
            <Link to="/contact" className="btn btn-primary">
              Book Service in Your Area →
            </Link>
          </div>
        </div>

        <div className="areas-content">
          <h3 className="visually-hidden">Covered Municipalities and Cities</h3>
          <ul className="areas-list" style={{ listStyle: "none", padding: 0 }}>
            {areas.map((area) => (
              <li key={area.name} className="area-item">
                <span aria-hidden="true" style={{ marginRight: "0.5rem" }}>✓</span>
                <strong>{area.name}</strong>, BC
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreas;