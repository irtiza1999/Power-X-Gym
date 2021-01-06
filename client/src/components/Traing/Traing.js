import React from 'react'
import './Training.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import train1 from '../../images/train1.png'
import train2 from '../../images/train2.jpg'

const Traing = () => {
  return (
    <div style={{ marginTop: '20px' }} className="container">
      <h1 style={{ textAlign: 'center' }}>
        TRAINING <span style={{ color: 'rgba(240, 238, 0, 3)' }}>PROGRAMS</span>
      </h1>
      <div className="row" style={{ margin: '10px' }}>
        <div className="col-md-6">
          <Card
            className=" text-white"
            style={{ height: '400px', width: '500px', margin: '10px' }}
          >
            <Card.Img fluid thumbnail src={train1} alt="Card image" />
            <Card.ImgOverlay style={{ padding: '100px' }}>
              <br />
              <Card.Text>
                <Link to="/allclasses">
                  <div className="button" id="button-7">
                    <div id="dub-arrow">VIEW DETAILS</div>
                    YOGA TRAINING SESSION <i class="fas fa-arrow-right"></i>
                  </div>
                </Link>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-md-6">
          <Card
            className=" text-white "
            style={{ height: '400px', width: '500px', margin: '10px' }}
          >
            <Card.Img
              fluid
              thumbnail
              style={{ height: '400px' }}
              src={train2}
              alt="Card image"
            />
            <Card.ImgOverlay style={{ padding: '100px' }}>
              <br />
              <Card.Text>
                <Link to="/allclasses">
                  <div className="button" id="button-7">
                    <div id="dub-arrow">VIEW DETAILS</div>
                    CARDIO TRAINING SESSION <i class="fas fa-arrow-right"></i>
                  </div>
                </Link>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Traing
