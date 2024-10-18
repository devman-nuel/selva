import React from 'react';
import './Bento.css';

function Bento() {
  return (
    <div className='bento'>
      <div className='feature-head'>
        <h2>Quick glance at what we offer</h2>
        <p>Explore our comprehensive services at a glance, designed to meet your needs efficiently and effectively.</p>
      </div>

      <div className='offer-con'>
          <div className='offer-box'>
            <div className='offer-visuals'></div>
            <div className='offer-text'>
              <p>Seamless Scheduling</p>
              <span>Effortlessly find common availability and schedule meetings seamlessly.</span>
            </div>
          </div>

          <div className='offer-box'>
            <div className='offer-visuals'></div>
            <div className='offer-text'>
              <p>Automated Reminders</p>
              <span>Stay on top of your commitments with automated reminders and notifications.</span>
            </div>
          </div>

          <div className='offer-box'>
            <div className='offer-visuals'></div>
            <div className='offer-text'>
              <p>Event Management</p>
              <span>Manage your events with ease, from planning to execution, all in one place.</span>
            </div>
          </div>
          
          <div className='offer-box'>
            <div className='offer-visuals'></div>
            <div className='offer-text'>
              <p>Team Collaboration</p>
              <span>Work together with your team to achieve more with shared calendars and resources.</span>
            </div>
          </div>
          
          <div className='offer-box'>
            <div className='offer-visuals'></div>
            <div className='offer-text'>
              <p>Analytics and Insights</p>
              <span>Gain insights into your schedule and optimize your time management.</span>
            </div>
          </div>

          <div className='offer-box'>
            <div className='offer-visuals'></div>
            <div className='offer-text'>
              <p>Analytics and Insights</p>
              <span>Gain insights into your schedule and optimize your time management.</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Bento;
