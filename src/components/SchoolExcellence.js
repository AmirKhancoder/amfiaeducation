import React, { useState, useEffect } from 'react';
import './SchoolExcellence.css';

const SchoolExcellence = () => {
  const [activePillar, setActivePillar] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Pillar data for interactive display
  const pillarDetails = {
    1: {
      title: "Teacher Excellence",
      description: "Certified, confident, motivated teachers through comprehensive training programs and performance evaluation systems.",
      icon: "👩‍🏫",
      benefits: ["Advanced certification", "Regular workshops", "Performance tracking", "Career growth path"]
    },
    2: {
      title: "Social Media & Visibility",
      description: "Strategic social media management, professional photography, and event branding to enhance school visibility.",
      icon: "📱",
      benefits: ["Social media strategy", "Event coverage", "Brand photography", "Online reputation"]
    },
    3: {
      title: "School Super App",
      description: "A unified platform connecting parents, students, and teachers for seamless communication and collaboration.",
      icon: "📲",
      benefits: ["Real-time updates", "Fee management", "Attendance tracking", "Parent-teacher communication"]
    },
    4: {
      title: "Digital Growth",
      description: "Admissions-focused social media campaigns and targeted digital advertising to increase inquiries.",
      icon: "📈",
      benefits: ["Targeted ads", "Lead generation", "Admission funnel", "ROI tracking"]
    },
    5: {
      title: "Management Strategy",
      description: "Strategic planning for admissions, finance optimization, and competition analysis for sustainable growth.",
      icon: "📊",
      benefits: ["Admission strategy", "Financial planning", "Competition analysis", "Growth roadmap"]
    },
    6: {
      title: "Design Assets",
      description: "Professional branding materials, brochures, and digital creatives that elevate your school's image.",
      icon: "🎨",
      benefits: ["Brand identity", "Marketing materials", "Digital assets", "Print collaterals"]
    },
    7: {
      title: "Academic Audits",
      description: "Expert reviews and comprehensive improvement plans to enhance academic quality and student outcomes.",
      icon: "📚",
      benefits: ["Curriculum review", "Teacher evaluation", "Student assessment", "Quality benchmarks"]
    },
    8: {
      title: "Dedicated Manager",
      description: "A single point of contact ensuring zero confusion, seamless coordination, and 24/7 priority support.",
      icon: "🤝",
      benefits: ["Single point contact", "Priority support", "Coordination", "Issue resolution"]
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`ajay-school-excellence ${isVisible ? 'ajay-visible' : ''}`}>
      {/* Hero Section with Main Heading */}
      <div className="ajay-hero-section">
        <div className="ajay-hero-pattern"></div>
        <div className="ajay-hero-content">
          <h1 className="ajay-main-title">
            <span className="ajay-title-accent">360°</span> School Excellence Ecosystem
          </h1>
          <p className="ajay-hero-description">
            One monthly investment. <span className="ajay-highlight">Complete school transformation.</span>
          </p>
          <div className="ajay-mission-statement">
            To help schools grow academically stronger, digitally smarter, and financially sustainable—without chaos, multiple vendors, or guesswork.
          </div>
        </div>
      </div>

      {/* Why Schools Choose Us Section */}
      <div className="ajay-why-section">
        <h2 className="ajay-section-title">Why Schools Choose Us</h2>
        <div className="ajay-why-grid">
          <div className="ajay-why-card">
            <div className="ajay-why-icon">🤝</div>
            <h3>Not a vendor – Growth Partner</h3>
          </div>
          <div className="ajay-why-card">
            <div className="ajay-why-icon">📊</div>
            <h3>Data-driven, not assumptions</h3>
          </div>
          <div className="ajay-why-card">
            <div className="ajay-why-icon">🔄</div>
            <h3>Academic + Digital + Management together</h3>
          </div>
          <div className="ajay-why-card">
            <div className="ajay-why-icon">🎯</div>
            <h3>Clear outcomes, not vague promises</h3>
          </div>
        </div>
      </div>

      {/* Main Content with Two Images */}
      <div className="ajay-main-content">
        {/* Left Column - 8 Pillar Image */}
        <div className="ajay-left-column">
          <div className="ajay-image-card ajay-pillar-card">
            <div className="ajay-image-header">
              <h2 className="ajay-image-title">Our 8-Pillar Working Method</h2>
              <p className="ajay-image-subtitle">A complete ecosystem designed for real, measurable school growth</p>
            </div>
            <div className="ajay-image-wrapper">
              <img 
                src="/api/placeholder/600/400" 
                alt="School 8 Pillar Working Method" 
                className="ajay-pillar-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="ajay-image-overlay">
                <p>8 Integrated Pillars</p>
                <p>Complete School Transformation</p>
              </div>
            </div>
            
            {/* Interactive Pillar Preview */}
            <div className="ajay-pillar-preview">
              <h4>Explore the Pillars:</h4>
              <div className="ajay-pillar-mini-grid">
                {[1,2,3,4,5,6,7,8].map(num => (
                  <div 
                    key={num}
                    className={`ajay-pillar-mini-item ${activePillar === num ? 'ajay-active' : ''}`}
                    onMouseEnter={() => setActivePillar(num)}
                    onMouseLeave={() => setActivePillar(null)}
                  >
                    <span className="ajay-pillar-mini-number">{num.toString().padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
              {activePillar && (
                <div className="ajay-pillar-tooltip">
                  <strong>{pillarDetails[activePillar].title}</strong>
                  <p>{pillarDetails[activePillar].description.substring(0, 60)}...</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - 360 Excellence Image */}
        <div className="ajay-right-column">
          <div className="ajay-image-card ajay-excellence-card">
            <div className="ajay-image-header">
              <h2 className="ajay-image-title">The 360° Excellence Ecosystem</h2>
              <p className="ajay-image-subtitle">One monthly investment. Complete school transformation.</p>
            </div>
            <div className="ajay-image-wrapper">
              <img 
                src="/api/placeholder/600/400" 
                alt="School 360 Excellence Ecosystem" 
                className="ajay-excellence-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="ajay-image-badge">
                <span>₹15,000/mo</span>
              </div>
            </div>
            
            {/* Key Benefits from 360 Image */}
            <div className="ajay-benefits-list">
              <h4>What Your School Gains:</h4>
              <div className="ajay-benefits-grid">
                <div className="ajay-benefit-item">
                  <span className="ajay-benefit-icon">📈</span>
                  <span>Higher admissions & better inquiries</span>
                </div>
                <div className="ajay-benefit-item">
                  <span className="ajay-benefit-icon">👩‍🏫</span>
                  <span>Strong teacher performance & stability</span>
                </div>
                <div className="ajay-benefit-item">
                  <span className="ajay-benefit-icon">😊</span>
                  <span>Happy, confident parents</span>
                </div>
                <div className="ajay-benefit-item">
                  <span className="ajay-benefit-icon">🌟</span>
                  <span>Premium brand perception</span>
                </div>
                <div className="ajay-benefit-item">
                  <span className="ajay-benefit-icon">📋</span>
                  <span>Reduced admin stress</span>
                </div>
                <div className="ajay-benefit-item">
                  <span className="ajay-benefit-icon">📊</span>
                  <span>Clear data for decision-making</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Highlight */}
      <div className="ajay-pricing-highlight">
        <div className="ajay-pricing-content">
          <span className="ajay-pricing-tag">Special Offer</span>
          <h3 className="ajay-pricing-title">
            <span className="ajay-price">₹15,000</span> per month
          </h3>
          <p className="ajay-pricing-description">
            less than one junior teacher's salary - yet transforms your entire school
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ajay-cta-section">
        <h2 className="ajay-cta-title">Let's Begin with a Free Audit</h2>
        <p className="ajay-cta-subtitle">60-Minute School Excellence Audit | No Obligation</p>
        <div className="ajay-cta-buttons">
          <button className="ajay-cta-button ajay-cta-primary">Schedule Free Audit</button>
          <button className="ajay-cta-button ajay-cta-secondary">Download Brochure</button>
        </div>
      </div>

      {/* Footer Note */}
      <div className="ajay-footer-note">
        <p>© 2026 School Excellence Ecosystem. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SchoolExcellence;