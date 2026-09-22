import { Link } from "react-router-dom";

function About() {
  return (
    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">ABOUT US</span>

          <h1>
            People who care
            <br />
            <span>about the work.</span>
          </h1>

          <p>
            A professional exterior cleaning company built around
            quality workmanship and straightforward service.
          </p>

        </div>

      </section>

      <section className="section about-section">

        <div className="container about-grid">

          <div className="about-visual">

            <div className="about-card">

              <strong>10+</strong>
              <span>Years of Experience</span>

            </div>

          </div>

          <div className="about-content">

            <span className="eyebrow">OUR STORY</span>

            <h2>
              Built on hard work,
              <br />
              <span>quality and trust.</span>
            </h2>

            <p>
              EverWash started with a simple idea: provide professional
              exterior cleaning without making the process complicated.
            </p>

            <p>
              Today our team works with homeowners and businesses to
              maintain roofs, windows, gutters and outdoor surfaces.
              We believe good service starts with communication and
              ends with leaving the property looking better than when
              we arrived.
            </p>

            <div className="about-stats">

              <div>
                <strong>1000+</strong>
                <span>Properties</span>
              </div>

              <div>
                <strong>5.0</strong>
                <span>Rating</span>
              </div>

              <div>
                <strong>24h</strong>
                <span>Quote Response</span>
              </div>

            </div>

            <Link to="/contact" className="btn btn-dark">
              Work With Us →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;