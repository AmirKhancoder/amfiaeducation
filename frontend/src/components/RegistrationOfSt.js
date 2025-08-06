import React, { useState } from 'react';
import { initiatePayment } from '../utils/paymentUtils';
import { Link } from 'react-router-dom';
import './RegistrationOfSt.css';

const RegistrationOfSt = () => {
  const courses = [
    "Future Ready & Exam Prep",
    "English Speaking & Writing", 
    "Math Problem Solving",
    "JEE/NEET Foundation",
    "Exam Prep"
  ];

  const grades = ["5th", "6th", "7th", "8th", "9th", "10th"];

  const [formData, setFormData] = useState({
    name: '',
    father:'',
    mother:'',
    grade: '',
    course: '',
    phone: '',
    email: '',
    city: '',
    refrence: '',
    refrenceSt: '',
    acceptTerms: false
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const completeRegistration = async () => {
    try {
      const response = await fetch('https://kaifiyaback.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          paymentStatus: paymentSuccess ? 'paid' : 'pending'
        })
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.error);

      setPaymentSuccess(true);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError('');

      const orderResponse = await fetch('https://kaifiyaback.onrender.com/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: 10,
          currency: 'INR',
          receipt_email: formData.email
        })
      });

      const orderData = await orderResponse.json();
      if (!orderData.success) throw new Error(orderData.error);

      await initiatePayment(
        orderData.order,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        },
        (paymentResponse) => {
          console.log('Payment ID:', paymentResponse.razorpay_payment_id);
          completeRegistration();
        },
        (paymentError) => {
          setError(`Payment failed: ${paymentError.description}`);
          setLoading(false);
        }
      );
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // const validateForm = () => {
  //   // ... (keep existing validation logic)
  //   return true;
  // };

  const validateForm = () => {
        if (!formData.name.trim()) {
          setError('Full name is required');
          return false;
        }

        if (!formData.father.trim()) {
          setError('Father name is required');
          return false;
        }

        if (!formData.mother.trim()) {
          setError('Mother name is required');
          return false;
        }

        if (!formData.grade) {
          setError('Please select your grade');
          return false;
        }
        if (!formData.course) {
          setError('Please select a course');
          return false;
        }
        if (!formData.phone || formData.phone.length < 10) {
          setError('Valid phone number is required');
          return false;
        }
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
          setError('Valid email is required');
          return false;
        }
        if (!formData.city.trim()) {
          setError('City is required');
          return false;
        }
        if (!formData.refrence || formData.refrence.length < 10) {
          setError('Valid phone number is required');
          return false;
        }
        if (!formData.refrenceSt || formData.refrenceSt.length < 10) {
          setError('Valid phone number is required');
          return false;
        }
        if (!formData.acceptTerms) {
          setError('You must accept the terms and conditions');
          return false;
        }
        return true;
      };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    await handlePayment();
  };

  if (success || paymentSuccess) {
    return (
      <div className="registration-success">
        <h2>Registration Successful!</h2>
        {paymentSuccess && (
          <p className="success-message">Your payment was processed successfully.</p>
        )}
        <p>Thank you for registering. You will receive a confirmation email shortly.</p>
      </div>
    );
  }

  return (
    // ... (keep existing JSX)
    <div className="registration-container-student">
      <h2>Student Registration</h2>
      <p className="course-fee-student">Course Fee: ₹2000 Only</p>
      
      {error && <div className="error-message-student">{error}</div>}

      <form onSubmit={handleSubmit} className="registration-form-student">
        <div className="form-group-student">
          <label htmlFor="name">Student Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group-student">
          <label htmlFor="father">Father's Name</label>
          <input
            type="text"
            id="father"
            name="father"
            value={formData.father}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group-student">
          <label htmlFor="mother">Mother's Name</label>
          <input
            type="text"
            id="mother"
            name="mother"
            value={formData.mother}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group-student">
          <label htmlFor="grade">Grade</label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade</option>
            {grades.map(grade => (
              <option key={grade} value={grade}>{grade}</option>
            ))}
          </select>
        </div>

        <div className="form-group-student">
          <label htmlFor="course">Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            {courses.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>

        <div className="form-group-student">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            minLength="10"
            maxLength="10"
          />
        </div>

        <div className="form-group-student">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group-student">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group-student">
          <label htmlFor="refrence">Please Give us a refrence (Parent's Number)</label>
          <input
            type="tel"
            id="refrence"
            name="refrence"
            value={formData.refrence}
            onChange={handleChange}
            required
            minLength="10"
            maxLength="10"
          />
        </div>

        <div className="form-group-student">
          <label htmlFor="refrenceSt">Please Give one more refrence (Parent's Number)</label>
          <input
            type="tel"
            id="refrenceSt"
            name="refrenceSt"
            value={formData.refrenceSt}
            onChange={handleChange}
            required
            minLength="10"
            maxLength="10"
          />
        </div>

        <div className="form-group-student checkbox-group-student">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            required
          />
          <label htmlFor="acceptTerms">
            I agree to the  <Link to="/register-term">terms & condition</Link>
          </label>
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className="submit-btn-student"
        >
          {loading ? 'Processing...' : 'Register & Pay ₹2000'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationOfSt;


// import React, { useState } from 'react';
// import { initiatePayment } from '../utils/paymentUtils';
// import { Link } from 'react-router-dom';
// import './RegistrationOfSt.css';

// const RegistrationOfSt = () => {
//   // Available courses and grade
//   const courses = [
//     "Future Ready & Exam Prep",
//     "English Speaking & Writing", 
//     "Math Problem Solving",
//     "JEE/NEET Foundation",
//     "Exam Prep"
//   ];

//   const grades = ["5th", "6th", "7th", "8th", "9th", "10th"];

//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     grade: '',
//     course: '',
//     phone: '',
//     email: '',
//     city: '',
//     password: '',
//     confirmPassword: '',
//     acceptTerms: false
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   // Complete registration after payment
//   const completeRegistration = async () => {
//     try {
//       const response = await fetch('https://kaifiyaback.onrender.com/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...formData,
//           paymentStatus: 'paid'
//         })
//       });

//       const data = await response.json();
//       if (!data.success) throw new Error(data.error);

//       setPaymentSuccess(true);
//       setSuccess(true);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle payment process
//   const handlePayment = async () => {
//     try {
//       setLoading(true);
//       setError('');

//       // 1. First create order on backend
//       const orderResponse = await fetch('https://kaifiyaback.onrender.com/create-order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           amount: 2000, // ₹500
//           currency: 'INR',
//           receipt_email: formData.email
//         })
//       });

//       const orderData = await orderResponse.json();
//       if (!orderData.success) throw new Error(orderData.error);

//       // 2. Initiate payment with order details
//       await initiatePayment(
//         orderData.order,
//         {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone
//         },
//         (paymentResponse) => {
//           // Payment success
//           console.log('Payment ID:', paymentResponse.razorpay_payment_id);
//           completeRegistration();
//         },
//         (paymentError) => {
//           // Payment failed
//           setError(`Payment failed: ${paymentError.description}`);
//           setLoading(false);
//         }
//       );
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   // Form validation
//   const validateForm = () => {
//     if (!formData.name.trim()) {
//       setError('Full name is required');
//       return false;
//     }
//     if (!formData.grade) {
//       setError('Please select your grade');
//       return false;
//     }
//     if (!formData.course) {
//       setError('Please select a course');
//       return false;
//     }
//     if (!formData.phone || formData.phone.length < 10) {
//       setError('Valid phone number is required');
//       return false;
//     }
//     if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
//       setError('Valid email is required');
//       return false;
//     }
//     if (!formData.city.trim()) {
//       setError('City is required');
//       return false;
//     }
//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters');
//       return false;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return false;
//     }
//     if (!formData.acceptTerms) {
//       setError('You must accept the terms and conditions');
//       return false;
//     }
//     return true;
//   };

//   // Form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     await handlePayment();
//   };

//   if (success || paymentSuccess) {
//     return (
//       <div className="registration-success">
//         <h2>Registration Successful!</h2>
//         {paymentSuccess && (
//           <p className="success-message">Your payment was processed successfully.</p>
//         )}
//         <p>Thank you for registering. You will receive a confirmation email shortly.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="registration-container-student">
//       <h2>Student Registration</h2>
//       <p className="course-fee-student">Course Fee: ₹2000 Only</p>
      
//       {error && <div className="error-message-student">{error}</div>}

//       <form onSubmit={handleSubmit} className="registration-form-student">
//         <div className="form-group-student">
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group-student">
//           <label htmlFor="grade">Grade</label>
//           <select
//             id="grade"
//             name="grade"
//             value={formData.grade}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Grade</option>
//             {grades.map(grade => (
//               <option key={grade} value={grade}>{grade}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group-student">
//           <label htmlFor="course">Course</label>
//           <select
//             id="course"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Course</option>
//             {courses.map(course => (
//               <option key={course} value={course}>{course}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group-student">
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             minLength="10"
//             maxLength="10"
//           />
//         </div>

//         <div className="form-group-student">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group-student">
//           <label htmlFor="city">City</label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group-student">
//           <label htmlFor="password">Password (choose strong password)</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             minLength="6"
//           />
//         </div>

//         <div className="form-group-student">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             minLength="6"
//           />
//         </div>

//         <div className="form-group-student checkbox-group-student">
//           <input
//             type="checkbox"
//             id="acceptTerms"
//             name="acceptTerms"
//             checked={formData.acceptTerms}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="acceptTerms">
//             I agree to the  <Link to="/register-term">terms & condition</Link>
//           </label>
//         </div>

//         <button 
//           type="submit" 
//           disabled={loading} 
//           className="submit-btn-student"
//         >
//           {loading ? 'Processing...' : 'Register & Pay ₹2000'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationOfSt;