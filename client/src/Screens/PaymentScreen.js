import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PaymentDetail from '../components/PaymentDetail/PaymentDetail'

const PaymentScreen = () => {
  return (
    <div>
      <Header name="Payment" />
      <PaymentDetail />
      <Footer />
    </div>
  )
}

export default PaymentScreen
