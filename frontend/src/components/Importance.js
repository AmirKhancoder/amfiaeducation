import React from 'react';
import './Importance.css';
// import checkIcon from '../images/check-icon.png'; // Add your check icon
// import chartIcon from '../images/chart-icon.png'; // Add your chart icon
// import certificateIcon from '../images/certificate-icon.png'; // Add your certificate icon
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.webp'
import icon3 from '../images/icon3.webp'
import icon4 from '../images/icon4.webp'
import icon5 from '../images/icon5.png'

function Importance() {
  return (
    <div className="importance-section">
      <div className="importance-container">
        <div className="importance-left">
          <h2 className="section-title">Why We Are Important For Students</h2>
          
          <ul className="benefits-list">
            <li>
              <img src={icon1} alt="Amfia Education Banner for Online Classes" className="importanceBenefit-icon" />
              <span>Prepares students for real-life skills</span>
            </li>
            <li>
              <img src={icon2} alt="Amfia Education Banner for Online Classes" className="importanceBenefit-icon" />
              <span>Builds strong communication and confidence</span>
            </li>
            <li>
              <img src={icon3} alt="Amfia Education Banner for Online Classes" className="importanceBenefit-icon" />
              <span>Supports school exams and career planning</span>
            </li>
            <li>
              <img src={icon4} alt="Amfia Education Banner for Online Classes" className="importanceBenefit-icon" />
              <span>Parents will clearly see improvement</span>
            </li>
            <li>
              <img src={icon5} alt="Amfia Education Banner for Online Classes" className="importanceBenefit-icon" />
              <span>Helps students become job-ready and future-ready</span>
            </li>
          </ul>
        </div>

        <div className="importance-right">
          <div className="feature-card">
            <h3>Highly Trained Teachers</h3>
            <p>Our educators are experts in their fields with proven track records</p>
          </div>
          
          <div className="feature-card accent">
            {/* <img src={chartIcon} alt="Chart" className="feature-icon" /> */}
            <h3>100% Result Promise for Class 10 and 12</h3>
            <p>Guaranteed improvement or your money back</p>
          </div>
          
          <div className="feature-card">
            {/* <img src={certificateIcon} alt="Certificate" className="feature-icon" /> */}
            <h3>Interactive Worksheets & Homework</h3>
            <p>Digital Certificate after completion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Importance;