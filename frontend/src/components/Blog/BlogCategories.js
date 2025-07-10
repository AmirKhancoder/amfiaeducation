import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCategories.css';

const categories = [
  { name: 'All', path: '/blog' },
  { name: 'Mathematics', path: '/blog/category/mathematics' },
  { name: 'Science', path: '/blog/category/science' },
  { name: 'English', path: '/blog/category/english' },
  { name: 'Study Skills', path: '/blog/category/study-skills' },
  { name: 'Future Skills', path: '/blog/category/future-skills' },
  { name: 'Competitive Exams', path: '/blog/category/competitive-exams' },
];

const BlogCategories = () => {
  return (
    <div className="blog-categories">
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={category.path}>{category.name}</Link>
          </li>
        ))}
      </ul>
      
      <div className="popular-tags">
        <h3>Popular Tags</h3>
        <div className="tags-container">
          <Link to="/blog/tag/math" className="tag">math</Link>
          <Link to="/blog/tag/learning" className="tag">learning</Link>
          <Link to="/blog/tag/exams" className="tag">exams</Link>
          <Link to="/blog/tag/technology" className="tag">technology</Link>
          <Link to="/blog/tag/education" className="tag">education</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;