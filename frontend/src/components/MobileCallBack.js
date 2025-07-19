// import React, { useState } from 'react';
// import './MobileCallBack.css';

// import { FaPhone, FaTimes, FaUser, FaComment } from 'react-icons/fa';

// const MobileCallBack = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     message: ''
//   });

//   const toggleForm = () => setIsOpen(!isOpen);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you! Our expert will contact you soon.');
//     setFormData({ name: '', phone: '', message: '' });
//     setIsOpen(false);
//   };

//   return (
//     <div className="mobile-callback-container">
//       {/* Sticky Button */}
//       <div className="sticky-call-button" onClick={toggleForm}>
//         <FaPhone className="call-icon" />
//         <span>Request Call Back</span>
//       </div>

//       {/* Popup Form */}
//       <div className={`callback-popup ${isOpen ? 'open' : ''}`}>
//         <div className="popup-header">
//           <h3>Talk to Our Expert</h3>
//           <button className="close-btn" onClick={toggleForm}>
//             <FaTimes />
//           </button>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <FaUser className="input-icon" />
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               required
//             />
//           </div>
          
//           <div className="input-group">
//             <FaPhone className="input-icon" />
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               required
//             />
//           </div>
          
//           <div className="input-group">
//             <FaComment className="input-icon" />
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your questions/message"
//               rows="3"
//             ></textarea>
//           </div>
          
//           <button type="submit" className="submit-btn">
//             Request Call Back
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MobileCallBack;


import React, { useState } from 'react';
import './MobileCallBack.css';

import { FaPhone, FaTimes, FaUser, FaComment } from 'react-icons/fa';

const MobileCallBack = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    messageUser: ''
  });

  const toggleForm = () => setIsOpen(!isOpen);

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
    alert('Thank you! Our expert will contact you soon.');
    // setFormData({ name: '', phone: '', message: '' });
    setIsOpen(true);
    setIsSubmitting(true);
    setStatus(null);
    
    // const response = await fetch('https://amfiback.onrender.com/api/inquiry', {
    try {
      const response = await fetch('http://localhost:5002/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Inquiry submitted successfully!' });
        setFormData({ name: '', phone: '', messageUser: '' });
      } else {
        throw new Error(data.message || 'Failed to submit inquiry');
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="mobile-callback-container">
      {/* Sticky Button */}
      <div className="sticky-call-button" onClick={toggleForm}>
        <FaPhone className="call-icon" />
        <span>Request Call Back</span>
      </div>

      {status && (
        <div className={`alert ${status.type}`}>
          {status.message}
        </div>
      )}

      {/* Popup Form */}
      <div className={`callback-popup ${isOpen ? 'open' : ''}`}>
        <div className="popup-header">
          <h3>Talk to Our Expert</h3>
          <button className="close-btn" onClick={toggleForm}>
            <FaTimes />
          </button>
        </div>
        

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>
          
          <div className="input-group">
            <FaComment className="input-icon" />
            
             <textarea
             id="messageUser"
             name="messageUser"
             value={formData.messageUser}
             onChange={handleChange}
             placeholder="Your questions/message"
             rows="3"
             ></textarea>
        
            
            
          </div>
          
          <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Requesting...' : 'Request Call Back'}
            {/* Request Call Back */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MobileCallBack;


