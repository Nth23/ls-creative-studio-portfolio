import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Consultation.css";

function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you! We'll be in touch within 48 hours to schedule your consultation.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      details: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="consultation-page">
        <div className="consultation-header">
          <span className="consultation-label">Get Started</span>
          <h1 className="consultation-title">Book a Consultation</h1>
          <p className="consultation-subtitle">
            Tell us about your project and we'll be in touch within 48 hours to
            schedule a conversation.
          </p>
        </div>

        <form className="consultation-form" onSubmit={handleSubmit}>
          <div className="consultation-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="c-form-input"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="c-form-input"
              />
            </div>
          </div>

          <div className="consultation-row">
            <div className="form-group">
              <label>Phone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="c-form-input"
              />
            </div>
            <div className="form-group">
              <label>Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="c-form-input"
              >
                <option value="">Select one</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Corporate">Corporate</option>
                <option value="Institutional">Institutional</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Estimated Budget</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="c-form-input"
            >
              <option value="">Select a range</option>
              <option value="Under ₦5m">Under ₦5,000,000</option>
              <option value="₦5m - ₦20m">₦5,000,000 - ₦20,000,000</option>
              <option value="₦20m - ₦50m">₦20,000,000 - ₦50,000,000</option>
              <option value="₦50m+">₦50,000,000+</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tell us about your project</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              rows={6}
              className="c-form-input"
              placeholder="Location, scope, timeline, or anything else that helps us understand your vision"
            />
          </div>

          <button type="submit" className="consultation-submit">
            Submit Request
            <span className="consultation-submit-line" />
          </button>
        </form>

        <div className="consultation-back">
          <Link to="/" className="consultation-back-link">
            ← Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Consultation;
