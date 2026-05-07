import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Shaakirah has an incredible eye for detail. She took our brief and delivered something far beyond what we imagined. The floor plans were precise, the 3D renders were stunning and the final build was exactly as designed.",
    name: "Emeka Okonkwo",
    title: "Residential Client, Ikoyi Lagos",
  },
  {
    id: 2,
    quote:
      "Working with LS Creative Studio on our restaurant was a seamless experience. Shaakirah understood the atmosphere we wanted to create and translated it perfectly into the space. Our customers constantly compliment the design.",
    name: "Amina Bello",
    title: "Hospitality Client, Victoria Island",
  },
  {
    id: 3,
    quote:
      "The level of professionalism and creativity Shaakirah brings is unmatched. From the initial concept drawings to the final interior finishes, every stage was handled with care and precision. Highly recommend.",
    name: "Tunde Adeyemi",
    title: "Commercial Client, Abuja",
  },
  {
    id: 4,
    quote:
      "We came to Shaakirah with a very complex site and a tight brief. She navigated every constraint with ease and delivered a design that was both functional and beautifully considered. The attention to structural detail was exceptional.",
    name: "Fatima Al-Hassan",
    title: "Residential Client, Abuja",
  },
  {
    id: 5,
    quote:
      "LS Creative Studio transformed our lounge into something truly world class. Shaakirah has a rare ability to blend technical precision with genuine creative vision. The result exceeded every expectation we had.",
    name: "Biodun Fashola",
    title: "Hospitality Client, Lagos Island",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <span className="testimonials-label">Client Words</span>
        <h2 className="testimonials-title">Testimonials</h2>
      </div>

      <div className="testimonials-carousel">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="testimonial-slide"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <p className="testimonial-quote">"{testimonials[current].quote}"</p>
            <div className="testimonial-author">
              <span className="testimonial-name">
                {testimonials[current].name}
              </span>
              <span className="testimonial-title">
                {testimonials[current].title}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="testimonials-controls">
          <button className="testimonial-btn" onClick={prev}>
            ←
          </button>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === current ? "testimonial-dot--active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <button className="testimonial-btn" onClick={next}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
