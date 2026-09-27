import { useRef, useState } from "react";

function BeforeAfterSlider({ beforeImg, afterImg, title, location, tag }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="ba-card">
      <div
        className="ba-image-container"
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Background) */}
        <img src={afterImg} alt={`${title} After`} className="ba-img ba-img-after" />
        <span className="ba-badge ba-badge-after">AFTER</span>

        {/* BEFORE Image (Clipped Foreground) */}
        <div
          className="ba-clip-wrapper"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img src={beforeImg} alt={`${title} Before`} className="ba-img ba-img-before" />
          <span className="ba-badge ba-badge-before">BEFORE</span>
        </div>

        {/* Draggable Divider Handle */}
        <div className="ba-handle-line" style={{ left: `${sliderPos}%` }}>
          <div className="ba-handle-btn">
            <span>‹›</span>
          </div>
        </div>
      </div>

      <div className="ba-details">
        <div className="ba-tags">
          <span className="ba-tag">{tag}</span>
          <span className="ba-location">{location}</span>
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default BeforeAfterSlider;