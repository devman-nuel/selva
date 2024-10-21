import React from 'react'
import './Pricing.css';

function Pricing() {
  return (
    <div className='pricing'>
     <div className='feature-head'>
        <h2>Select Subscription Plan</h2>
        <p>Choose the plan that best suits your needs, offering flexible options for all levels of service and support.</p>
      </div>

      <div className='pricing-con'>
            <div className='pricing-box'>
                <div className='pricing-name'>
                    <span>Basic</span>
                    <h1>Free <strong>/month</strong></h1>
                    <p></p>
                </div>

                <div className='pricing-features'>

                    <div className='pricing-list'>
                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>Basic customization options</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>No - priority customer support</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>Limited to 1 calendar</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>Real-time syncing across devices</p>
                        </div>
                    </div>

                    <button>Get Started</button>
                </div>
            </div>

            <div className='pricing-mainbox'>
                <div className='pricing-name'>
                    <span>Advanced</span>
                    <h1>$1.99 <strong>/month</strong></h1>
                </div>

                <div className='pricing-features'>

                    <div className='pricing-list'>
                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>Advanced customization options</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>Dedicated priority customer support</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p> Unlimited calendarss</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>Advanced integrations</p>
                        </div>
                    </div>

                    <button>Get Started</button>
                </div>
            </div>

            <div className='pricing-box'>
                <div className='pricing-name'>
                    <span>Pro</span>
                    <h1>$3.99 <strong>/month</strong></h1>
                </div>

                <div className='pricing-features'>

                    <div className='pricing-list'>
                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>All features of the advanced plan</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>Custom solutions</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>Content management features</p>
                        </div>

                        <div className='pricing-detail'>
                            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729371839/icons8-done-24_lqv2in.png' alt=''></img>
                            <p>Enterprise-grade security and compliance</p>
                        </div>
                    </div>

                    <button>Get Started</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Pricing