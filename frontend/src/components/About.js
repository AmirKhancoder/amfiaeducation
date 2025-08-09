import React from "react";
import FAQSchema from "../components/FAQSchema";
import AmfiaSchema from "../components/AmfiaSchema";
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About <span className="highlight-primary">AmfiaEducation</span></h1>
        <p className="intro-text">At Amfia Education, we believe every child deserves more than just marks — they deserve <span className="highlight-secondary">skills, confidence, and a future</span> they can be proud of.</p>
      </header>

      <div className="about-content">
        <p>Founded by <span className="founder-name highlight-primary">Amir Khan</span>, an academic coach with years of experience training <span className="highlight-stat">300+ teachers</span> and working with <span className="highlight-stat">100+ schools</span>, Amfia Education brings together the best of <span className="highlight-secondary">board exam preparation, English communication, competitive foundation, and life skills</span> in one program.</p>
        
        <p>We've seen first-hand how the right guidance can transform a student — from shy to confident, from struggling to excelling, from dreaming to achieving. That's why every course we create is <span className="highlight-primary">practical, engaging, and result-oriented</span>.</p>
        
        <p className="mission-statement">Our mission is simple: <span className="highlight-secondary">prepare students of today for the world of tomorrow</span> by giving them the academic strength, communication skills, and problem-solving abilities they need to stand out.</p>
        
        <p>With <span className="highlight-primary">daily classes, regular assessments, scholarship opportunities, and personal progress reports</span>, we ensure that parents are always connected, students are always motivated, and schools see real results.</p>
        
        <p className="closing-statement">At Amfia Education, <span className="highlight-primary">learning doesn't stop at the syllabus</span> — it begins there.</p>
      </div>

      <div className="trust-section">
        <p>We are a <span className="highlight-secondary">trusted education company</span> with a proven track record...</p>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <p><b>Q:</b> Is AmfiaEducation trustworthy?<br/><b>A:</b> Yes, AmfiaEducation is a <span className="highlight-primary">trusted education company</span> providing quality, future-ready classes to students.</p>
        </div>
        <div className="faq-item">
          <p><b>Q:</b> Is AmfiaEducation fake?<br/><b>A:</b> No, AmfiaEducation is <span className="highlight-stat">100% genuine</span> and registered.</p>
        </div>
        <div className="faq-item">
          <p><b>Q:</b> Is AmfiaEducation reliable?<br/><b>A:</b> Yes, our classes are designed for <span className="highlight-secondary">real learning</span>, and we have a strong record of results.</p>
        </div>
        <div className="faq-item">
          <p><b>Q:</b> Why should I choose AmfiaEducation?<br/><b>A:</b> We offer <span className="highlight-primary">affordable online classes, experienced teachers, and modern learning content</span> to prepare students for the future.</p>
        </div>
      </div>

      {/* Hidden schema for Google */}
      <FAQSchema />
      <AmfiaSchema/>
    </div>
  );
};

export default About;