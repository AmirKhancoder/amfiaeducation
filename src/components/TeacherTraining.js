// TeacherTraining.js
// TeacherTraining.js
import React, { useState, useEffect } from 'react';
import './TeacherTraining.css';
import PriyaCertificate from "../images/PriyaCertificate.png"
import AnjaliNidhi from "../images/AnjaliNidhi.jpeg"
import teacher1 from "../images/teacher1.jpg"
import teacher2 from "../images/teacher2.jpg"

const TeacherTraining = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animatedHours, setAnimatedHours] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      name: "Anjali",
      role: "Pre-Primary Teacher, Sunshine School",
      content: "After this training, I got promoted to Head Teacher with a 30% salary increase. The interview preparation modules were game-changing!",
      avatar: AnjaliNidhi
    },
    {
      name: "Michael Chen",
      role: "Primary Coordinator, Oakwood Academy",
      content: "The resume-building workshop helped me land my dream job at an international school. The career guidance was invaluable.",
      avatar: teacher1
    },
    {
      name: "Amina Patel",
      role: "Curriculum Developer, Little Stars",
      content: "This training didn't just upgrade my skills—it transformed my entire teaching philosophy. I'm now leading teacher training sessions myself!",
      avatar: teacher2
    }
  ];

  // Career growth milestones
  const milestones = [
    { icon: "💼", title: "Better Job Opportunities", description: "85% of our graduates report career advancement within 6 months" },
    { icon: "💰", title: "Higher Salary Potential", description: "Average salary increase of 25-40% after certification" },
    { icon: "🌍", title: "National Recognition", description: "Our certification is valued by national schools" },
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
    if (animatedHours < 100) {
      const timer = setTimeout(() => {
        setAnimatedHours(prev => Math.min(prev + 1, 100));
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
    <div className="priya-teacher-training">
      {/* Hero Section */}
      <section className="priya-hero">
        <div className="priya-hero-content">
          <h1 className="priya-animated-title">Transform Your Teaching Career in Just 100 Hours</h1>
          <p className="priya-hero-subtitle">Get promoted, earn more, and become the educator you aspire to be</p>
          <div className="priya-hours-counter">
            <div className="priya-counter-number">{animatedHours}</div>
            <div className="priya-counter-label">Hours to Career Transformation</div>
          </div>
          <button className="priya-cta-button priya-pulse">Reserve Your Spot</button>
        </div>
        <div className="priya-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Happy teacher with students" 
            className="priya-teacher-img"
          />
          {/* <div className="priya-floating-elements">
            <div className="priya-floating-1">📈</div>
            <div className="priya-floating-2">💎</div>
            <div className="priya-floating-3">🏅</div>
          </div> */}
        </div>
      </section>

      {/* Personal Benefits Section */}
      <section className="priya-benefits">
        <h2 className="priya-section-title">How This Training Will Transform <span className="priya-highlight">Your</span> Career</h2>
        <div className="priya-benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="priya-benefit-card" key={index}>
              <div className="priya-benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="priya-unique">
        <div className="priya-unique-content">
          <h2 className="priya-section-title">What Makes Our 100-Hour Training <span className="priya-highlight">Different</span></h2>
          <div className="priya-features-list">
            {uniqueFeatures.map((feature, index) => (
              <div className="priya-feature" key={index}>
                <div className="priya-feature-icon">{feature.icon}</div>
                <div className="priya-feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="priya-unique-image">
          <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Teacher receiving award" />
        </div>
      </section>

      {/* Career Milestones */}
      <section className="priya-milestones">
        <h2 className="priya-section-title">Where Our Teachers Are <span className="priya-highlight">Now</span></h2>
        <div className="priya-milestones-grid">
          {milestones.map((milestone, index) => (
            <div className="priya-milestone-card" key={index}>
              <div className="priya-milestone-icon">{milestone.icon}</div>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Image Section - UPDATED */}
      <section className="priya-certificate-section">
        <h2 className="priya-section-title">Your Career-Boosting Certification</h2>
        <p className="priya-section-subtitle">This accredited certificate opens doors to better positions and higher salaries</p>
        
        <div className="priya-certificate-image-container">
          <img 
            src={PriyaCertificate}
            alt="Professional Teaching Certificate" 
            className="priya-certificate-image"
          />
          <div className="priya-certificate-badge">
            <span>Accredited</span>
          </div>
          <div className="priya-certificate-overlay">
            <p>Official Certification</p>
            <p>Recognized Nationwide</p>
          </div>
        </div>
        
        <div className="priya-certificate-benefits">
          <p><span className="priya-bullet">🔹</span> Add to LinkedIn profile</p>
          <p><span className="priya-bullet">🔹</span> Include in CV/resume</p>
          <p><span className="priya-bullet">🔹</span> Display in your classroom</p>
          <p><span className="priya-bullet">🔹</span> Verification available 24/7</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="priya-testimonials">
        <h2 className="priya-section-title">Career Transformations</h2>
        <p className="priya-section-subtitle">Hear from teachers who changed their career trajectory</p>
        <div className="priya-testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`priya-testimonial-card ${index === activeTestimonial ? 'priya-active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="priya-testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="priya-testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="priya-testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index}
                className={`priya-dot ${index === activeTestimonial ? 'priya-active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="priya-cta">
        <h2 className="priya-cta-title">Limited Seats Available</h2>
        <p className="priya-cta-subtitle">Our 100-hour intensive training accepts only 25 teachers per batch for personalized attention</p>
        <div className="priya-timer">
          <div className="priya-timer-icon">⏳</div>
          <div className="priya-timer-text">Enrollment closes in 3 days</div>
        </div>
        <button className="priya-cta-button priya-pulse">Secure Your Career Upgrade</button>
      </section>
    </div>
  );
};

export default TeacherTraining;