import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

// Sample blog content (replace with API calls in production)
const blogContent = {
  'how-to-improve-math-skills': {
    title: '5 Proven Methods to Improve Math Skills for Grade 5-10 Students',
    content: `
      <h2>1. Practice Daily with Real-World Applications</h2>
      <p>Incorporate math into everyday activities like cooking, shopping, or budgeting. This helps students see the practical value of mathematical concepts.</p>
      
      <h2>2. Use Visual Learning Techniques</h2>
      <p>Diagrams, graphs, and physical manipulatives can make abstract concepts more concrete. Visual learners particularly benefit from this approach.</p>
      
      <h3>Recommended Tools:</h3>
      <ul>
        <li>Fraction circles</li>
        <li>Algebra tiles</li>
        <li>Graphing calculators</li>
      </ul>
      
      <h2>3. Focus on Problem-Solving Strategies</h2>
      <p>Teach students multiple approaches to solving problems rather than memorizing procedures. This builds flexibility in mathematical thinking.</p>
    `,
    category: 'Mathematics',
    date: 'October 15, 2023',
    author: 'Dr. Sarah Johnson',
    seoDescription: 'Discover 5 effective methods to improve math skills for middle school students, with practical tips and tools for better learning outcomes.',
    tags: ['math', 'study skills', 'middle school']
  },
  // Add more blog content...
  'future-ready-skills':{
    title: '10 Future-Ready Skills Every Student Should Learn in 2025',
    content: `
     <p> As the world evolves at a breakneck pace, driven by technological advancements and global challenges, 
          students need to equip themselves with skills that prepare them for an unpredictable future. 
          In 2025, the job market and societal demands are shifting toward adaptability, creativity, and tech-savviness. 
          Here are 10 future-ready skills every student should master to thrive in this dynamic landscape.</p>
          <h2>1. Digital Literacy and Computational Thinking</h2>
          <p>In a world dominated by technology, understanding how to navigate, evaluate, and utilize digital tools is non-negotiable. Digital literacy goes beyond using apps—it involves understanding algorithms, data privacy, and cybersecurity basics. Computational thinking, which includes problem-solving through logic and pattern recognition, empowers students to approach challenges systematically, whether they’re coding or analyzing data.

<h2>How to Learn:</h2> Take online courses in coding (e.g., Python, JavaScript), explore platforms like Codecademy, and practice breaking down complex problems into smaller, manageable steps.</p>]
   <h2>2. Critical Thinking and Problem-Solving</h2>
   <p>The ability to analyze information, question assumptions, and devise innovative solutions is crucial. In 2025, with misinformation rampant and complex global issues like climate change, critical thinking helps students separate fact from noise and tackle problems creatively.

How to Learn: Engage in debates, solve puzzles, or participate in case study competitions. Platforms like Brilliant.org offer exercises to sharpen analytical skills.</p>
   <h2>3. Emotional Intelligence (EQ)</h2>
   <p>As automation takes over routine tasks, human-centric skills like empathy, self-awareness, and interpersonal communication are in high demand. Emotional intelligence enables students to collaborate effectively, resolve conflicts, and lead with compassion in diverse workplaces.

How to Learn: Practice active listening, join group projects, and reflect on personal emotions through journaling or mindfulness apps like Headspace.</p>
   <h2>4. Adaptability and Resilience</h2>
   <p>The future is uncertain, with rapid shifts in industries and global events. Students who can adapt to change, learn from failure, and bounce back from setbacks will thrive. Resilience is about maintaining a growth mindset in the face of challenges.

How to Learn: Embrace new experiences, such as learning a new skill or hobby, and practice reframing failures as learning opportunities.

5</p>
   <h2>5. Artificial Intelligence and Machine Learning Basics</h2>
   <p>AI is reshaping industries, from healthcare to finance. Understanding the fundamentals of AI and machine learning—how they work, their applications, and their ethical implications—prepares students to work alongside intelligent systems or innovate within them.

How to Learn: Explore free AI courses on Coursera or edX, experiment with tools like Google’s Teachable Machine, or dive into AI ethics discussions.

</p>
   <h2>6. Sustainability and Environmental Literacy</h2>
   <p>With climate change as a pressing global issue, students need to understand sustainability principles and their role in creating a greener future. This includes knowledge of renewable energy, circular economies, and sustainable practices in daily life.

How to Learn: Join environmental clubs, volunteer for conservation projects, or take courses on sustainability through platforms like FutureLearn.

</p>
   <h2>7. Collaboration and Cross-Cultural Competence</h2>
   <p>Globalization and remote work mean students will collaborate with diverse teams across borders. Cross-cultural competence—understanding cultural nuances and communicating effectively—is essential for building inclusive, productive teams.

How to Learn: Participate in international student exchanges, join global online communities, or learn a new language using apps like Duolingo.</p>
   <h2>8. Creativity and Innovation</h2>
   <p>In an era of automation, creativity sets humans apart. The ability to think outside the box, generate original ideas, and innovate solutions is highly valued in fields like design, tech, and entrepreneurship.

How to Learn: Engage in creative pursuits like writing, art, or music. Platforms like Skillshare offer courses to spark creative thinking.</p>
   <h2>9. Data Literacy and Analytics</h2>
   <p>Data is the backbone of decision-making in 2025. Students who can interpret, visualize, and draw insights from data will have a competitive edge in nearly every industry, from marketing to policy-making.
   How to Learn: Learn tools like Excel, Tableau, or Google Data Studio. Practice analyzing datasets on platforms like Kaggle.</p>
   <h2>10. Lifelong Learning and Self-Directed Education</h2>
   <p>The half-life of skills is shrinking, making continuous learning a necessity. Students must develop the habit of self-directed education, seeking out knowledge independently to stay relevant in their fields.
   How to Learn: Create a personal learning plan, use resources like Khan Academy or YouTube tutorials, and stay curious by exploring new topics regularly. </p>
   <h2>Conclusion</h2>
   <p>The future belongs to those who are prepared to adapt, innovate, and learn continuously. By mastering these 10 skills—digital literacy, critical thinking, emotional intelligence, adaptability, AI basics, sustainability, collaboration, creativity, data literacy, and lifelong learning—students can position themselves as leaders in a rapidly changing world. Start small, stay curious, and invest in your growth today to be ready for the opportunities of tomorrow.</p>
    `,
    category: 'Future Skills',
    date: '2025',
    author: 'Amfia Education',
    seoDescription: 'Discover 5 effective methods to improve math skills for middle school students, with practical tips and tools for better learning outcomes.',
    tags: ['math', 'study skills', 'middle school']
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    console.log('Current slug:', slug); // Debugging line
    console.log('Available posts:', Object.keys(blogContent)); // Debugging line
    setPost(blogContent[slug]);
    
    // Update meta tags for SEO
    if (blogContent[slug]) {
      document.title = `${blogContent[slug].title} | AmFia Education`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', blogContent[slug].seoDescription);
      }
    }
  }, [slug]);

  if (!post) return <div className="loading">Loading...</div>;

  return (
    <article className="blog-post">
      <header className="post-header">
        <span className="post-category">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </header>
      
      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <footer className="post-footer">
        <div className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
};

export default BlogPost;