import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <img
            src="/lslogo.png"
            alt="LS Creative Studio"
            className="footer-logo"
          />
          <p className="footer-tagline">Architecture & Structural Design</p>
        </div>

        <div className="footer-links">
          <Link to="/#about">About</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#contact">Contact</Link>
        </div>

        <div className="footer-socials">
          <a
            href="https://instagram.com/ls.studios.ng"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/shaakirahlawal"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a
            href="mailto:ls.creativesstudios@gmail.com"
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
