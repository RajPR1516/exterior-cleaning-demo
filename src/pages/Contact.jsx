import QuoteForm from "../components/QuoteForm";

function Contact() {
  return (
    <div className="inner-page">

      <section className="page-hero contact-page-hero">

        <div className="container">

          <span className="eyebrow">CONTACT US</span>

          <h1>
            Let's talk about
            <br />
            <span>your property.</span>
          </h1>

          <p>
            Request your free, no-obligation exterior cleaning estimate.
          </p>

        </div>

      </section>

      <QuoteForm />

    </div>
  );
}

export default Contact;