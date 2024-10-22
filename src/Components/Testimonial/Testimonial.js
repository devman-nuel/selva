import React from 'react';
import './Testimonial.css';

function Testimonial() {
  return (
    <div className='testimonial'>
      <div className='test-head'>
        <h2 data-animation="header">What Our Users Are Saying</h2>
        <p>Read testimonials from satisfied users who share their experiences and success stories with our services.</p>
      </div>

      
      <div className='test-con'>
        {/* Original Testimonials */}
        <div className="test-card">
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729419396/3d-illustration-with-online-avatar_23-2151303080_zywh39.jpg" alt="User 1" />
          <p>"This app changed how I manage my time and increased my productivity significantly."</p>
          <span>- John Doe</span>
        </div>
        <div className="test-card">
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729419401/27470334_7309681_iaradb.jpg" alt="User 2" />
          <p>"I've never missed an appointment since I started using this app for my tasks."</p>
          <span>- Jane Smith</span>
        </div>
        <div className="test-card">
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729419396/3d-render-avatar-character_23-2150611704_wpxdko.jpg" alt="User 3" />
          <p>"Highly recommend this to anyone with a busy schedule who needs better organization."</p>
          <span>- Alex Johnson</span>
        </div>
        <div className="test-card">
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729419396/3d-render-avatar-character_23-2150611707_vhhme5.avif" alt="User 4" />
          <p>"A fantastic tool for keeping everything on track. It has helped me stay focused and efficient."</p>
          <span>- Emily Davis</span>
        </div>
        <div className="test-card">
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729419396/3d-rendering-hair-style-avatar-design_23-2151869127_dphdpg.jpg" alt="User 5" />
          <p>"The interface is user-friendly, and I love the features that make time management so easy."</p>
          <span>- Michael Brown</span>
        </div>
        <div className="test-card">
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729419396/3d-render-avatar-character_23-2150611731_qubwy3.avif" alt="User 6" />
          <p>"I was skeptical at first, but this app has really improved my daily routines and workflows."</p>
          <span>- Sarah Wilson</span>
        </div>
        <div className="test-card">
          <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729419396/3d-illustration-person-with-glasses_23-2149436190_n4myso.avif" alt="User 7" />
          <p>"Incredible service! This tool has transformed how I plan and organize my personal and work life."</p>
          <span>- David Lee</span>
        </div>

        {/* Duplicated Testimonials for seamless scroll */}
        <div className="test-card">
          <img src="https://via.placeholder.com/80" alt="User 1" />
          <p>"This app changed how I manage my time and increased my productivity significantly."</p>
          <span>- John Doe</span>
        </div>
        <div className="test-card">
          <img src="https://via.placeholder.com/80" alt="User 2" />
          <p>"I've never missed an appointment since I started using this app for my tasks."</p>
          <span>- Jane Smith</span>
        </div>
        <div className="test-card">
          <img src="https://via.placeholder.com/80" alt="User 3" />
          <p>"Highly recommend this to anyone with a busy schedule who needs better organization."</p>
          <span>- Alex Johnson</span>
        </div>
      </div>

    </div>
  );
}

export default Testimonial;
