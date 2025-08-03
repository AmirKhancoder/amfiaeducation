
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

  // Available options
  const grades = ['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];
  const courses = ['English Speaking', 'Math Foundation', 'Computer Basics', 
                  'Science Concepts', 'Career Guidance', 'All Subjects'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Client-side validation
    if (!formData.name || !formData.grade || !formData.course || !formData.phone || !formData.city) {
      setStatus({ type: 'error', message: 'Please fill all required fields' });
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit application');
      }

      setStatus({ 
        type: 'success', 
        message: data.message || 'Application submitted successfully!'
      });
      setFormData({ 
        name: '', 
        grade: '', 
        course: '', 
        phone: '', 
        city: '' 
      });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.message || 'An error occurred. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="apply-container-scholership">
      <div className="form-header-scholership">
        <h2 className="form-title-scholership">Start Your Learning Journey</h2>
        <p className="form-subtitle-scholership">Fill out the form to enroll in our courses</p>
      </div>
      
      {status && (
        <div className={`status-alert alert-${status.type}`}>
          {status.message}
          <button className="alert-close-scholership" onClick={() => setStatus(null)}>×</button>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="application-form-scholership">
        {/* Name Field */}
        <div className="form-group-scholership">
          <input
            type="text"
            id="student-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
            className="form-input-scholership"
          />
          <label htmlFor="student-name" className="input-label-scholership">Student Name*</label>
        </div>

        {/* Grade Field */}
        <div className="form-group-scholership">
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
            className="form-input-scholership"
          >
            <option value="">-- Select Grade --</option>
            {grades.map((grade, index) => (
              <option key={`grade-${index}`} value={grade}>{grade}</option>
            ))}
          </select>
          <label htmlFor="grade" className="input-label-scholership">Grade*</label>
        </div>

        {/* Course Field */}
        <div className="form-group-scholership">
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="form-input-scholership"
          >
            <option value="">-- Select Course --</option>
            {courses.map((course, index) => (
              <option key={`course-${index}`} value={course}>{course}</option>
            ))}
          </select>
          <label htmlFor="course" className="input-label-scholership">Course*</label>
        </div>

        {/* Phone Field */}
        <div className="form-group-scholership">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder=" "
            className="form-input-scholership"
          />
          <label htmlFor="phone" className="input-label-scholership">Phone Number*</label>
        </div>

        {/* City Field */}
        <div className="form-group-scholership">
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder=" "
            className="form-input-scholership"
          />
          <label htmlFor="city" className="input-label-scholership">City*</label>
        </div>

        <button 
          type="submit" 
          className="submit-btn-scholership"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner-scholership"></span> Submitting...
            </>
          ) : (
            'Apply Now'
          )}
        </button>
      </form>

      {/* Add these particles at the bottom of your container */}
{Array.from({ length: 15 }).map((_, i) => (
  <div 
    key={i}
    className="scholar-particle"
    style={{
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      left: `${Math.random() * 100}%`,
      bottom: '-20px',
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 10 + 10}s`
    }}
  />
))}
    </div>
  );
};

export default ApplyNow;