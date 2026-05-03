import React from 'react';
import './StatsCards.css';

const StatsCards = () => {
  return (
    <div className="stats-container">
      <div className="stats-card">
        <div className="stats-icon">🎓</div>
        <h3>1000+ Students</h3>
        <p>Empowering learners with quality education</p>
      </div>
      
      <div className="stats-card">
        <div className="stats-icon">💰</div>
        <h3>Scholarship Upto 2 Lakh</h3>
        <p>Financial support for deserving candidates</p>
      </div>
      
      <div className="stats-card">
        <div className="stats-icon">👩‍🏫</div>
        <h3>50+ Dedicated Team</h3>
        <p>Experienced teachers and support staff</p>
      </div>
    </div>
  );
};

export default StatsCards;