import React, { useState } from 'react';
import './ApplyNow.css';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    course: '',
    phone: '',
    city: ''
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const grades = ['Select Grade', 'Class 5', 
                 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];
  const courses = ['Select Course', 'English Speaking', 'Math Foundation', 'Computer Basics', 
                  'Science Concepts', 'Career Guidance', 'All Subjects'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    if (formData.grade === 'Select Grade' || formData.course === 'Select Course') {
      setStatus({ type: 'error', message: 'Please select both grade and course' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://kaifiyaback.onrender.com/api/apply', {
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
        setStatus({ type: 'success', message: 'Application submitted successfully!' });
        setFormData({ 
          name: '', 
          grade: 'Select Grade', 
          course: 'Select Course', 
          phone: '', 
          city: '' 
        });
      } else {
        throw new Error(data.message || 'Failed to submit application');
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="amfia-apply-container">
      <div className="amfia-form-header">
        <h2 className="amfia-form-title">Start Your Learning Journey</h2>
        <p className="amfia-form-subtitle">Fill out the form to enroll in our courses</p>
        <div className="amfia-header-decoration"></div>
      </div>
      
      {status && (
        <div className={`amfia-status-alert amfia-${status.type}`}>
          {status.message}
          <span className="amfia-alert-close" onClick={() => setStatus(null)}>×</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="amfia-application-form">
        <div className="amfia-form-group amfia-floating-input">
          <input
            type="text"
            id="amfia-student-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
            className="amfia-text-input"
          />
          <label htmlFor="amfia-student-name" className="amfia-input-label">Student Name*</label>
          <div className="amfia-input-icon">
            <svg viewBox="0 0 24 24" className="amfia-icon-svg">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
            </svg>
          </div>
        </div>

        <div className="amfia-form-group amfia-select-group">
          <label htmlFor="amfia-grade" className="amfia-select-label">Grade*</label>
          <select
            id="amfia-grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
            className={`amfia-select-input ${formData.grade === 'Select Grade' ? 'amfia-placeholder' : ''}`}
          >
            {grades.map((grade, index) => (
              <option key={`grade-${index}`} value={grade}>{grade}</option>
            ))}
          </select>
          <div className="amfia-select-arrow"></div>
        </div>

        <div className="amfia-form-group amfia-select-group">
          <label htmlFor="amfia-course" className="amfia-select-label">Course*</label>
          <select
            id="amfia-course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className={`amfia-select-input ${formData.course === 'Select Course' ? 'amfia-placeholder' : ''}`}
          >
            {courses.map((course, index) => (
              <option key={`course-${index}`} value={course}>{course}</option>
            ))}
          </select>
          <div className="amfia-select-arrow"></div>
        </div>

        <div className="amfia-form-group amfia-floating-input">
          <input
            type="tel"
            id="amfia-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder=" "
            className="amfia-text-input"
          />
          <label htmlFor="amfia-phone" className="amfia-input-label">Phone Number*</label>
          <div className="amfia-input-icon">
            <svg viewBox="0 0 24 24" className="amfia-icon-svg">
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
          </div>
        </div>

        <div className="amfia-form-group amfia-floating-input">
          <input
            type="text"
            id="amfia-city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder=" "
            className="amfia-text-input"
          />
          <label htmlFor="amfia-city" className="amfia-input-label">City*</label>
          <div className="amfia-input-icon">
            <svg viewBox="0 0 24 24" className="amfia-icon-svg">
              <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </div>
        </div>

        <button 
          type="submit" 
          className="amfia-submit-btn"
          disabled={isSubmitting}
        >
          <span className="amfia-btn-text">
            {isSubmitting ? 'Processing...' : 'Apply Now'}
          </span>
          <span className="amfia-btn-icon">
            <svg viewBox="0 0 24 24" className="amfia-icon-svg">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </span>
        </button>
      </form>

      <div className="amfia-form-decoration">
        <div className="amfia-decoration-circle"></div>
        <div className="amfia-decoration-circle"></div>
        <div className="amfia-decoration-circle"></div>
      </div>
    </div>
  );
};

export default ApplyNow;