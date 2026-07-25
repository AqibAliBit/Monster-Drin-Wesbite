import React from 'react'
import "./Footer.css";
import { RiArrowRightLine } from "@remixicon/react";
const Footer = () => {
  return (
   
    <footer className="footer">
      <div className="footer-top">

        {/* Left */}

        <div className="newsletter">
          <h2>Subscribe To Our Newsletter.</h2>

          <button>
            Subscribe
            <span>
            <RiArrowRightLine />
            </span>
          </button>
        </div>

        {/* Right */}

        <div className="footer-links">

          <div>
            <h3>Quick Links.</h3>

            <ul>
              <li>Home <i className="ri-arrow-right-up-line"></i></li>
              <li>About Us <i className="ri-arrow-right-up-line"></i></li>
              <li>Products <i className="ri-arrow-right-up-line"></i></li>
              <li>Gallery <i className="ri-arrow-right-up-line"></i></li>
              <li>Contact <i className="ri-arrow-right-up-line"></i></li>
            </ul>
          </div>

          <div>
            <h3>Connect.</h3>

            <ul>
              <li><i className="ri-instagram-line"></i> Instagram</li>
              <li><i className="ri-twitter-x-line"></i> Twitter</li>
              <li><i className="ri-facebook-circle-line"></i> Facebook</li>
              <li><i className="ri-youtube-line"></i> YouTube</li>
            </ul>
          </div>

        </div>

      </div>

      <div className="monster-text">
        MONSTER
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© Reserved Monster Energy 2026 | Privacy Policy</p>
      </div>
    </footer>
    
  )
}

export default Footer