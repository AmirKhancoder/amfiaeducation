import React, { useState, useEffect } from 'react';
import './TeacherTraining.css';

const TeacherTraining = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isCertHovered, setIsCertHovered] = useState(false);
  const [animatedHours, setAnimatedHours] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Pre-Primary Teacher, Sunshine School",
      content: "After this training, I got promoted to Head Teacher with a 30% salary increase. The interview preparation modules were game-changing!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "Primary Coordinator, Oakwood Academy",
      content: "The resume-building workshop helped me land my dream job at an international school. The career guidance was invaluable.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Amina Patel",
      role: "Curriculum Developer, Little Stars",
      content: "This training didn't just upgrade my skills—it transformed my entire teaching philosophy. I'm now leading teacher training sessions myself!",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  // Career growth milestones
  const milestones = [
    { icon: "💼", title: "Better Job Opportunities", description: "85% of our graduates report career advancement within 6 months" },
    { icon: "💰", title: "Higher Salary Potential", description: "Average salary increase of 25-40% after certification" },
    { icon: "🌍", title: "Global Recognition", description: "Our certification is valued by international schools worldwide" },
    { icon: "🏆", title: "Leadership Roles", description: "Qualify for coordinator, HOD, and principal positions" }
  ];

  // Animate hours counter
  useEffect(() => {
    if (animatedHours < 40) {
      const timer = setTimeout(() => {
        setAnimatedHours(prev => Math.min(prev + 1, 40));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [animatedHours]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="teacher-training-container">
      {/* Hero Section */}
      <section className="training-hero">
        <div className="hero-content">
          <h1 className="animated-title">Transform Your Teaching Career in Just 40 Hours</h1>
          <p className="hero-subtitle">Get promoted, earn more, and become the educator you aspire to be</p>
          <div className="hours-counter">
            <div className="counter-number">{animatedHours}</div>
            <div className="counter-label">Hours to Career Transformation</div>
          </div>
          <button className="cta-button pulse">Reserve Your Spot</button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Happy teacher with students" 
            className="teacher-img"
          />
          <div className="floating-elements">
            <div className="floating-1">📈</div>
            <div className="floating-2">💎</div>
            <div className="floating-3">🏅</div>
          </div>
        </div>
      </section>

      {/* Personal Benefits Section */}
      <section className="personal-benefits">
        <h2 className="section-title">How This Training Will Transform <span className="highlight">Your</span> Career</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🚀</div>
            <h3>Career Acceleration</h3>
            <p>Learn the exact strategies that help teachers fast-track to leadership positions and prestigious schools.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🧠</div>
            <h3>Master Teacher Mindset</h3>
            <p>Develop the confidence and presence of top-tier educators that administrators actively seek out.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📝</div>
            <h3>Interview Domination</h3>
            <p>Our mock interviews with real school administrators prepare you to outshine other candidates.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💼</div>
            <h3>Portfolio Builder</h3>
            <p>Leave with a professional teaching portfolio that showcases your enhanced capabilities.</p>
          </div>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="unique-section">
        <div className="unique-content">
          <h2 className="section-title">What Makes Our 40-Hour Training <span className="highlight">Different</span></h2>
          <div className="unique-features">
            <div className="feature">
              <div className="feature-badge">✨</div>
              <div>
                <h3>1-on-1 Career Coaching</h3>
                <p>30-minute private session with our career specialist to map your growth path</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-badge">✨</div>
              <div>
                <h3>AI-Powered Mock Interviews</h3>
                <p>Practice with our smart interview simulator that gives instant feedback</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-badge">✨</div>
              <div>
                <h3>Lifetime Access Portal</h3>
                <p>Continually updated resources even after you complete the training</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-badge">✨</div>
              <div>
                <h3>Job Referral Network</h3>
                <p>Exclusive access to our partner schools actively hiring trained educators</p>
              </div>
            </div>
          </div>
        </div>
        <div className="unique-image">
          <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Teacher receiving award" />
          </div>
      </section>

      {/* Career Milestones */}
      <section className="milestones-section">
        <h2 className="section-title">Where Our Graduates Are <span className="highlight">Now</span></h2>
        <div className="milestones-container">
          {milestones.map((milestone, index) => (
            <div className="milestone-card" key={index}>
              <div className="milestone-icon">{milestone.icon}</div>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Preview */}
      <section className="certificate-section">
        <h2 className="section-title">Your Career-Boosting Certification</h2>
        <p className="section-subtitle">This accredited certificate opens doors to better positions and higher salaries</p>
        <div 
          className={`certificate-preview ${isCertHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsCertHovered(true)}
          onMouseLeave={() => setIsCertHovered(false)}
        >
          <div className="certificate-border">
            <div className="certificate-content">
              <div className="certificate-header">
                <h3>Advanced Teaching Certification</h3>
                <p>Recognized by schools nationwide</p>
              </div>
              <div className="certificate-name">
                <p>[Your Name]</p>
              </div>
              <div className="certificate-body">
                <p>Has demonstrated mastery in</p>
                <p><strong>Modern Pedagogical Techniques</strong></p>
                <p>completing 40 hours of advanced training</p>
                <div className="specialization-badge">
                  <span>Specialization: Early Childhood Education</span>
                </div>
              </div>
              <div className="certificate-footer">
                <div className="signature">
                  <p>Dr. Emma Wilson</p>
                  <p>Director, Education Excellence</p>
                </div>
                <div className="date">
                  <p>Date: ___________</p>
                </div>
              </div>
              <div className="certificate-seal">
                <div className="seal-inner">
                  <span>Seal</span>
                </div>
              </div>
              <div className="certificate-qr">
                <div className="qr-placeholder">QR Code</div>
                <p>Verify at teachcert.org</p>
              </div>
            </div>
          </div>
        </div>
        <div className="certificate-benefits">
          <p>🔹 Add to LinkedIn profile</p>
          <p>🔹 Include in CV/resume</p>
          <p>🔹 Display in your classroom</p>
          <p>🔹 Verification available 24/7</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">Career Transformations</h2>
        <p className="section-subtitle">Hear from teachers who changed their career trajectory</p>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Limited Seats Available</h2>
        <p>Our 40-hour intensive training accepts only 25 teachers per batch for personalized attention</p>
        <div className="cta-timer">
          <div className="timer-icon">⏳</div>
          <div className="timer-text">Enrollment closes in 3 days</div>
        </div>
        <button className="cta-button pulse">Secure Your Career Upgrade</button>
      </section>
    </div>
  );
};

export default TeacherTraining;