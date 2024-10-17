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
             <div className='calendar-head'>
               <div className='days'>
                 <div className='day-box'>
                   <p>S</p>
                   <span>11</span>
                 </div>
                 <div className='day-box'>
                   <p>M</p>
                   <span>12</span>
                 </div>
                 <div className='day-box'>
                   <p>T</p>
                   <span>13</span>
                 </div>
                 <div className='day-box'>
                   <p>W</p>
                   <span>14</span>
                 </div>
                 <div className='day-box'>
                   <p>T</p>
                   <span>15</span>
                 </div>
                 <div className='day-box'>
                   <p>F</p>
                   <span>16</span>
                 </div>
                 <div className='day-box'>
                   <p>S</p>
                   <span>17</span>
                 </div>

               </div>
             </div>

             <div className='meetings'>
               <div className='meet-bar'>
                    
                     <div className='meet-edit'>
                        <div className='meet-img'>
                          <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729059058/icons8-google-meet-96_ou7zsx.png' alt='meet-icon'></img>
                        </div>
                       <div>
                        <p>Google Meet</p>
                       <span>12.30pm</span>
                      </div>
                     </div>

                    <div className='edit'>
                    <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729059275/icons8-edit-50_v6f0go.png' alt='edit'></img>
                    </div>
               </div>

               <div className='meet-bar'>
                    
                     <div className='meet-edit'>
                        <div className='meet-img'>
                          <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729059100/icons8-youtube-96_qbevak.png'  alt='meet-icon'></img>
                        </div>
                       <div>
                        <p>Live stream</p>
                       <span>5.00pm</span>
                      </div>
                     </div>

                    <div className='edit'>
                      <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729059275/icons8-edit-50_v6f0go.png' alt='edit'></img>
                    </div>
               </div>
             </div>

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