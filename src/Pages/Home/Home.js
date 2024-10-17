import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Features from '../../Components/Features/Features'
import Faq from '../../Components/Faq/Faq'
import Cta from '../../Components/Cta/Cta'
import Bento from '../../Components/Bento/Bento'
import Pricing from '../../Components/Pricing/Pricing'
import Testimonial from '../../Components/Testimonial/Testimonial'

function Home() {
  return (
    <div>
       <Hero />
       <Features />
       <Bento />
       <Pricing />
       <Faq />
       <Testimonial />
       <Cta />
      </div>
  )
}

export default Home