import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We provide a wide range of courses from STEM subjects to humanities, including test preparation and skill development programs."
    },
    {
      question: "How do I enroll in a course?",
      answer: "Call to our executive, tell your desired course. You'll be guided through the registration process."
    },
    {
      question: "Are your instructors qualified?",
      answer: "Yes, all our instructors are highly qualified with subject-matter expertise and teaching experience, many holding advanced degrees." 
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day refund policy for most courses if you're not satisfied with the quality of education."
    },
    {
      question: "Can I access courses on mobile?",
      answer: "Absolutely! Our platform is fully responsive and works on all devices including smartphones and tablets."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-titleA">Frequently Asked Questions</h2>
        <p className="section-subtitle">Find quick answers to common queries</p>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;