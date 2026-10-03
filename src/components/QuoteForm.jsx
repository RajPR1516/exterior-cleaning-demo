import { useState } from "react";

function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
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
      city: "",
      service: "",
      message: ""
    });
  };

  return (
    <section className="quote-section" id="quote" aria-labelledby="quote-heading">
      <div className="container quote-grid">
        <div className="quote-info">
          <span className="eyebrow">FAST &amp; FREE ESTIMATE</span>

          <h2 id="quote-heading">
            Let's get your
            <br />
            <span>property looking great.</span>
          </h2>

          <p>
            Tell us about your home or commercial building. We provide fast,
            transparent quotes across Metro Vancouver and the Fraser Valley.
          </p>

          <div className="contact-details">
            {/* Call Direct Option */}
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">☎</span>
              <div>
                <small>DIRECT PHONE INQUIRIES</small>
                <div>
                  <a href="tel:+17782290939" className="phone-link" aria-label="Call +1 778 229 0939">
                    <strong>+1 (778) 229-0939</strong>
                  </a>
                </div>
                <div>
                  <a href="tel:+16047711804" className="phone-link" aria-label="Call +1 604 771 1804">
                    <strong>+1 (604) 771-1804</strong>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Option */}
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">✉</span>
              <div>
                <small>DIRECT EMAIL</small>
                <div>
                  <a href="mailto:contact@karmaroofcleaninc.com" className="email-link">
                    <strong>contact@karmaroofcleaninc.com</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="quote-card">
          {submitted ? (
            <div className="success-message" role="alert">
              <div className="success-icon" aria-hidden="true">✓</div>
              <h3>Request received!</h3>
              <p>
                Thank you. Our team will review your property details and contact you shortly.
              </p>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setSubmitted(false)}
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quote-name">Your Name *</label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quote-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(604) 000-0000"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quote-email">Email Address *</label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quote-city">City / Municipality</label>
                  <input
                    type="text"
                    id="quote-city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="e.g. Surrey, Langley, Vancouver"
                    autoComplete="address-level2"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="quote-service">What service do you need?</label>
                <select
                  id="quote-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a primary service</option>
                  <option value="roof-cleaning">Roof Cleaning &amp; Moss Removal</option>
                  <option value="roof-revival">Roof Revival (Shingle Treatment)</option>
                  <option value="window-washing">Window Washing (Interior/Exterior)</option>
                  <option value="pressure-washing">Pressure Washing &amp; Surface Cleaning</option>
                  <option value="gutter-cleaning">Gutter Cleaning &amp; Downspout Flush</option>
                  <option value="multiple">Multiple / Full Exterior Package</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="quote-message">Tell us about your property</label>
                <textarea
                  id="quote-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Square footage, stories, exterior materials (stucco, siding, cedar shake, asphalt shingles)..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark full-width">
                Request Free Quote →
              </button>

              <small className="form-note">
                100% Free &amp; No Obligation. We respect your privacy and never share your details.
              </small>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;