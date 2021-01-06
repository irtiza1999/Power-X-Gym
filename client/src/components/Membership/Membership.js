import React from 'react'
import { Link } from 'react-router-dom'

const Membership = () => {
  const reset = () => {
    localStorage.removeItem('__paypal_storage__')
  }

  if (localStorage.getItem('__paypal_storage__')) {
    var id = JSON.parse(localStorage.getItem('__paypal_storage__')).id
  }

  console.log(id)
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      {id ? (
        <>
          <h1 style={{ color: 'green' }}>
            Your payment was successfully received
          </h1>
          <h6>Your Payment id: {id}</h6>
          <p>
            Please come at your{' '}
            <Link onClick={() => reset()} to="/allclasses">
              <span
                style={{
                  color: 'orange',
                  textDecoration: 'none',
                  listDecoration: 'none',
                }}
              >
                alloted time.
              </span>
            </Link>
          </p>
        </>
      ) : (
        <>
          <h1 style={{ color: 'red' }}>Please contact us!!</h1>
          <p>We did not received any payment details.</p>
          <p>
            <Link onClick={() => reset()} to="/">
              <span
                style={{
                  color: 'red',
                  textDecoration: 'none',
                  listDecoration: 'none',
                }}
              >
                Go back
              </span>
            </Link>
          </p>
        </>
      )}
    </div>
  )
}

export default Membership
