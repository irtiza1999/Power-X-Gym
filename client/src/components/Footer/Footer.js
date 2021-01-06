import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'

const Footer = () => {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row d-flex justify-content-around">
            <div className="col-md-3 col">
              <div className="footer-pad">
                <img src={Logo} alt="logo" />
              </div>
            </div>
            <div className="col-md-3  footer-pad">
              <h4>Need Help?</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Help Center</Link>
                </li>
                <li>
                  <Link to="/">Email Support</Link>
                </li>
                <li>
                  <Link to="/">Live Chat</Link>
                </li>
                <li>
                  <Link to="/">Gift Certificates</Link>
                </li>
                <li>
                  <Link to="/">Send Us Feedback</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3  footer-pad">
              <h4>Digital Resources</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Articles</Link>
                </li>
                <li>
                  <Link to="/">E-books</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 ">
              <h4>Follow Us</h4>
              <ul className="social-network social-circle">
                <li>
                  <Link href="" className="icoFacebook" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="icoLinkedin" title="Linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="col-md-12 copy">
              <p className="text-center">
                &copy; Copyright {new Date().getFullYear()} - Power X All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
