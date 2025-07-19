import ContactForm from './components/ContactForm';
import InquiryForm from './components/InquiryForm';
import Home from './components/Home';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Importance from './components/Importance';
import Services from './components/Services';
import Careers from './components/Careers';
import Curriculum from './components/Curriculum';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar placed here will appear on all routes */}
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<Importance />} />
          <Route path='/services' element={<Services />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/getTouch' element={<ContactForm />} />
          <Route path='/courses' element={<Curriculum />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;