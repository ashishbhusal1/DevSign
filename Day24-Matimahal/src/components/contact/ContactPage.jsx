import React from 'react'
import InternalHero from '../reusable/InternalHero'
import Faq from '../home/Faq'
import Reviews from '../home/Reviews'
import ContactContent from './ContactContent'
import { InternalHeroContent3 } from '../storage/HomeDb'

function ContactPage() {
  return (
   <>
   <InternalHero css={InternalHeroContent3[0].class} title={InternalHeroContent3[0].title} description={InternalHeroContent3[0].description}/>
    <ContactContent />
   <Faq />
   <Reviews/>
   </>
  )
}

export default ContactPage