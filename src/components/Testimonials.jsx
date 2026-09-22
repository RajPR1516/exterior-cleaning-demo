const testimonials = [
  {
    text: "The crew was professional, arrived on time and left the property spotless. The difference was incredible.",
    name: "Michael R.",
    location: "Victoria"
  },
  {
    text: "Great communication from the first call to the final walkthrough. Everything was explained clearly.",
    name: "Sarah T.",
    location: "Oak Bay"
  },
  {
    text: "Our windows look fantastic and the whole process was easy. We'll definitely use them again.",
    name: "David P.",
    location: "Saanich"
  }
];

function Testimonials() {
  return (
    <section className="section testimonials-section">

      <div className="container">

        <div className="section-heading centered">

          <span className="eyebrow">CUSTOMER REVIEWS</span>

          <h2>
            Homeowners who
            <br />
            <span>trust our work.</span>
          </h2>

          <div className="rating">
            <strong>5.0</strong>
            <span>★★★★★</span>
            <small>Customer Rating</small>
          </div>

        </div>

        <div className="testimonials-grid">

          {testimonials.map((review) => (
            <article className="testimonial-card" key={review.name}>

              <div className="quote-mark">“</div>

              <div className="stars">★★★★★</div>

              <p>{review.text}</p>

              <div className="review-author">

                <div className="avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <strong>{review.name}</strong>
                  <span>{review.location}</span>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;