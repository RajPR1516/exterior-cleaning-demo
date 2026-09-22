
const areas = [
  "Vancouver",
  "North Vancouver",
  "West Vancouver",
  "Burnaby",
  "New Westminster",
  "Richmond",
  "Coquitlam",
  "Surrey",
  "Delta",
  "Langley",
  "White Rock",
  "Maple Ridge",
  "Aldergrove",
  "Abbotsford",
  "Chilliwack",
  "Mission",
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
            <span>across the Lower Mainland.</span>
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


