import React from 'react';
import './Team.css';
import imageSh from '../images/imageSh.jpg';
import imageSu from '../images/imageSu.jpeg';
import imageMu from '../images/imageMu.jpg';
import imageAs from '../images/imageAs.jpg';
import amirImage from '../images/amirImage.jpg'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Subham Patro',
      role: 'Math Tutor',
      bio: 'Education specialist with 5+ years experience in curriculum development and teaching',
      img: imageSu
    },
    {
      id: 2,
      name: 'Mukesh Kumar',
      role: 'EVS Tutor',
      bio: 'A caring EVS teacher for Grades 5–10, known for making nature, science, and environment easy and interesting.',
      img: imageMu
    },
    {
      id: 3,
      name: 'Asutosh Sharma',
      role: 'English Tutor',
      bio: 'Passionate educator with expertise in student engagement strategies',
      img: imageAs
    },
    {
      id: 4,
      name: 'Shakeel Gori',
      role: 'ICT Tutor',
      bio: 'Loved by students for his practical teaching style, he turns every ICT class into a hands-on learning adventure.',
      img: imageSh
    },
    {
      id: 5,
      name: 'Amir Khan',
      role: 'Academic Coach',
      bio: 'A mentor to students and guide to teachers, He believes that real education builds confidence, not just marks. His programs help students learn, grow, and lead the future.With 5+ years of academic experience, he brings powerful, practical learning to students.',
      img: amirImage
    }
  ];

  return (
    <section className="team-section">
      {/* Floating background elements */}
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      
      <div className="container">
        <div className="section-heading">
          <span className="meet-team">Meet The Team</span>
          <div>
            <span className="learn-box">Learn</span>
            <span className="best-mentors">from India's Best Mentors</span>
          </div>
          <p className="section-subtitle">
            In today's competitive world, you need industry-relevant skills taught by the best.
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="card-img-container">
                <img src={member.img} alt={member.name} className="team-img" />
              </div>
              <div className="card-content">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;