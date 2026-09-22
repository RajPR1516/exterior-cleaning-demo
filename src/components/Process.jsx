const steps = [
  {
    number: "01",
    title: "Request a Quote",
    text: "Tell us what you need cleaned and we'll arrange a convenient assessment."
  },
  {
    number: "02",
    title: "Schedule Service",
    text: "Choose a service date that works for you."
  },
  {
    number: "03",
    title: "We Do the Work",
    text: "Our crew arrives prepared and takes care of your property."
  },
  {
    number: "04",
    title: "Final Walkthrough",
    text: "We review the completed work and make sure everything is cleaned up."
  }
];

function Process() {
  return (
    <section className="process-section">

      <div className="container">

        <div className="section-heading centered light">

          <span className="eyebrow">HOW IT WORKS</span>

          <h2>
            Simple from start
            <br />
            <span>to finish.</span>
          </h2>

        </div>

        <div className="process-grid">

          {steps.map((step, index) => (
            <div className="process-step" key={step.number}>

              <div className="process-number">
                {step.number}
              </div>

              {index < steps.length - 1 && (
                <div className="process-line"></div>
              )}

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;