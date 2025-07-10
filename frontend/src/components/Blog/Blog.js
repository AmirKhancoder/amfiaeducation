import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import BlogCategories from './BlogCategories';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>AmFia Education Blog</h1>
        <p>Expert insights, teaching strategies, and educational resources</p>
      </div>
      
      <div className="blog-layout">
        <aside className="blog-sidebar">
          <BlogCategories />
        </aside>
        
        <main className="blog-content">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/:slug" element={<BlogPost />} />
            <Route path="/category/:category" element={<BlogList />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Blog;