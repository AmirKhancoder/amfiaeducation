import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <FaPhone className="footer-icon" />
              <span>+91 63924-92293</span>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <span>contact@amfiaeducation.com</span>
            </li>
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>D-69, Sector 2, Noida 201301</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/testimonials">Success Stories</a></li>
            <li><Link to='/blog'>Blog</Link> </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://youtube.com/@amfialearn?si=oFhJ_WquBI1BsnWi" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://facebook.com/amfialearn" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://instagram.com/amfialearn" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://twitter.com/amfialearn" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
          <div className="newsletter">
            <p>Subscribe to our newsletter</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button className='footerSuscribeButton' type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AmFia Education. All Rights Reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;