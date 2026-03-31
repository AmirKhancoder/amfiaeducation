import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h2>📜 Complete Terms & Conditions</h2>
      
      <div className="terms-content">
        <ol>
          <li>
            <strong>Registration Fee:</strong> 
            <ul>
              <li>₹100 non-refundable fee per student</li>
              <li>The fee covers exam arrangements and digital participation certificates.</li>
              <li>No refunds for disqualification or absence</li>
            </ul>
          </li>


          <li>
            <strong>Eligibility:</strong> 
            <ul>
              <li>The scholarship is open only to students from schools selected by AmFia Education.</li>
              <li>Students from other schools will not be eligible.</li>
              <li>Only students of Classes 5 to 10 may participate.</li>
            </ul>
          </li>


          <li>
            <strong>Syllabus:</strong> 
            <ul>
              <li>English Grammar & Writing</li>
              <li>Mathematics Problem Solving</li>
              <li>Science Fundamentals</li>
              <li>Computer Knowledge</li>
            </ul>
          </li>


          <li>
            <strong>Selection Process:</strong> 
            <ul>
              <li>Stage 1: MCQ-based exam. Students scoring 90% or above qualify for Stage 2.</li>
              <li>Stage 2: Written exam. Students scoring 95% or above qualify for Stage 3.</li>
              <li>Stage 3: Personal interview to determine final scholarship winners.</li>
            </ul>
          </li>


          <li>
            <strong>Selection Process:</strong> 
            <ul>
              <li>A total of 10 students across all participating schools will receive scholarships:</li>
              <li>Rank 1: ₹2,00,000</li>
              <li>Ranks 2–3: ₹50,000 each</li>
              <li>Ranks 4–10: ₹25,000 each</li>
              <p>The scholarship amount will be awarded at the Annual Function of the student’s respective school.</p>
            </ul>
          </li>


          <li>
            <strong>Certificates:</strong> 
            <ul>
              <li>All registered students will receive a digital participation certificate.</li>
            </ul>
          </li>


          <li>
            <strong>Anti-Cheating Policy:</strong>
            <ul>
              <li>Strict surveillance during exams</li>
              <li>Any cheating will result in immediate termination</li>
              <li>Repeated violations may blacklist the entire school</li>
              <li>Amfia reserves right to withhold results for suspicious activity</li>
            </ul>
          </li>
          <li>
            <strong>Scholarship Disbursement:</strong>
            <ul>
              <li>Amounts awarded during school's annual function</li>
              <li>Winners must attend with parent/guardian</li>
              <li>Funds disbursed via cheque to parent's account</li>
            </ul>
          </li>
          <li>
            <strong>School Responsibilities:</strong>
            <ul>
              <li>Ensure exam integrity and proper supervision</li>
              <li>Verify student identities during tests</li>
              <li>Report any misconduct immediately</li>
            </ul>
          </li>
          <li>
            <strong>Result Declaration:</strong>
            <ul>
              <li>Published on Amfia website within 30 days</li>
              <li>Schools with cheating cases will not receive results</li>
              <li>No reconsideration requests entertained</li>
            </ul>
          </li>

          <li>
            <strong>Final Decision:</strong>
            <ul>
              <li>The decision of AmFia Education regarding results, disqualifications, or rule interpretations will be final and binding.</li>

            </ul>
          </li>


          <li>
            <strong>Publicity & Consent:</strong>
            <ul>
              <li>By participating, you agree that Amfia Education may use your name, photograph, and academic achievements for promotional purposes.</li>
               </ul>
          </li>

          <li>
            <strong>Disclaimer:</strong>
            <ul>
              <li>The scholarship program is privately conducted and is not affiliated with any government body.</li>
              <li>Amfia Education reserves the right to modify or cancel the program at any time with prior notice.</li>
               </ul>
          </li>


        </ol>

        <div className="important-note strict-note">
          <h3>⚠️ Zero Tolerance Policy</h3>
          <p>
            Amfia maintains absolute integrity in the selection process. 
            Any attempt to manipulate results will lead to permanent disqualification 
            of the student and potential sanctions against the school.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;