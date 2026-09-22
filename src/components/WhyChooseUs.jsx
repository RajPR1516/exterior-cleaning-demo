const reasons = [
  {
    icon: "01",
    title: "Professional Equipment",
    text: "We use modern tools and proven cleaning techniques matched to each surface."
  },
  {
    icon: "02",
    title: "Trained Crew",
    text: "Our team focuses on careful workmanship, communication and property protection."
  },
  {
    icon: "03",
    title: "Clear Estimates",
    text: "You receive straightforward pricing before work begins."
  },
  {
    icon: "04",
    title: "Property Protection",
    text: "We take care around landscaping, siding, windows and other sensitive areas."
  }
];

function WhyChooseUs() {
  return (
    <section className="section why-section">

      <div className="container">

        <div className="why-heading">

          <div>
            <span className="eyebrow">WHY EVERWASH</span>

            <h2>
              The details matter.
              <br />
              <span>We take care of them.</span>
            </h2>
          </div>

          <p>
            Great exterior cleaning isn't just about making something look
            better. It's about using the right method, protecting your
            property and leaving everything cleaner than we found it.
          </p>

        </div>

        <div className="reasons-grid">

          {reasons.map((reason) => (
            <div className="reason-card" key={reason.icon}>

              <span className="reason-number">
                {reason.icon}
              </span>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;