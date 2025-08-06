import React, { useState } from 'react';
import './ApplyNow.css';

const FinalRegistration = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    course: '',
    phone: '',
    city: ''
  });

  // UI state
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Course data
  const grades = ['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];
  const courses = {
    'English Speaking': 50000, // Prices in paise (500.00 INR)
    'Math Foundation': 60000,
    'Computer Basics': 45000,
    'Science Concepts': 55000,
    'Career Guidance': 40000,
    'All Subjects': 80000
  };

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const initiatePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      throw new Error('Razorpay SDK failed to load');
    }

    // Create order on your backend
    const orderResponse = await fetch('https://kaifiyaback.onrender.com/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        amount: courses[formData.course] / 100 // Convert to INR
      })
    });

    const orderData = await orderResponse.json();

    return new Promise((resolve, reject) => {
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: courses[formData.course],
        currency: 'INR',
        name: 'KaifiYa Academy',
        description: `Enrollment for ${formData.course}`,
        order_id: orderData.id,
        handler: function(response) {
          resolve(response);
        },
        prefill: {
          name: formData.name,
          contact: formData.phone,
          email: `${formData.name.replace(/\s+/g, '').toLowerCase()}@example.com`
        },
        theme: { color: '#3399cc' }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response) => {
        reject(new Error(response.error.description));
      });
      rzp.open();
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Validation
    if (!Object.values(formData).every(Boolean)) {
      setStatus({ type: 'error', message: 'All fields are required' });
      setIsSubmitting(false);
      return;
    }

    if (!termsAccepted) {
      setStatus({ type: 'error', message: 'Please accept terms & conditions' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Step 1: Submit application data
      const appResponse = await fetch('https://kaifiyaback.onrender.com/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!appResponse.ok) throw new Error('Application submission failed');

      // Step 2: Process payment
      await initiatePayment();

      // Success
      setStatus({ 
        type: 'success', 
        message: 'Enrollment successful! Check your email for confirmation.' 
      });
      setFormData({ name: '', grade: '', course: '', phone: '', city: '' });
      setTermsAccepted(false);

    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.message || 'Payment failed. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="apply-container-scholership">
      {/* ... (keep your existing JSX structure) ... */}

      {/* Add inside your form: */}
      <div className="terms-container-scholership">
        <input
          type="checkbox"
          id="terms"
          checked={termsAccepted}
          onChange={handleTermsChange}
          className="terms-checkbox-scholership"
        />
        <label htmlFor="terms" className="terms-label-scholership">
          I agree to the <a href="/terms" target="_blank">Terms & Conditions</a>
        </label>
      </div>

      {formData.course && (
        <div className="price-display-scholership">
          Course Fee: ₹{(courses[formData.course] / 100).toFixed(2)}
        </div>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Processing...' : 'Pay & Enroll Now'}
      </button>
    </div>
  );
};

export default FinalRegistration;