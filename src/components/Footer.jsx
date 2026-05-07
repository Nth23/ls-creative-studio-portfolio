import { Instagram, Linkedin, Mail } from "lucide-react";
import "./Footer.css";
import logo from "../assets/images/lslogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <img src={logo} alt="LS Creative Studio" className="footer-logo" />
          <p className="footer-tagline">Architecture & Structural Design</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a
            href="mailto:hello@lscreativestudio.com"
            className="footer-social-link"
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 LS Creative Studio. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
