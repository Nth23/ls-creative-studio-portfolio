import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [activeImage, setActiveImage] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const galleryMainRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroImages = project?.gallery
    ? project.gallery.slice(0, 5)
    : [project?.image];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleThumbClick = (index) => {
    setActiveImage(index);
    galleryMainRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (!project) {
    return (
      <div className="pd-notfound">
        <h2>Project not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pd">
        {/* Hero */}
        <div className="pd-hero">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroIndex}
              src={heroImages[heroIndex]}
              alt={project.title}
              className="pd-hero-image"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </AnimatePresence>
          <div className="pd-hero-overlay" />
          <div className="pd-hero-content">
            <span className="pd-label">{project.category}</span>
            <h1 className="pd-title">{project.title}</h1>
            <div className="pd-meta">
              <span>{project.location}</span>
              <span>—</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="pd-info">
          <div className="pd-info-left">
            <span className="pd-label">About the Project</span>
            <p className="pd-description">{project.description}</p>

            {project.features && (
              <div className="pd-features">
                <span className="pd-label">Features</span>
                <ul className="pd-features-list">
                  {project.features.map((feature) => (
                    <li key={feature} className="pd-feature-item">
                      <span className="pd-feature-dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pd-info-right">
            <div className="pd-detail-item">
              <span className="pd-detail-label">Category</span>
              <span className="pd-detail-value">{project.category}</span>
            </div>
            <div className="pd-detail-item">
              <span className="pd-detail-label">Location</span>
              <span className="pd-detail-value">{project.location}</span>
            </div>
            <div className="pd-detail-item">
              <span className="pd-detail-label">Year</span>
              <span className="pd-detail-value">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && (
          <div className="pd-gallery">
            <span className="pd-label">Gallery</span>
            <div className="pd-gallery-main" ref={galleryMainRef}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={project.gallery[activeImage]}
                  alt={`${project.title} ${activeImage + 1}`}
                  className="pd-gallery-main-image"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset }) => {
                    if (offset.x < -50) {
                      setActiveImage(
                        activeImage === project.gallery.length - 1
                          ? 0
                          : activeImage + 1,
                      );
                    } else if (offset.x > 50) {
                      setActiveImage(
                        activeImage === 0
                          ? project.gallery.length - 1
                          : activeImage - 1,
                      );
                    }
                  }}
                />
              </AnimatePresence>
              <div className="pd-gallery-counter">
                {activeImage + 1} / {project.gallery.length}
              </div>
            </div>

            <div className="pd-gallery-reel">
              {project.gallery.map((img, index) => (
                <div
                  key={index}
                  className={`pd-reel-item ${index === activeImage ? "pd-reel-item--active" : ""}`}
                  onClick={() => handleThumbClick(index)}
                >
                  <img src={img} alt={`thumb ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Floor Plan */}
        {project.floorPlan && (
          <div className="pd-floorplan">
            <span className="pd-label">Floor Plan</span>
            <img
              src={project.floorPlan}
              alt="Floor Plan"
              className="pd-floorplan-image"
            />
          </div>
        )}

        {/* Back */}
        <div className="pd-back">
          <Link to="/" className="pd-back-link">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDetail;
