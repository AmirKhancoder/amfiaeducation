
// import React from "react";
// import img1 from "../images/img1.jpg";
// import schoolImage1 from "../images/schoolImage1.jpg";
// import schoolImage2 from "../images/schoolImage2.jpg";
// import schoolImage3 from "../images/schoolImage3.png";

// import './Clouser.css';

// function Clouser(){
//     return (
//         <div className="body">
//             <div className="leftBody">
//                 <h4>#YourChild</h4>
//                 <h2 className="animated-text">
//                     <span>Deserves More Than Just Marks</span>
//                     <span>Deserves to Speak, Solve, and Shine</span>
//                 </h2>
//                 <h3>Learn from the highly qualified teachers</h3>
//                 <p>Give them real-life skills, confidence, and career-ready learning with our Future-Ready Learning online program.</p>
//             </div>
//             <div className="rightBody">
//                 <img className="body_img" src={img1} alt="Amfia Education Banner for Online Classes"/>
//             </div>
//         </div>
//     );
// }

// export default Clouser;


import React, { useEffect, useState } from "react";
import schoolImage1 from "../images/schoolImage1.jpg";
import schoolImage2 from "../images/schoolImage2.png";
import schoolImage3 from "../images/schoolImage3.png";
import './Clouser.css';

const images = [schoolImage1, schoolImage2, schoolImage3];

function Clouser() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body">
      <div className="leftBody">
        <h4>#YourChild</h4>
        <h2 className="animated-text">
          <span>Deserves More Than Just Marks</span>
          <span>Deserves to Speak, Solve, and Shine</span>
        </h2>
        <h3>Learn from the highly qualified teachers</h3>
        <p>Give them real-life skills, confidence, and career-ready learning with our Future-Ready Learning online program.</p>
      </div>
      <div className="rightBody">
        <img
          className="body_img"
          src={images[currentImage]}
          alt="Slideshow"
        />
      </div>
    </div>
  );
}

export default Clouser;

