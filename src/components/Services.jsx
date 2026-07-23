import "./Services.css";
import { PenTool, Layers, Sofa, Hammer } from "lucide-react";
import FadeUp from "./FadeUp";

const services = [
  {
    icon: PenTool,
    title: "Architecture Design",
    description:
      "Architectural design for buildings, floor plans, site layouts and distinctive facades, carefully tailored to your brief with functionality, materials, climate and aesthetics in mind.",
  },
  {
    icon: Layers,
    title: "Interior Design",
    description:
      "A holistic approach to interior spaces, considering circulation, layout, furniture, lighting, ceiling design and material finishes to create spaces that feel as good as they look.",
  },
  {
    icon: Sofa,
    title: "Interior Fit-outs",
    description:
      "Bespoke furniture and interior fit-outs for kitchens, offices, retail spaces and living areas, designed for your space and fully installed for immediate use.",
  },
  {
    icon: Hammer,
    title: "Project Management",
    description:
      "Managing consultants, contractors, budgets, timelines and quality from concept to completion, ensuring every project is delivered smoothly and successfully.",
  },
  {
    icon: PenTool,
    title: "Design Consultation",
    description:
      "Practical design advice to help you make informed decisions, explore the right options and avoid costly mistakes at every stage of your project.",
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
