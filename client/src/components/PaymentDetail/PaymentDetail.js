import React, { useEffect, useState } from 'react'
import { Form, Col } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'

const PaymentDetail = () => {
  let history = useHistory()

  const [sdkReady, setSdkReady] = useState(false)
  const [paid, setPaid] = useState(false)
  const [success, setSuccess] = useState(false)
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

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get('http://localhost:5000/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onLoad = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }
  })

  if (localStorage.getItem('__paypal_storage__')) {
    var paymentId = JSON.parse(localStorage.getItem('__paypal_storage__'))
  } else {
    console.log('error')
  }

  const handlePlaceOrder = (e) => {
    const orderDetail = {
      name: user[0].name,
      email: user[0].email,
      address: user[0].address,
      contact: user[0].mobile,
      plan: item[0].name,
      type: item[0].type,
      total: item[0].price,
      paymentId: paymentId.id,
    }
    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setSdkReady(flase)
      })
      .catch((err) => console.log(err.message))
  }

  const successPaymentHandler = () => {
    setPaid(true)
    setSuccess(true)
    handlePlaceOrder()
    localStorage.removeItem('selectedPlan')
    localStorage.removeItem('currentUser')
  }

  if (success) {
    history.push('/membership')
  }

  return (
    <>
      {localStorage.getItem('selectedPlan') &&
      localStorage.getItem('currentUser') ? (
        <div
          style={{ margin: '50px' }}
          className="container row d-flex justify-content-center align-items-center"
        >
          <div className="col-md-4">
            <h2>User Details</h2>
            <p>Name: {user[0].name}</p>
            <p>Address: {user[0].address}</p>
            <p>Email: {user[0].email}</p>
            <p>Contact Number: {user[0].mobile}</p>
          </div>
          <div className="col-md-4">
            <h2>Purchase Details</h2>
            <p>
              Selected Plan: {item[0].name} ({item[0].type})
            </p>
            <h4>Total = ${item[0].price}</h4>
          </div>
          <div style={{ textAlign: 'center' }} className="col-md-4">
            <Form>
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
              <p
                style={{
                  padding: '5px',
                  backgroundColor: 'yellow',
                  height: '30px',
                  width: '340px',
                }}
              >
                Total {'$'}
                {item[0].price}
              </p>
              <PayPalButton
                style={{
                  layout: 'vertical',
                }}
                amount={item[0].price}
                onSuccess={() => successPaymentHandler()}
              />
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
