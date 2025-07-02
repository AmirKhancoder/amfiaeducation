import ContactForm from './components/ContactForm';
import InquiryForm from './components/InquiryForm';
import Home from './components/Home';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Importance from './components/Importance';
import Services from './components/Services';
import Careers from './components/Careers';

function App() {
  return (
    
    <div className="App">
     {/* <ContactForm/>
     <InquiryForm/> */}
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<Importance/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/getTouch' element={<ContactForm/>}/>
        <Route path='/register' element={<ContactForm/>}/>
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
