import { useEffect, useState } from "react";

// Replace these with your own images (from /public or external links)
const slides = [
  {
    id: 1,
    image: "/hero.jpeg",
    title: "Roof Revival & Moss Removal",
    subtitle: "Restoring shingles to their original strength and look",
  },
  {
    id: 2,
    image:"/public/img22.jpeg",
    title: "High-Pressure Driveway Wash",
    subtitle: "Clearing algae, stubborn stains, and grime",
  },
  {
    id: 3,
    image: "/public/img33.jpeg",
    title: "Full Exterior Soft Wash",
    subtitle: "Gentle low-pressure cleaning safe for siding and stucco",
  },
  {
    id: 4,
    image: "/public/img44.jpeg",
    title: "Gutter & Downspout Detailing",
    subtitle: "Preventing water overflow and foundation damage",
  },
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play timer: changes slide every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="carousel-slide" key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-overlay">
              <span className="carousel-badge">RECENT WORK</span>
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next Buttons */}
      <button
        className="carousel-arrow prev"
        onClick={handlePrev}
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        className="carousel-arrow next"
        onClick={handleNext}
        aria-label="Next image"
      >
        ›
      </button>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;