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
        <div className='amfia'>
            <span style={{ fontFamily: 'Merriweather', fontWeight: 'bold' }}>Am</span><span className='gulabi'>Fia</span><span style={{ fontFamily: 'Fredoka', fontWeight: 'bold' }}> Education</span>
        </div>
    <nav className="navbar">
    
     <a href= '/contact' className="navbar-logo1"> Registration</a>
      
      <a href="/" className="navbar-desktop">AmFia Education</a>
      

       
      <div className={`nav-links1 ${isOpen ? 'active' : ''}`}>

        <Link to='/home'><a>Home</a></Link>
        <Link to='/about'><a>About</a></Link>
        <Link to='/services'><a>Services</a></Link>
        <Link to='/careers'><a>Careers</a></Link>
        <Link to='/contact'><a>Contact</a></Link>
       
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