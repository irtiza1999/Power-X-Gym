import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Membership from '../components/Membership/Membership'

const MembershipScreen = () => {
  return (
    <div>
      <Header name="Thanks for your membership" />
      <Membership />
      <Footer />
    </div>
  )
}

export default MembershipScreen
