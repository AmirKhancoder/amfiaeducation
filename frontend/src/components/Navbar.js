import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            <span className="logo-text">
              Am<span className="logo-highlight">Fia</span> Education
            </span>
          </Link>

          <div className="nav-links">
            <Link to="/courses" className="nav-link">Syllabus</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/careers" className="nav-link">Careers</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/courses" className="mobile-nav-link" onClick={toggleMenu}>Syllabus</Link>
        <Link to="/services" className="mobile-nav-link" onClick={toggleMenu}>Services</Link>
        <Link to="/careers" className="mobile-nav-link" onClick={toggleMenu}>Careers</Link>
        <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;