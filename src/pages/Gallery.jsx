import { useState } from "react";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

const projects = [
  {
    id: 1,
    category: "roof",
    tag: "Roof Revival & Moss Removal",
    location: "Vancouver, BC",
    title: "Heavy Cedar Shingle Moss Treatment",
    beforeImg: " ./public/img2a.jpeg",
    afterImg: " ./public/img22.jpeg",
  },
  {
    id: 2,
    category: "gutters",
    tag: "Gutter Deep Clean",
    location: "Burnaby, BC",
    title: "Blocked Eavestrough & Downspout Flush",
    beforeImg: " ./public/img1a.jpeg ",
    afterImg: "  ./public/img44.jpeg ",
  },
  {
    id: 3,
    category: "pressure",
    tag: "Surface Washing",
    location: "Richmond, BC",
    title: "Algae-Covered Interlock Driveway",
    beforeImg: "./public/img3a.jpeg ",
    afterImg: "./public/img33.jpeg ",
  },
  {
    id: 4,
    category: "roof",
    tag: "Soft Washing",
    location: "North Vancouver, BC",
    title: "Asphalt Shingle Black Streak Removal",
    beforeImg: " ./public/img4a.jpeg ",
    afterImg: " ./public/img55.jpeg",
  },
];

function Gallery() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#f2ae87" }}>
            PROVEN RESULTS
          </span>
          <h1>
            Real Homes. <span>Real Transformations.</span>
          </h1>
          <p>
            Drag the sliders to see how our treatments restore roofs, gutters,
            and concrete surfaces to like-new condition.
          </p>
        </div>
      </section>

      <section className="gallery-section section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="gallery-filter-bar">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${filter === "roof" ? "active" : ""}`}
              onClick={() => setFilter("roof")}
            >
              Roof Cleaning
            </button>
            <button
              className={`filter-btn ${filter === "gutters" ? "active" : ""}`}
              onClick={() => setFilter("gutters")}
            >
              Gutters
            </button>
            <button
              className={`filter-btn ${filter === "pressure" ? "active" : ""}`}
              onClick={() => setFilter("pressure")}
            >
              Pressure Washing
            </button>
          </div>

          {/* Sliders Grid */}
          <div className="ba-grid">
            {filteredProjects.map((project) => (
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

          {/* Bottom Call to Action */}
          <div className="gallery-cta-box">
            <div>
              <h3>Want your home looking like this?</h3>
              <p>Get a fast, no-obligation quote customized for your property.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;