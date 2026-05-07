import "./Services.css";
import { PenTool, Layers, Sofa, Hammer } from "lucide-react";
import FadeUp from "./FadeUp";

const services = [
  {
    icon: PenTool,
    title: "Architectural Design",
    description:
      "Full concept to completion architectural design for residential and commercial builds.",
  },
  {
    icon: Layers,
    title: "Structural & Floor Plans",
    description:
      "Detailed blueprints, floor plans, sections and technical drawings to professional standard.",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    description:
      "Bespoke interior concepts covering space planning, materials, lighting and finishes.",
  },
  {
    icon: Hammer,
    title: "Renovation & Restoration",
    description:
      "Transforming existing spaces into refined, functional and beautifully designed environments.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <FadeUp>
        <div className="services-header">
          <span className="services-label">What We Do</span>
          <h2 className="services-title">Services</h2>
        </div>
      </FadeUp>

      <div className="services-grid">
        {services.map((service, index) => (
          <FadeUp delay={index * 0.1} key={service.title}>
            <div
              className="service-item"
              key={service.title}
              data-number={service.number}
            >
              <service.icon
                className="service-icon"
                size={50}
                strokeWidth={1.2}
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export default Services;
