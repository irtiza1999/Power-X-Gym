import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import './Header.css'
import logo from '../../images/logo.png'

const Header = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="bg-img col-md-12 col-sm-12">
        <span className="spancls">
          <div className="topNav">
            <Navbar>
              <Navbar.Brand>
                <Link to="/">
                  <img src={logo} alt="Logo" style={{ width: '70px' }} />
                </Link>
              </Navbar.Brand>
              <Navbar.Collapse>
                <Nav className="ml-auto mr-auto">
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/">Services</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/allclasses">Our classes</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/">About us</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/pricing">Pricing</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/">Contact us</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          {!props.name ? (
            <div className="row">
              <div
                className="col-md-6"
                style={{ color: 'white', padding: '150px' }}
              >
                <h1>
                  The BEST FITNESS <br /> STUDIO IN TOWN
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique cumque, officia repellendus commodi reprehenderit
                  reiciendis laborum quaerat doloribus aut natus earum tempore
                  libero dignissimos cum corrupti pariatur nobis non maxime.
                </p>
                <Link to="/allclasses">
                  <button className="btnMain">JOIN US</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="row align-items-center" style={{ height: '300px' }}>
              <div
                className="col-md-12"
                style={{
                  color: '#ffc800',
                  marginTop: '150px',
                }}
              >
                <h1 style={{ textAlign: 'center' }}>{props.name}</h1>
              </div>
            </div>
          )}
        </span>
      </div>
    </div>
  )
}

export default Header
