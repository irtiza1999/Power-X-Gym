import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PersonalDetails from '../components/PersonalDetails/PersonalDetails'

const CheckOutScreen = () => {
  return (
    <div>
      <Header name="YOUR GYM MEMBERSHIP" />
      <PersonalDetails />
      <Footer />
    </div>
  )
}

export default CheckOutScreen
