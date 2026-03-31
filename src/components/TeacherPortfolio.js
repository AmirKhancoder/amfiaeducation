import React, { useState } from 'react';
import './TeacherPortfolio.css';
import teacher1 from '../images/teacher1.jpg'

const TeacherPortfolio = () => {
  const [isCertificateZoomed, setIsCertificateZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState('verification');

  const teacherData = {
    personalInfo: {
      name: "Ms. Priya Sharma",
      teacherId: "TCERT-2024-0456",
      email: "priya.sharma@example.com",
      phone: "+91 98765 43210",
      location: "New Delhi, India",
      specialization: "Pre-Primary & Primary Education",
      joiningDate: "April 15, 2024",
      certificateIssued: "June 30, 2024",
      status: "Verified ✅"
    },
    education: [
      { degree: "M.A. in Education", institution: "University of Delhi", year: "2021" },
      { degree: "B.Ed. (Early Childhood Education)", institution: "Lady Irwin College", year: "2019" },
      { degree: "Bachelor of Arts (Psychology)", institution: "Delhi University", year: "2017" }
    ],
    experience: [
      { role: "Lead Teacher", school: "Sunshine International School", duration: "2022-2024", years: "2 years" },
      { role: "Pre-Primary Teacher", school: "Little Stars Montessori", duration: "2019-2022", years: "3 years" },
      { role: "Teaching Assistant", school: "Bright Minds Academy", duration: "2018-2019", years: "1 year" }
    ],
    totalExperience: "6 years",
    trainingDetails: {
      program: "Advanced Teacher Training Program",
      duration: "100 hours intensive training",
      completionDate: "June 28, 2024",
      grade: "A",
      batch: "Batch 24-Spring",
      trainer: "Nilofer Momin"
    }
  };

  const performanceEvaluation = {
    overallGrade: "A",
    areas: [
      { category: "Final Written Examination", grade: "A-", observation: "Demonstrated excellent understanding of child psychology and phonics methodologies." },
      { category: "Practical Teaching Demos", grade: "A", observation: "Exceptional ability to create engaging, activity-based lessons. Strong classroom presence." },
      { category: "Participation & Engagement", grade: "B+", observation: "Consistently contributed to group discussions. Showed great curiosity and willingness to learn." },
      { category: "Activity & Resource Creation", grade: "A", observation: "Created innovative, low-cost teaching aids that are highly effective for conceptual learning." },
      { category: "Classroom Management Skills", grade: "A-", observation: "Showed marked improvement in developing positive discipline strategies and managing transitions." },
      { category: "Understanding of Emotional Development", grade: "A", observation: "Effectively designed and demonstrated activities for building confidence and reducing stage fear in children." }
    ],
    trainerRemarks: "Ms. Priya Sharma is a dedicated and reflective practitioner. She has shown remarkable growth throughout this program, particularly in her ability to design lessons that make learning fun and accessible for all children. Her strength lies in creating a positive and inclusive learning environment. She is highly recommended for any pre-primary/primary teaching role and is well-equipped to deliver 100% student engagement and results.",
    coreCompetencies: [
      "Phonics & Early Literacy Instruction",
      "Activity-Based & Conceptual Learning",
      "Social-Emotional Learning & Confidence Building",
      "Differentiated Instruction for Weak & Advanced Students",
      "Proactive Classroom & Student Management",
      "Creating a Print-Rich, Stimulating Environment",
      "Parent-Teacher Communication Skills",
      "Assessment & Progress Tracking"
    ]
  };

  return (
    <div className="teacher-portfolio">
      {/* Header */}
      <header className="portfolio-header">
        <div className="header-content">
          <h1>Teacher Certification Verification Portal</h1>
          <p className="header-subtitle">Official Record of Certification & Performance Evaluation</p>
          <div className="verification-badge">
            <span className="badge-icon">🔐</span>
            <span className="badge-text">Secured & Verified Document</span>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="portfolio-tabs">
        <button 
          className={`tab-btn ${activeTab === 'verification' ? 'active' : ''}`}
          onClick={() => setActiveTab('verification')}
        >
          📋 Verification Details
        </button>
        <button 
          className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
          onClick={() => setActiveTab('performance')}
        >
          📊 Performance Evaluation
        </button>
        <button 
          className={`tab-btn ${activeTab === 'certificate' ? 'active' : ''}`}
          onClick={() => setActiveTab('certificate')}
        >
          🏆 Certificate View
        </button>
      </nav>

      <div className="portfolio-content">
        {/* Main Content based on active tab */}
        {activeTab === 'verification' && (
          <div className="verification-content">
            <div className="teacher-profile-section">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="teacher-photo-container">
                    <img 
                      src= {teacher1 }
                      alt="Teacher" 
                      className="teacher-photo"
                    />
                    <div className="photo-badge">Verified Photo</div>
                  </div>
                  <div className="teacher-info">
                    <h2>{teacherData.personalInfo.name}</h2>
                    <p className="teacher-id">ID: {teacherData.personalInfo.teacherId}</p>
                    <div className="status-badge verified">
                      {teacherData.personalInfo.status}
                    </div>
                    <div className="specialization-tag">
                      🎯 {teacherData.personalInfo.specialization}
                    </div>
                  </div>
                </div>

                <div className="contact-details">
                  <h3>Contact Information</h3>
                  <div className="contact-grid">
                    <div className="contact-item">
                      <span className="contact-icon">📧</span>
                      <div>
                        <p className="contact-label">Email</p>
                        <p className="contact-value">{teacherData.personalInfo.email}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">📱</span>
                      <div>
                        <p className="contact-label">Phone</p>
                        <p className="contact-value">{teacherData.personalInfo.phone}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">📍</span>
                      <div>
                        <p className="contact-label">Location</p>
                        <p className="contact-value">{teacherData.personalInfo.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Experience Section */}
              <div className="details-grid">
                <div className="detail-card education-card">
                  <h3>📚 Educational Qualifications</h3>
                  <div className="qualifications-list">
                    {teacherData.education.map((edu, index) => (
                      <div key={index} className="qualification-item">
                        <div className="qualification-header">
                          <span className="degree">{edu.degree}</span>
                          <span className="year">{edu.year}</span>
                        </div>
                        <p className="institution">{edu.institution}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="detail-card experience-card">
                  <h3>💼 Teaching Experience</h3>
                  <div className="experience-summary">
                    <div className="total-experience">
                      <span className="years">{teacherData.totalExperience}</span>
                      <span className="label">Total Experience</span>
                    </div>
                    <div className="experience-list">
                      {teacherData.experience.map((exp, index) => (
                        <div key={index} className="experience-item">
                          <div className="exp-role">{exp.role}</div>
                          <div className="exp-school">{exp.school}</div>
                          <div className="exp-duration">{exp.duration} ({exp.years})</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Details */}
              <div className="training-details-card">
                <h3>🎓 Training Program Details</h3>
                <div className="training-info-grid">
                  <div className="training-info-item">
                    <span className="info-label">Program:</span>
                    <span className="info-value">{teacherData.trainingDetails.program}</span>
                  </div>
                  <div className="training-info-item">
                    <span className="info-label">Duration:</span>
                    <span className="info-value">{teacherData.trainingDetails.duration}</span>
                  </div>
                  <div className="training-info-item">
                    <span className="info-label">Completion Date:</span>
                    <span className="info-value">{teacherData.trainingDetails.completionDate}</span>
                  </div>
                  <div className="training-info-item">
                    <span className="info-label">Final Grade:</span>
                    <span className="info-value grade-badge">{teacherData.trainingDetails.grade}</span>
                  </div>
                  <div className="training-info-item">
                    <span className="info-label">Batch:</span>
                    <span className="info-value">{teacherData.trainingDetails.batch}</span>
                  </div>
                  <div className="training-info-item">
                    <span className="info-label">Lead Trainer:</span>
                    <span className="info-value">{teacherData.trainingDetails.trainer}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="performance-content">
            <div className="performance-header">
              <h2>Detailed Performance Evaluation</h2>
              <p className="performance-subtitle">Comprehensive assessment based on theoretical exams, practical assignments, classroom participation, and demonstrated teaching competencies.</p>
              <div className="overall-grade">
                <div className="grade-circle">
                  <span className="grade-letter">{performanceEvaluation.overallGrade}</span>
                  <span className="grade-label">Overall Grade</span>
                </div>
              </div>
            </div>

            {/* Assessment Areas Table */}
            <div className="assessment-table-container">
              <h3>Assessment Breakdown</h3>
              <table className="assessment-table">
                <thead>
                  <tr>
                    <th>Assessment Area</th>
                    <th>Grade</th>
                    <th>Key Observations & Strengths</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceEvaluation.areas.map((area, index) => (
                    <tr key={index}>
                      <td className="area-name">{area.category}</td>
                      <td className="area-grade">
                        <span className={`grade-badge grade-${area.grade.toLowerCase().replace('+', 'plus').replace('-', 'minus')}`}>
                          {area.grade}
                        </span>
                      </td>
                      <td className="area-observation">{area.observation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Trainer's Remarks */}
            <div className="trainer-remarks-card">
              <h3>🎤 Trainer's Overall Remarks</h3>
              <div className="remarks-content">
                <div className="quote-icon">❝</div>
                <p className="remarks-text">{performanceEvaluation.trainerRemarks}</p>
                <div className="trainer-signature">
                  <p className="signature-name">{teacherData.trainingDetails.trainer}</p>
                  <p className="signature-role">Lead Trainer & Program Director</p>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="competencies-section">
              <h3>🎯 Core Competencies Validated by this Program</h3>
              <div className="competencies-grid">
                {performanceEvaluation.coreCompetencies.map((competency, index) => (
                  <div key={index} className="competency-card">
                    <span className="competency-icon">✓</span>
                    <span className="competency-text">{competency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'certificate' && (
          <div className="certificate-content">
            <div className="certificate-viewer">
              <div className="viewer-header">
                <h2>Official Certificate</h2>
                <button 
                  className="zoom-btn"
                  onClick={() => setIsCertificateZoomed(!isCertificateZoomed)}
                >
                  {isCertificateZoomed ? '🔍 Zoom Out' : '🔍 Zoom In'}
                </button>
              </div>
              
              <div className={`certificate-container ${isCertificateZoomed ? 'zoomed' : ''}`}>
                <div className="certificate-paper">
                  <div className="certificate-border">
                    <div className="certificate-content">
                      <div className="certificate-header">
                        <div className="certificate-seal">
                          <div className="seal-inner">
                            <span>Seal</span>
                          </div>
                        </div>
                        <h3>Certificate of Excellence</h3>
                        <p className="certificate-subtitle">in Teaching Proficiency</p>
                      </div>
                      
                      <div className="certificate-body">
                        <p className="awarded-to">This is to certify that</p>
                        <div className="teacher-name">
                          <h2>{teacherData.personalInfo.name}</h2>
                        </div>
                        
                        <div className="certificate-text">
                          <p>has successfully completed the</p>
                          <p className="program-name"><strong>{teacherData.trainingDetails.program}</strong></p>
                          <p>with distinction, demonstrating exceptional competence in early childhood education</p>
                        </div>
                        
                        <div className="performance-highlights">
                          <div className="highlight-item">
                            <span className="highlight-label">Overall Grade:</span>
                            <span className="highlight-value grade-a">{performanceEvaluation.overallGrade}</span>
                          </div>
                          <div className="highlight-item">
                            <span className="highlight-label">Training Duration:</span>
                            <span className="highlight-value">{teacherData.trainingDetails.duration}</span>
                          </div>
                          <div className="highlight-item">
                            <span className="highlight-label">Completed On:</span>
                            <span className="highlight-value">{teacherData.trainingDetails.completionDate}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="certificate-footer">
                        <div className="signature-block">
                          <div className="signature-line"></div>
                          <p className="signatory-name">{teacherData.trainingDetails.trainer}</p>
                          <p className="signatory-title">Program Director</p>
                        </div>
                        <div className="verification-block">
                          <div className="qr-code-placeholder">
                            <div className="qr-code">QR</div>
                            <p className="scan-text">Scan to Verify</p>
                          </div>
                          <p className="certificate-id">ID: {teacherData.personalInfo.teacherId}</p>
                        </div>
                      </div>
                      
                      <div className="certificate-watermark">
                        CERTIFIED EDUCATOR
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="verification-actions">
                <button className="action-btn print-btn">🖨️ Print Certificate</button>
                <button className="action-btn download-btn">📥 Download PDF</button>
                <button className="action-btn verify-btn">🔗 Verify Online</button>
              </div>
              
              <div className="verification-info">
                <h4>Verification Details</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Certificate ID:</span>
                    <span className="info-value">{teacherData.personalInfo.teacherId}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Issuance Date:</span>
                    <span className="info-value">{teacherData.personalInfo.certificateIssued}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Verification Status:</span>
                    <span className="info-value status-verified">Verified & Active</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Valid Until:</span>
                    <span className="info-value">June 30, 2027 (3 Years)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">TeachCert Verification System</span>
          </div>
          <div className="footer-info">
            <p>This is an official verification document. All information is confidential and protected.</p>
            <p className="footer-note">Last Updated: July 15, 2024 | Version 2.1</p>
          </div>
          <div className="footer-security">
            <span className="security-icon">🔒</span>
            <span className="security-text">256-bit SSL Encrypted</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeacherPortfolio;