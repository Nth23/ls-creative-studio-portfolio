import { Link } from "react-router-dom";
import "./AboutPage.css";
import portrait from "../assets/images/headshot3.jpg";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-page">
        <section className="ap-hero">
          <div className="ap-hero-image-wrap">
            <img
              src={portrait}
              alt="Shaakirah Lawal"
              className="ap-hero-image"
            />
          </div>
          <div className="ap-hero-content">
            <span className="ap-label">About</span>
            <h1 className="ap-hero-title">Shaakirah Lawal</h1>
            <p className="ap-hero-subtitle">Architect & Structural Designer</p>
            <p className="ap-hero-location">Lagos, Nigeria</p>
          </div>
        </section>

        <section className="ap-stats">
          <div className="ap-stat">
            <span className="ap-stat-number">8+</span>
            <span className="ap-stat-label">Years Experience</span>
          </div>
          <div className="ap-stat">
            <span className="ap-stat-number">30+</span>
            <span className="ap-stat-label">Projects Completed</span>
          </div>
          <div className="ap-stat">
            <span className="ap-stat-number">4</span>
            <span className="ap-stat-label">Service Areas</span>
          </div>
          <div className="ap-stat">
            <span className="ap-stat-number">100%</span>
            <span className="ap-stat-label">Client Satisfaction</span>
          </div>
        </section>

        <section className="ap-story">
          <div className="ap-story-left">
            <span className="ap-label">The Story</span>
            <h2 className="ap-section-title">
              Rooted in precision, driven by vision
            </h2>
          </div>
          <div className="ap-story-right">
            <p>
              Shaakirah Lawal is a Lagos-based architect and structural designer
              with over eight years of experience delivering residential,
              commercial and hospitality projects across Nigeria. Her work spans
              the full design lifecycle — from initial concept and technical
              drawings through to construction supervision and interior
              finishing.
            </p>
            <p>
              Trained in architecture with a deep focus on structural integrity
              and spatial planning, Shaakirah founded LS Creative Studio to
              bring a more intentional and detail-driven approach to design in
              Nigeria. Every project begins with a thorough understanding of the
              client's brief, the site constraints, and the cultural context of
              the space.
            </p>
          </div>
        </section>

        <section className="ap-philosophy">
          <div className="ap-philosophy-inner">
            <span className="ap-label">Design Philosophy</span>
            <blockquote className="ap-quote">
              "Good architecture is not just about how a building looks — it is
              about how it works, how it feels, and how it serves the people
              inside it."
            </blockquote>
            <p className="ap-philosophy-text">
              At LS Creative Studio, design is approached as a conversation
              between structure and beauty. Whether it is a luxury duplex, a
              high-rise residential block or a fine dining restaurant, the
              studio brings the same level of precision and creative rigour to
              every project. Technical drawings are treated as art. Floor plans
              are considered as carefully as facades. Every detail, from ceiling
              heights to material finishes, is intentional.
            </p>
          </div>
        </section>

        <section className="ap-skills">
          <span className="ap-label">Expertise</span>
          <div className="ap-skills-grid">
            {[
              "Architectural Design",
              "Structural Engineering",
              "Floor Plan & Blueprint",
              "Interior Design",
              "3D Visualisation",
              "Construction Supervision",
              "Space Planning",
              "Renovation & Restoration",
            ].map((skill) => (
              <div className="ap-skill-item" key={skill}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="ap-cta">
          <h2 className="ap-cta-title">Ready to start a project?</h2>
          <Link to="/#contact" className="ap-cta-btn">
            Get In Touch
            <span className="ap-cta-line" />
          </Link>
        </section>

        <div className="ap-back">
          <Link to="/" className="ap-back-link">
            ← Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
