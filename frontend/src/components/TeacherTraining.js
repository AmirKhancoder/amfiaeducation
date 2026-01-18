// TeacherTraining.js
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

  // Personal benefits
  const benefits = [
    { icon: "🚀", title: "Career Acceleration", description: "Learn the exact strategies that help teachers fast-track to leadership positions and prestigious schools." },
    { icon: "🧠", title: "Master Teacher Mindset", description: "Develop the confidence and presence of top-tier educators that administrators actively seek out." },
    { icon: "📝", title: "Interview Domination", description: "Our mock interviews with real school administrators prepare you to outshine other candidates." },
    { icon: "💼", title: "Portfolio Builder", description: "Leave with a professional teaching portfolio that showcases your enhanced capabilities." }
  ];

  // Unique features
  const uniqueFeatures = [
    { icon: "✨", title: "1-on-1 Career Coaching", description: "30-minute private session with our career specialist to map your growth path" },
    { icon: "✨", title: "AI-Powered Mock Interviews", description: "Practice with our smart interview simulator that gives instant feedback" },
    { icon: "✨", title: "Lifetime Access Portal", description: "Continually updated resources even after you complete the training" },
    { icon: "✨", title: "Job Referral Network", description: "Exclusive access to our partner schools actively hiring trained educators" }
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
    <div className="teacher-training">
      {/* Hero Section */}
      <section className="tt-hero">
        <div className="tt-hero-content">
          <h1 className="tt-animated-title">Transform Your Teaching Career in Just 40 Hours</h1>
          <p className="tt-hero-subtitle">Get promoted, earn more, and become the educator you aspire to be</p>
          <div className="tt-hours-counter">
            <div className="tt-counter-number">{animatedHours}</div>
            <div className="tt-counter-label">Hours to Career Transformation</div>
          </div>
          <button className="tt-cta-button tt-pulse">Reserve Your Spot</button>
        </div>
        <div className="tt-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Happy teacher with students" 
            className="tt-teacher-img"
          />
          <div className="tt-floating-elements">
            <div className="tt-floating-1">📈</div>
            <div className="tt-floating-2">💎</div>
            <div className="tt-floating-3">🏅</div>
          </div>
        </div>
      </section>

      {/* Personal Benefits Section */}
      <section className="tt-benefits">
        <h2 className="tt-section-title">How This Training Will Transform <span className="tt-highlight">Your</span> Career</h2>
        <div className="tt-benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="tt-benefit-card" key={index}>
              <div className="tt-benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="tt-unique">
        <div className="tt-unique-content">
          <h2 className="tt-section-title">What Makes Our 40-Hour Training <span className="tt-highlight">Different</span></h2>
          <div className="tt-features-list">
            {uniqueFeatures.map((feature, index) => (
              <div className="tt-feature" key={index}>
                <div className="tt-feature-icon">{feature.icon}</div>
                <div className="tt-feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tt-unique-image">
          <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Teacher receiving award" />
        </div>
      </section>

      {/* Career Milestones */}
      <section className="tt-milestones">
        <h2 className="tt-section-title">Where Our Graduates Are <span className="tt-highlight">Now</span></h2>
        <div className="tt-milestones-grid">
          {milestones.map((milestone, index) => (
            <div className="tt-milestone-card" key={index}>
              <div className="tt-milestone-icon">{milestone.icon}</div>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Preview */}
      <section className="tt-certificate">
        <h2 className="tt-section-title">Your Career-Boosting Certification</h2>
        <p className="tt-section-subtitle">This accredited certificate opens doors to better positions and higher salaries</p>
        <div 
          className={`tt-certificate-preview ${isCertHovered ? 'tt-hovered' : ''}`}
          onMouseEnter={() => setIsCertHovered(true)}
          onMouseLeave={() => setIsCertHovered(false)}
        >
          <div className="tt-certificate-border">
            <div className="tt-certificate-content">
              <div className="tt-certificate-header">
                <h3>Advanced Teaching Certification</h3>
                <p>Recognized by schools nationwide</p>
              </div>
              <div className="tt-certificate-name">
                <p>[Your Name]</p>
              </div>
              <div className="tt-certificate-body">
                <p>Has demonstrated mastery in</p>
                <p><strong>Modern Pedagogical Techniques</strong></p>
                <p>completing 40 hours of advanced training</p>
                <div className="tt-specialization-badge">
                  <span>Specialization: Early Childhood Education</span>
                </div>
              </div>
              <div className="tt-certificate-footer">
                <div className="tt-signature">
                  <p>Dr. Emma Wilson</p>
                  <p>Director, Education Excellence</p>
                </div>
                <div className="tt-date">
                  <p>Date: ___________</p>
                </div>
              </div>
              <div className="tt-certificate-seal">
                <div className="tt-seal-inner">
                  <span>Seal</span>
                </div>
              </div>
              <div className="tt-certificate-qr">
                <div className="tt-qr-placeholder">QR Code</div>
                <p>Verify at teachcert.org</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tt-certificate-benefits">
          <p><span className="tt-bullet">🔹</span> Add to LinkedIn profile</p>
          <p><span className="tt-bullet">🔹</span> Include in CV/resume</p>
          <p><span className="tt-bullet">🔹</span> Display in your classroom</p>
          <p><span className="tt-bullet">🔹</span> Verification available 24/7</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="tt-testimonials">
        <h2 className="tt-section-title">Career Transformations</h2>
        <p className="tt-section-subtitle">Hear from teachers who changed their career trajectory</p>
        <div className="tt-testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`tt-testimonial-card ${index === activeTestimonial ? 'tt-active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="tt-testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="tt-testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="tt-testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index}
                className={`tt-dot ${index === activeTestimonial ? 'tt-active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tt-cta">
        <h2 className="tt-cta-title">Limited Seats Available</h2>
        <p className="tt-cta-subtitle">Our 40-hour intensive training accepts only 25 teachers per batch for personalized attention</p>
        <div className="tt-timer">
          <div className="tt-timer-icon">⏳</div>
          <div className="tt-timer-text">Enrollment closes in 3 days</div>
        </div>
        <button className="tt-cta-button tt-pulse">Secure Your Career Upgrade</button>
      </section>
    </div>
  );
};

export default TeacherTraining;