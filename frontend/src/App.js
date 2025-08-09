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
import ApplyNow from './components/ApplyNow';
import PrivacyPolicy from './components/TermsCondition/PrivacyPolicy';
import TermsAndCondition from './components/TermsCondition/TermsAndCondition';
import Refund from './components/TermsCondition/Refund';
import Shipping from './components/TermsCondition/Shipping';
import RegistraionTerms from './components/TermsCondition/RegistraionTerms';
import RegistrationOfSt from './components/RegistrationOfSt';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar placed here will appear on all routes */}
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/getTouch' element={<ContactForm />} />
          <Route path='/courses' element={<Curriculum />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path='/applyPath' element={<ApplyNow/>}/>
          <Route path='/privacy' element={<PrivacyPolicy/>}/>
          <Route path='/terms' element={<TermsAndCondition/>}/>
          <Route path='/refund' element={<Refund/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/register-term' element={<RegistraionTerms/>}/>
          <Route path='/register-re' element={<RegistrationOfSt/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;