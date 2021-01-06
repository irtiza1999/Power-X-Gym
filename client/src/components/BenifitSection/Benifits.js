import React from 'react'
import { Card } from 'react-bootstrap'
import benifit1 from '../../images/benifit1.jpg'
import benifit2 from '../../images/benifit2.jpg'
import benifit3 from '../../images/benifit3.jpg'
import watch from '../../images/watch.png'
import dumble from '../../images/dumble.png'
import jar from '../../images/jar.png'

const Benifits = () => {
  const benifits = [
    {
      img: benifit1,
      limg: watch,
      title: 'PROGRESSION',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo a perspiciatis laudantium quod voluptatibus fugiat voluptate voluptatum. Aspernatur, odit neque.',
    },
    {
      img: benifit2,
      limg: dumble,
      title: 'WORKOUT',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo a perspiciatis laudantium quod voluptatibus fugiat voluptate voluptatum. Aspernatur, odit neque.',
    },
    {
      img: benifit3,
      limg: jar,
      title: 'NUTRITION',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo a perspiciatis laudantium quod voluptatibus fugiat voluptate voluptatum. Aspernatur, odit neque.',
    },
  ]

  return (
    <div className="row" style={{ margin: '20px 0px' }}>
      {benifits.map((benifit) => (
        <div className="col-md-4 container">
          <Card className="text-white" style={{ marginBottom: '10px' }}>
            <Card.Img
              fluid
              thumbnail
              style={{ height: '400px' }}
              src={benifit.img}
              alt="Card image"
            />
            <Card.ImgOverlay style={{ textAlign: 'center', padding: '100px' }}>
              <img src={benifit.limg} alt="icon" fluid />
              <br />
              <Card.Title
                style={{ color: 'rgb(255, 238, 0)', marginTop: '6px' }}
              >
                {benifit.title}
              </Card.Title>
              <Card.Text>
                <small>{benifit.detail}</small>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Benifits
