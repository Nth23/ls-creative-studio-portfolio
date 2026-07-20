import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will be in touch shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <span className="contact-label">Get In Touch</span>
          <h2 className="contact-title">Let's build something together</h2>
          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="contact-detail-label">Email</span>
              <a
                href="mailto:ls.creativesstudios@gmail.com"
                className="contact-detail-value"
              >
                ls.creativesstudios@gmail.com
              </a>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Phone</span>
              <a href="tel:+2347068153217" className="contact-detail-value">
                +234 706 815 3217
              </a>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Location</span>
              <span className="contact-detail-value">Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input form-textarea"
                rows={6}
              />
            </div>
            <button type="submit" className="form-btn">
              Send Message
              <span className="form-btn-line" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
