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
            <p className="ap-hero-subtitle">Founder, LS Studios</p>
            <p className="ap-hero-location">Lagos, Nigeria</p>
          </div>
        </section>

        <section className="ap-stats">
          <div className="ap-stat">
            <span className="ap-stat-number">7+</span>
            <span className="ap-stat-label">Years Experience</span>
          </div>
          <div className="ap-stat">
            <span className="ap-stat-number">30+</span>
            <span className="ap-stat-label">Projects Completed</span>
          </div>
          <div className="ap-stat">
            <span className="ap-stat-number">5</span>
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
              Design is more than creating beautiful spaces
            </h2>
          </div>
          <div className="ap-story-right">
            <p>
              Shaakirah Lawal is the founder of LS Studios, a design studio
              passionate about creating elements, spaces, and buildings that go
              beyond aesthetics. Her work sits at the intersection of culture,
              innovation, and human experience, with a particular focus on
              preserving African heritage through contemporary design.
            </p>
            <p>
              With over seven years of professional experience and master's
              degrees in Architecture and Interior Design, she brings together
              creativity, strategy, and craftsmanship in every project.
              Shaakirah is a certified and registered architect with the
              Architect's Registration Council of Nigeria and a Full Member of
              the Nigerian Institute of Architects.
            </p>
          </div>
        </section>

        <section className="ap-credentials">
          <span className="ap-label">Credentials</span>
          <div className="ap-credentials-grid">
            <div className="ap-credential-item">
              <span className="ap-credential-title">M.Sc Architecture</span>
              <span className="ap-credential-desc">Master's Degree</span>
            </div>
            <div className="ap-credential-item">
              <span className="ap-credential-title">M.Sc Interior Design</span>
              <span className="ap-credential-desc">Master's Degree</span>
            </div>
            <div className="ap-credential-item">
              <span className="ap-credential-title">ARCON Registered</span>
              <span className="ap-credential-desc">
                Architect's Registration Council of Nigeria
              </span>
            </div>
            <div className="ap-credential-item">
              <span className="ap-credential-title">NIA Full Member</span>
              <span className="ap-credential-desc">
                Nigerian Institute of Architects
              </span>
            </div>
          </div>
        </section>

        <section className="ap-philosophy">
          <div className="ap-philosophy-inner">
            <span className="ap-label">Design Philosophy</span>
            <blockquote className="ap-quote">
              "For Shaakirah Lawal, design is about more than creating beautiful
              spaces. It's about shaping experiences, preserving stories and
              creating places that stay with people."
            </blockquote>
            <p className="ap-philosophy-text">
              At LS Studios, we believe every space has the power to shape
              emotion, influence behavior and leave a lasting impression.
              Whether we're designing a private residence, hospitality
              destination, workplace or commercial environment, our goal is to
              create interiors that feel authentic, enduring and deeply
              connected to the people who use them. From concept development and
              construction documentation to high-quality visualisations, we
              combine creative thinking with practical execution to bring every
              project to life.
            </p>
          </div>
        </section>

        <section className="ap-skills">
          <span className="ap-label">Expertise</span>
          <div className="ap-skills-grid">
            {[
              "Architectural Design",
              "Interior Design",
              "Interior Fit-outs",
              "Project Management",
              "Design Consultation",
              "3D Visualisation",
              "Construction Documentation",
              "Cultural Heritage Design",
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
