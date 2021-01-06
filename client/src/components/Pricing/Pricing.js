import React, { useState } from 'react'
import './Pricing.css'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const plans = [
    {
      type: 'BILLED WEEKLY',
      name: 'ADVANCE PLAN',
      price: 140,
      bg: card1,
      benfit1: 'Mobile-Optimized',
      benfit2: 'Best Hosting',
      benfit3: 'Free Custom',
      benfit4: 'Outstanding',
      benfit5: 'Happy Customers',
    },
    {
      type: 'BILLED MONTHLY',
      name: 'BASIC PLAN',
      price: 250,
      bg: card2,
      benfit1: 'Mobile-Optimized',
      benfit2: 'Best Hosting',
      benfit3: 'Free Custom',
      benfit4: 'Outstanding',
      benfit5: 'Happy Customers',
    },
    {
      type: 'BILLED YEARLY',
      name: 'PRO PLAN',
      price: 500,
      bg: card3,
      benfit1: 'Mobile-Optimized',
      benfit2: 'Best Hosting',
      benfit3: 'Free Custom',
      benfit4: 'Outstanding',
      benfit5: 'Happy Customers',
    },
  ]

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([item])
    localStorage.setItem('selectedPlan', JSON.stringify([item]))
  }
  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div>
        <h3 style={{ textAlign: 'center' }}>
          <span style={{ color: '#ffc800' }}>CHOOSE THE OFFER</span> THAT SUITS
          YOU
        </h3>
        <p style={{ textAlign: 'center' }}>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            facere!
          </small>
        </p>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        {plans.map((plan) => (
          <div
            className="col-md-3 col-sm-6 planCard"
            style={{
              backgroundImage: `linear-gradient(rgba(19,20,20,.7), rgba(20,20,20,.5)),  url(${plan.bg})`,
              margin: '0px',
            }}
          >
            <h5 style={{ color: '#ffc850' }}>{plan.type}</h5>
            <h2 style={{ color: 'white' }}>{plan.name}</h2>
            <h1 style={{ color: '#ffc850' }}>${plan.price}</h1>
            <small className="cardLi" style={{ color: 'white' }}>
              <i class="fas fa-check-circle"></i> {plan.benfit1}
            </small>{' '}
            <br />
            <small className="cardLi" style={{ color: 'white' }}>
              <i class="fas fa-check-circle"></i> {plan.benfit2}
            </small>{' '}
            <br />
            <small className="cardLi" style={{ color: 'white' }}>
              <i class="fas fa-check-circle"></i> {plan.benfit3}
            </small>{' '}
            <br />
            <small className="cardLi" style={{ color: 'white' }}>
              <i class="fas fa-check-circle"></i> {plan.benfit4}
            </small>{' '}
            <br />
            <small className="cardLi" style={{ color: 'white' }}>
              <i class="fas fa-check-circle"></i> {plan.benfit5}
            </small>{' '}
            <br />
            <Link to="/checkout">
              <button onClick={() => addToCart(plan)} className="checkoutBtn">
                PURCHASE
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
