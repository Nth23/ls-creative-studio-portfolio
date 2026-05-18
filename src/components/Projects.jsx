import { useState } from "react";
import "./Projects.css";
import projects from "../data/projects";
import { Link } from "react-router-dom";

const categories = ["All", "Residential", "Hospitality", "Interior Design"];

function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="projects-label">Selected Work</span>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "filter-btn--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-list">
        {filtered.map((project, index) => (
          <div
            className={`project-item ${index % 2 === 0 ? "project-item--normal" : "project-item--reverse"}`}
            key={project.id}
          >
            <div className="project-image-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <span className="project-number">0{project.id}</span>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span>{project.location}</span>
                <span>{project.year}</span>
                <span>{project.category}</span>
              </div>
              <Link to={`/projects/${project.id}`} className="project-btn">
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
