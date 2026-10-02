import { Link } from "react-router-dom";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import ImageCarousel from "../components/ImageCarousel";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import QuoteForm from "../components/QuoteForm";
import RoofRevival from "../components/RoofRevival";
import ServiceAreas from "../components/ServiceAreas";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

const featuredTransformations = [
  {
    id: 1,
    tag: "Roof Revival & Moss Removal",
    location: "Vancouver, BC",
    title: "Heavy Cedar Shingle Moss Treatment",
    beforeImg: "/img2a.jpeg",
    afterImg: "/img22.jpeg",
  },
  {
    id: 2,
    tag: "Gutter Deep Clean",
    location: "Burnaby, BC",
    title: "Blocked Eavestrough & Downspout Flush",
    beforeImg: "/img1a.jpeg",
    afterImg: "/img44.jpeg",
  },
];

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <RoofRevival />

      {/* Before & After Transformations Section */}
      <section className="home-transformations section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">PROVEN RESTORATION RESULTS</span>
            <h2>
              Real Homes. <span>Real Transformations.</span>
            </h2>
            <p>
              Drag the interactive sliders below to see the difference our specialized
              moss treatment and exterior cleaning treatments make.
            </p>
          </div>

          <div className="ba-grid">
            {featuredTransformations.map((project) => (
              <BeforeAfterSlider
                key={project.id}
                title={project.title}
                tag={project.tag}
                location={project.location}
                beforeImg={project.beforeImg}
                afterImg={project.afterImg}
              />
            ))}
          </div>

          <div className="home-ba-footer">
            <Link to="/gallery" className="btn btn-outline">
              Explore Full Gallery &amp; Transformations →
            </Link>
          </div>
        </div>
      </section>

      {/* Auto-Rotating 4-Image Showcase Section */}
      <section className="section" style={{ background: "#0b100c" }}>
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">FEATURED WORK</span>
            <h2>
              Our Crew in <span>Action</span>
            </h2>
            <p>
              Explore our ongoing residential and commercial cleaning projects across
              the Greater Vancouver area.
            </p>
          </div>

          <ImageCarousel />
        </div>
      </section>

      <WhyChooseUs />
      <Process />
      <Pricing />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <QuoteForm />
    </>
  );
}

export default Home;