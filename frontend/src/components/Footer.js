import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Floating background elements */}
      <div className="floating-element1"></div>
      <div className="floating-element1"></div>
      
      <div className="footer-container-amfia">
        <div className="footer-section-amfia">
          <h3>Contact Us</h3>
          <ul className="contact-list-amfia">
            <li>
              <FaPhone className="footer-icon-amfia" />
              <span>+91 63924-92293</span>
            </li>
            <li>
              <FaEnvelope className="footer-icon-amfia" />
              <span>contact@amfiaeducation.com</span>
            </li>
            <li>
              <FaMapMarkerAlt className="footer-icon-amfia" />
              <span>D-69, Sector 2, Noida 201301</span>
            </li>
          </ul>
        </div>

        <div className="footer-section-amfia">
          <h3>Quick Links</h3>
          <ul className="quick-links-amfia">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/testimonials">Success Stories</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section-amfia">
          <h3>Connect With Us</h3>
          <div className="social-links-amfia">
            <a href="https://youtube.com/@amfialearn?si=oFhJ_WquBI1BsnWi" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://facebook.com/amfialearn" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/amfiaeducation?igsh=MWE0ZjlmNm92aTVvdg==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://x.com/AmfiaLearn?t=anASmSG8rzSFerBxHcK8Rg&s=08" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
          <div className="newsletter-amfia">
            <p>Get updates on courses & offers</p>
            <form className="newsletter-form1-amfia">
              <input className='suscribe_input-amfia' type="email" placeholder="Your email address" />
              <button className='footerSuscribeButton1-amfia' type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom-amfia">
        <p>&copy; {new Date().getFullYear()} AmFia Education. All Rights Reserved.</p>
        <div className="legal-links-amfia">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/refund">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;