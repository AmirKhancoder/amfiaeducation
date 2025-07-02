import React from 'react';
import './Services.css';
import { FaChalkboardTeacher, FaSchool, FaBook, FaLaptopCode, FaUserGraduate, FaBrain, FaClipboardCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Teacher Training Programs",
      items: [
        "Digital teaching techniques",
        "Communication skills",
        "Activity-based teaching",
        "Time & classroom management"
      ]
    },
    {
      icon: <FaSchool />,
      title: "School Development Support",
      items: [
        "Curriculum planning",
        "Learning outcome tracking",
        "Classroom tech setup guidance",
        "Assessments & report formats"
      ]
    },
    {
      icon: <FaBook />,
      title: "Book Publishing & Customized Content",
      items: [
        "Pre-primary & Primary books",
        "Worksheets & activity books",
        "School-branded content"
      ]
    },
    {
      icon: <FaLaptopCode />,
      title: "IT Courses & Upskilling",
      items: [
        "MS Office, Typing, Internet Basics",
        "Coding: HTML, Python, Scratch",
        "Graphic Design, Canva, PPT skills"
      ]
    },
    {
      icon: <FaUserGraduate />,
      title: "Career Awareness Workshops",
      items: [
        "Career planning for students (Grades 8–12)",
        "Motivation sessions",
        "Goal setting & habits"
      ]
    },
    {
      icon: <FaBrain />,
      title: "Soft Skills & Personality Development",
      items: [
        "English speaking",
        "Body language",
        "Leadership & teamwork",
        "Interview preparation"
      ]
    },
    {
      icon: <FaClipboardCheck />,
      title: "Assessment & Evaluation Services",
      items: [
        "Skill-based tests",
        "Student improvement tracking",
        "Pre- and post-course comparison reports"
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Our Comprehensive Services</h1>
          <p>Empowering students, teachers, and schools with future-ready skills and support systems</p>
        </div>
      </section>

      <section className="main-service">
        <div className="service-card featured">
          <h2>Student Skill Courses</h2>
          <p>English, Math, Computer – Real-life and job-ready learning </p>
          <ul>
            <li>Practical skill development</li>
            <li>Project-based learning</li>
            <li>Industry-relevant curriculum</li>
            <li>Progress tracking</li>
          </ul>
        </div>
      </section>

      <section className="other-services">
        <h2>Our Other Professional Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Transform Your Learning Experience?</h2>
        <p>Contact us today to discuss how we can customize these services for your needs</p>
        <Link to='/getTouch'>
        <button className="cta-button">Get in Touch</button>
        </Link>
      </section>
    </div>
  );
};

export default Services;