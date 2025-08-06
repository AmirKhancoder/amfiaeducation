import React, { useState } from 'react';
import { FaWhatsapp, FaTimes, FaPhone } from 'react-icons/fa';
import './WhatsAppPopup.css'; // Create this CSS file

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '916392492293'; // Replace with your actual number (without + or spaces)

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp button */}
      <div className="whatsapp-float" onClick={() => setIsOpen(true)}>
        <FaWhatsapp className="whatsapp-icon" />
      </div>

      {/* Popup modal */}
      {isOpen && (
        <div className="whatsapp-popup-overlay">
          <div className="whatsapp-popup">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
            
            <div className="popup-content">
              <FaWhatsapp className="popup-whatsapp-icon" />
              <h3>Chat with Us on WhatsApp</h3>
              <div className="phone-number" onClick={openWhatsApp}>
                <FaPhone className="phone-icon" />
                <span>+91 6392492293</span> {/* Formatted number */}
              </div>
              <p>Click the number to start chatting</p>
              <button className="whatsapp-button" onClick={openWhatsApp}>
                Open WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppPopup;