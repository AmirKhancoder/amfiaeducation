import React from 'react'
import Navbar from './Navbar'
import Clouser from './Clouser'
import Importance from './Importance'
import Mission from './Mission'
import Services from './Services'
import Footer from './Footer'
import MobileCallBack from './MobileCallBack'
import WhatsAppPopup from './WhatsAppPopup'
import StatsCards from './StatsCards'
import { Helmet } from "react-helmet";
import Team from './Team'
import FAQ from './FAQ'
import ScholarshipContainer from './ScholarshipContainer'
import ApplyNow from './ApplyNow'
import TeacherTraining from './TeacherTraining'
import TermsAndCondition from './TermsCondition/TermsAndCondition'


function Home() {
  return (
    <div>
      <Helmet>
        <title>Amfia Education | Online Skill Classes</title>
        <meta name="description" content="Best real-life learning classes for school students" />
      </Helmet>

        <Navbar/>
        {/* <TermsAndCondition/> */}
        {/* <ApplyNow/> */}
        <Clouser/>
        <Mission/>
        {/* <TeacherTraining/> */}
        <ScholarshipContainer/>
        <Importance/>
        {/* <StatsCards/> */}
        <Team/>
        <Services/>
        <FAQ/>
        <Footer/>
        <MobileCallBack/>
        <WhatsAppPopup/>
    </div>
  )
}

export default Home