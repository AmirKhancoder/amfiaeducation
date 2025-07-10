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
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
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