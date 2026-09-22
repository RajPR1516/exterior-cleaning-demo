const pricing = [
  {
    name: "Roof Cleaning",
    residential: "From $399",
    commercial: "Custom"
  },
  {
    name: "Window Washing",
    residential: "From $149",
    commercial: "Custom"
  },
  {
    name: "Gutter Cleaning",
    residential: "From $149",
    commercial: "Custom"
  },
  {
    name: "Pressure Washing",
    residential: "From $199",
    commercial: "Custom"
  },
  {
    name: "Roof Revival",
    residential: "Custom",
    commercial: "Custom"
  }
];

function Pricing() {
  return (
    <section className="section pricing-section">

      <div className="container">

        <div className="section-heading centered">

          <span className="eyebrow">PRICING</span>

          <h2>
            Straightforward pricing.
            <br />
            <span>No surprises.</span>
          </h2>

          <p>
            Every property is different. We provide a clear quote before
            work starts so you know what to expect.
          </p>

        </div>

        <div className="pricing-table">

          <div className="pricing-header">
            <span>Service</span>
            <span>Residential</span>
            <span>Commercial</span>
            <span></span>
          </div>

          {pricing.map((item) => (
            <div className="pricing-row" key={item.name}>

              <strong>{item.name}</strong>

              <span>{item.residential}</span>

              <span>{item.commercial}</span>

              <a href="/contact">Request Quote →</a>

            </div>
          ))}

        </div>

        <div className="pricing-note">
          <strong>Save with recurring service</strong>
          <span>
            Ask us about scheduled maintenance plans for your property.
          </span>
        </div>

      </div>

    </section>
  );
}

export default Pricing;