import React from 'react'
import { Nav } from 'react-bootstrap'
import './CheckOutSteps.css'

const CheckOutSteps = (step1, step2, step3) => {
  return (
    <>
      <ol className="arrows">
        {step1 ? <li>Home</li> : <li className="offline">Home</li>}
        {step2 ? <li>Home</li> : <li className="offline">Home</li>}
        {step3 ? <li>Home</li> : <li className="offline">Home</li>}
      </ol>
    </>
  )
}

export default CheckOutSteps
