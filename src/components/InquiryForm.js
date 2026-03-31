import React, { useState } from 'react';
import './InquiryForm.css';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    messageUser:''
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
    <div className="inquiry-form-container">
      <h2>Quick Inquiry</h2>
      {status && (
        <div className={`alert ${status.type}`}>
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Message*</label>
          <input
            type="text"
            id="messageUser"
            name="messageUser"
            value={formData.messageUser}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;