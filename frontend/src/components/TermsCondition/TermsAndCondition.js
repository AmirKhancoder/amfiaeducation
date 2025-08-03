import React from 'react'
import './TermsAndCondition.css'
import Shipping from './Shipping'
import Contact from './Contact'

function TermsAndCondition() {
  return (
    <div className="legal-page">
        
        <h5>Last updated on August 1, 2025</h5>

For the purpose of these Terms and Conditions, the terms "we", "us", "our" shall refer to Amfia Education, operated by Amir Kaifiya, located at Atardhani, Unnao, Uttar Pradesh – 209801. The terms "you", "your", "user", "visitor" refer to any individual or entity visiting our website or purchasing/joining our courses.

<p>By using our website and/or enrolling in our courses, you agree to the following terms:</p>

<h5>Website Content</h5>
<p>The content on this website is for general information only and may be changed without prior notice.</p>

<h5>Accuracy Disclaimer</h5>
<p>We do not guarantee the accuracy, completeness, or reliability of any information on this website or in our course materials. Use of any such content is at your own risk.</p>

<h5>Use of Services</h5>
<p>You are responsible for ensuring that any course or service you purchase from Amfia Education meets your specific needs.</p>

<h5>Intellectual Property</h5>
<p>All content including text, images, graphics, and layout are the property of Amfia Education and cannot be copied or used without permission.</p>

<h5>Trademarks</h5>
<p>All trademarks used or displayed on this site that are not owned by Amfia Education are the property of their respective owners.</p>

<h5>Unauthorized Use</h5>
<p>Any misuse or unauthorized use of content, material, or communication from us may lead to legal action or penalties.</p>

<h5>External Links</h5>
<p>We may provide links to other websites for convenience. We do not endorse or control the content of those sites.</p>

<h5>Linking Policy</h5>
<p>You may not link to our website without written permission from Amfia Education.</p>

<h5>Jurisdiction</h5>
<p>All disputes will be governed by the laws of India and resolved under courts located in Unnao, Uttar Pradesh.</p>

<h5>Payment Authorization</h5>
<p>We are not responsible for failed transactions due to declined authorization from your bank or payment gateway.</p>
<div className="legal-page">

<Shipping/>
<Contact/>

</div>
  </div>
  )
}

export default TermsAndCondition