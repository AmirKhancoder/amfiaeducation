import React, { useState } from 'react';
import './ScholarshipProgram.css';
import TermsAndConditions from './TermsAndConditions';

const ScholarshipProgram = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="scholarship-container-exam">
      <div className="hero-banner-exam">
        <h1>Amfia Excellence Scholarship</h1>
        <p className="tagline-exam">Rewarding Merit with Up to ₹2 Lakh Scholarships!</p>
      </div>

      <div className="content-section-exam">
        <div className="scholarship-card-exam">
          <h2>🏆 Scholarship Rewards</h2>
          <ul className="rewards-list-exam">
            <li><span className="rank">1st Rank:</span> ₹2,00,000</li>
            <li><span className="rank">2nd-3rd Rank:</span> ₹50,000 each</li>
            <li><span className="rank">4th-10th Rank:</span> ₹25,000 each</li>
          </ul>
          <div className="payment-notice-exam">
            <p>📌 Registration & Exam Fee: <span className="fee-exam">₹100</span> (Non-refundable)</p>
            <p>🏫 Scholarship disbursement during school's annual function</p>
          </div>
        </div>

        <div className="details-card-exam">
          <h2>📝 Program Rules</h2>
          <div className="rule-item-exam strict-rule-exam">
            <h3>❌ Anti-Cheating Policy</h3>
            <p>Any cheating attempt will result in:
              <ul>
                <li>Immediate exam cancellation</li>
                <li>Forfeiture of registration fee</li>
                <li>Potential disqualification of entire school from future scholarships</li>
              </ul>
            </p>
          </div>
          
          <div className="detail-item-exam">
            <h3>Eligibility</h3>
            <p>Only students from <span className="highlight-exam">partner schools</span> (Grades 5-10)</p>
          </div>
          
          <div className="detail-item-exam">
            <h3>Selection Process</h3>
            <ol>
              <li><strong>Registration:</strong> Pay ₹100 fee via school</li>
              <li><strong>Round 1:</strong> Proctored MCQ Test (90%+ cutoff)</li>
              <li><strong>Round 2:</strong> Written Exam (95%+ cutoff)</li>
              <li><strong>Final Round:</strong> Personal Interview</li>
            </ol>
          </div>
        </div>

        <button className="cta-button-exam" onClick={() => setShowTerms(!showTerms)}>
          {showTerms ? 'Hide Terms' : 'View Complete Terms & Conditions'}
        </button>

        {showTerms && <TermsAndConditions />}
      </div>
    </div>
  );
};

export default ScholarshipProgram;