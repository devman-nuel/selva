import React from 'react';
import './Bento.css';

function Bento() {
  return (
    <div className='bento'>
      <div className='feature-head'>
        <h2 data-animation="header">Quick glance at what we offer</h2>
        <p>Explore our comprehensive services at a glance, designed to meet your needs efficiently and effectively.</p>
      </div>

      <div className='offer-con'>
          <div className='offer-box'>
            <div className='offer-visuals'>
               <div className='seamless-sche'>
                 <div className='delete'>
                  <p>21st October, 2024</p>
                  <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729584570/icons8-delete-64_fpmygz.png' alt=''></img>
                 </div>

                <div className='label'>
                  <p>Frank's Graduation</p>
                  <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729584389/icons8-edit-64_wjljy0.png' alt=''></img>
                </div>

                <div className='laps'>
                  <div className='lap-box'>
                    <p>From</p>
                    <span>9:00AM</span>
                  </div>

                  <div className='lap-box'>
                    <p>To</p>
                    <span>9:00PM</span>
                  </div>
                </div>

                <div className='laps'>
                  <div className='lap-box'>
                    <p>Reminder</p>
                    <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729584389/icons8-toggle-48_dujxku.png' alt=''></img>
                  </div>

                  <div className='lap-box'>
                    <p>Sync</p>
                    <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729584389/icons8-sync-50_duepks.png' alt=''></img>
                  </div>
                </div>

               </div>
            </div>
            <div className='offer-text'>
              <p>Seamless Scheduling</p>
              <span>Effortlessly schedule meetings without the back-and-forth.</span>
            </div>
          </div>

          <div className='offer-box'>
            <div className='offer-visuals'>
               <div className='time-zone'>
                 <div className='zone'>
                   <div className='zone-box'>
                    <div className='globe'>
                      <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729586447/icons8-globe-50_lbaa44.png' alt=''></img>
                    </div>

                    <div className='zone-text'>
                      <p>Time Zone</p>
                      <span>CET (Central European Time)</span>
                    </div>
                   </div>

                   <div className='utc'>
                    <p>UTC+01:00</p>
                    <span>10:00 AM</span>

                   </div>
                 </div>
                 <div className='zone'>
                   <div className='zone-box'>
                    <div className='globe'>
                      <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729586447/icons8-globe-50_lbaa44.png' alt=''></img>
                    </div>

                    <div className='zone-text'>
                      <p>Time Zone</p>
                      <span>GMT (Greenwich Mean Time)</span>
                    </div>
                   </div>

                   <div className='utc'>
                    <p>UTC±00:00</p>
                    <span>10:00 AM</span>

                   </div>
                 </div>
                 <div className='zone'>
                   <div className='zone-box'>
                    <div className='globe'>
                      <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729586447/icons8-globe-50_lbaa44.png' alt=''></img>
                    </div>

                    <div className='zone-text'>
                      <p>Time Zone</p>
                      <span>CST (Central Standard Time)</span>
                    </div>
                   </div>

                   <div className='utc'>
                    <p>UTC+01:00</p>
                    <span>10:00 AM</span>

                   </div>
                 </div>


               </div>
            </div>
            <div className='offer-text'>
              <p>Time Zone Management</p>
              <span>Plan events across different time zones without the hassle.</span>
            </div>
          </div>

          <div className='offer-box'>
            <div className='offer-visuals'>
              <div className='custom'>
                <div className='custom-mode'>
                  <p>21st October 2024</p>

                  <button>
                    <p>Weekly</p>
                    <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729584389/icons8-filter-64_h1lgmd.png' alt=''></img>
                  </button>
                </div>

                <div className='custom-date'>
                  <button className='inactive'>18</button>
                  <button  className='inactive'>19</button>
                  <button  className='inactive'>20</button>
                  <button className='active-date'>21</button>
                  <button  className='inactive'>22</button>
                  <button  className='inactive'>23</button>
                  <button  className='inactive'>24</button>
                </div>

              </div>
            </div>
            <div className='offer-text'>
              <p>Customizable Views</p>
              <span>Choose the view that works best for you—daily, weekly, or monthly.</span>
            </div>
          </div>
          
          <div className='offer-box'>
            <div className='offer-visuals'>
              <div className='custom'>
                <div className='smart'>
                  <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729584389/icons8-warning-48_upv5dd.png' alt=''></img>
                   <div className='smart-text'>
                    <p>Schedule Conflict Detected</p>
                    <span>We have suggested available times in the next 6 hours for you</span>
                   </div>
                </div>
               
                <div className='sugg'>
                  <div className='sugg-long'></div>
                  <div className='sugg-short'></div>
                </div>


                <div className='smart-actions'>
                  <button>Reassign</button>
                  <button>Move</button>
                  <button>Merge</button>
                </div>

              </div>
            </div>
            <div className='offer-text'>
              <p>Smart Suggestion</p>
              <span>Get smart suggestions for meeting times based on your existing schedules.</span>
            </div>
          </div>
          
          <div className='offer-box'>
            <div className='offer-visuals'></div>
            <div className='offer-text'>
              <p>Event Templates</p>
              <span>We have suggested available times in the next 6 hours for you</span>
            </div>
          </div>

          <div className='offer-box'>
            <div className='offer-visuals'>
              <div className='color-scheme'>
                <div className='color-box'>
                  <span className='palette' id='green'></span>

                  <div className='span'>
                    <div className='long-span'></div>
                    <div className='short-span'></div>
                  </div>
                </div>

                <div className='color-box'>
                  <span className='palette' id='pink'></span>

                  <div className='span'>
                    <div className='long-span'></div>
                    <div className='short-span'></div>
                  </div>
                </div>

                <div className='color-box'>
                  <span className='palette' id='blue'></span>

                  <div className='span'>
                    <div className='long-span'></div>
                    <div className='short-span'></div>
                  </div>
                </div>

              </div>
            </div>
            <div className='offer-text'>
              <p>Color-coded Events</p>
              <span>Organize your life at a glance by color-coding events. Easily distinguish between events for better clarity.</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Bento;
