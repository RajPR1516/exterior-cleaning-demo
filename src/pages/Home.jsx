import { useEffect } from "react";
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
    beforeImg: "/before-1.jpeg",
    afterImg: "/after-2.jpeg",
  },
  {
    id: 2,
    tag: "Gutter Deep Clean",
    location: "Burnaby, BC",
    title: "Blocked Eavestrough & Downspout Flush",
    beforeImg: "/before-1.jpeg",
    afterImg: "/after-1.jpeg",
  },
];

function Home() {
  // Dynamic Head & Schema Setup for Canadian Local SEO
  useEffect(() => {
    document.title =
      "Karma Roof Clean Inc. | Roof Cleaning & Pressure Washing Vancouver & Fraser Valley, BC";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Premier exterior cleaning across Metro Vancouver and the Fraser Valley. WorkSafeBC insured specialists in low-pressure soft roof moss removal, roof revival, gutter cleaning, window washing, and hot pressure washing.";

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.everwash.ca/";

    // Inject Root LocalBusiness Schema
    const scriptId = "homepage-organization-schema";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Karma Roof Clean Inc.",
        "alternateName": "Karma Exterior Care",
        "url": "https://www.everwash.ca/",
        "logo": "https://www.everwash.ca/favicon.png",
        "image": "https://www.everwash.ca/ratinglogo.jpeg",
        "telephone": "+1-604-771-1804",
        "email": "contact@karmaroofcleaninc.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 49.2827,
          "longitude": -123.1207
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "85",
          "bestRating": "5"
        },
        "areaServed": [
          "Vancouver",
          "Burnaby",
          "Richmond",
          "Surrey",
          "Langley",
          "Coquitlam",
          "Delta",
          "Abbotsford"
        ]
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
    <main id="main-content">
      {/* Primary Hero Section */}
      <Hero />

      {/* Services Grid with Local Schema Catalog */}
      <Services />

      {/* Proprietary Shingle Restoration Section */}
      <RoofRevival />

      {/* Before & After Transformations Section */}
      <section className="home-transformations section" aria-labelledby="transformations-title">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">PROVEN RESTORATION RESULTS</span>
            <h2 id="transformations-title">
              Real Homes. <span>Real Transformations.</span>
            </h2>
            <p>
              Drag the interactive sliders below to see the dramatic difference our specialized
              soft wash moss removal and exterior cleaning treatments make on BC properties.
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
            <Link
              to="/gallery"
              className="btn btn-outline"
              aria-label="View our complete gallery of BC exterior cleaning projects"
            >
              Explore Full Gallery &amp; Transformations →
            </Link>
          </div>
        </div>
      </section>

      {/* Auto-Rotating Image Showcase */}
      <section className="section" style={{ background: "#0b100c" }} aria-labelledby="showcase-title">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">FIELD WORK ARCHIVE</span>
            <h2 id="showcase-title">
              Our Crew in <span>Action</span>
            </h2>
            <p>
              A behind-the-scenes look at our residential and strata cleaning projects across
              Metro Vancouver and the Fraser Valley.
            </p>
          </div>

          <ImageCarousel />
        </div>
      </section>

      {/* Social Proof, Pricing & Educational FAQs */}
      <WhyChooseUs />
      <Process />
      <Pricing />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <QuoteForm />
    </main>
  );
}

export default Home;