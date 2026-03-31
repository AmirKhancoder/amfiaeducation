import React from 'react'
import TermsAndCondition from './TermsAndCondition'
import PrivacyPolicy from './PrivacyPolicy'
import Shipping from './Shipping'
import Contact from './Contact'
import Refund from './Refund'

function RegistraionTerms() {
  return (
    <div className="legal-page">
        <TermsAndCondition/>
        <PrivacyPolicy/>
        <Refund/>
        <Shipping/>
        <Contact/>
    </div>
  )
}

export default RegistraionTerms