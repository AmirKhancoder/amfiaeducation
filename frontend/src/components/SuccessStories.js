import React, { useState } from 'react';
import './SuccessStories.css';
import { Link } from 'react-router-dom';
import AnjaliNidhi from '../images/AnjaliNidhi.jpeg'
import MeenaKapoor from '../images/MeenaKapoor.jpg'
import Vanshika from '../images/Vanshika.jpg'
import Sneha from '../images//Sneha.jpg'
import Veeraj from '../images/Veeraj.jpg'
import Samarth from '../images/Samarth.jpg'
import teacher1 from '../images/teacher1.jpg'
import teacher2 from '../images/teacher2.jpg'

const SuccessStories = () => {
  const [activeCategory, setActiveCategory] = useState('students');
  const [selectedStory, setSelectedStory] = useState(null);

  // Stories Data
  const storiesData = {
    students: [
      {
        id: 1,
        name: "Arjun Patel",
        age: 9,
        grade: "Grade 5",
        school: "Amfia Education",
        story: "Arjun struggled with reading but after working with his trained teacher, he's now reading two grades above his level and won the school reading competition!",
        achievement: "Reading Level Jumped 2 Grades",
        beforeAfter: {
          before: "Could barely read simple sentences",
          after: "Reading chapter books independently"
        },
        quote: "I love reading now! My teacher made it so much fun!",
        image: Veeraj
      },
      {
        id: 2,
        name: "Sneha Singh",
        age: 13,
        grade: "Grade 9",
        school: "Amfia Education",
        story: "Sanya was extremely shy and hesitant to participate in class. After specialized social-emotional learning techniques, she now leads group activities confidently.",
        achievement: "Confidence Transformation",
        beforeAfter: {
          before: "Too shy to speak in class",
          after: "Classroom leader and activity coordinator"
        },
        quote: "I'm not scared anymore. My teacher taught me I can do anything!",
        image: Sneha
      },
      {
        id: 3,
        name: "Samarth Kumar",
        age: 10,
        grade: "Grade 5",
        school: "Amfia Education",
        story: "Rohit had difficulty with math concepts. His teacher's activity-based approach helped him understand complex problems through games and real-life examples.",
        achievement: "Math Scores Improved by 85%",
        beforeAfter: {
          before: "Failed math consistently",
          after: "Top 3 in class mathematics"
        },
        quote: "Math is like a puzzle game now. I actually look forward to it!",
        image: Samarth
      },
      {
        id: 4,
        name: "Vanshika Patil",
        age: 7,
        grade: "Grade 2",
        school: "Amfia Education",
        story: "Priya struggled with writing and would get frustrated easily. Her teacher used multi-sensory techniques that helped her develop fine motor skills and love for writing.",
        achievement: "Writing Skills Transformed",
        beforeAfter: {
          before: "Avoided writing tasks",
          after: "Writes creative stories independently"
        },
        quote: "I wrote my first story book! It has pictures and everything!",
        image: Vanshika,
      }
    ],
    teachers: [
      {
        id: 1,
        name: "Meena Kapoor",
        role: "Pre-Primary Teacher",
        school: "Sunshine International School",
        experience: "5 years",
        story: "After our training, Meena transformed her classroom into an activity-based learning hub. Her students' engagement increased by 90% and parent satisfaction scores reached 98%.",
        achievement: "Promoted to Head Teacher",
        skills: ["Activity-Based Learning", "Classroom Management", "Parent Communication"],
        quote: "The training gave me tools I never knew I needed. My classroom is now a happy learning space!",
        image: MeenaKapoor,
        results: {
          studentEngagement: "+90%",
          parentSatisfaction: "98%",
          promotion: "Head Teacher"
        }
      },
      {
        id: 2,
        name: "Nidhi Singh",
        role: "Primary Coordinator",
        school: "Oakwood Academy",
        experience: "8 years",
        story: "Nidhi implemented our phonics program school-wide. Reading levels across all grades improved significantly, and the school received recognition for academic excellence.",
        achievement: "School Reading Levels Improved by 60%",
        skills: ["Phonics Instruction", "Curriculum Development", "Teacher Training"],
        quote: "The systematic approach transformed how we teach reading. The results speak for themselves!",
        image: teacher2,
        results: {
          readingImprovement: "+60%",
          teacherAdoption: "100%",
          awards: "2 School Awards"
        }
      },
      {
        id: 3,
        name: "Anjali Desai",
        role: "Special Needs Educator",
        school: "Inclusive Learning Center",
        experience: "6 years",
        story: "Anjali used our differentiated instruction techniques to create individualized learning plans. Her students with learning differences showed remarkable progress.",
        achievement: "100% Student Progress in Learning Goals",
        skills: ["Differentiated Instruction", "Individualized Learning", "SEN Strategies"],
        quote: "Every child learns differently. This training taught me how to reach every single one.",
        image: teacher1,
        results: {
          studentProgress: "100%",
          parentFeedback: "Excellent",
          adaptations: "50+ Custom Plans"
        }
      },
      {
        id: 4,
        name: "Anchal Sharma",
        role: "Math Specialist",
        school: "Global Academy",
        experience: "7 years",
        story: "Anchal revolutionized math teaching in his school using our conceptual learning approach. Student anxiety decreased while test scores increased dramatically.",
        achievement: "Math Scores Improved by 75% School-wide",
        skills: ["Conceptual Math", "Anxiety Reduction", "Practical Application"],
        quote: "Making math tangible and fun changed everything. Students now love problem-solving!",
        image: AnjaliNidhi,
        results: {
          scoreImprovement: "+75%",
          anxietyReduction: "-60%",
          competitions: "5 Math Olympiad Winners"
        }
      }
    ],
    schools: [
      {
        id: 1,
        name: "Sunshine International School",
        location: "New Delhi",
        type: "K-12 International",
        students: "1200",
        teachers: "85",
        story: "After implementing our comprehensive teacher training program, Sunshine International saw a 40% improvement in overall academic performance and became a model school for innovative teaching methods.",
        achievement: "National Award for Educational Excellence",
        improvements: {
          academicPerformance: "+40%",
          teacherRetention: "+35%",
          parentSatisfaction: "95%",
          admissions: "+25%"
        },
        quote: "The training transformed our teaching culture. Our teachers are more confident and our students are thriving!",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        programs: ["Phonics First", "Activity-Based Learning", "Social-Emotional Curriculum"]
      },
      {
        id: 2,
        name: "Little Stars Montessori",
        location: "Mumbai",
        type: "Early Childhood",
        students: "300",
        teachers: "25",
        story: "This preschool completely transformed its approach to early childhood education. After teacher training, they developed a unique play-based curriculum that's now being replicated across the city.",
        achievement: "Featured in National Education Magazine",
        improvements: {
          studentEngagement: "+80%",
          curriculumAdoption: "City-wide Model",
          teacherSatisfaction: "98%",
          waitlist: "200+ Families"
        },
        quote: "We went from a good preschool to an exceptional learning community. The difference is remarkable.",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        programs: ["Play-Based Learning", "Montessori Plus", "Parent Partnership"]
      },
      {
        id: 3,
        name: "Oakwood Academy",
        location: "Bangalore",
        type: "Primary & Middle School",
        students: "800",
        teachers: "60",
        story: "Oakwood Academy implemented our reading intervention program school-wide. Within one year, reading levels across all grades improved by an average of 2 grade levels.",
        achievement: "Reading Levels Jumped 2 Grades Average",
        improvements: {
          readingLevels: "+2 Grades",
          libraryUsage: "+300%",
          literacyAwards: "3 National Awards",
          teacherTraining: "100% Certified"
        },
        quote: "The structured phonics approach was a game-changer. Our students are now confident readers.",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        programs: ["Comprehensive Literacy", "STEM Integration", "Character Education"]
      },
      {
        id: 4,
        name: "Rural Education Initiative",
        location: "Multiple Villages",
        type: "Rural School Network",
        students: "5000",
        teachers: "200",
        story: "This network of rural schools implemented our low-cost, high-impact teaching strategies. Despite limited resources, student learning outcomes improved dramatically across all subjects.",
        achievement: "UNESCO Recognition for Innovation",
        improvements: {
          learningOutcomes: "+65%",
          teacherEffectiveness: "+80%",
          communityInvolvement: "100%",
          governmentSupport: "National Funding"
        },
        quote: "Proving that quality education doesn't require expensive resources, just well-trained teachers.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        programs: ["Low-Cost Resources", "Community Teaching", "Digital Integration"]
      }
    ]
  };

  const categories = [
    { id: 'students', label: '👨‍🎓 Student Success', count: storiesData.students.length },
    { id: 'teachers', label: '👩‍🏫 Teacher Transformations', count: storiesData.teachers.length },
    { id: 'schools', label: '🏫 School Excellence', count: storiesData.schools.length }
  ];

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const closeModal = () => {
    setSelectedStory(null);
  };

  const getActiveStories = () => storiesData[activeCategory];

  return (
    <div className="success-stories">
      {/* Header */}
      <header className="stories-header">
        <div className="header-content">
          <h1 className="animated-title">Real Impact, Real Results</h1>
          <p className="header-subtitle">See how our training transforms students, empowers teachers, and elevates schools</p>
        </div>
      </header>

      {/* Categories Navigation */}
      <div className="categories-nav">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(category.id);
              setSelectedStory(null);
            }}
          >
            <span className="category-label">{category.label}</span>
            <span className="category-count">{category.count} Stories</span>
          </button>
        ))}
      </div>

      {/* Stats Banner */}
      <div className="stats-banner">
        <div className="stat-item">
          <div className="stat-number">5000+</div>
          <div className="stat-label">Students Impacted</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">250+</div>
          <div className="stat-label">Teachers Trained</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Schools Transformed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">98%</div>
          <div className="stat-label">Satisfaction Rate</div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="stories-grid-container">
        <h2 className="grid-title">
          {activeCategory === 'students' && 'Student Success Stories'}
          {activeCategory === 'teachers' && 'Teacher Transformation Stories'}
          {activeCategory === 'schools' && 'School Excellence Stories'}
        </h2>
        
        <div className="stories-grid">
          {getActiveStories().map(story => (
            <div 
              key={story.id} 
              className="story-card"
              onClick={() => handleStoryClick(story)}
            >
              <div className="story-image-container">
                <img src={story.image} alt={story.name} className="story-image" />
                <div className="image-overlay"></div>
                {activeCategory === 'students' && (
                  <div className="age-badge">{story.age} years</div>
                )}
                {activeCategory === 'teachers' && (
                  <div className="experience-badge">{story.experience} experience</div>
                )}
                {activeCategory === 'schools' && (
                  <div className="type-badge">{story.type}</div>
                )}
              </div>
              
              <div className="story-content">
                <h3 className="story-name">{story.name}</h3>
                
                {activeCategory === 'students' && (
                  <>
                    <p className="story-meta">{story.grade} • {story.school}</p>
                    <p className="story-excerpt">{story.story.substring(0, 100)}...</p>
                    <div className="achievement-tag">🏆 {story.achievement}</div>
                  </>
                )}
                
                {activeCategory === 'teachers' && (
                  <>
                    <p className="story-meta">{story.role} • {story.school}</p>
                    <p className="story-excerpt">{story.story.substring(0, 100)}...</p>
                    <div className="achievement-tag">📈 {story.achievement}</div>
                  </>
                )}
                
                {activeCategory === 'schools' && (
                  <>
                    <p className="story-meta">{story.location} • {story.students} students</p>
                    <p className="story-excerpt">{story.story.substring(0, 100)}...</p>
                    <div className="achievement-tag">🏅 {story.achievement}</div>
                  </>
                )}
                
                <div className="story-cta">
                  <span className="read-more">Read Full Story →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Quote */}
      <div className="featured-quote">
        <div className="quote-content">
          <span className="quote-icon">❝</span>
          <p className="quote-text">When teachers grow, students thrive, and schools transform. These stories are proof that quality teacher training creates ripples of positive change throughout the entire education ecosystem.</p>
          <Link to='/afrozTeacher'><p className="quote-author">— Dr. Emma Wilson, Education Director</p></Link>
        </div>
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="story-modal-overlay" onClick={closeModal}>
          <div className="story-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <div className="modal-image-container">
                <img src={selectedStory.image} alt={selectedStory.name} />
                <div className="modal-badge">
                  {activeCategory === 'students' && `${selectedStory.age} years`}
                  {activeCategory === 'teachers' && selectedStory.role}
                  {activeCategory === 'schools' && selectedStory.type}
                </div>
              </div>
              
              <div className="modal-title-section">
                <h2>{selectedStory.name}</h2>
                {activeCategory === 'students' && (
                  <p className="modal-subtitle">{selectedStory.grade} • {selectedStory.school}</p>
                )}
                {activeCategory === 'teachers' && (
                  <p className="modal-subtitle">{selectedStory.role} • {selectedStory.school} • {selectedStory.experience} experience</p>
                )}
                {activeCategory === 'schools' && (
                  <p className="modal-subtitle">{selectedStory.location} • {selectedStory.students} students • {selectedStory.teachers} teachers</p>
                )}
                
                <div className="modal-achievement">
                  <span className="achievement-icon">🏆</span>
                  <span className="achievement-text">{selectedStory.achievement}</span>
                </div>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="story-full">
                <h3>The Story</h3>
                <p>{selectedStory.story}</p>
                
                {selectedStory.quote && (
                  <div className="story-quote">
                    <p>"{selectedStory.quote}"</p>
                    {activeCategory === 'students' && (
                      <p className="quote-author">— {selectedStory.name}</p>
                    )}
                    {activeCategory === 'teachers' && (
                      <p className="quote-author">— {selectedStory.name}, {selectedStory.role}</p>
                    )}
                    {activeCategory === 'schools' && (
                      <p className="quote-author">— School Principal</p>
                    )}
                  </div>
                )}
              </div>
              
              {/* Category-specific details */}
              {activeCategory === 'students' && selectedStory.beforeAfter && (
                <div className="before-after-section">
                  <h3>Transformation Journey</h3>
                  <div className="before-after-grid">
                    <div className="before-card">
                      <div className="ba-header before">Before</div>
                      <p>{selectedStory.beforeAfter.before}</p>
                    </div>
                    <div className="arrow">→</div>
                    <div className="after-card">
                      <div className="ba-header after">After</div>
                      <p>{selectedStory.beforeAfter.after}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeCategory === 'teachers' && (
                <>
                  {selectedStory.results && (
                    <div className="results-section">
                      <h3>Measurable Results</h3>
                      <div className="results-grid">
                        {Object.entries(selectedStory.results).map(([key, value]) => (
                          <div key={key} className="result-item">
                            <div className="result-value">{value}</div>
                            <div className="result-label">
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedStory.skills && (
                    <div className="skills-section">
                      <h3>Key Skills Developed</h3>
                      <div className="skills-list">
                        {selectedStory.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">✓ {skill}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
              
              {activeCategory === 'schools' && (
                <>
                  {selectedStory.improvements && (
                    <div className="improvements-section">
                      <h3>School-Wide Improvements</h3>
                      <div className="improvements-grid">
                        {Object.entries(selectedStory.improvements).map(([key, value]) => (
                          <div key={key} className="improvement-item">
                            <div className="improvement-value">{value}</div>
                            <div className="improvement-label">
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedStory.programs && (
                    <div className="programs-section">
                      <h3>Programs Implemented</h3>
                      <div className="programs-list">
                        {selectedStory.programs.map((program, index) => (
                          <span key={index} className="program-tag">🎯 {program}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            
            <div className="modal-footer">
              <button className="share-btn">📤 Share This Story</button>
              <button className="inspire-btn" onClick={closeModal}>✨ Get Inspired</button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="stories-cta">
        <h2>Ready to Write Your Success Story?</h2>
        <p>Join hundreds of students, teachers, and schools who have transformed through quality education</p>
        <div className="cta-buttons">
          <button className="cta-btn primary">👨‍🎓 For Students</button>
          <button className="cta-btn secondary">👩‍🏫 For Teachers</button>
          <button className="cta-btn tertiary">🏫 For Schools</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="stories-footer">
        <p>All stories are real and shared with permission. Names may be changed for privacy.</p>
        <p className="footer-note">Want to share your success story? <a href="/share-story">Submit your story →</a></p>
      </footer>
    </div>
  );
};

export default SuccessStories;