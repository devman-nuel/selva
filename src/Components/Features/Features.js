import React from 'react'
import './Features.css';

function Features() {
  return (
    <div className='features'>
      <div className='feature-head'>
        <h2>Seamlessly Fixing Your Scheduling Problems</h2>
        <p>Manage your events and appointments, set reminders ensuring your schedule stays organized and stress-free</p>
      </div>

      <div className='feat-con'>
        <div className='feat-left'>
          <div className='auto'>
          <p className='automat'>Automated Reminders</p>
          <span className='automat-text'>Never forget an important meeting or event again. Our app sends automated reminders via email or push notifications</span>
          </div>

          <div className='meet-toggle'>
            <div className='toggle-name'>
              <div className='text-meet'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729147417/icons8-zoom-94_dh1of8.png' alt=''></img>
                <div className='slack'>
                  <p>Shareholder Forum</p>
                  <span>12.50pm</span> 
                </div>
              </div>

              <div className='tog-btn'>
                 <div></div>
              </div>
            </div>
            
            <div className='toggle-name'>
              <div className='text-meet'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729147407/icons8-slack-96_faa08z.png' alt=''></img>
                <div className='slack'>
                  <p>Slack Stand-up</p>
                  <span>3.00pm</span> 
                </div>
              </div>

              <div className='tog-btn'>
                 <div></div>
              </div>
            </div>
            
            <div className='toggle-name'>
              <div className='text-meet'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729147398/icons8-google-calendar-128_rbb06k.png' alt=''></img>
                <div className='slack'>
                  <p>Daniel’s Dinner Date</p>
                  <span>12.50pm</span> 
                </div>
              </div>

              <div className='tog-btn'>
                 <div></div>
              </div>
            </div>
            
          </div>

        </div>

        <div className='feat-left'>
          <div className='auto'>
            <p className='automat'>Integration with Popular Platforms</p>
            <span className='automat-text'>Effortlessly connect with tools you already use, including Google Calendar, Outlook, Zoom, and Slack. Synchronize events and avoid duplicate entries.</span>
          </div>
          
          <div className='meet-orbit'>
            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729148262/Mask_group-transformed_arvorc.png' alt=''></img>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Features