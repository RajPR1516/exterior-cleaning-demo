const areas = [
  "Victoria",
  "Oak Bay",
  "Saanich",
  "Esquimalt",
  "View Royal",
  "Colwood",
  "Langford",
  "Sooke",
  "Sidney",
  "North Saanich",
  "Duncan",
  "Nanaimo",
  "Parksville",
  "Qualicum Beach",
  "Courtenay",
  "Comox"
];

function ServiceAreas() {
  return (
    <section className="areas-section">

      <div className="container areas-grid">

        <div>

          <span className="eyebrow">SERVICE AREA</span>

          <h2>
            Serving communities
            <br />
            <span>across the Island.</span>
          </h2>

          <p>
            We provide exterior cleaning services for residential and
            commercial properties throughout the region.
          </p>

          <a href="/contact" className="btn btn-primary">
            Check My Area →
          </a>

        </div>

        <div className="areas-list">

          {areas.map((area) => (
            <span key={area}>
              <i>✓</i>
              {area}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ServiceAreas;