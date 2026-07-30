import "./Process.css";
import FadeUp from "./FadeUp";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We take down your brief in detail, asking questions to fully understand your wants and needs for the project.",
  },
  {
    number: "02",
    title: "Consultation",
    description:
      "A dedicated meeting to discuss design decisions, preferences, material choices, colour palette and FFE considerations.",
  },
  {
    number: "03",
    title: "Concept Development",
    description:
      "We create schematic drawings, colour palettes and mood boards to ascertain the brief was well interpreted.",
  },
  {
    number: "04",
    title: "Design Presentation",
    description:
      "Floor layouts, site plans, sections, elevations and 3D views are presented to show the finished design development.",
  },
  {
    number: "05",
    title: "Technical Documentation",
    description:
      "Detailed drawings, schedules, quantities and specifications are prepared for construction alongside allied professionals.",
  },
  {
    number: "06",
    title: "Procurement",
    description:
      "With approved schedules and quantities, FFEs are procured to kickstart the project — finishes, furniture and equipment.",
  },
  {
    number: "07",
    title: "Construction",
    description:
      "We move to site, managing vendors, contractors, budget, schedule and quality until the project reaches completion.",
  },
  {
    number: "08",
    title: "Final Styling",
    description:
      "Accessories, greenery and landscaping give the project its final, unique touch before handover.",
  },
];

function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [showBgNumber, setShowBgNumber] = useState(false);
  const sectionRef = useRef(null);

  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setShowBgNumber(
        rect.top < window.innerHeight * 0.1 &&
          rect.bottom > window.innerHeight * 0.9,
      );

      let closestIndex = 0;
      let closestDistance = Infinity;
      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const stepRect = el.getBoundingClientRect();
        const distance = Math.abs(stepRect.top - window.innerHeight * 0.4);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveStep(closestIndex);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="process" ref={sectionRef}>
      <FadeUp>
        <div className="process-header">
          <span className="process-label">Our Process</span>
          <h2 className="process-title">How We Work</h2>
        </div>
      </FadeUp>

      {showBgNumber && (
        <div className="process-bg-number">
          <motion.span
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {steps[activeStep].number}
          </motion.span>
        </div>
      )}

      <div className="process-list">
        {steps.map((step, index) => (
          <FadeUp delay={index * 0.05} key={step.number}>
            <div
              className="process-step"
              onMouseEnter={() => setActiveStep(index)}
              ref={(el) => (stepRefs.current[index] = el)}
            >
              <span className="process-number">{step.number}</span>
              <div className="process-step-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export default Process;
