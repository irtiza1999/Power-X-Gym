import React, { useEffect, useState } from 'react'
import './AllClasses.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'

const AllClasses = ({ training }) => {
  return (
    <>
      <div className="row d-flex justify-content-center classHead">
        {training.map((class1) => (
          <div>
            <div className="col-md-4">
              <Card
                className=" text-white"
                style={{ height: '300px', width: '300px', margin: '10px' }}
              >
                <Card.Img
                  fluid
                  thumbnail
                  src={class1.img}
                  alt="Card image"
                  style={{ height: '300px', width: '300px' }}
                />
                <Card.ImgOverlay style={{ padding: '100px' }}>
                  <br />
                  <Card.Text>
                    <Link to={`/detail/${class1.key}`}>
                      <div className="classButton" id="classButton-7">
                        <div id="class-dub-arrow">
                          VIEW DETAILS
                          <img
                            style={{ paddingLeft: '5px' }}
                            className="cardHoverImg"
                            src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
                            alt="Img"
                          />
                        </div>
                        {class1.title} <i class="fas fa-arrow-right"></i>
                      </div>
                    </Link>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AllClasses
