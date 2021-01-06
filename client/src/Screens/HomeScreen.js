import React from 'react'
import Aboutus from '../components/Aboutus/Aboutus'
import Benifits from '../components/BenifitSection/Benifits'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Traing from '../components/Traing/Traing'

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Benifits />
      <Aboutus />
      <Traing />
      <ChooseUs />
      <Footer />
    </>
  )
}

export default HomeScreen
