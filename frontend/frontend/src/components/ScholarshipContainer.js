import React from 'react';
import img_boy3 from '../images/img_boy3.png';
import './ScholarshipContainer.css';
import { Link } from 'react-router-dom';

function ScholarshipContainer() {
    return (
        <div className="scholarship-container">
            {/* Decorative Circles */}
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>
            
            <div className="scholarship-image">
                <img src={img_boy3} alt="Top performer student receiving scholarship" />
            </div>
            
            <div className="scholarship-content">
                <h2 className="scholarship-title">Unlock Your Potential with Our Scholarship Program</h2>
                <div className="scholarship-amount">₹2 Lakh Scholarship</div>
                <p className="scholarship-desc">
                    We're committed to supporting top performers with financial assistance. 
                    Our merit-based scholarship recognizes exceptional talent and provides 
                    the resources you need to excel in your educational journey.
                </p>
                <div className="scholarship-features">
                    <p>✓ For top 10 performers in our program</p>
                    <p>✓ Renewable annually based on performance</p>
                    <p>✓ Can be used for tuition and learning resources</p>
                </div>
                <Link to='/applyPath'>
                <button className="apply-button">Apply Now</button></Link>
                <Link to='/knowmore'><button className="apply-button">Know more</button></Link>
                
            </div>
        </div>
    );
}

export default ScholarshipContainer;