import { useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Request a Free Estimate",
    text: "Submit your property details online or call us directly. We provide fast, upfront pricing tailored to your home or building."
  },
  {
    number: "02",
    title: "Schedule Your Service",
    text: "Select a date and time that fits your calendar. We coordinate clear arrival windows across Metro Vancouver and the Fraser Valley."
  },
  {
    number: "03",
    title: "Safe, Professional Cleaning",
    text: "Our fully insured, WorkSafeBC-covered crew arrives equipped with dedicated soft wash systems, surface cleaners, and safety gear."
  },
  {
    number: "04",
    title: "Final Walkthrough & Guarantee",
    text: "We inspect every roof plane, window, or surface with you to confirm spotless results and clean up all debris before departure."
  }
];

function Process() {
  // Inject schema.org/HowTo structured data
  useEffect(() => {
    const scriptId = "process-howto-schema";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How Karma Roof Clean Works: Professional Exterior Cleaning Process",
        "description": "Step-by-step guide to booking and completing residential or commercial exterior cleaning services with Karma Roof Clean Inc.",
        "step": steps.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.title,
          "text": step.text
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
    <section className="process-section" id="how-it-works" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-heading centered light">
          <span className="eyebrow">OUR 4-STEP PROCESS</span>

          <h2 id="process-heading">
            Simple from start
            <br />
            <span>to spotless finish.</span>
          </h2>

          <p>
            Hassle-free property care from your initial phone call to the final rinse.
          </p>
        </div>

        <ol className="process-grid" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {steps.map((step, index) => (
            <li className="process-step" key={step.number}>
              <div className="process-number" aria-label={`Step ${step.number}`}>
                {step.number}
              </div>

              {index < steps.length - 1 && (
                <div className="process-line" aria-hidden="true"></div>
              )}

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;