import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

import './Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div>
      <Link to='/home'>
        <div className='amfia'>
            <span style={{ fontFamily: 'Merriweather', fontWeight: 'bold' }}>Am</span><span className='gulabi'>Fia</span><span style={{ fontFamily: 'Fredoka', fontWeight: 'bold' }}> Education</span>
        </div>
        </Link>
    <nav className="navbar">
    
     {/* <a href= '/contact' className="navbar-logo1"> Registration</a> */}
    <Link to='/courses' className="navbar-logo1">Syllabus</Link>
      
      <a href="/" className="navbar-desktop">AmFia Education</a>
      

       
      <div  className={`nav-links1 ${isOpen ? 'active' : ''}`}>

        <Link to='/courses'>Syllabus</Link>
        {/* <Link to='/about'>About</Link> */}
        <Link to='/services'>Services</Link>
        <Link to='/careers'>Careers</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/blog'>Blog</Link> {/* Added Blog Link */}
       
      </div>
      

     
      
      <div 
        className={`hamburger ${isOpen ? 'toggle' : ''}`} 
        onClick={toggleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
 

    </div>
  );
};

export default Navbar;