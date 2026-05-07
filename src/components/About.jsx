import { Link } from "react-router-dom";
import "./About.css";
import FadeUp from "./FadeUp";

function About() {
  return (
    <section className="about" id="about">
      <FadeUp>
        <div className="about-image-wrap">
          <img
            src="/src/assets/images/Headshot1.jpg"
            alt="Architect portrait"
            className="about-image"
          />
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="about-content">
          <span className="about-label">About</span>
          <h2 className="about-title">Designing spaces that tell a story</h2>
          <p className="about-text">
            With over a decade of experience in structural and architectural
            design, our studio creates spaces that balance beauty, function and
            cultural identity. Every project begins with listening —
            understanding the people, the place, and the purpose behind the
            build.
          </p>
          <Link to="/about" className="about-link">
            Full Story
            <span className="about-link-line" />
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}

export default About;
