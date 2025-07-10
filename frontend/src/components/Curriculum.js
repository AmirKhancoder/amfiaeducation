import React, { useState } from 'react';
import './Curriculum.css';

const Curriculum = () => {
  const [activeSubject, setActiveSubject] = useState('math');
  const [activeGrade, setActiveGrade] = useState('5-6');

  const curriculumData = {
    math: {
      '5-6': {
        core: ['Math Puzzles', 'Vedic Math Basics', 'Fraction Visualization'],
        competitive: ['Math Olympiad Foundation', 'Mental Math Techniques'],
        future: ['Logical Reasoning', 'Pattern Recognition']
      },
      '7-8': {
        core: ['Algebra Visualization', 'Geometry Hacks', 'Statistics Basics'],
        competitive: ['NTSE/NMMS Patterns', 'Math Kangaroo Strategies'],
        future: ['Financial Literacy', 'Data Interpretation']
      },
      '9-10': {
        core: ['Trigonometry Applications', 'Probability Models', 'Calculus Intro'],
        competitive: ['IMO/JEE Foundation', 'SAT Math Tricks'],
        future: ['AI/ML Math Fundamentals', 'Quantitative Analysis']
      }
    },
    english: {
      '5-6': {
        core: ['Storytelling Techniques', 'Creative Writing', 'Reading Fluency'],
        competitive: ['Spell Bee Preparation', 'Vocabulary Building'],
        future: ['Digital Communication', 'Emotional Intelligence']
      },
      '7-8': {
        core: ['Debate & Public Speaking', 'Literature Analysis', 'Grammar Mastery'],
        competitive: ['Olympiad Comprehension', 'Essay Writing Techniques'],
        future: ['Content Writing Basics', 'Media Literacy']
      },
      '9-10': {
        core: ['Technical Writing', 'Podcast Scripting', 'Critical Analysis'],
        competitive: ['IELTS/TOEFL Foundation', 'SAT Verbal Strategies'],
        future: ['Professional Communication', 'Copywriting Skills']
      }
    },
    science: {
      '5-6': {
        core: ['Kitchen Science Experiments', 'Nature Exploration', 'Simple Machines'],
        competitive: ['NSO Experimentation', 'Science Quiz Techniques'],
        future: ['Scientific Thinking', 'Observation Skills']
      },
      '7-8': {
        core: ['Robotics Basics', 'Space Science', 'Human Body Systems'],
        competitive: ['NTSE Science Logic', 'Science Olympiad Tricks'],
        future: ['STEM Project Development', 'Hypothesis Testing']
      },
      '9-10': {
        core: ['Biotechnology Intro', 'Climate Science', 'Modern Physics'],
        competitive: ['KVPY/NSEJS Prep', 'International Olympiad Tricks'],
        future: ['Research Methodology', 'Scientific Paper Writing']
      }
    },
    evs: {
      '5-6': {
        core: ['Eco-Warrior Projects', 'Community Helpers', 'Cultural Awareness'],
        competitive: ['GK Olympiad Current Affairs', 'Heritage Quiz Prep'],
        future: ['Sustainability Awareness', 'Global Perspectives']
      },
      '7-8': {
        core: ['Model UN Preparation', 'Economic Basics', 'Government Systems'],
        competitive: ['NTSE Social Science', 'Debate Competition Prep'],
        future: ['Global Citizenship', 'Social Awareness']
      },
      '9-10': {
        core: ['Economic Systems', 'Geo-Tech Applications', 'Political Science'],
        competitive: ['UPSC Foundation', 'International Relations'],
        future: ['Social Entrepreneurship', 'Policy Analysis']
      }
    },
    ict: {
      '5-6': {
        core: ['Block Coding', 'Safe Internet', 'Computer Basics'],
        competitive: ['Cyber Olympiad Basics', 'Typing Speed Techniques'],
        future: ['Digital Citizenship', 'Online Safety']
      },
      '7-8': {
        core: ['Python Basics', 'App Development', '3D Modeling'],
        competitive: ['Hackathon Preparation', 'Debugging Challenges'],
        future: ['Computational Thinking', 'Algorithmic Mindset']
      },
      '9-10': {
        core: ['AI/ML Fundamentals', 'Web3 Basics', 'Cloud Computing'],
        competitive: ['International Coding Competitions', 'CTF Challenges'],
        future: ['Tech Entrepreneurship', 'Blockchain Concepts']
      }
    }
  };

  return (
    <section className="curriculum-section">
      <div className="container">
        <h2 className="section-title">Future-Ready Curriculum</h2>
        <p className="section-subtitle">Skill-based learning for Grades 5-10 with competitive edge</p>
        
        <div className="subject-tabs">
          {['math', 'english', 'science', 'evs', 'ict'].map((subject) => (
            <button
              key={subject}
              className={`subject-tab ${activeSubject === subject ? 'active' : ''}`}
              onClick={() => setActiveSubject(subject)}
            >
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grade-selector">
          {['5-6', '7-8', '9-10'].map((grade) => (
            <button
              key={grade}
              className={`grade-btn ${activeGrade === grade ? 'active' : ''}`}
              onClick={() => setActiveGrade(grade)}
            >
              Grade {grade}
            </button>
          ))}
        </div>
        
        <div className="curriculum-content">
          <div className="curriculum-card core">
            <h3>Core Learning</h3>
            <ul>
              {curriculumData[activeSubject][activeGrade].core.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
          
          <div className="curriculum-card competitive">
            <h3>Competitive Edge</h3>
            <ul>
              {curriculumData[activeSubject][activeGrade].competitive.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
          
          <div className="curriculum-card future">
            <h3>Future Skills</h3>
            <ul>
              {curriculumData[activeSubject][activeGrade].future.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;