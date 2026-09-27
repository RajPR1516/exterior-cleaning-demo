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
    beforeImg: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "gutters",
    tag: "Gutter Deep Clean",
    location: "Burnaby, BC",
    title: "Blocked Eavestrough & Downspout Flush",
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "pressure",
    tag: "Surface Washing",
    location: "Richmond, BC",
    title: "Algae-Covered Interlock Driveway",
    beforeImg: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "roof",
    tag: "Soft Washing",
    location: "North Vancouver, BC",
    title: "Asphalt Shingle Black Streak Removal",
    beforeImg: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
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