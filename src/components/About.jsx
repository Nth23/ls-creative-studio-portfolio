import { Link } from "react-router-dom";
import "./About.css";
import FadeUp from "./FadeUp";
import portrait from "../assets/images/headshot1.jpg";

function About() {
  return (
    <section className="about" id="about">
      <FadeUp>
        <div className="about-image-wrap">
          <img
            src={portrait}
            alt="Architect portrait"
            className="about-image"
          />
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="about-content">
          <span className="about-label">About</span>
          <h2 className="about-title">Every space tells a story</h2>
          <p className="about-text">
            At LS Studios, we design buildings, interiors, and objects that
            reflect culture, enrich human experience, and respond thoughtfully
            to their environment. Every project is guided by purpose, shaped by
            innovation, and crafted to create lasting connections between people
            and the spaces they inhabit.
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
