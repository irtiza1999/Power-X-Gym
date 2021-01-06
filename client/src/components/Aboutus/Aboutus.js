import React from 'react'
import aboutImg from '../../images/about.jpg'

const Aboutus = () => {
  return (
    <div className="container row d-flex justify-content-center">
      <div className="col-md-1"></div>
      <div className="col-md-6">
        <img
          src={aboutImg}
          alt="Img"
          fluid
          style={{ height: '400px', width: '400px' }}
        />
      </div>
      <div className="col-md-5">
        <h1 style={{ color: 'gray' }}>ABOUT US</h1>
        <h3 style={{ color: 'rgba(250, 238, 0, 3)' }}>We ARE HERE TO DREAM</h3>
        <h3>OUR TEAM IS HERE TO SERVE YOU</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          fugiat expedita nihil. Saepe nostrum eveniet ea, exercitationem
          molestias vero corrupti amet. Deleniti eos facilis reprehenderit
          voluptatum. Magni, aut. Similique, consequatur?
        </p>
      </div>
    </div>
  )
}

export default Aboutus
