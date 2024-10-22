import React from 'react'
import './Cta.css';

function Cta() {
  return (
    <div className='cta'>
        <div className='cta-con'>
          <h2 data-animation="header">Ready to simplify your event planning?</h2>
          <p>Experience the difference with our powerful calendar app—no credit card required!</p>
          <button>Get Started Today</button>
        </div>

        <div>
          <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729406089/global-globalization-world-map-environmental-concservation-concept_nfulks.png' alt='map'></img>
        </div>     
    </div>
  )
}

export default Cta