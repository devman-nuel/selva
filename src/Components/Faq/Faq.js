import React, { useState } from 'react';
import './Faq.css';

function Faq() {
  // Updated FAQs list with 6 questions
  const faqs = [
    {
      question: 'How do I schedule an event?',
      answer: 'Easily schedule your events with a simple, intuitive interface. Set reminders, customize event details, and invite others with just a few clicks.'
    },
    {
      question: 'Can the system handle scheduling conflicts?',
      answer: 'Let our smart algorithm handle scheduling conflicts, rescheduling, and sending automatic reminders to keep you on track.'
    },
    {
      question: 'Is the calendar accessible on different devices?',
      answer: 'Seamlessly access and manage your calendar on any device. Whether on desktop, mobile, or tablet, your events are always in sync.'
    },
    {
      question: 'Can I view all events in one place?',
      answer: 'View all your events in a sleek, organized interface that helps you easily navigate through your schedule.'
    },
    {
      question: 'How do I set reminders for my events?',
      answer: 'You can set reminders for each event during creation, ensuring you get timely notifications before your events begin.'
    },
    {
      question: 'Can I invite others to my events?',
      answer: 'Yes, you can easily invite others by adding their email or sharing event links directly through the interface.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Toggles active FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Only one FAQ remains open at a time
  };

  return (
    <div className='faq'>
      <div className='feature-head'>
        <h2>Frequently Asked Questions</h2>
        <p>We have answers to common queries, helping you quickly resolve any concerns or uncertainties</p>
      </div>

      <div className='faq-con'>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
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
