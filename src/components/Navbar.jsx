import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY && currentY > 100);
      setLastY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className="navbar"
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <a href="/" className="navbar-logo">
        <img
          src="/lslogo.png"
          alt="LS Creative Studio"
          className="footer-logo"
        />
      </a>

      {/* Desktop links */}
      <ul className="navbar-links">
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#services">Services</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger button */}
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X size={24} strokeWidth={1.5} />
        ) : (
          <Menu size={24} strokeWidth={1.5} />
        )}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ul className="navbar-mobile-links">
              <li>
                <Link to="/#about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/#services" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#projects" onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
