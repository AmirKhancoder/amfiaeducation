import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Education specialist with 15+ years experience in curriculum development',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technology expert focused on innovative learning platforms',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Head of Instruction',
      bio: 'Passionate educator with expertise in student engagement strategies',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Marketing Director',
      bio: 'Digital marketing specialist helping students discover quality education',
      img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">The passionate educators behind Amfia Education</p>
        
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