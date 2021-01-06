import React, { useState } from 'react'
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const PersonalDetails = () => {
  let userInfo = {
    name: '',
    email: '',
    address: '',
    mobile: '',
  }

  let history = useHistory()

  const [user, setUser] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const addUserInfo = (item) => {
    setUser([item])
    localStorage.setItem('currentUser', JSON.stringify([item]))
  }

  let [isValid, setIsValid] = useState(true)

  const isValidInfo = () => {
    if (
      userInfo.name !== '' &&
      userInfo.email !== '' &&
      userInfo.address !== '' &&
      userInfo.mobile !== ''
    )
      return true
    return false
  }

  const handleChange = (e) => {
    e.preventDefault()
    userInfo[[e.target.name]] = e.target.value
  }

  const handleSubmit = () => {
    if (isValidInfo()) {
      setIsValid(true)
      addUserInfo(userInfo)
      setSubmitted(true)
    } else setIsValid(false)
  }

  return (
    <div className="container" style={{ padding: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>Personal Details</h3>
      <hr />

      <Form>
        {!isValid && <Alert variant="danger">Please fill up all info!</Alert>}
        <Form.Group as={Row} controlId="name">
          <Form.Label column sm={2}>
            Name :
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="email">
          <Form.Label column sm={2}>
            Email :
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="address">
          <Form.Label column sm={2}>
            Address :
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="address"
              placeholder="Your Address"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="mobile">
          <Form.Label column sm={2}>
            Contact Number :
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="mobile"
              placeholder="Your Contact Number"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <button
              className="checkoutBtn"
              type="button"
              onClick={() => handleSubmit()}
            >
              Next
            </button>
            {submitted && <>{history.push('/payment')}</>}
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default PersonalDetails
