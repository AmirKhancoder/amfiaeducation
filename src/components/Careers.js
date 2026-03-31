import React, { useState } from 'react';
import './Careers.css';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaUserGraduate, FaFileAlt } from 'react-icons/fa';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    jobId: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Math Tutor",
      type: "Part-time",
      location: "Remote",
      experience: "1+ years",
      salary: "₹30,000 - ₹40,000/month",
      category: "teaching",
      description: "We're looking for passionate math tutors to teach students in grades 5-12. You'll help students understand complex concepts and prepare for exams."
    },
    {
      id: 2,
      title: "English Instructor",
      type: "Full-time",
      location: "New Delhi",
      experience: "2+ years",
      salary: "₹30,000 - ₹40,000/month",
      category: "teaching",
      description: "Join our team to teach English communication skills to students and professionals. Experience in IELTS/TOEFL training is a plus."
    },
    {
      id: 3,
      title: "Frontend Developer",
      type: "Full-time",
      location: "Bangalore",
      experience: "3+ years",
      salary: "₹6-8 LPA",
      category: "technical",
      description: "Develop educational web applications using React.js. Experience with EdTech platforms is preferred."
    },
    {
      id: 4,
      title: "Content Writer",
      type: "Freelance",
      location: "Remote",
      experience: "1+ years",
      salary: "Not Disclosed",
      category: "content",
      description: "Create engaging educational content for our learning platforms. Subjects include math, science, and computer science."
    }
  ];

  const filteredJobs = activeTab === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeTab);

  const handleApplyClick = (jobId) => {
    setSelectedJob(jobOpenings.find(job => job.id === jobId));
    setFormData(prev => ({ ...prev, jobId }));
    setShowApplicationForm(true);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Application submitted:', formData);
    alert(`Thank you for applying to ${selectedJob.title}! We'll review your application and get back to you soon.`);
    setShowApplicationForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
      jobId: ''
    });
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="hero-content">
          <h1>Join Our Team</h1>
          <p>Help shape the future of education while growing your career</p>
        </div>
      </section>

      {/* Job Categories */}
      <section className="job-categories">
        <div className="container">
          <div className="category-tabs">
            <button 
              className={activeTab === 'all' ? 'active' : ''}
              onClick={() => setActiveTab('all')}
            >
              All Positions
            </button>
            <button 
              className={activeTab === 'teaching' ? 'active' : ''}
              onClick={() => setActiveTab('teaching')}
            >
              Teaching
            </button>
            <button 
              className={activeTab === 'technical' ? 'active' : ''}
              onClick={() => setActiveTab('technical')}
            >
              Technical
            </button>
            <button 
              className={activeTab === 'content' ? 'active' : ''}
              onClick={() => setActiveTab('content')}
            >
              Content
            </button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="job-listings">
        <div className="container">
          {filteredJobs.length > 0 ? (
            <div className="jobs-grid">
              {filteredJobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className={`job-type ${job.type.toLowerCase()}`}>
                      {job.type}
                    </span>
                  </div>
                  <div className="job-details">
                    <div className="detail-item">
                      <FaMapMarkerAlt />
                      <span>{job.location}</span>
                    </div>
                    <div className="detail-item">
                      <FaUserGraduate />
                      <span>{job.experience} experience</span>
                    </div>
                    <div className="detail-item">
                      <FaMoneyBillWave />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <button 
                    className="apply-btn"
                    onClick={() => handleApplyClick(job.id)}
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-jobs">
              <p>No current openings in this category. Check back later!</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="application-modal">
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => setShowApplicationForm(false)}
            >
              &times;
            </button>
            <h2>Apply for {selectedJob?.title}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Resume/CV* (PDF, DOC, DOCX)</label>
                <div className="file-upload">
                  <FaFileAlt className="file-icon" />
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <span>{formData.resume ? formData.resume.name : 'Choose File'}</span>
                </div>
              </div>
              <div className="form-group">
                <label>Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Tell us why you'd be a great fit..."
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="submit-application">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Why Join Us Section */}
      <section className="why-join-us">
        <div className="container">
          <h2>Why Join AMFIA Education?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaClock />
              </div>
              <h3>Flexible Work</h3>
              <p>Remote options and flexible schedules for many positions</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaMoneyBillWave />
              </div>
              <h3>Competitive Pay</h3>
              <p>Industry-competitive salaries and performance bonuses</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaBriefcase />
              </div>
              <h3>Growth Opportunities</h3>
              <p>Professional development and career advancement paths</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;