import React, { useState, useEffect, useRef } from 'react';
import './Faq.css';
import { gsap } from 'gsap';
import { IO } from '../../Animations/Observe'; // Your custom IntersectionObserver function

function Faq() {
  const faqs = [
    {
      question: 'How do I schedule an event?',
      answer: 'Easily schedule your events with a simple, intuitive interface...'
    },
    {
      question: 'Can the system handle scheduling conflicts?',
      answer: 'Let our smart algorithm handle scheduling conflicts...'
    },
    {
      question: 'Is the calendar accessible on different devices?',
      answer: 'Seamlessly access and manage your calendar on any device...'
    },
    {
      question: 'Can I view all events in one place?',
      answer: 'View all your events in a sleek, organized interface...'
    },
    {
      question: 'How do I set reminders for my events?',
      answer: 'You can set reminders for each event during creation...'
    },
    {
      question: 'Can I invite others to my events?',
      answer: 'Yes, you can easily invite others by adding their email...'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Define animation function for FAQ items
    const animateFAQItems = (faqItems) => {
      faqItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 }, // Initial state
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.2,
          }
        );
      });
    };

    // Observe each FAQ item and animate when it enters the viewport
    faqRefs.current.forEach((faqRef, index) => {
      IO(faqRef, { threshold: 0.5 }).then(() => {
        animateFAQItems([faqRef]); // Animate one FAQ item at a time
      });
    });
  }, []);

  return (
    <div className='faq'>
      <div className='feature-head'>
        <h2>Frequently Asked Questions</h2>
        <p>We have answers to common queries, helping you resolve uncertainties.</p>
      </div>

      <div className='faq-con'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            ref={(el) => (faqRefs.current[index] = el)} // Set ref for each FAQ item
          >
            <div className='faq-question' onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div
              className='faq-answer'
              style={{
                maxHeight: activeIndex === index ? '200px' : '0', // Smooth transition
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
