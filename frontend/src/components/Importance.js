import React from 'react';
import './Importance.css';
import girl_img4 from '../images/girl_img4.png';

function Importance() {
  return (
    <div className="importance-section">
      <div className="importance-container">
        <div className="importance-left">
          <h2 className="section-title">Why We Are Important For Students</h2>
          
          <ul className="benefits-list">
            <li>
              <span>Prepares students for real-life skills</span>
            </li>
            <li>
              <span>Builds strong communication and confidence</span>
            </li>
            <li>
              <span>Supports school exams and career planning</span>
            </li>
            <li>
              <span>Parents will clearly see improvement</span>
            </li>
            <li>
              <span>Helps students become job-ready and future-ready</span>
            </li>
          </ul>
        </div>

        <div className="importance-right">
          <div className="student-image-container">
            <img 
              src={girl_img4} 
              alt="Happy student learning" 
              className="student-image" 
            />
            <div className="floating-elements">
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Importance;