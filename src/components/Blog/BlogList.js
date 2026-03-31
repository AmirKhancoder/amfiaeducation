import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './BlogList.css';

// Sample blog data (replace with API calls in production)
const blogPosts = [
  {
    id: 1,
    slug: 'how-to-improve-math-skills',
    title: '5 Proven Methods to Improve Math Skills for Grade 5-10 Students',
    excerpt: 'Discover effective techniques to boost mathematical understanding and performance in middle school students.',
    category: 'Mathematics',
    date: '',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    slug: 'future-ready-skills',
    title: '10 Future-Ready Skills Every Student Should Learn in 2025',
    excerpt: 'Essential skills that will prepare students for the jobs of tomorrow in our rapidly changing world.',
    category: 'Future Skills',
    date: '',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  // Add more blog posts...
];

const BlogList = () => {
  const { category } = useParams();
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (category) {
      setFilteredPosts(blogPosts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      ));
    } else {
      setFilteredPosts(blogPosts);
    }
  }, [category]);

  return (
    <div className="blog-list">
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <article key={post.id} className="blog-card">
            <Link to={`/blog/${post.slug}`}>
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-content">
                <span className="blog-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          </article>
        ))
      ) : (
        <p className="no-posts">No blog posts found in this category.</p>
      )}
    </div>
  );
};

export default BlogList;