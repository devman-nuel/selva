import React from 'react';
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

          <span>Devlender helps you stay on top of your schedule, whether it's personal or business, we've got you covered.</span>

          <div className='footer-image'>
            <img alt=''></img>
            <img alt=''></img>
            <img alt=''></img>
            <img alt=''></img>
          </div>
        </div>

        <div className='footer-box'>
          <div className='footer-link'>
            <p>Company</p>
            <span>About Us</span>
            <span>Careers</span>
            <span>Press</span>
            <span>Partners</span>
          </div>

          <div className='footer-link'>
            <p>Resources</p>
            <span>Help Center</span>
            <span>Documentation</span>
            <span>API Reference</span>
            <span>System Status</span>
          </div>

          <div className='footer-link'>
            <p>Product</p>
            <span>Features</span>
            <span>Pricing</span>
            <span>Integrations</span>
            <span>Security</span>
          </div>

          <div className='footer-link'>
            <p>Support</p>
            <span>Contact Us</span>
            <span>Community Forum</span>
            <span>Customer Stories</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      <div className='sub-footer'>
        <span>©2024 Devlender. All rights reserved.</span>

        <div className='terms'>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
