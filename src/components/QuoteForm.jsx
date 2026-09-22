import { useState } from "react";

function QuoteForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Quote Request:", form);

    setSubmitted(true);

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    });
  };

  return (
    <section className="quote-section">

      <div className="container quote-grid">

        <div className="quote-info">

          <span className="eyebrow">FREE ESTIMATE</span>

          <h2>
            Let's get your
            <br />
            <span>property looking great.</span>
          </h2>

          <p>
            Tell us a little about your project and we'll get back to you
            with the next steps.
          </p>

          <div className="contact-details">

            <a href="tel:+15555555555">
              <span>☎</span>
              <div>
                <small>CALL US</small>
                <strong>+1 (555) 555-5555</strong>
              </div>
            </a>

            <a href="mailto:hello@everwash.com">
              <span>✉</span>
              <div>
                <small>EMAIL</small>
                <strong>hello@everwash.com</strong>
              </div>
            </a>

          </div>

        </div>

        <div className="quote-card">

          {submitted ? (
            <div className="success-message">

              <div className="success-icon">✓</div>

              <h3>Request received!</h3>

              <p>
                Thank you. We'll contact you shortly about your quote.
              </p>

              <button
                className="btn btn-dark"
                onClick={() => setSubmitted(false)}
              >
                Send Another Request
              </button>

            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label>Your Name *</label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone *</label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 555 555 5555"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Email *</label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>What service do you need?</label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="roof-cleaning">Roof Cleaning</option>
                  <option value="roof-revival">Roof Revival</option>
                  <option value="window-washing">Window Washing</option>
                  <option value="pressure-washing">Pressure Washing</option>
                  <option value="gutter-cleaning">Gutter Cleaning</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tell us about your project</label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your property..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark full-width">
                Request My Free Quote →
              </button>

              <small className="form-note">
                No obligation. Your information is only used to respond
                to your request.
              </small>

            </form>
          )}

        </div>

      </div>

    </section>
  );
}

export default QuoteForm;