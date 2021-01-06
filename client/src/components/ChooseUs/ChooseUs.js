import React from 'react'
import './ChooseUs.css'
import { Card } from 'react-bootstrap'
import c1 from '../../images/c1.png'
import c2 from '../../images/c2.png'
import c3 from '../../images/c3.png'
const ChooseUs = () => {
  const demos = [
    {
      img: c1,
      title: 'FREE FITNESS TRAINING',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae, quam harum dignissimos error velit.',
    },
    {
      img: c2,
      title: 'TONS OF CARDIO & STRENGTH',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae, quam harum dignissimos error velit.',
    },
    {
      img: c3,
      title: 'NO COMMITMENT MEMBERSHIPS',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae, quam harum dignissimos error velit.',
    },
  ]

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <h1 style={{ textAlign: 'center' }}>
        <span style={{ color: 'rgb(255, 238, 0)' }}>WHY</span>
        Choose US
      </h1>
      <div className="row d-flex">
        {demos.map((demo) => (
          <div className="col-md-4 align-items-center">
            <Card
              className="card"
              style={{ width: '18rem', marginBottom: '10px' }}
            >
              <Card.Img
                variant="top"
                src={demo.img}
                style={{
                  height: '60px',
                  width: '60px',
                  paddingLeft: '10px',
                  marginLeft: '110px',
                  marginTop: '5px',
                }}
                fluid
              />
              <Card.Body>
                <Card.Title>{demo.title}</Card.Title>
                <Card.Text>
                  <small>{demo.detail}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChooseUs
