import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-con'>
        <div className='footer-text'>
          <div className='footer-logo'>
            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1728971234/Frame_1707479660_dyidcz.jpg' alt='logo'></img>
            <p>Devlender</p>
          </div>

          <span>Manage your events and appointments, set reminders ensuring your schedule stays organized and stress-free.</span>

          <div className='footer-image'>
            <img alt=''></img>
            <img alt=''></img>
            <img alt=''></img>
            <img alt=''></img>
          </div>
        </div>

       <div className='footer-box'>
         <div className='footer-link'>
          <p>About Us</p>
          <span>Contact Us </span>
          <span>Blog</span>
          <span>Awards &</span>
          <span>Customer Stories</span>
         </div>

         <div className='footer-link'>
          <p>About Us</p>
          <span>Contact Us </span>
          <span>Blog</span>
          <span>Awards &</span>
          <span>Customer Stories</span>
         </div>


         <div className='footer-link'>
          <p>About Us</p>
          <span>Contact Us </span>
          <span>Blog</span>
          <span>Awards &</span>
          <span>Customer Stories</span>
        </div>

        <div className='footer-link'>
          <p>About Us</p>
          <span>Contact Us </span>
          <span>Blog</span>
          <span>Awards &</span>
          <span>Customer Stories</span>
        </div>

       </div>
      </div>

      <div className='sub-footer'>
         <span>©2024 Devlender . All right reserved </span>

         <div className='terms'>
           <p>Terms and condition</p>
           <p>Privacy Policy</p>
         </div>
      </div>
    </div>
  )
}

export default Footer