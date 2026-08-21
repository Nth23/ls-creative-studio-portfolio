import "./Hero.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import products from "../data/products";

function Hero() {
  const heroProjects = [
    "Project LTO",
    "Admiralty Water Front",
    "Rococo Fine Dining",
    "LIV Restaurant and Bar",
  ];
  const heroProductNames = [
    "Kukuruku Puff",
    "Kukuruku Pillows",
    "Udomosi Center Table",
    "Udomosi Stool",
  ];

  const projectImages = heroProjects
    .map((title) => projects.find((p) => p.title === title)?.image)
    .filter(Boolean);

  const productImages = heroProductNames
    .map((name) => products.find((p) => p.name === name)?.image)
    .filter(Boolean);

  const baseImages = [...projectImages, ...productImages];

  const [heroImages, setHeroImages] = useState(() =>
    [...baseImages].sort(() => Math.random() - 0.5),
  );
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => {
        const next = prev === heroImages.length - 1 ? 0 : prev + 1;
        if (next === 0) {
          setHeroImages([...baseImages].sort(() => Math.random() - 0.5));
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="hero">
      <AnimatePresence mode="wait">
        <motion.img
          key={heroIndex}
          src={heroImages[heroIndex]}
          alt="LS Studios project"
          className="hero-bg-image"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </AnimatePresence>
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          LS Creative Studio
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
        >
          Design That Connects With You
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 1 }}
        >
          <Link to="/consultation" className="hero-cta">
            Book a Consultation
          </Link>
        </motion.div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
