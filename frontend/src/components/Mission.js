import React from 'react';
import './Mission.css';

function Mission() {
    return (
        <div className="mission-container">
            <div className="mission-content">
                <h2 className="mission-title">Our Mission</h2>
                <p className="mission-statement">
                    To empower students with real-life skills that go beyond textbooks.
                </p>
                
                <div className="mission-details">
                    <p>
                        We aim to make every child confident in English speaking, sharp in math problem-solving, 
                        and ready for the future with computer skills like coding and MS Office.
                    </p>
                    <p>
                        Our goal is simple — <strong>Future-Ready Students</strong> with the power to succeed 
                        in school, life, and career.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Mission;