import React from 'react'
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
       <div className="cta-container">
        <p className="no-credit">Leading Scheduling Tool.</p>
        <h2 className="hero-heading">Effortless Event Planning Made Simple</h2>
        <p className="hero-description">
          Say goodbye to juggling multiple platforms and manual coordination. Our calendar app streamlines your scheduling, ensuring you never miss an important date again.
        </p>
        <button className="cta-button">Get Started Free</button>
      </div>
      
     
       <div className="feature-section">
          <div className='calendar-box'>
          
          </div>
        
        {/* Bottom calendar overview section */}
        <div className="calendar-overview">
           <div className="icon">
              {/* Calendar icon, can be SVG or FontAwesome */}
              <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729059275/icons8-calendar-100_saosmb.png' alt='calendar'></img>
            </div>

           <div className="schedule-card">
            <p>Clean and Organized Calendar View</p>
            <span>
              View all your events in a sleek, organized interface that helps you easily navigate through your schedule.
            </span>   
          </div>
        </div>
      </div>
      </div>
  </div>
  )
}

export default Hero