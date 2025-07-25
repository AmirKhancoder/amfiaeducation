// import React, { useState } from 'react';
// import './ContactForm.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [status, setStatus] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus(null);

//     try {
//       // fetch('https://amfiback.onrender.com/api/contact'
//       const response = await fetch('https://kaifiyaback.onrender.com/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         setStatus({ type: 'success', message: 'Message sent successfully!' });
//         setFormData({ name: '', email: '', phone: '', message: '' });
//       } else {
//         throw new Error(data.message || 'Failed to send message');
//       }
//     } catch (error) {
//       setStatus({ type: 'error', message: error.message });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="contact-form-container">
//       <h2>Contact Us</h2>
//       {status && (
//         <div className={`alert ${status.type}`}>
//           {status.message}
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name*</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email*</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message*</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows="5"
//             required
//           />
//         </div>
//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Sending...' : 'Send Message'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('https://kaifiyaback.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid response from server');
      }

      const data = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="amfia-contact-container">
      <div className="amfia-contact-header">
        <h2 className="amfia-contact-title">Contact Us</h2>
        <p className="amfia-contact-subtitle">Have questions? Get in touch with our team</p>
        <div className="amfia-contact-decoration"></div>
      </div>
      
      {status && (
        <div className={`amfia-contact-alert amfia-alert-${status.type}`}>
          {status.message}
          <span className="amfia-alert-close" onClick={() => setStatus(null)}>×</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="amfia-contact-form">
        <div className="amfia-form-group amfia-input-group">
          <input
            type="text"
            id="amfia-contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="amfia-form-input"
          />
          <label htmlFor="amfia-contact-name" className="amfia-input-label">Full Name*</label>
          <div className="amfia-input-underline"></div>
        </div>
        
        <div className="amfia-form-group amfia-input-group">
          <input
            type="email"
            id="amfia-contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="amfia-form-input"
          />
          <label htmlFor="amfia-contact-email" className="amfia-input-label">Email Address*</label>
          <div className="amfia-input-underline"></div>
        </div>
        
        <div className="amfia-form-group amfia-input-group">
          <input
            type="tel"
            id="amfia-contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="amfia-form-input"
          />
          <label htmlFor="amfia-contact-phone" className="amfia-input-label">Phone Number</label>
          <div className="amfia-input-underline"></div>
        </div>
        
        <div className="amfia-form-group amfia-textarea-group">
          <textarea
            id="amfia-contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="amfia-form-textarea"
            rows="5"
          />
          <label htmlFor="amfia-contact-message" className="amfia-textarea-label">Your Message*</label>
          <div className="amfia-textarea-underline"></div>
        </div>
        
        <button 
          type="submit" 
          className="amfia-submit-btn"
          disabled={isSubmitting}
        >
          <span className="amfia-btn-text">
            {isSubmitting ? (
              <>
                <span className="amfia-spinner"></span> Sending...
              </>
            ) : (
              'Send Message'
            )}
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;