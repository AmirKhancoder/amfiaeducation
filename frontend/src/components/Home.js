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

function Home() {
  return (
    <div>
        <Navbar/>
        <Clouser/>
        <Mission/>
        <Importance/>
        <StatsCards/>
        <Services/>
        <Footer/>
        <MobileCallBack/>
        <WhatsAppPopup/>
    </div>
  )
}

export default Home