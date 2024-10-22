import React, { useRef, useEffect } from 'react';
import './Hero.css';
import { gsap } from 'gsap';

function Hero() {
  // Ref for the feature section
  const featureSectionRef = useRef(null);

  useEffect(() => {
    // Assign the ref to a local variable to avoid warnings
    const featureSection = featureSectionRef.current;

    // IntersectionObserver setup to observe when the feature section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate feature section into view using GSAP
          gsap.to(entry.target, {
            opacity: 1,
            y: 0, // Slide in from bottom to top
            duration: 1.2,
            ease: 'power3.out',
          });
          // Stop observing after the animation is triggered
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Trigger animation when 30% of the section is visible
      }
    );

    // Start observing the feature section
    if (featureSection) {
      observer.observe(featureSection);
    }

    // Clean up observer when component is unmounted
    return () => {
      if (featureSection) {
        observer.unobserve(featureSection);
      }
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="cta-container">
          <p className="no-credit">Leading Scheduling Tool.</p>
          <h2 className="hero-heading" data-animation="paragraph">
            Effortless Event Planning Made Simple
          </h2>
          <p className="hero-description">
            Say goodbye to juggling multiple platforms and manual coordination. Our calendar app streamlines your scheduling, ensuring you never miss an important date again.
          </p>
          <button className="cta-button">Get Started Free</button>
        </div>

        {/* Feature Section with animation */}
        <div className="feature-section" ref={featureSectionRef} style={{ opacity: 0, transform: 'translateY(50px)' }}>
          <div className="calendar-box">
            <div className="calbox-text" id="color">
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729438828/icons8-color-48_l2jpps.png" alt="calbox" />
              <span>Color-Coded Events</span>
            </div>
            <div className="calbox-text" id="temp">
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729439204/icons8-files-58_1_djboki.png" alt="calbox" />
              <span>Event Templates</span>
            </div>
            <div className="calbox-text" id="shared">
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729438828/icons8-share-48_uxjwaa.png" alt="calbox" />
              <span>Shared Calendars</span>
            </div>
          </div>

          {/* Bottom calendar overview section */}
          <div className="calendar-overview">
            <div className="icon">
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1729059275/icons8-calendar-100_saosmb.png" alt="calendar" />
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
  );
}

export default Hero;
