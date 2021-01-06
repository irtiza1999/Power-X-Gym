import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'

const PaymentDetail = () => {
  let history = useHistory()

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  if (
    localStorage.getItem('selectedPlan') &&
    localStorage.getItem('currentUser')
  ) {
    var user = JSON.parse(localStorage.getItem('currentUser'))
    var item = JSON.parse(localStorage.getItem('selectedPlan'))
  } else {
    console.log('error')
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    history.push('/placeOrder')
  }
  return (
    <>
      {localStorage.getItem('selectedPlan') &&
      localStorage.getItem('currentUser') ? (
        <div className="container row">
          <div className="col-md-6">
            <p>Name: {user[0].name}</p>
            <p>Address: {user[0].address}</p>
            <p>Email: {user[0].email}</p>
            <p>Contact Number: {user[0].mobile}</p>
            <p>
              Selected Plan: {item[0].name} ({item[0].type})
            </p>
            <h4>Total = ${item[0].price}</h4>
          </div>
          <div style={{ textAlign: 'center' }} className="col-md-6">
            <Form onSubmit={handlePlaceOrder}>
              <Form.Group>
                <Form.Label as="legend">Select Method</Form.Label>
                <Col>
                  <Form.Check
                    type="radio"
                    label="PayPal or Credit Card"
                    id="PayPal"
                    name="paymentMethod"
                    value="PayPal"
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                </Col>
              </Form.Group>
              <button className="checkoutBtn" type="submit">
                Pay {'$'}
                {item[0].price}
              </button>
            </Form>
          </div>
        </div>
      ) : (
        history.push('/pricing')
      )}
    </>
  )
}

export default PaymentDetail
