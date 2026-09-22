import { useState } from "react";

const questions = [
  {
    question: "How do I get a quote?",
    answer:
      "Fill out our quote form or call us directly. We'll collect a few details about your property and service requirements and arrange the next step."
  },
  {
    question: "Do you clean roofs with high pressure?",
    answer:
      "Our roof-cleaning approach is designed around surface-appropriate, low-pressure methods rather than aggressive pressure washing."
  },
  {
    question: "Can I combine multiple services?",
    answer:
      "Yes. Many customers combine roof, gutter, window and exterior cleaning. Contact us and we'll create a package based on your property."
  },
  {
    question: "Do you work on commercial properties?",
    answer:
      "Yes. We can provide customized exterior cleaning plans for commercial properties."
  },
  {
    question: "How often should exterior cleaning be done?",
    answer:
      "It depends on the property, surrounding trees, weather and surface. During your quote we can recommend a maintenance schedule."
  }
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="section faq-section">

      <div className="container faq-grid">

        <div className="faq-intro">

          <span className="eyebrow">FAQ</span>

          <h2>
            Questions?
            <br />
            <span>We've got answers.</span>
          </h2>

          <p>
            Can't find what you're looking for?
            Get in touch and we'll be happy to help.
          </p>

          <a href="/contact" className="text-link">
            Ask us a question →
          </a>

        </div>

        <div className="faq-list">

          {questions.map((item, index) => (
            <div
              className={`faq-item ${active === index ? "open" : ""}`}
              key={item.question}
            >

              <button onClick={() => toggle(index)}>

                <span>{item.question}</span>

                <span className="faq-plus">
                  {active === index ? "−" : "+"}
                </span>

              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;