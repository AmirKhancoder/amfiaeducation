// import react from "react";
// import img1 from "../images/img1.jpg"
// import img2 from "../images/img2.jpg"
// import img_girl from "../images/img_girl.webp"
// import './Clouser.css'

// function Clouser(){
//     return (
      
//         <div className="body">
//            <div className="leftBody">
//             <h4>#YourChild</h4>
//             {/* <h2>Deserves More Than Just Marks</h2>
//             <h2>Deserves to Speak, Solve, and Shine.</h2> */}

// <h2 className="animated-text">
//   <span>Deserves More Than Just Marks</span>
//   <span>Deserves to Speak, Solve, and Shine</span>
// </h2>


//             <h3>Learn from the highly qualified teachers</h3>
//             <p>Give them real-life skills, confidence, and career-ready learning with our Future-Ready Learning online program.</p>
//            </div>
//            <div className="rightBody">
//               <img className ="body_img" src={img1} alt="Amfia Education Banner for Online Classes"/>
//            </div>
//         </div>
//     )
       
// }

// export default Clouser;


import React from "react";
import img1 from "../images/img1.jpg";
import './Clouser.css';

function Clouser(){
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
                <img className="body_img" src={img1} alt="Amfia Education Banner for Online Classes"/>
            </div>
        </div>
    );
}

export default Clouser;